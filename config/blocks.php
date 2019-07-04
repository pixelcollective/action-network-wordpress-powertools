<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Block Namespace
    |--------------------------------------------------------------------------
    |
    | The namespace used to designate blocks
    |
    */

    'namespace' => 'action-network',

    /*
    |--------------------------------------------------------------------------
    | Block Registry
    |--------------------------------------------------------------------------
    |
    | An array of blocknames.
    |
    */

    'registry' => [

        /**
         * Newsletter Blocks
         */
        [
            'name'  => 'newsletter-branding',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-featured-story-hero',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-featured-story-small',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-footer',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-heading',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-hero-image-with-caption',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-inner-content',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-inner-heading',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-inner-image',
            'blade' => true,
        ],
        [
            'name'  => 'newsletter-inner-paragraph',
            'blade' => true,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Block Categories
    |--------------------------------------------------------------------------
    |
    | Additional categories for for the Block Editor inserter menu. The icon
    | can either be a dashicon or a path to an SVG file.
    |
    | @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories
    |
    */

    'categories' => [
        [
            'slug'  => 'action-network',
            'title' => __('Action Network', 'tinypixel'),
            'icon'  => 'megaphone-alt',
        ],
        [
            'slug'  => 'newsletter',
            'title' => __('Newsletter', 'tinypixel'),
            'icon'  => 'email',
        ],
    ],
];
