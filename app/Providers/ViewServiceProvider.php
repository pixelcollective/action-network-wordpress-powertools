<?php

namespace TinyPixel\ActionNetwork\Providers;

// Roots
use Roots\Acorn\ServiceProvider;

/**
 * View service provider
 *
 * @author  Kelly Mears <kelly@tinypixel.dev>
 * @license MIT
 * @since   1.0.0
 */
class ViewServiceProvider extends ServiceProvider
{
    /**
     * Registers view support
     *
     * @return void
     */
    public function register()
    {
        $view = [
            'engine'     => $this->getViewEngineCompiler(),
            'paths'      => $this->app['config']->get('actionnetwork.view.paths'),
            'composers'  => $this->app['config']->get('actionnetwork.view.composers'),
            'directives' => $this->app['config']->get('actionnetwork.view.directives'),
            'namespaces' => $this->app['config']->get('actionnetwork.view.namespaces'),
        ];

        /**
         * Registers directives
         */
        foreach ($view['directives'] as $name => $handler) {
            if (!is_callable($handler)) {
                $handler = $this->app->make($handler);
            }

            $view['engine']->directive($name, $handler);
        }

        /**
         * Registers view finder
         */
        foreach ($view['namespaces'] as $namespace => $hints) {
            $this->app['view']->addNamespace($namespace, $hints);
        }

        /**
         * Adds views to Acorn
         */
        $this->loadViewsFrom($view['paths'], 'actionnetwork');

        /**
         * Registers view composers
         */
        foreach ($view['composers'] as $composer) {
            $this->app['view']->composer($composer::views(), $composer);
        }
    }

    public function getViewEngineCompiler()
    {
        return $this->app['view']->getEngineResolver()->resolve('blade')->getCompiler();
    }

    public function boot()
    {
    }
}
