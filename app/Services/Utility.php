<?php

namespace ActionNetwork\Services;

use ActionNetwork\Services\ActionNetwork;

class Utility extends ActionNetwork
{
    /**
     * Add Person
     *
     * @param Person
     * @return void
     */
    public function addPerson($person)
    {
        // At minimum a person should have an email
        $this->validate($person);

        // #todo validation & formatting
        return $this::getInstance()->call('people', 'POST', [
            'person' => collect($person)->toArray(),
        ]);
    }

    /**
     * Validate
     *
     * @param object $person
     * @return true
     */
    public function validate($person)
    {
        !isset($person->email_addresses[0]['address']) ??
            ActionNetwork::error('No email address supplied');

        !self::checkEmail($person->email_addresses[0]['address']) ??
            ActionNetwork::error('Invalid email address supplied');

        if (isset($person->postal_code)) {
            !is_string($person->postal_code) ??
            ActionNetwork::error('Postal code must be of type string');
        }

        if (isset($person->family_name)) {
            !is_string($person->family_name) ??
            ActionNetwork::error('Family name must be of type string');
        }

        if (isset($person->given_name)) {
            !is_string($person->given_name) ??
            ActionNetwork::error('Given name must be of type string');
        }

        return true;
    }

    /**
     * Check Email
     *
     * @param string $email
     * @return void
     */
    public static function checkEmail($email)
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL) ? true : false;
    }
}
