<?php

namespace ActionNetwork\Services\WordPress\Traits;

use \WP_Rest_Response;

trait GetRoutes
{
    /**
     * REST response route for petitions
     *
     * @return void
     */
    public function petitions()
    {
        foreach ($this->collection->getList('petitions') as $petition) {
            $responseObj[] = [
                'id'    => $petition['id'],
                'name'  => $petition['title'],
                'embed' => $this->embed->getEmbed('petitions', $petition['id']),
            ];
        }

        return new WP_REST_Response($responseObj, 200);
    }

    /**
     * Rest response route for fundraising pages
     *
     * @return void
     */
    public function fundraisingPages()
    {
        foreach ($this->collection->getList('fundraising_pages') as $form) {
            $responseObj[] = [
                'id'    => $form['id'],
                'name'  => $form['title'],
                'embed' => $this->embed->getEmbed('fundraising_pages', $form['id']),
            ];
        }

        return new WP_REST_Response($responseObj, 200);
    }


    /**
     * Rest response route for forms
     *
     * @return void
     */
    public function forms()
    {
        foreach ($this->collection->getList('forms') as $form) {
            $responseObj[] = [
                'id'    => $form['id'],
                'name'  => $form['title'],
                'embed' => $this->embed->getEmbed('forms', $form['id']),
            ];
        }

        return new WP_REST_Response($responseObj, 200);
    }
}