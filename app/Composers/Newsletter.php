<?php

namespace ActionNetwork\Composers;

use Roots\Acorn\View\Composer;

class Newsletter extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'actionnetwork::layouts.*',
        'actionnetwork::blocks.newsletter-*',
        'actionnetwork::blocks.partials.*',
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
        $this->data = $data;

        return [
            'block' => (object) [
                'id'      => $this->getBlockId(),
                'attr'    => $this->getAttributes(),
                'content' => $this->getAttribute('content'),
                'source'  => $this->getAttribute('source'),
            ],
        ];
    }

    /**
     * Gets the block ID (if set in JS)
     * Otherwise, returns a uniqid()
     * @return string uuid
     */
    public function getBlockId()
    {
        return isset($this->data['attr']->blockId) ?
                $this->data['attr']->blockId :
                uniqid();
    }

    /**
     * Gets a block attribute
     * @return string
     */
    public function getAttribute($attribute)
    {
        return isset($this->data['attr']->$attribute) ?
                $this->data['attr']->$attribute :
                null;
    }

    /**
     * Gets the block attributes
     * @return array attributes
     */
    public function getAttributes()
    {
        return isset($this->data['attr']) ?
                $this->data['attr'] :
                null;
    }
}
