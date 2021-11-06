<?php
/**
 * Plugin Name: Aloha_Plugin
 * Plugin URI: https://aloha-tech.com/
 * Description: Custom  woocommerce plugin
 * Version: 1.0.1
 * Author: Mike Hsu
 * Author URI: https://aloha-tech.com/
 * 
 */

 /*  style  */
function wpdocs_theme_name_scripts() {   
    wp_enqueue_style('style-aloha-css', esc_url( plugins_url( 'assets/css/main.css', __FILE__ )), array(), rand(0,9999), 'all');
   wp_enqueue_script( 'script-aloha-js', esc_url( plugins_url( 'assets/js/script.js', __FILE__ )), array(), rand(0,9999), true );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );


// require "post/artist_metabox.php";
// require "post/artist.php";
// require "post/artist_scode.php";

 require "post/work_metabox.php";
 require "post/work.php";

 require "api/work_api.php";

 require "api/post_api.php";

/*
require "woo/myaccount.php";
require "woo/checkout.php";
require "woo/direct_checkout.php";
*/


/*
function wpdocs_codex_Artist_init2() {
    $labels = array(
        'name'                  => _x( 'Class', 'Post type general name', 'textdomain' ),
        'singular_name'         => _x( 'Class', 'Post type singular name', 'textdomain' ),
        'menu_name'             => _x( 'Class', 'Admin Menu text', 'textdomain' ),
        'name_admin_bar'        => _x( 'Class', 'Add New on Toolbar', 'textdomain' ),
        'add_new'               => __( 'Add New', 'textdomain' ),
        'add_new_item'          => __( 'Add New Class', 'textdomain' ),
        'new_item'              => __( 'New Class', 'textdomain' ),
        'edit_item'             => __( 'Edit Class', 'textdomain' ),
        'view_item'             => __( 'View Class', 'textdomain' ),
        'all_items'             => __( 'All Class', 'textdomain' ),
        'search_items'          => __( 'Search Class', 'textdomain' ),
        'parent_item_colon'     => __( 'Parent Class:', 'textdomain' ),
        'not_found'             => __( 'No Class found.', 'textdomain' ),
        'not_found_in_trash'    => __( 'No Class found in Trash.', 'textdomain' ),
        'featured_image'        => _x( 'Class Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'archives'              => _x( 'Class archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain' ),
        'insert_into_item'      => _x( 'Insert into Class', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this Class', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain' ),
        'filter_items_list'     => _x( 'Filter Class list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain' ),
        'items_list_navigation' => _x( 'Class list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain' ),
        'items_list'            => _x( 'Class list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain' ),
    );
 
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'class' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt'),
    );
 
    register_post_type( 'class', $args );
}
 
add_action( 'init', 'wpdocs_codex_Artist_init2' );
*/


