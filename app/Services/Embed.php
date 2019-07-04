<?php

namespace ActionNetwork\Services;

/**
 * Handler for Action Network Embed Codes
 *
 * @package   ActionNetwork\Services\Embed
 * @author    Kelly Mears     <developers@tinypixel.io>
 * @author    Jonathan Kissam <jonathankissam.com>
 * @copyright 2019 Tiny Pixel Collective, LLC
 * @license   MIT
 * @link      https://github.com/pixelcollective/action-network-toolkit
 * @see       https://actionnetwork.org/docs
 **/
class Embed extends ActionNetwork
{
    /**
     * Embed Identifier
     * @var string
     */
    public $id;

    /**
     * Embed Title
     * @var string
     */
    public $title;

    /**
     * Embed
     * @var string
     */
    public $embed;

    /**
     * Resource type
     * @var string
     */
    public $resource;

    /**
     * Valid resource types
     * @var array
     */
    public $validTypes = [
        'petitions',
        'events',
        'fundraising_pages',
        'advocacy_campaigns',
        'forms'
    ];

    /**
     * Valid embed styles
     * @var array
     */
    public $validStyles = [
        'default',
        'layout_only',
        'no'
    ];

    /**
     * Valid embed sizes
     * @var array
     */
    public $validSizes = [
        'standard',
        'full'
    ];

    public function __construct($app)
    {
        $this->actionNetwork = $app['actionnetwork'];
    }

    /**
     * Return requested embed code
     *
     * @param mixed $type
     * @param mixed $id
     * @param mixed $size
     * @param mixed $style
     *
     * @return void
     **/
    public function getEmbed($type, $id, $size = 'standard', $style = 'layout_only')
    {
        isset($id)    ? $this->id = $id : null;
        isset($type)  ? $this->type = $type : null;
        isset($size)  ? $this->size = $size : null;
        isset($style) ? $this->style = $style : null;

        return $this->validateRequest() ?? $this->fetchEmbed();
    }

    /**
     * Validate requested embed
     *
     * @return void
     */
    private function validateRequest()
    {
        !isset($this->id) ??
            $this->actionNetwork->error('No embed resource specified');

        !in_array($this->type, $this->validTypes) ??
            $this->actionNetwork->error('Invalid embed type specified');

        !in_array($this->size, $this->validSizes) ??
            $this->actionNetwork->error('Invalid embed size specified');

        !in_array($this->style, $this->validStyles) ??
            $this->actionNetwork->error('Invalid embed style specified');
    }

    /**
     * Make network request for Embed code
     *
     * @return mixed embed
     */
    private function fetchEmbed()
    {
        return collect($this->actionNetwork->call(
            "{$this->type}/{$this->id}/embed"
        ))->get("embed_{$this->size}_{$this->style}_styles");
    }
}
