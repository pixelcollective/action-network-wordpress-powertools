<?php

namespace TinyPixel\ActionNetwork\Services\WordPress\Traits;

use \TinyPixel\ActionNetwork\Service\Utility;
use \WP_Rest_Response;

trait PostRoutes
{
    /**
     * REST response route for adding a person
     */
    public function addPerson($request)
    {
        $parameters = (object) $request->get_params();
        $person = (object) [];

        if (isset($parameters->email_address)) {
            $person->email_addresses = [[
                'address' => $parameters->email_address
            ]];
        } else {
            $this->actionNetwork::error(
                'An email address is required.'
            );
        }

        if (isset($parameters->postal_code)) {
            $person->postal_addresses = [[
                'postal_code' => $parameters->postal_code,
            ]];
        }

        if (isset($parameters->family_name)) {
            $person->family_name = $parameters->family_name;
        }

        if (isset($parameters->given_name)) {
            $person->given_name = $parameters->given_name;
        }

        return new WP_REST_Response(
            (new Utility())->addPerson($person),
            200
        );
    }
}
