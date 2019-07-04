<?php
/**
 * TinyPixel\ActionNetwork\WordPress\API
 *
 * Makes Action Network resources available via the
 * WordPress REST API
 *
 * @package    TinyPixel\ActionNetwork\WordPress\API
 * @copyright  2019, Tiny Pixel Collective LLC
 * @author     Kelly Mears     <developers@tinypixel.io>
 * @license    MIT
 * @link       https://github.com/pixelcollective/action-network-toolkit
 * @see        https://actionnetwork.org/docs
 **/

namespace ActionNetwork\Services\WordPress;

use ActionNetwork\Services\WordPress\Traits\GetRoutes;
use ActionNetwork\Services\WordPress\Traits\PostRoutes;

class REST
{
    public $request;
    public $responseObj;

    use GetRoutes;
    use PostRoutes;

    /**
     * Construct
     *
     * @return self
     */
    public function __construct($app)
    {
        $this->actionNetwork = $app['actionnetwork'];
        $this->collection = $app['actionnetwork.collection'];
        $this->embed = $app['actionnetwork.embed'];
    }

    public function boot()
    {
        // Routes
        add_action('rest_api_init', [
            $this, 'routes'
        ]);

        return $this;
    }

    /**
     * Registers GET Request handlers
     */
    public function routes()
    {
        register_rest_route('can', '/donation-forms', [
            'methods' => 'GET',
            'callback' => [
                $this, 'fundraisingPages'
            ],
        ]);

        register_rest_route('can', '/forms', [
            'methods' => 'GET',
            'callback' => [
                $this, 'forms'
            ],
        ]);

        register_rest_route('can', '/petitions', [
            'methods' => 'GET',
            'callback' => [
                $this, 'petitions'
            ],
        ]);

        register_rest_route('can', '/person/add', [
            'methods' => 'GET',
            'callback' => [
                $this, 'addPerson'
            ],
        ]);
    }
}
