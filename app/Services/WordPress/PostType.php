<?php

namespace ActionNetwork\Services\WordPress;

class PostType
{
    /**
     * Directory
     * @var string
     */
    private $dir = __DIR__;

    /**
     * Block whitelist
     * @var array
     */
    private $supportedBlocks = [
        'action-network/newsletter-inner-content',
        'action-network/newsletter-inner-heading',
        'action-network/newsletter-inner-paragraph',
        'action-network/newsletter-inner-image',
        'action-network/newsletter-branding',
        'action-network/newsletter-featured-story-hero',
        'action-network/newsletter-featured-story-small',
        'action-network/newsletter-heading',
        'action-network/newsletter-hero-image-with-caption',
        'action-network/newsletter-footer',
    ];

    /**
     * PostType icon
     * @var string
     */
    private $icon = 'dashicons-email';

    /**
     * Template filename
     * @var string
     */
    protected $name = 'Newsletter';

    /**
     * Template
     * @var array
     */
    private $template = [
        ['action-network/newsletter-branding', ['align' => 'full']],
        ['action-network/newsletter-heading', ['align' => 'full']],
        ['action-network/newsletter-featured-story-hero', ['align' => 'full']],
        ['action-network/newsletter-foooter', ['align' => 'full']],
    ];

    /**
     * Template lock
     * @var string
     */
    private $templateLock = false;

    /**
     * Supports
     * @var array
     */
    private $supports = [
        'title',
        'editor',
    ];

    /**
     * Construct
     *
     * @param void
     * @return void
     */
    public function __construct()
    {
        add_action('init', [$this, 'registerPostType']);
    }

    /**
     * Registers the posttype
     *
     * @param void
     * @return void
     *
     */
    public function registerPostType()
    {
        register_post_type('newsletter', [
            'labels' => [
                'name'               => _x('Newsletters', 'post type general name', 'tinypixel'),
                'singular_name'      => _x('Newsletter', 'post type singular name', 'tinypixel'),
                'menu_name'          => _x('Newsletters', 'admin menu name', 'tinypixel'),
                'name_admin_bar'     => _x('Newsletter', 'add new on admin bar', 'tinypixel'),
                'add_new'            => _x('Add New', 'book', 'tinypixel'),
                'add_new_item'       => __('Add New Newsletter', 'tinypixel'),
                'new_item'           => __('New Newsletter', 'tinypixel'),
                'edit_item'          => __('Edit Newsletter', 'tinypixel'),
                'view_item'          => __('View Newsletter', 'tinypixel'),
                'all_items'          => __('All Newsletters', 'tinypixel'),
                'search_items'       => __('Search Newsletters', 'tinypixel'),
                'parent_item_colon'  => __('Parent Newsletters:', 'tinypixel'),
                'not_found'          => __('No newsletters found.', 'tinypixel'),
                'not_found_in_trash' => __('No newsletters found in Trash.', 'tinypixel')
            ],

            'description'      => __('NDN newsletters', 'tinypixel'),
            'public'           => true,
            'public_queryable' => true,
            'show_ui'          => true,
            'show_in_menu'     => true,
            'query_var'        => true,
            'show_in_rest'     => true,
            'has_archive'      => true,
            'hierarchical'     => false,
            'menu_position'    => 20,
            'capability_type'  => 'post',
            'rewrite'          => [
                'slug' => 'newsletters',
                'with_front' => false,
            ],

            'menu_icon'        => $this->icon,
            'template'         => $this->template,
            'template_lock'    => $this->templateLock,
            'supports'         => $this->supports,
        ]);


        add_filter('allowed_block_types', function ($allowed_block_types, $post) {
            if ($post->post_type === 'newsletter') {
                return $this->supportedBlocks;
            }
            return $allowed_block_types;
        }, 10, 2);
    }
}
