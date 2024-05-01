<?php

/**
 * Plugin Name: Thawani for WooCommerce
 * Plugin URI: https://github.com/PhazeRoOman/thawani-for-woocommerce
 * Author: PhazeRo
 * Author URI: https://phaze.ro/
 * Description: Thawani Payments Gateway for Woocommerce.
 * Version: 1.3.0
 * License: MIT
License URL: https://mit-license.org/
 * text-domain: thawani
 * Domain Path : /languages
 *
 *
 *@package WooCommerce\Thawani
 */

require_once plugin_dir_path(__FILE__) . '/vendor/autoload.php';

use \Thawani\WC_Gateway_ThawaniGateway;
use Thawani\RestAPI;

if (!defined('ABSPATH'))
    exit;

// define the path of the plugin
define('THAWANI_GW_DIR', plugin_dir_path(__FILE__));

/**
 * Check if the WooCommerce plugin is active
 */
if (!in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins'))))
    return;

function add_thawani_gateway($gateways)
{
    $gateways[] = '\Thawani\WC_Gateway_ThawaniGateway';
    return $gateways;
}

add_filter('woocommerce_payment_gateways', 'add_thawani_gateway');

/**
 * loading the translation files to support arabic version
 * @since 1.1.0
 */
add_action('init', 'thawani_gw_load_textDomain');

/**
 * Load plugin textdomain.
 */
function thawani_gw_load_textDomain()
{
    load_plugin_textdomain('thawani', false, dirname(plugin_basename(__FILE__)) . '/languages');
}
