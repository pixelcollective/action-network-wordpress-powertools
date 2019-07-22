<?php

namespace TinyPixel\ActionNetwork\Services;

use \TinyPixel\ActionNetwork\Services\ActionNetwork as ActionNetwork;

/**
 * Handles OSDI Petition Objects
 *
 * @package   ActionNetwork\Services\Petition
 * @copyright 2019, Tiny Pixel Collective LLC
 * @author    Kelly Mears     <developers@tinypixel.io>
 * @author    Jonathan Kissam <jonathankissam.com>
 * @license   MIT
 * @link      https://github.com/pixelcollective/action-network-toolkit
 * @see       https://actionnetwork.org/docs
 **/
class Petition extends ActionNetwork
{
    /**
     * ID
     *
     * @var undefined
     */
    public $id;

    /**
     * Title
     *
     * @var undefined
     */
    public $title;

    /**
     * Embed
     *
     * @var string
     */
    public $embed;

    /**
     * Record petition signature
     *
     * @param mixed $person
     * @param mixed $petition_id
     * @param mixed $comment
     * @param mixed $tags
     *
     * @return void
     **/
    public function addPerson($person, $petition_id)
    {
        return $this::actionNetwork()->call(
            "petitions/{$petition_id}/signatures",
            "POST",
            $this->processActivist($person),
        );
    }
}
