<?php
/**
 * Plugin Name:       Blocks Gstore
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-gstore
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

add_filter('block_categories_all', function ($categories) {
	return array_merge($categories, [
		[
			'slug' => 'gstore',
			'title' => __('Gstore', 'blocks-gstore'),
		]
	]);
});

require_once __DIR__ . '/blocks.php';

function create_block_blocks_gstore_block_init()
{
	add_filter('register_block_type_args', function ($args, $name) {
		if ('blocks-gstore/block-ships-line' === $name) {
			$args['render_callback'] = 'view_block_ships_line';
		} elseif ('blocks-gstore/block-recent-news' === $name) {
			$args['render_callback'] = 'view_block_recent_news';
		}
		return $args;
	}, 10, 2);

	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}

	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'create_block_blocks_gstore_block_init');
