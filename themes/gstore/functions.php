<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package gstore
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function gstore_enqueue_assets()
{
	wp_enqueue_style(
		'gstore-general',
		get_template_directory_uri() . '/assets/css/general.css',
		[],
		wp_get_theme()->get('Version')
	);
	wp_enqueue_script(
		'gstore-main',
		get_template_directory_uri() . '/assets/js/main.js',
		[],
		wp_get_theme()->get('Version'),
		true
	);
}
add_action('wp_enqueue_scripts', 'gstore_enqueue_assets');


function gstore_google_fonts()
{
	$fonts_url = '';
	$font = 'Urbanist';
	$font_extra = 'ital,wght@0,100..900;1,100..900';
	if ('off' !== _x('on', 'Google Fonts: on or off', 'gstore')) {
		$query_args = [
			'family' => urldecode($font . ':' . $font_extra),
			'subset' => urldecode('latin,latin-ext'),
			'display' => urldecode('swap'),
		];
		$fonts_url = add_query_arg($query_args, '//fonts.googleapis.com/css2');
	}
	wp_enqueue_style(
		'gstore-google-fonts',
		$fonts_url,
		[],
		null
	);
}
add_action('wp_enqueue_scripts', 'gstore_google_fonts');