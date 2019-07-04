<?php

namespace TinyPixel\ActionNetwork;

/**
 * Handler for OSDI Event Objects
 *
 * @package   ActionNetwork\Services\Event
 * @copyright 2019, Tiny Pixel Collective LLC
 * @author    Kelly Mears     <developers@tinypixel.io>
 * @author    Jonathan Kissam <jonathankissam.com>
 * @license   MIT
 * @link      https://github.com/pixelcollective/action-network-toolkit
 * @see       https://actionnetwork.org/docs
 **/
class Event
{
    public $id;
    public $title;
    public $location;
    public $description;
    public $embed;

    public function __construct($app)
    {
        $this->actionNetwork = $app['actionnetwork'];
    }

    /**
     * Process sign-up
     *
     * @param mixed $activist
     * @param mixed $event_id
     * @param mixed $tags
     *
     * @return void
     **/
    public function recordAttendance($activist, $id, $tags = null)
    {
        return $this->actionNetwork->call(
            $this->endPoint($id),
            'POST',
            $this->processActivist($activist)
        );
    }

    private function endPoint($id)
    {
        return "events/{$id}/attendances";
    }
}
