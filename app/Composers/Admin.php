<?php

namespace ActionNetwork\Composers;

use Roots\Acorn\View\Composer;

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
    public function with($data, $view)
    {
        return $data;
    }
}
