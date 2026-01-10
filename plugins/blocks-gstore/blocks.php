<?php


function view_block_ships_line($attributes, $content)
{
  $max_slides = isset($attributes['maxSlides']) ? intval($attributes['maxSlides']) : 8;
  $image_height = isset($attributes['imageHeight']) ? intval($attributes['imageHeight']) : 400;

  if (!class_exists('WooCommerce')) {
    return '<div class="gstore-error">WooCommerce is not installed.</div>';
  }

  $args = [
    'limit' => $max_slides,
    'status' => 'publish',
    'orderby' => 'date',
    'order' => 'DESC',
  ];

  $products = wc_get_products($args);

  if (empty($products)) {
    return '<div class="gstore-info">No products found.</div>';
  }

  $output = '<div class="gstore-ships-slider-wrapper" style="--ship-height: ' . $image_height . 'px;">';
  $output .= '<div class="gstore-ships-slider">';
  $output .= '<div class="gstore-ships-track">';

  foreach ($products as $product) {
    $image_id = $product->get_image_id();
    $image_url = $image_id ? wp_get_attachment_image_url($image_id, 'large') : wc_placeholder_img_src();
    $title = $product->get_name();
    $link = $product->get_permalink();

    $output .= '<div class="gstore-ship-slide">';
    $output .= '<a href="' . esc_url($link) . '" class="gstore-ship-card">';
    $output .= '<img src="' . esc_url($image_url) . '" alt="' . esc_attr($title) . '" loading="lazy" />';
    $output .= '<div class="gstore-ship-overlay">';
    $output .= '<span class="gstore-ship-title">' . esc_html($title) . '</span>';
    $output .= '</div>';
    $output .= '</a>';
    $output .= '</div>';
  }

  $output .= '</div>'; // .track
  $output .= '</div>'; // .slider

  // Controls
  $output .= '<button class="gstore-ship-nav prev" aria-label="Previous">&#10094;</button>';
  $output .= '<button class="gstore-ship-nav next" aria-label="Next">&#10095;</button>';

  $output .= '</div>'; // .wrapper

  return $output;
}
