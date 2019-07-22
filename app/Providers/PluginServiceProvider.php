<?php

namespace TinyPixel\ActionNetwork\Providers;

// Illuminate framework
use \Illuminate\Support\Collection;

// Roots
use \Roots\Acorn\ServiceProvider;

/**
 * Plugin service provider
 *
 * @author  Kelly Mears <kelly@tinypixel.dev>
 * @license MIT
 * @since   1.0.0
 */
class PluginServiceProvider extends ServiceProvider
{
    /**
     * Registers the plugin with the application container.
     *
     * @return void
     */
    public function register()
    {
        $configFiles = $this->collectConfigFiles(
            plugin_dir_path(__DIR__) . '../config'
        );

        $configFiles->each(function ($config, $binding) {
            $this->mergeConfigFrom($config, $binding);
        });

        $providers = $this->app['config']->get('actionnetwork.plugin.providers');

        $this->registerProviders($providers);
    }

    /**
     * Collects configuration files
     *
     * @param  string $configPath
     * @return \Illuminate\Support\Collection
     */
    public function collectConfigFiles(string $configPath)
    {
        return Collection::make([
            'actionnetwork.plugin' => "{$configPath}/plugin.php",
            'actionnetwork'        => "{$configPath}/action-network.php",
            'actionnetwork.assets' => "{$configPath}/assets.php",
            'actionnetwork.view'   => "{$configPath}/view.php",
        ]);
    }

    /**
     * Registers arrayed providers
     *
     * @param  array $providers
     * @return void
     */
    public function registerProviders(array $providers)
    {
        Collection::make($providers)->each(function ($provider) {
            $this->app->register($provider);
        });
    }
}
