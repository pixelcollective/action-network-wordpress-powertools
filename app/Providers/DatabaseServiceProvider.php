<?php

namespace TinyPixel\ActionNetwork\Providers;

// Illuminate framework
use \Illuminate\Database\{
    DatabaseManager,
    Eloquent\Model,
    Eloquent\QueueEntityResolver,
    Connectors\ConnectionFactory,
};

// Roots
use \Roots\Acorn\ServiceProvider;

/**
 * Database service provider
 *
 * @author  Kelly Mears <kelly@tinypixel.dev>
 * @license MIT
 * @since   0.0.1
 */
class DatabaseServiceProvider extends ServiceProvider
{
    /**
     * Registers application services
     *
     * @return void
     */
    public function register()
    {
        Model::clearBootedModels();

        $this->app->singleton('db.factory', function () {
            return new ConnectionFactory($this->app);
        });

        $this->app->singleton('db', function () {
            return new DatabaseManager($this->app, $this->app['db.factory']);
        });

        $this->app->bind('db.connection', function () {
            return $this->app['db']->connection();
        });

        $this->app->bind('db.schema', function () {
            return $this->app['db']->connection()->getSchemaBuilder();
        });

        $this->app->singleton(EntityResolver::class, function () {
            return new QueueEntityResolver();
        });
    }

    /**
     * Boots application services
     *
     * @return void
     */
    public function boot()
    {
        Model::setConnectionResolver($this->app['db']);
        Model::setEventDispatcher($this->app['events']);
    }
}
