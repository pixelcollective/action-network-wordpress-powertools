<?php

namespace ActionNetwork\Providers;

// Illuminate framework
use \Illuminate\Support\Collection;

// Roots
use \Roots\Acorn\ServiceProvider;

class PluginServiceProvider extends ServiceProvider
{
    /**
     * Register the plugin with the application container.
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
     * Registers providers from array
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
