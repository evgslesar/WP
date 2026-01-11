<?php
/**
 * Plugin Name: GStore General
 * Plugin URI: https://gstore.com
 * Description: GStore General Plugin
 * Version: 1.0
 * Author: GStore
 * Author URI: https://gstore.com
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */


function gstore_remove_dashboard_widgets()
{
  global $wp_meta_boxes;
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_drafts']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_posts']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_site_health']);
  unset($wp_meta_boxes['dashboard']['normal']['high']['rank_math_dashboard_widget']);
}
add_action('wp_dashboard_setup', 'gstore_remove_dashboard_widgets');

/**
 * Allow SVG user uploads
 */
function gstore_mime_types($mimes)
{
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'gstore_mime_types');

/**
 * Fix SVG display in media library
 */
function gstore_fix_svg_display()
{
  echo '<style>
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
    </style>';
}
add_action('admin_head', 'gstore_fix_svg_display');

/**
 * Register News Custom Post Type and Taxonomy
 */
function gstore_register_news_cpt()
{
  // Register News Post Type
  $labels = array(
    'name' => _x('News', 'Post Type General Name', 'blocks-gstore'),
    'singular_name' => _x('News', 'Post Type Singular Name', 'blocks-gstore'),
    'menu_name' => __('News', 'blocks-gstore'),
    'name_admin_bar' => __('News', 'blocks-gstore'),
    'archives' => __('News Archives', 'blocks-gstore'),
    'attributes' => __('News Attributes', 'blocks-gstore'),
    'parent_item_colon' => __('Parent News:', 'blocks-gstore'),
    'all_items' => __('All News', 'blocks-gstore'),
    'add_new_item' => __('Add New News', 'blocks-gstore'),
    'add_new' => __('Add New', 'blocks-gstore'),
    'new_item' => __('New News', 'blocks-gstore'),
    'edit_item' => __('Edit News', 'blocks-gstore'),
    'update_item' => __('Update News', 'blocks-gstore'),
    'view_item' => __('View News', 'blocks-gstore'),
    'view_items' => __('View News', 'blocks-gstore'),
    'search_items' => __('Search News', 'blocks-gstore'),
    'not_found' => __('Not found', 'blocks-gstore'),
    'not_found_in_trash' => __('Not found in Trash', 'blocks-gstore'),
    'featured_image' => __('Featured Image', 'blocks-gstore'),
    'set_featured_image' => __('Set featured image', 'blocks-gstore'),
    'remove_featured_image' => __('Remove featured image', 'blocks-gstore'),
    'use_featured_image' => __('Use as featured image', 'blocks-gstore'),
    'insert_into_item' => __('Insert into news', 'blocks-gstore'),
    'uploaded_to_this_item' => __('Uploaded to this news', 'blocks-gstore'),
    'items_list' => __('News list', 'blocks-gstore'),
    'items_list_navigation' => __('News list navigation', 'blocks-gstore'),
    'filter_items_list' => __('Filter news list', 'blocks-gstore'),
  );
  $args = array(
    'label' => __('News', 'blocks-gstore'),
    'description' => __('News and Updates', 'blocks-gstore'),
    'labels' => $labels,
    'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
    'taxonomies' => array('news_category'),
    'hierarchical' => false,
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 5,
    'menu_icon' => 'dashicons-megaphone',
    'show_in_admin_bar' => true,
    'show_in_nav_menus' => true,
    'can_export' => true,
    'has_archive' => true,
    'exclude_from_search' => false,
    'publicly_queryable' => true,
    'capability_type' => 'post',
    'show_in_rest' => true,
  );
  register_post_type('news', $args);

  // Register News Category Taxonomy
  $labels_tax = array(
    'name' => _x('News Categories', 'Taxonomy General Name', 'blocks-gstore'),
    'singular_name' => _x('News Category', 'Taxonomy Singular Name', 'blocks-gstore'),
    'menu_name' => __('News Category', 'blocks-gstore'),
    'all_items' => __('All Categories', 'blocks-gstore'),
    'parent_item' => __('Parent Category', 'blocks-gstore'),
    'parent_item_colon' => __('Parent Category:', 'blocks-gstore'),
    'new_item_name' => __('New Category Name', 'blocks-gstore'),
    'add_new_item' => __('Add New Category', 'blocks-gstore'),
    'edit_item' => __('Edit Category', 'blocks-gstore'),
    'update_item' => __('Update Category', 'blocks-gstore'),
    'view_item' => __('View Category', 'blocks-gstore'),
    'separate_items_with_commas' => __('Separate categories with commas', 'blocks-gstore'),
    'add_or_remove_items' => __('Add or remove categories', 'blocks-gstore'),
    'choose_from_most_used' => __('Choose from the most used', 'blocks-gstore'),
    'popular_items' => __('Popular Categories', 'blocks-gstore'),
    'search_items' => __('Search Categories', 'blocks-gstore'),
    'not_found' => __('Not Found', 'blocks-gstore'),
    'no_terms' => __('No categories', 'blocks-gstore'),
    'items_list' => __('Categories list', 'blocks-gstore'),
    'items_list_navigation' => __('Categories list navigation', 'blocks-gstore'),
  );
  $args_tax = array(
    'labels' => $labels_tax,
    'hierarchical' => true,
    'public' => true,
    'show_ui' => true,
    'show_admin_column' => true,
    'show_in_nav_menus' => true,
    'show_tagcloud' => true,
    'show_in_rest' => true,
  );
  register_taxonomy('news_category', array('news'), $args_tax);
}
add_action('init', 'gstore_register_news_cpt', 0);
