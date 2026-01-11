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

  $output = '<div class="gstore-container">'; // Container added
  $output .= '<div class="gstore-ships-slider-wrapper" style="--ship-height: ' . $image_height . 'px;">';
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
  $output .= '</div>'; // .container

  return $output;
}

function view_block_recent_news($attributes, $content)
{
  $posts_to_show = isset($attributes['postsToShow']) ? intval($attributes['postsToShow']) : 4;

  $args = array(
    'post_type' => 'news',
    'posts_per_page' => $posts_to_show,
    'post_status' => 'publish',
    'orderby' => 'date',
    'order' => 'DESC',
  );

  $query = new WP_Query($args);

  if (!$query->have_posts()) {
    return '<div class="gstore-recent-news-empty" style="padding: 20px; text-align: center; background: #f0f0f0;">No news found. Please add some "News" posts.</div>';
  }

  $output = '<div class="gstore-recent-news">';
  $output .= '<div class="gstore-container">'; // Container added
  $output .= '<div class="gstore-recent-news__grid">';

  $count = 0;
  while ($query->have_posts()) {
    $query->the_post();
    $count++;
    $is_featured = ($count === 1);

    $permalink = get_permalink(); // Assuming inside loop this works even with custom query if setup_postdata is done? No, I need $query->the_post() which I called.
    $title = get_the_title();
    $post_id = get_the_ID();
    $thumb_url = get_the_post_thumbnail_url($post_id, 'large');

    if (!$thumb_url) {
      // Fallback image
      $thumb_url = 'https://placehold.co/800x600?text=News';
    }

    $comments_count = get_comments_number();

    // Get Category
    $terms = get_the_terms($post_id, 'news_category');
    $category_name = '';
    if ($terms && !is_wp_error($terms)) {
      $category_name = $terms[0]->name;
    }

    $classes = 'gstore-news-item';
    if ($is_featured) {
      $classes .= ' gstore-news-item--featured';
    }

    $output .= '<div class="' . esc_attr($classes) . '">';
    $output .= '<a href="' . esc_url($permalink) . '" class="gstore-news-link">';

    // Comment Icon SVG
    $comment_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#999" style="vertical-align: middle; margin-right: 4px;"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>';

    if ($is_featured) {
      $output .= '<div class="gstore-news-bg" style="background-image: url(' . esc_url($thumb_url) . ');"></div>';
      $output .= '<div class="gstore-news-overlay">';
      if ($category_name) {
        $output .= '<div class="gstore-news-category">' . esc_html($category_name) . '</div>';
      }
      $output .= '<h3 class="gstore-news-title">' . esc_html($title) . '</h3>';
      $output .= '<div class="gstore-news-meta">' . $comment_icon . $comments_count . '</div>';
      $output .= '</div>';
    } else {
      $output .= '<div class="gstore-news-thumb"><img src="' . esc_url($thumb_url) . '" alt="' . esc_attr($title) . '" loading="lazy"></div>';
      $output .= '<div class="gstore-news-content">';
      if ($category_name) {
        $output .= '<div class="gstore-news-category">' . esc_html($category_name) . '</div>';
      }
      $output .= '<h3 class="gstore-news-title">' . esc_html($title) . '</h3>';
      $output .= '<div class="gstore-news-meta">' . $comment_icon . $comments_count . '</div>';
      $output .= '</div>';
    }

    $output .= '</a>';
    $output .= '</div>';
  }

  wp_reset_postdata();

  $output .= '</div>'; // grid
  $output .= '</div>'; // container
  $output .= '</div>'; // wrapper

  return $output;
}
