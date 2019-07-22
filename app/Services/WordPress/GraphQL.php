<?php

namespace TinyPixel\ActionNetwork\Services\WordPress;

/**
 * ActionNetwork\Services\WordPress\GraphQL
 *
 * Exposes Action Network resources to GraphQL
 *
 * @package    TinyPixel\ActionNetwork
 * @copyright  2019, Tiny Pixel Collective LLC
 * @author     Kelly Mears     <developers@tinypixel.io>
 * @author     Jonathan Kissam <jonathankissam.com>
 * @license    MIT
 * @link       https://github.com/pixelcollective/action-network-toolkit
 * @see        https://actionnetwork.org/docs
 **/
class GraphQL
{
    public function __construct($app)
    {
        $this->collection = $app['actionnetwork.collection'];
        $this->embed = $app['actionnetwork.embed'];
    }

    public function boot()
    {
        add_action('graphql_register_types', [
            $this, 'registerTypes'
        ]);

        add_action('graphql_register_types', [
            $this, 'registerFields'
        ]);

        add_filter('graphql_queryArgs_fields', [
            $this, 'registerInputFields'
        ], 10, 1);
    }

    /**
     * Registers GraphQL Object Schema
     *
     * @return null
     */
    public function registerTypes()
    {
        // Include with basically all object types
        $commonFields = [
            'id' => ['type' => 'String', 'description' => __(
                'Identifier for Action Network resource',
                'tinypixel',
            )],
            'name' => ['type' => 'String', 'description' => __(
                'Human readable name of the Action Network resource',
                'tinypixel',
            )],
        ];

        // Include with object types that feature embeds
        $embedFields = ['embed' => [
            'type' => 'String', 'description' => __(
                'Action Network standard embed code for the resource',
                'tinypixel',
            )],
        ];

        // Forms
        register_graphql_object_type('ActionNetworkForm', [
            'description' => __(
                'Action Network form object',
                'tinypixel',
            ),
            'fields' => array_merge($commonFields, $embedFields),
        ]);

        // Donation Forms
        register_graphql_object_type('ActionNetworkDonationForm', [
            'description' => __(
                'Action Network donation form object',
                'tinypixel',
            ),
            'fields' => array_merge($commonFields, $embedFields),
        ]);

        // Petitions
        register_graphql_object_type('ActionNetworkPetition', [
            'description' => __(
                'Action Network petition form object',
                'tinypixel',
            ),
            'fields' => array_merge($commonFields, $embedFields),
        ]);
    }

    /**
     * Registers data to GraphQL object
     *
     * @return null
     */
    public function registerFields()
    {
        // Form fields
        register_graphql_field('RootQuery', 'actionNetworkForm', [
            'type'        => ['list_of' => 'ActionNetworkForm'],
            'description' => __('Get form embeds', 'tinypixel'),
            'resolve'     => [$this, 'getForms'],
        ]);

        // Donation Form fields
        register_graphql_field('RootQuery', 'actionNetworkDonationForm', [
            'type'        => ['list_of' => 'ActionNetworkDonationForm'],
            'description' => __('Get donation form embeds', 'tinypixel'),
            'resolve'     => [$this, 'getDonationForms'],
        ]);

        // Petition Fields
        register_graphql_field('RootQuery', 'actionNetworkPetition', [
            'type'        => ['list_of' => 'ActionNetworkPetition'],
            'description' => __('Action Network petition embeds', 'tinypixel'),
            'resolve'     => [$this, 'getPetitions'],
        ]);
    }

    /**
     * Register Query fields
     *
     * #TODO: This doesn't work
     *
     * @return array fields
     */
    public function registerInputFields($fields)
    {
        return $fields['id'] = [
            'type' => 'actionNetworkPetition',
        ];
    }

    /**
     * Retrieves collection of forms
     *
     * @return array
     */
    public function getForms()
    {
        foreach ($this->collection->getList('forms') as $form) {
            $forms[] = [
                'id'    => $form['id'],
                'name'  => $form['title'],
                'embed' => $this->embed->getEmbed(
                    'forms',
                    $form['id'],
                ),
            ];
        }

        return $forms;
    }

    /**
     * Retrieves collection of petitions
     *
     * @return array
     */
    public function getPetitions()
    {
        foreach ($this->collection->getList('petitions') as $petition) {
            $petitions[] = [
                'id'    => $petition['id'],
                'name'  => $petition['title'],
                'embed' => $this->embed->getEmbed(
                    'petitions',
                    $petition['id']
                ),
            ];
        }

        return $petitions;
    }

    /**
     * Retrieves collection of donation forms
     *
     * @return array
     */
    public function getDonationForms()
    {
        foreach ($this->collection->getList('fundraising_pages') as $form) {
            $forms[] = [
                'id'    => $form['id'],
                'name'  => $form['title'],
                'embed' => $this->embed->getEmbed(
                    'fundraising_pages',
                    $form['id'],
                ),
            ];
        }

        return $forms;
    }
}
