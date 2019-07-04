<?php

/**
 * Plugin Name: Action Network Toolkit
 * Plugin URI:  https://github.com/pixelcollective/action-network-toolkit
 * Description: WordPress support and extras for the Action Network platform
 * Version:     0.2.0
 * Author:      Tiny Pixel Collective, LLC
 * Author URI:  https://tinypixel.dev
 * License:     MIT License
 * Text Domain: tinypixel
 * Domain Path: /resources/lang
 *
 * @package ActionTools
 * @
 */

(new class {

    /**
     * Construct
     */
    public function __construct()
    {
        $this->plugin = (object) [
            'composer' => __DIR__ . '/vendor/autoload.php',
            'config'   => __DIR__ . '/config/plugin.php',
            'requires' => (object) [
                'php'  => '7.2',
                'wp'   => '5.2',
            ],
        ];

        return $this;
    }

    /**
     * Plugin runtime
     */
    public function run()
    {
        if ($this->preflight()) {
            add_action('after_setup_theme', [
                $this, 'registerWithAcorn',
            ]);
        }
    }

    /**
     * Plugin compatibility checks
     */
    public function preflight()
    {
        return $this
            ->checkPHPVersion()
            ->checkWPVersion()
            ->checkComposer()
            ->checkConfiguration();
    }

    /**
     * Registers plugin provider with Acorn runtime
     */
    public function registerWithAcorn()
    {
        // load dependencies
        require $this->plugin->composer;

        // hook bootloader
        \Roots\bootloader(function (\Roots\Acorn\Application $app) {
            $app->register(
                ActionNetwork\Providers\PluginServiceProvider::class
            );
        });
    }

    /**
     * Checks PHP for compatibility
     * @return object self
     */
    private function checkPHPVersion()
    {
        if (version_compare($this->plugin->requires->php, phpversion(), '>')) {
            $this->error(
                __('You must be using PHP'. $this->plugin->requires->php .'or greater.', 'actionnetwork'),
                __('Invalid PHP version', 'actionnetwork')
            );
        }

        return $this;
    }

    /**
     * Checks WP for compatibility
     * @return object self
     */
    private function checkWPVersion()
    {
        if (version_compare($this->plugin->requires->wp, get_bloginfo('version'), '>')) {
            $this->error(
                __('You must be using WordPress'. $this->plugin->requires->wp .'or greater.', 'actionnetwork'),
                __('Invalid WordPress version', 'actionnetwork')
            );
        }

        return $this;
    }

    /**
     * Checks that composer dependencies are available
     * @return object self
     */
    private function checkComposer()
    {
        if (!file_exists($this->plugin->composer)) {
            $this->error(
                __('You must run <code>composer install</code> from the Action Network Tools plugin directory.', 'actionnetwork'),
                __('Autoloader not found.', 'actionnetwork')
            );
        }

        return $this;
    }

    /**
     * Checks that configuration file is present
     * @return object self
     */
    private function checkConfiguration()
    {
        if (!isset($this->plugin->config) && file_exists($this->plugin->config)) {
            $this->error(
                __('The configuration file must be present in the Action Network Tools plugin directory', 'actionnetwork'),
                __('Configuration not found.', 'actionnetwork')
            );
        }

        return $this;
    }

    /**
     * Error handler
     */
    private function error($message, $subtitle = '', $title = '')
    {
        $title = $title ?: __('Acorn Action Network Tools Runtime Error', 'actionnetwork');
        $footer = '<a href="https://tinypixel.dev/plugins/actionnetwork/">tinypixel.dev/plugins/actionnetwork/</a>';
        $message = "<h1>{$title}<br><small>{$subtitle}</small></h1><p>{$message}</p><p>{$footer}</p>";

        wp_die($message, $title);
    }
})->run();
