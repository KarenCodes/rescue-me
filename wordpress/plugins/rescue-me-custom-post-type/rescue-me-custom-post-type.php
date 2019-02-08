<?php
/**
 * Plugin Name: Rescue Me Custom Post Type
 * Plugin URI: http://www.github.com/karencodes/rescue-me
 * Description: Plugin required to create custom Dog post type
 * Version: 1.0
 * Author: Karen Neumann
 * Author URI: https://www.websavvystudio.com
 * Text Domain: rescue-me
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

 namespace KarenCodes\rescueme;

 function add_dog()
{
    register_post_type('dogs',
                       array(
                           'labels'      => array(
                               'name'          => __('Dogs'),
                               'singular_name' => __('Dog'),
                           ),
                           'menu_position' => 5,
                           'supports' => array('title','editor','thumbnail', 'excerpt','custom-fields','author','comments'),
                           'menu_icon' => 'dashicons-heart',
                           'taxonomies' => array('category','post_tag'),
                           'public'      => true,
                           'has_archive' => true,
                           'show_in_rest' => true,
                       )
    );
}
add_action('init', __NAMESPACE__ . '\\add_dog');
