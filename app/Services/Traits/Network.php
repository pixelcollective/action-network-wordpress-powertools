<?php

namespace TinyPixel\ActionNetwork\Services\Traits;

use \GuzzleHttp\Client as Client;

trait Network
{
    /**
     * Setup network client
     *
     * @return void
     */
    public function setupClient()
    {
        $this->client = new Client([
            'verify'   => false,
            'base_uri' => 'https://actionnetwork.org/api/v2/',
        ]);
    }

    /**
     *
     * Call Action Network API
     *
     * @param string endpoint
     * @param string method
     * @param string req
     *
     * @return object JSON response from Action Network
     */
    public function call($endpoint, $type = 'GET', $req = null)
    {
        /**
         * Remove base URL from endpoint string, if there is a match.
         *
         * ActionNetwork returns full URLs from requests, but our initial
         * request utilizes a relative URL for convenience.
         */
        $endpoint = str_replace($this->apiBaseUrl, '', $endpoint);

        switch ($type) {
            case 'GET':
                $response = $this->handleGet($req, $endpoint);
                break;

            case 'POST':
                $response = $this->handlePost($req, $endpoint);
                break;
        }

        return json_decode($response->getBody()->getContents());
    }

    /**
     * Handle POST Requests
     *
     * @param array request
     * @param string endpoint
     * @return array streamed network response
     */
    public function handlePost($req, $endpoint)
    {
        return $this->client->request('POST', $endpoint, [
            'headers' => [
                'Content-Type'   => 'application/json',
                'OSDI-API-Token' => $this->apiKey,
            ],
            'body' => json_encode($req),
        ]);
    }

    /**
     * Handle GET Requests
     *
     * @param array request
     * @param string request URL
     * @return array streamed network response
     */
    public function handleGet($req, $requestUrl)
    {
        return $this->client->request('GET', $requestUrl, ['headers' => [
            'User-Agent'     => 'testing/1.0',
            'Accept'         => 'application/json',
            'OSDI-API-Token' => $this->apiKey,
            'JSON'           => $req,
        ]]);
    }
}
