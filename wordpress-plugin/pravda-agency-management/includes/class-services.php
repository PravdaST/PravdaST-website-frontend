<?php

class Pravda_Services {
    
    public function __construct() {
        add_action('add_meta_boxes', array($this, 'add_service_meta_boxes'));
        add_action('save_post', array($this, 'save_service_meta'));
        add_filter('manage_pravda_service_posts_columns', array($this, 'service_columns'));
        add_action('manage_pravda_service_posts_custom_column', array($this, 'service_column_content'), 10, 2);
    }
    
    public function add_service_meta_boxes() {
        add_meta_box(
            'service_details',
            'Детайли за услугата',
            array($this, 'service_details_callback'),
            'pravda_service',
            'normal',
            'high'
        );
        
        add_meta_box(
            'service_pricing',
            'Ценообразуване',
            array($this, 'service_pricing_callback'),
            'pravda_service',
            'side',
            'default'
        );
    }
    
    public function service_details_callback($post) {
        wp_nonce_field(basename(__FILE__), 'service_details_nonce');
        
        $features = get_post_meta($post->ID, 'service_features', true);
        $duration = get_post_meta($post->ID, 'service_duration', true);
        $benefits = get_post_meta($post->ID, 'service_benefits', true);
        $process = get_post_meta($post->ID, 'service_process', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="service_features">Функционалности</label></th>
                <td>
                    <textarea id="service_features" name="service_features" rows="5" cols="50" class="large-text"><?php echo esc_textarea($features); ?></textarea>
                    <p class="description">Един ред за всяка функционалност</p>
                </td>
            </tr>
            <tr>
                <th><label for="service_duration">Продължителност</label></th>
                <td>
                    <input type="text" id="service_duration" name="service_duration" value="<?php echo esc_attr($duration); ?>" class="regular-text" />
                    <p class="description">Например: "2-3 месеца", "4-6 седмици"</p>
                </td>
            </tr>
            <tr>
                <th><label for="service_benefits">Ползи</label></th>
                <td>
                    <textarea id="service_benefits" name="service_benefits" rows="5" cols="50" class="large-text"><?php echo esc_textarea($benefits); ?></textarea>
                    <p class="description">Основни ползи от услугата, един ред за всяка</p>
                </td>
            </tr>
            <tr>
                <th><label for="service_process">Процес</label></th>
                <td>
                    <textarea id="service_process" name="service_process" rows="8" cols="50" class="large-text"><?php echo esc_textarea($process); ?></textarea>
                    <p class="description">Стъпки в процеса на изпълнение</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    public function service_pricing_callback($post) {
        $price = get_post_meta($post->ID, 'service_price', true);
        $price_type = get_post_meta($post->ID, 'service_price_type', true);
        $discount_text = get_post_meta($post->ID, 'service_discount_text', true);
        
        ?>
        <p>
            <label for="service_price"><strong>Цена:</strong></label><br>
            <input type="text" id="service_price" name="service_price" value="<?php echo esc_attr($price); ?>" class="widefat" />
        </p>
        <p>
            <label for="service_price_type"><strong>Тип ценообразуване:</strong></label><br>
            <select id="service_price_type" name="service_price_type" class="widefat">
                <option value="fixed" <?php selected($price_type, 'fixed'); ?>>Фиксирана цена</option>
                <option value="monthly" <?php selected($price_type, 'monthly'); ?>>Месечно</option>
                <option value="hourly" <?php selected($price_type, 'hourly'); ?>>На час</option>
                <option value="project" <?php selected($price_type, 'project'); ?>>За проект</option>
                <option value="custom" <?php selected($price_type, 'custom'); ?>>По запитване</option>
            </select>
        </p>
        <p>
            <label for="service_discount_text"><strong>Промоционален текст:</strong></label><br>
            <input type="text" id="service_discount_text" name="service_discount_text" value="<?php echo esc_attr($discount_text); ?>" class="widefat" />
            <small>Например: "20% отстъпка първия месец"</small>
        </p>
        <?php
    }
    
    public function save_service_meta($post_id) {
        if (!isset($_POST['service_details_nonce']) || !wp_verify_nonce($_POST['service_details_nonce'], basename(__FILE__))) {
            return;
        }
        
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        $meta_fields = array(
            'service_features',
            'service_duration', 
            'service_benefits',
            'service_process',
            'service_price',
            'service_price_type',
            'service_discount_text'
        );
        
        foreach ($meta_fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, $field, sanitize_textarea_field($_POST[$field]));
            }
        }
    }
    
    public function service_columns($columns) {
        $columns = array(
            'cb' => $columns['cb'],
            'title' => 'Услуга',
            'service_price' => 'Цена',
            'service_duration' => 'Продължителност',
            'service_category' => 'Категория',
            'date' => 'Дата'
        );
        return $columns;
    }
    
    public function service_column_content($column, $post_id) {
        switch ($column) {
            case 'service_price':
                $price = get_post_meta($post_id, 'service_price', true);
                echo $price ? esc_html($price) : '—';
                break;
                
            case 'service_duration':
                $duration = get_post_meta($post_id, 'service_duration', true);
                echo $duration ? esc_html($duration) : '—';
                break;
                
            case 'service_category':
                $terms = get_the_terms($post_id, 'service_category');
                if ($terms && !is_wp_error($terms)) {
                    $category_names = array();
                    foreach ($terms as $term) {
                        $category_names[] = $term->name;
                    }
                    echo implode(', ', $category_names);
                } else {
                    echo '—';
                }
                break;
        }
    }
}

new Pravda_Services();