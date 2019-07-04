<?php

/**
 * Handler for OSDI Person Objects
 *
 * @package    ActionNetwork\Services\Person
 * @copyright  2019, Tiny Pixel Collective LLC
 * @author     Kelly Mears     <developers@tinypixel.io>
 * @author     Jonathan Kissam <jonathankissam.com>
 * @license    MIT
 * @link       https://github.com/pixelcollective/action-network-toolkit
 * @see        https://actionnetwork.org/docs
 */

namespace ActionNetwork\Services;

use ActionNetwork\Services\ActionNetwork;

// TODO: Finish refactoring class
class Person extends ActionNetwork
{
    /**
     * Last name
     * @var string
     */
    public $family_name;

    /**
     * First name
     * @var string
     */
    public $given_name;

    /**
     * Postal codes
     * @var array
     */
    public $postal_addresses = [[
        'postal_code' => '',
    ]];

    /**
     * Email addresses
     * @var array
     */
    public $email_addresses = [[
        'address' => '',
    ]];

    /**
     * Custom fields
     *
     * @var array
     */
    public $custom_fields;

    /**
     * Valid Subscription Statuses
     *
     * @var array
     */
    private $valid_subscription_statuses = [
        'subscribed',
        'unsubscribed',
        'bouncing',
        'spam complaint'
    ];

    /**
     * Valid address fields
     *
     * @var array
     */
    private $valid_address_fields = [
        'primary',
        'address_lines',
        'locality',
        'region',
        'postal_code',
        'country'
    ];

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
     * Set Tag
     *
     * @param mixed $activist
     * @param mixed $tags
     *
     * @return void
     */
    public function addTag($activist, $tags = null)
    {
        $activist->tags[] = is_array($tags) ? $tags : null;

        return $this;
    }

    /**
     * Set Comment
     *
     * @param mixed $activist
     * @param mixed $comment
     *
     * @return void
     */
    public function addComment($activist, $comment = null)
    {
        $activist->comments = isset($comment) ? $comment : null;

        return $this;
    }

    /**
     * Set Status
     *
     * @param mixed $status
     *
     * @return void
     */
    public function setStatus($status)
    {
        $this->email_addresses[0]->status = in_array(
            $status,
            $this->valid_subscription_statuses
        ) ? $status : false;

        return $this;
    }

    /**
     * Set Last Name
     *
     * @param mixed $family_name
     *
     * @return void
     */
    public function setLastName($last_name = null)
    {
        $this->family_name = isset($last_name) ? $last_name :
            ActionNetwork::error('problem with family name');

        return $this;
    }

    /**
     * Set First Name
     *
     * @param mixed $given_name
     *
     * @return void
     */
    public function setFirstName($first_name = null)
    {
        $this->given_name = isset($first_name) ?
            $first_name : ActionNetwork::error('problem with first name');

        return $this;
    }

    /**
     * Set Postal Address
     *
     * @param mixed $address
     * @return void
     */
    public function setAddress($address = null)
    {
        $address = $this->formatAsObject($address);

        $validAddress = new stdClass();

        foreach ($this->valid_address_fields as $k => $v) {
            $this->validateAddressField($k, $field) ??
                $validAddress->$k = $v;
        }

        $this->postal_addresses[] = $validAddress;

        return $this;
    }

    /**
     * Set Custom
     *
     * @param mixed $key_or_array
     * @param mixed $value
     * @return void
     */
    public function setCustom($key_or_array, $value = null)
    {
        if (is_array($key_or_array)) {
            foreach ($key_or_array as $k => $v) {
                $this->custom_fields->$k = $v;
            }
        } elseif (is_string($key_or_array) && $value) {
            $this->custom_fields->$key_or_array = $value;
        }

        return $this;
    }

    /**
     * Validate address field
     *
     * @param mixed $address
     * @param mixed $field
     * @return void
     */
    private function validateAddressField($address, $field)
    {
        if (isset($address->$field)) {
            return $field=='address_lines' ? is_array($address->$field) : true;
        }

        return false;
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

        return true;
    }

    /**
     * setup Email
     *
     * @param mixed $person
     * @return void
     */
    private function setupEmail($person)
    {
        if (isset($person->email_addresses) && is_array($person->email_addresses)) {
            $this->setEmails($person->email_addresses);
        }

        ActionNetwork::error('Invalid data passed to setupEmail method');
    }

    /**
     * set Emails
     *
     * @param mixed $emails
     * @return void
     */
    public function setEmails($emails)
    {
        if (isset($emails) && is_array($emails)) {
            foreach ($emails as $index => $email) {
                $this->setEmail($email, $index);
            }
        } else {
            ActionNetwork::error('There is a problem with the provided email address');
        }

        return $this;
    }

    /**
     * set Email
     *
     * @param [type] $email
     * @param integer $index
     * @return void
     */
    public function setEmail($email, $index = 0)
    {
        $this->email_addresses[$index] = isset($email) && self::checkEmail($email) ??
            ActionNetwork::error('Invalid email passed to setEmail method');

        return $this;
    }

    /**
     * Format as Object
     *
     * @param [type] $person
     * @return void
     */
    private function formatAsObject($person)
    {
        $person = (is_array($person)) ? (object) $person : null;

        return is_object($person) ? $person : ActionNetwork::error(
            'person must be passed as an associative array or object'
        );
    }

    /**
     * check Email
     *
     * @param string $email
     * @return void
     */
    public static function checkEmail($email)
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL) ? true : false;
    }
}
