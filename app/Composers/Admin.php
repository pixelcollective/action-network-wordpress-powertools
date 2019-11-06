<?php

namespace TinyPixel\ActionNetwork\Composers;

// Roots
use \Roots\Acorn\View\Composer;

/**
 * Admin view composer
 *
 * @author  Kelly Mears <kelly@tinypixel.dev>
 * @license MIT
 * @since   1.0.0
 */
class Admin extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'actionnetwork::admin.*',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @param  array $data
     * @param  \Illuminate\View\View $view
     * @return array
     */
    public function with()
    {
        return $data;
    }
}
