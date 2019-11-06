<?php
namespace TinyPixel\ActionNetwork\Providers;

use Roots\Acorn\ServiceProvider;
use TinyPixel\ActionNetwork\Services\{
    ActionNetwork,
    Embed,
    Collection,
    WordPress\GraphQL,
    WordPress\REST,
    WordPress\Blocks,
};

/**
 * Action Network service provider
 *
 * @author  Kelly Mears <kelly@tinypixel.dev>
 * @license MIT
 * @since   1.0.0
 */
class ActionNetworkServiceProvider extends ServiceProvider
{
    /**
     * Registers application services
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('actionnetwork', function () {
            return new ActionNetwork($this->app);
        });

        $this->app->bind('actionnetwork.asset', function () {
            return plugins_url('action-network-wp-powertools/dist/');
        });

        $this->app->singleton('actionnetwork.collection', function () {
            return new Collection($this->app);
        });

        $this->app->singleton('actionnetwork.embed', function () {
            return new Embed($this->app);
        });

        $this->app->singleton('actionnetwork.graphql', function () {
            return new GraphQL($this->app);
        });

        $this->app->singleton('actionnetwork.rest', function () {
            return new REST($this->app);
        });

        $this->app->singleton('actionnetwork.blocks', function () {
            return new Blocks($this->app);
        });
    }

    /**
     * Boots application services
     *
     * @return void
     */
    public function boot()
    {
        $this->app->make('actionnetwork.collection');
        $this->app->make('actionnetwork.embed');
        $this->app->make('actionnetwork.graphql')->boot();
        $this->app->make('actionnetwork.rest')->boot();
        $this->app->make('actionnetwork.blocks')->boot();
    }
}
