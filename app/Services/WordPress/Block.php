<?php

namespace ActionNetwork\Services\WordPress;

use \Roots\Acorn\Application;

class Block
{
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function register($block)
    {
        /**
         * Sets up block references
         */
        $this->namespace = $this->app['config']->get(
            'actionnetwork.blocks.namespace'
        );

        $this->blockType = "{$this->namespace}/{$block['name']}";

        /**
         * Registers blocks on init
         */
        add_action('init', function () use ($block) {
            if ($block['blade']) {
                $this->registerWithBladeCallback($block['name']);
            } else {
                $this->registerBlock();
            }
        });

        /**
         * Expose inner content to blade composers
         */
        $this->modifyBlockData();

        /**
         * Enqueue assets with the Assets service provider
         */
        $this->app
            ->make('actionnetwork.blocks.assets')
            ->setType($this->blockType);
    }

    /**
     * Register block with WordPress
     */
    public function registerBlock()
    {
        register_block_type($this->blockType);
    }

    /**
     * Register block with WordPress
     */
    public function registerWithBladeCallback($blockName)
    {
        register_block_type($this->blockType, [
            'render_callback' => function ($attributes, $content) use ($blockName) {
                return $this->app['view']->make(
                    "actionnetwork::blocks.{$blockName}",
                    $this->data($attributes, $content),
                );
            },
        ]);
    }

    /**
     * Formats data for easier work in composer
     */
    private function data($attributes, $content)
    {
        return [
            'attr' => (object) $attributes,
            'content' => $content
        ];
    }

    /**
     * Expose inner contents to Blade
     */
    private function modifyBlockData()
    {
        add_filter('render_block_data', function ($block, $source_block) {
            $block['attrs']['source'] = $source_block;
            return $block;
        }, 10, 2);
    }
}
