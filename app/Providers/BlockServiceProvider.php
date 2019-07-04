<?php

namespace ActionNetwork\Providers;

use \ActionNetwork\Services\WordPress\Block;
use \ActionNetwork\Services\WordPress\BlockAsset;
use \ActionNetwork\Services\WordPress\BlockCategory;
use \ActionNetwork\Services\WordPress\PostType;

use Roots\Acorn\ServiceProvider;

class BlockServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        /**
         * Registers Block service
         */
        $this->app->bind('actionnetwork.blocks', function () {
            return new Block($this->app);
        });

        /**
         * Registers block category service
         */
        $this->app->bind('actionnetwork.blocks.category', function () {
            return new BlockCategory();
        });


        /**
         * Register block assets service
         */
        $this->app->bind('actionnetwork.blocks.assets', function () {
            return new BlockAsset($this->app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /**
         * Collect blocks from config
         */
        $this->registry = collect(
            $this->app['config']->get('actionnetwork.blocks.registry')
        );

        /**
         * Blocks
         */
        $this->registry->each(function ($block) {
            $this->app->make('actionnetwork.blocks')->register($block);
        });

        /**
         * Inserter categories
         */
        $categories = $this->app['config']->get(
            'actionnetwork.blocks.categories'
        );

        collect($categories)->each(function ($category) {
            $this->app->make('actionnetwork.blocks.category')->register($category);
        });

        /**
         * Newsletter PostType
         */
        new PostType();
    }
}
