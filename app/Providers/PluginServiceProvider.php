<?php

namespace ActionNetwork\Providers;

use \Roots\Acorn\ServiceProvider;

class PluginServiceProvider extends ServiceProvider
{
    /**
     * Register the plugin with the application container.
     * @return void
     */
    public function register()
    {
        /**
         * Merges configuration with Acorn container instance
         */
        $configPath = plugin_dir_path(__DIR__) . '../config';

        $configFiles = [
            'plugin'        => 'actionnetwork.plugin',
            'blocks'        => 'actionnetwork.blocks',
            'actionnetwork' => 'actionnetwork',
            'assets'        => 'actionnetwork.assets',
            'view'          => 'actionnetwork.view',
        ];

        foreach ($configFiles as $config => $binding) {
            $this->mergeConfigFrom("{$configPath}/{$config}.php", $binding);
        }

        collect($this->app['config']->get(
            'actionnetwork.plugin.providers'
        ))->each(function ($provider) {
            $this->app->register($provider);
        });
    }
}
