<?php
/**
 * API wrapper for Action Network
 * @link https://actionnetwork.org
 *
 * @package   ActionNetwork\Services\ActionNetwork
 * @copyright 2019, Tiny Pixel Collective LLC
 * @author    Kelly Mears <developers@tinypixel.io>
 * @license   MIT
 * @see       https://github.com/pixelcollective/action-network-toolkit
 * @see       https://actionnetwork.org/docs
 **/

namespace TinyPixel\ActionNetwork\Services;

use \TinyPixel\ActionNetwork\Services\Traits;

class ActionNetwork
{
    use Traits\Network;
    use Traits\Helpers;

    /**
     * API Key
     * @var string
     */
    protected $apiKey;

    /**
     * API Version
     * @var string
     */
    protected $apiBaseUrl = "https://actionnetwork.org/api/v2/";

    /**
     * Error references
     * @var array
     */
    protected $errors;

    /**
     * Construct
     *
     * @param mixed $apiKey
     * @return void
     */
    public function __construct($app)
    {
        /**
         * Set api key
         */
        $this->apiKey = $app['config']->get(
            'actionnetwork.api_key'
        );

        /**
         * Setup request client
         * @link https://github.com/guzzle/guzzle
         */
        $this->setupClient();
    }
}
