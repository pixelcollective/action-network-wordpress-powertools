<?php

namespace TinyPixel\ActionNetwork\Services\WordPress;

class Blocks
{
    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        add_action('init', [$this, 'registerBlockScripts']);
        add_action('init', [$this, 'registerBlockStyles']);
        add_action('init', [$this, 'registerBlockTypes']);

        $this->registerBlockCategories();
    }

    public function registerBlockStyles()
    {
        wp_register_style(
            'action-network/editor/css',
            $this->app['actionnetwork.asset'] . 'blocks.css',
            [],
            '',
        );

        wp_register_style(
            'action-network/front/css',
            $this->app['actionnetwork.asset'] . 'blocks.css',
        );
    }

    public function registerBlockScripts()
    {
        wp_register_script(
            'action-network/editor/js',
            $this->app['actionnetwork.asset'] . 'blocks.js',
            json_decode(file_get_contents(plugin_dir_path(__DIR__ . '/../../../dist/') . 'dist/blocks.deps.json'))
        );
    }

    public function registerBlockTypes()
    {
        register_block_type('action-network/form', [
            'editor_script' => 'action-network/editor/js',
            'style'         => 'action-network/front/css',
        ]);

        register_block_type('action-network/donation-form', [
            'editor_script' => 'action-network/editor/js',
            'style'         => 'action-network/front/css',
        ]);

        register_block_type('action-network/email-signup', [
            'editor_script' => 'action-network/editor/js',
            'style'         => 'action-network/front/css',
        ]);
    }

    public function registerBlockCategories()
    {
        add_filter('block_categories', function ($categories, $post) {
            $categories = array_merge($categories, [[
                'slug'  => 'action-network',
                'title' => __('Action Network', 'tinypixel'),
                'icon'  => 'megaphone',
            ]]);

            return $categories;
        }, 10, 2);
    }
}
