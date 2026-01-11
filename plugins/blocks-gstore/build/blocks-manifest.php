<?php
// This file is generated. Do not modify it manually.
return array(
	'block-contact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gstore/block-contact',
		'version' => '0.1.0',
		'title' => 'Block Contact',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-gstore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-footer' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gstore/block-footer',
		'version' => '0.1.0',
		'title' => 'Block Footer',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Block Footer for the site',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'logoText' => array(
				'type' => 'string',
				'default' => 'GStore'
			),
			'copyrightText' => array(
				'type' => 'string',
				'default' => '© 2026 GStore. All rights reserved.'
			),
			'footerMenu' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Categories',
						'links' => array(
							array(
								'label' => 'Fighters',
								'url' => '#'
							),
							array(
								'label' => 'Frigates',
								'url' => '#'
							),
							array(
								'label' => 'Haulers',
								'url' => '#'
							)
						)
					),
					array(
						'title' => 'Company',
						'links' => array(
							array(
								'label' => 'About Us',
								'url' => '#'
							),
							array(
								'label' => 'Careers',
								'url' => '#'
							),
							array(
								'label' => 'Blog',
								'url' => '#'
							)
						)
					),
					array(
						'title' => 'Support',
						'links' => array(
							array(
								'label' => 'Help Center',
								'url' => '#'
							),
							array(
								'label' => 'Terms of Service',
								'url' => '#'
							),
							array(
								'label' => 'Privacy Policy',
								'url' => '#'
							)
						)
					)
				)
			),
			'socialLinks' => array(
				'type' => 'array',
				'default' => array(
					array(
						'platform' => 'twitter',
						'url' => '#'
					),
					array(
						'platform' => 'facebook',
						'url' => '#'
					),
					array(
						'platform' => 'instagram',
						'url' => '#'
					)
				)
			)
		),
		'textdomain' => 'blocks-gstore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'block-header' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gstore/block-header',
		'version' => '0.1.0',
		'title' => 'Block Header',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Site Header Block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'memberLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'cartLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'geoLocation' => array(
				'type' => 'string',
				'default' => 'Galaxy Sector 1'
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Sell Starship'
			),
			'ctaUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'menuItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Fighters',
						'url' => '#'
					),
					array(
						'label' => 'Frigates',
						'url' => '#'
					),
					array(
						'label' => 'Haulers',
						'url' => '#'
					),
					array(
						'label' => 'Destroyers',
						'url' => '#'
					),
					array(
						'label' => 'Shuttles',
						'url' => '#'
					)
				)
			),
			'moreMenuItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'About Us',
						'url' => '#'
					),
					array(
						'label' => 'Contact',
						'url' => '#'
					),
					array(
						'label' => 'Privacy Policy',
						'url' => '#'
					)
				)
			)
		),
		'textdomain' => 'blocks-gstore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gstore/block-hero',
		'version' => '0.1.0',
		'title' => 'Block Hero',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'The Site Hero Block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Hero Title'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Hero Description'
			),
			'link' => array(
				'type' => 'string',
				'default' => '#'
			),
			'linkAnchor' => array(
				'type' => 'string',
				'default' => 'Learn More'
			),
			'video' => array(
				'type' => 'string'
			),
			'mediaType' => array(
				'type' => 'string',
				'default' => 'video'
			),
			'backgroundImage' => array(
				'type' => 'string'
			),
			'backgroundImageId' => array(
				'type' => 'number'
			),
			'logos' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'logosTitle' => array(
				'type' => 'string',
				'default' => 'Trusted by'
			)
		),
		'textdomain' => 'blocks-gstore',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'block-recent-news' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gstore/block-recent-news',
		'version' => '0.1.0',
		'title' => 'Block Recent News',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Block Recent News for the main page',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-gstore',
		'attributes' => array(
			'postsToShow' => array(
				'type' => 'number',
				'default' => 4
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'block-ships-line' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-gstore/block-ships-line',
		'version' => '0.1.0',
		'title' => 'Block Ships Line',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Slider Block with ships images.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-gstore',
		'attributes' => array(
			'maxSlides' => array(
				'type' => 'number',
				'default' => 8
			),
			'imageHeight' => array(
				'type' => 'number',
				'default' => 400
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
