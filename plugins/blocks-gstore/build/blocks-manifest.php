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
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
