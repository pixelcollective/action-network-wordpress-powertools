<?php

namespace TinyPixel\ActionNetwork\Services;

use function Roots\app;

/**
 * Handler for collections of Action Network resources
 *
 * @package   ActionNetwork\Services\Collection
 * @copyright 2019, Tiny Pixel Collective LLC
 * @author    Kelly Mears     <developers@tinypixel.io>
 * @license   MIT
 * @link      https://github.com/pixelcollective/action-network-toolkit
 * @see       https://actionnetwork.org/docs
 **/
class Collection
{
    /**
     * A collection of OSDI objects
     *
     * @var object
     */
    public $collection;

    public function __construct($app)
    {
        $this->actionNetwork = $app['actionnetwork'];
    }

    /**
     * Get a list of object IDs and names
     *
     * @param string resourceType
     * @return object resource [id, name]
     **/
    public function getList($resourceType)
    {
        $this->collection = $this->getFullSimpleCollection($resourceType);
        return $this->collection;
    }

    /**
     * Get Embed Codes
     *
     * @param mixed $resource
     * @param mixed $array
     * @return void
     */
    public function getEmbedCodes($resource, $array = false)
    {
        $embed_endpoint = isset($resource->_links->{'action_network:embed'}->href) ?
            $resource->_links->{'action_network:embed'}->href : null;

        if (!$embed_endpoint) :
            return (is_array($array)) ? array() : null;
        endif;

        $embed_codes = $this->actionNetwork->call($embed_endpoint);
        return $array ? (array) $embed_codes : $embed_codes;
    }

    /**
     * Get Collection
     *
     * @param mixed $endpoint
     * @param mixed $page
     * @param mixed $per_page
     * @return void
     */
    public function getCollection($endpoint, $page = 1, $per_page = null)
    {
        $query = sprintf(
            "%s?%s%s%s",
            $endpoint,
            $page > 1 ? "page={$page}" : '',
            $page > 1 ? '&' : '',
            $per_page ? "per_page={$per_page}" : '',
        );

        return $this->actionNetwork->call($query);
    }

    /**
     * Retrieve a more workable result set
     *
     * @param mixed $endpoint
     * @param mixed $page
     * @param mixed $per_page
     * @return void
     */
    public function getSimpleCollection($endpoint, $page = 1, $per_page = null)
    {
        $collection = $this->getCollection($endpoint, $page, $per_page);
        return $this->simplifyCollection($collection, $endpoint);
    }

    /**
     * Get full simple collection
     *
     * @param mixed $endpoint
     * @return void
     */
    public function getFullSimpleCollection($endpoint)
    {
        $response = $this->actionNetwork->call($endpoint);

        if (isset($response->total_pages)) :
            if ($response->total_pages > 1) {
                $full_simple_collection = $this->simplifyCollection($response, $endpoint);

                for ($page=2; $page<=$response->total_pages; $page++) {
                    $response = $this->getCollection($endpoint, $page);
                    $full_simple_collection = array_merge(
                        $full_simple_collection,
                        $this->simplifyCollection($response, $endpoint)
                    );
                }

                return $full_simple_collection;
            } else {
                return $this->simplifyCollection($response, $endpoint);
            }
        else :
            $full_simple_collection = $this->simplifyCollection($response, $endpoint);
            $next_page = $this->getNextPage($response);

            while ($next_page) {
                $response = $this->getCollection($next_page);

                $full_simple_collection = array_merge(
                    $full_simple_collection,
                    $this->simplifyCollection($response, $endpoint)
                );

                $next_page = $this->getNextPage($response);
            }

            return $full_simple_collection;
        endif;
    }

    /**
     * Get next page endpoint
     *
     * @param  mixed $response
     * @return void
     */
    public function getNextPage($response)
    {
        if (isset($response->_links) &&
            isset($response->_links->next) &&
            isset($response->_links->next->href)) {
            return $response->_links->next->href;
        }

        return false;
    }

    /**
     * Simplify collection response
     *
     * @param mixed $response
     * @param mixed $endpoint
     * @param array $collection
     * @return array $collection
     */
    public function simplifyCollection($response, $endpoint, $collection = [])
    {
        $osdi = "osdi:{$endpoint}";

        if (isset($response->_embedded->$osdi)) {
            $collection_full = $response->_embedded->$osdi;

            foreach ($collection_full as $item) {
                $collection[] = [
                    'id' => ActionNetwork::getResourceId($item),
                    'title' => ActionNetwork::getResourceTitle($item)
                ];
            }
        }

        return $collection;
    }
}
