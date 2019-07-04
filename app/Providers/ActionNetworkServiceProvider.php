<?php

namespace ActionNetwork\Providers;

use Roots\Acorn\ServiceProvider;

use \ActionNetwork\Services\ActionNetwork;
use \ActionNetwork\Services\Embed;
use \ActionNetwork\Services\Collection;
use \ActionNetwork\Services\WordPress\GraphQL;
use \ActionNetwork\Services\WordPress\REST;
use \ActionNetwork\Services\WordPress\Blocks;

class ActionNetworkServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('actionnetwork', function () {
            return new ActionNetwork($this->app);
        });

        $this->app->bind('actionnetwork.asset', function () {
            return plugins_url('action-network/dist/');
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

    public function boot()
    {
        $this->app->make('actionnetwork.collection');
        $this->app->make('actionnetwork.embed');
        $this->app->make('actionnetwork.graphql')->boot();
        $this->app->make('actionnetwork.rest')->boot();
        $this->app->make('actionnetwork.blocks')->boot();
    }
}
