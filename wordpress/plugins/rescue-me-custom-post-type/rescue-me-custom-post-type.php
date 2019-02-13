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

//  add dog custom post type
 function add_dog()
  {
    register_post_type(
      'dogs',
      array(
          'labels'      => array(
              'name'          => __('Dogs', 'rescue-me'),
              'singular_name' => __('Dog', 'rescue-me'),
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

// add categories for dog custom post type
function add_dog_cats() {
	wp_insert_term(
		'Good with Cats',
		'category',
		array(
		  'description'	=> 'Used with Rescue Me.',
		  'slug' 		=> 'rescue-me-good-with-cats'
		)
  );
  wp_insert_term(
		'Good with Dogs',
		'category',
		array(
		  'description'	=> 'Used with Rescue Me.',
		  'slug' 		=> 'rescue-me-good-with-dogs'
		)
  );
  wp_insert_term(
		'Good with Kids',
		'category',
		array(
		  'description'	=> 'Used with Rescue Me.',
		  'slug' 		=> 'rescue-me-good-with-kids'
		)
  );
  wp_insert_term(
		'Female',
		'category',
		array(
		  'description'	=> 'Used with Rescue Me.',
		  'slug' 		=> 'rescue-me-female'
		)
  );
  wp_insert_term(
		'Male',
		'category',
		array(
		  'description'	=> 'Used with Rescue Me.',
		  'slug' 		=> 'rescue-me-male'
		)
  );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\\add_dog_cats' );
