<?php

namespace ActionNetwork\Services\Traits;

trait Helpers
{
    /**
     * Parse OSDI resource identifier
     *
     * @param  array $resource
     * @return void
     */
    public static function getResourceId($resource)
    {
        if (isset($resource->identifiers) || is_array($resource->identifiers)) {
            foreach ($resource->identifiers as $identifier) {
                if (substr($identifier, 0, 15) == 'action_network:') {
                    return substr($identifier, 15);
                }
            }
        }
    }

    /**
     * Parse usable title
     *
     * @param mixed $resource
     * @return void
     */
    public static function getResourceTitle($resource)
    {
        if (isset($resource->title)) {
            return $resource->title;
        }

        if (isset($resource->name)) {
            return $resource->name;
        }

        if (isset($resource->email_addresses) &&
            is_array($resource->email_addresses) &&
            count($resource->email_addresses)) {
            return $resource->email_addresses[0]->address;
        }
    }

    /**
     * Error handler for classes utilizing this as a base
     *
     * @return void
     */
    protected static function error($error)
    {
        trigger_error($error, E_USER_ERROR);
    }
}
