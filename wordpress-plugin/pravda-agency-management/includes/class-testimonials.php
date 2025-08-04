<?php

class Pravda_Testimonials {
    
    public function __construct() {
        add_action('add_meta_boxes', array($this, 'add_testimonial_meta_boxes'));
        add_action('save_post', array($this, 'save_testimonial_meta'));
        add_filter('manage_pravda_testimonial_posts_columns', array($this, 'testimonial_columns'));
        add_action('manage_pravda_testimonial_posts_custom_column', array($this, 'testimonial_column_content'), 10, 2);
    }
    
    public function add_testimonial_meta_boxes() {
        add_meta_box(
            'testimonial_details',
            'Детайли за отзива',
            array($this, 'testimonial_details_callback'),
            'pravda_testimonial',
            'normal',
            'high'
        );
        
        add_meta_box(
            'testimonial_rating',
            'Оценка и видимост',
            array($this, 'testimonial_rating_callback'),
            'pravda_testimonial',
            'side',
            'default'
        );
    }
    
    public function testimonial_details_callback($post) {
        wp_nonce_field(basename(__FILE__), 'testimonial_details_nonce');
        
        $company = get_post_meta($post->ID, 'testimonial_company', true);
        $position = get_post_meta($post->ID, 'testimonial_position', true);
        $project_type = get_post_meta($post->ID, 'testimonial_project_type', true);
        $results = get_post_meta($post->ID, 'testimonial_results', true);
        $video_url = get_post_meta($post->ID, 'testimonial_video_url', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="testimonial_company">Компания</label></th>
                <td>
                    <input type="text" id="testimonial_company" name="testimonial_company" value="<?php echo esc_attr($company); ?>" class="regular-text" />
                    <p class="description">Име на компанията на клиента</p>
                </td>
            </tr>
            <tr>
                <th><label for="testimonial_position">Позиция</label></th>
                <td>
                    <input type="text" id="testimonial_position" name="testimonial_position" value="<?php echo esc_attr($position); ?>" class="regular-text" />
                    <p class="description">Длъжност на човека дал отзива</p>
                </td>
            </tr>
            <tr>
                <th><label for="testimonial_project_type">Тип проект</label></th>
                <td>
                    <select id="testimonial_project_type" name="testimonial_project_type" class="regular-text">
                        <option value="">Избери тип проект</option>
                        <option value="seo_struktor" <?php selected($project_type, 'seo_struktor'); ?>>SEO Struktor™</option>
                        <option value="trendlab" <?php selected($project_type, 'trendlab'); ?>>Trendlab™</option>
                        <option value="clickstarter" <?php selected($project_type, 'clickstarter'); ?>>Clickstarter™</option>
                        <option value="clientomat" <?php selected($project_type, 'clientomat'); ?>>Clientomat™</option>
                        <option value="full_package" <?php selected($project_type, 'full_package'); ?>>Пълен пакет</option>
                        <option value="consultation" <?php selected($project_type, 'consultation'); ?>>Консултация</option>
                    </select>
                    <p class="description">За кой проект/услуга е отзивът</p>
                </td>
            </tr>
            <tr>
                <th><label for="testimonial_results">Постигнати резултати</label></th>
                <td>
                    <textarea id="testimonial_results" name="testimonial_results" rows="4" cols="50" class="large-text"><?php echo esc_textarea($results); ?></textarea>
                    <p class="description">Кратки резултати постигнати за клиента</p>
                </td>
            </tr>
            <tr>
                <th><label for="testimonial_video_url">Видео отзив (URL)</label></th>
                <td>
                    <input type="url" id="testimonial_video_url" name="testimonial_video_url" value="<?php echo esc_attr($video_url); ?>" class="regular-text" />
                    <p class="description">YouTube, Vimeo или друг видео URL (опционално)</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    public function testimonial_rating_callback($post) {
        wp_nonce_field(basename(__FILE__), 'testimonial_rating_nonce');
        
        $rating = get_post_meta($post->ID, 'testimonial_rating', true);
        $featured = get_post_meta($post->ID, 'testimonial_featured', true);
        $verified = get_post_meta($post->ID, 'testimonial_verified', true);
        
        ?>
        <p>
            <label for="testimonial_rating"><strong>Оценка:</strong></label><br>
            <select id="testimonial_rating" name="testimonial_rating" class="widefat">
                <option value="">Избери оценка</option>
                <option value="5" <?php selected($rating, '5'); ?>>5 звезди</option>
                <option value="4" <?php selected($rating, '4'); ?>>4 звезди</option>
                <option value="3" <?php selected($rating, '3'); ?>>3 звезди</option>
                <option value="2" <?php selected($rating, '2'); ?>>2 звезди</option>
                <option value="1" <?php selected($rating, '1'); ?>>1 звезда</option>
            </select>
        </p>
        
        <p>
            <label>
                <input type="checkbox" name="testimonial_featured" value="1" <?php checked($featured, '1'); ?> />
                <strong>Препоръчан отзив</strong>
            </label><br>
            <small>Ще се показва в началната страница</small>
        </p>
        
        <p>
            <label>
                <input type="checkbox" name="testimonial_verified" value="1" <?php checked($verified, '1'); ?> />
                <strong>Верифициран отзив</strong>
            </label><br>
            <small>Потвърден като автентичен</small>
        </p>
        
        <h4>Предварителен изглед на оценката:</h4>
        <div id="rating-preview" style="font-size: 16px; color: #ECB629;">
            <?php 
            if ($rating) {
                echo str_repeat('★', intval($rating)) . str_repeat('☆', 5 - intval($rating));
            } else {
                echo 'Няма оценка';
            }
            ?>
        </div>
        
        <script>
        document.getElementById('testimonial_rating').addEventListener('change', function() {
            var rating = parseInt(this.value);
            var preview = document.getElementById('rating-preview');
            
            if (rating) {
                var stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
                preview.innerHTML = stars;
            } else {
                preview.innerHTML = 'Няма оценка';
            }
        });
        </script>
        <?php
    }
    
    public function save_testimonial_meta($post_id) {
        // Verify nonces
        if ((!isset($_POST['testimonial_details_nonce']) || !wp_verify_nonce($_POST['testimonial_details_nonce'], basename(__FILE__))) &&
            (!isset($_POST['testimonial_rating_nonce']) || !wp_verify_nonce($_POST['testimonial_rating_nonce'], basename(__FILE__)))) {
            return;
        }
        
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        $meta_fields = array(
            'testimonial_company',
            'testimonial_position',
            'testimonial_project_type',
            'testimonial_results',
            'testimonial_video_url',
            'testimonial_rating'
        );
        
        foreach ($meta_fields as $field) {
            if (isset($_POST[$field])) {
                if ($field === 'testimonial_video_url') {
                    update_post_meta($post_id, $field, esc_url_raw($_POST[$field]));
                } else {
                    update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
                }
            }
        }
        
        // Handle checkboxes
        $checkboxes = array('testimonial_featured', 'testimonial_verified');
        foreach ($checkboxes as $checkbox) {
            if (isset($_POST[$checkbox])) {
                update_post_meta($post_id, $checkbox, '1');
            } else {
                delete_post_meta($post_id, $checkbox);
            }
        }
    }
    
    public function testimonial_columns($columns) {
        $columns = array(
            'cb' => $columns['cb'],
            'title' => 'Клиент',
            'testimonial_company' => 'Компания',
            'testimonial_rating' => 'Оценка',
            'testimonial_project' => 'Проект',
            'testimonial_featured' => 'Препоръчан',
            'date' => 'Дата'
        );
        return $columns;
    }
    
    public function testimonial_column_content($column, $post_id) {
        switch ($column) {
            case 'testimonial_company':
                $company = get_post_meta($post_id, 'testimonial_company', true);
                echo $company ? esc_html($company) : '—';
                break;
                
            case 'testimonial_rating':
                $rating = get_post_meta($post_id, 'testimonial_rating', true);
                if ($rating) {
                    echo '<span style="color: #ECB629;">' . str_repeat('★', intval($rating)) . str_repeat('☆', 5 - intval($rating)) . '</span>';
                } else {
                    echo '—';
                }
                break;
                
            case 'testimonial_project':
                $project = get_post_meta($post_id, 'testimonial_project_type', true);
                $project_names = array(
                    'seo_struktor' => 'SEO Struktor™',
                    'trendlab' => 'Trendlab™',
                    'clickstarter' => 'Clickstarter™',
                    'clientomat' => 'Clientomat™',
                    'full_package' => 'Пълен пакет',
                    'consultation' => 'Консултация'
                );
                echo isset($project_names[$project]) ? $project_names[$project] : '—';
                break;
                
            case 'testimonial_featured':
                $featured = get_post_meta($post_id, 'testimonial_featured', true);
                echo $featured ? '<span style="color: #ECB629;">★ Да</span>' : '—';
                break;
        }
    }
}

new Pravda_Testimonials();