<?php

class Pravda_News {
    
    public function __construct() {
        add_action('add_meta_boxes', array($this, 'add_news_meta_boxes'));
        add_action('save_post', array($this, 'save_news_meta'));
        add_filter('manage_pravda_news_posts_columns', array($this, 'news_columns'));
        add_action('manage_pravda_news_posts_custom_column', array($this, 'news_column_content'), 10, 2);
    }
    
    public function add_news_meta_boxes() {
        add_meta_box(
            'news_settings',
            'Настройки на новината',
            array($this, 'news_settings_callback'),
            'pravda_news',
            'side',
            'default'
        );
        
        add_meta_box(
            'news_promotion',
            'Промоция и споделяне',
            array($this, 'news_promotion_callback'),
            'pravda_news',
            'normal',
            'default'
        );
    }
    
    public function news_settings_callback($post) {
        wp_nonce_field(basename(__FILE__), 'news_settings_nonce');
        
        $priority = get_post_meta($post->ID, 'news_priority', true);
        $featured = get_post_meta($post->ID, 'news_featured', true);
        $notification_sent = get_post_meta($post->ID, 'news_notification_sent', true);
        $external_link = get_post_meta($post->ID, 'news_external_link', true);
        
        ?>
        <p>
            <label for="news_priority"><strong>Приоритет:</strong></label><br>
            <select id="news_priority" name="news_priority" class="widefat">
                <option value="normal" <?php selected($priority, 'normal'); ?>>Нормален</option>
                <option value="high" <?php selected($priority, 'high'); ?>>Висок</option>
                <option value="urgent" <?php selected($priority, 'urgent'); ?>>Спешен</option>
                <option value="low" <?php selected($priority, 'low'); ?>>Нисък</option>
            </select>
        </p>
        
        <p>
            <label>
                <input type="checkbox" name="news_featured" value="1" <?php checked($featured, '1'); ?> />
                <strong>Препоръчана новина</strong>
            </label><br>
            <small>Ще се показва в началото на списъка</small>
        </p>
        
        <p>
            <label for="news_external_link"><strong>Външна връзка:</strong></label><br>
            <input type="url" id="news_external_link" name="news_external_link" value="<?php echo esc_attr($external_link); ?>" class="widefat" />
            <small>Ако новината препраща към външен сайт</small>
        </p>
        
        <hr>
        
        <p>
            <label>
                <input type="checkbox" name="news_notification_sent" value="1" <?php checked($notification_sent, '1'); ?> disabled />
                <strong>Изпратено известие</strong>
            </label><br>
            <small>Автоматично се маркира при публикуване</small>
        </p>
        <?php
    }
    
    public function news_promotion_callback($post) {
        wp_nonce_field(basename(__FILE__), 'news_promotion_nonce');
        
        $social_text = get_post_meta($post->ID, 'news_social_text', true);
        $email_subject = get_post_meta($post->ID, 'news_email_subject', true);
        $email_preview = get_post_meta($post->ID, 'news_email_preview', true);
        $tags = get_post_meta($post->ID, 'news_tags', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="news_social_text">Текст за социални мрежи</label></th>
                <td>
                    <textarea id="news_social_text" name="news_social_text" rows="3" cols="50" class="large-text"><?php echo esc_textarea($social_text); ?></textarea>
                    <p class="description">Кратък текст за споделяне в социални мрежи</p>
                </td>
            </tr>
            <tr>
                <th><label for="news_email_subject">Email заглавие</label></th>
                <td>
                    <input type="text" id="news_email_subject" name="news_email_subject" value="<?php echo esc_attr($email_subject); ?>" class="large-text" />
                    <p class="description">Заглавие за email кампания</p>
                </td>
            </tr>
            <tr>
                <th><label for="news_email_preview">Email преглед</label></th>
                <td>
                    <textarea id="news_email_preview" name="news_email_preview" rows="2" cols="50" class="large-text"><?php echo esc_textarea($email_preview); ?></textarea>
                    <p class="description">Кратко описание за email preview</p>
                </td>
            </tr>
            <tr>
                <th><label for="news_tags">Тагове</label></th>
                <td>
                    <input type="text" id="news_tags" name="news_tags" value="<?php echo esc_attr($tags); ?>" class="large-text" />
                    <p class="description">Разделени със запетаи: SEO, Маркетинг, Новини</p>
                </td>
            </tr>
        </table>
        
        <h4>Бързо споделяне:</h4>
        <div class="quick-share-buttons">
            <button type="button" class="button" onclick="shareToLinkedIn()">LinkedIn</button>
            <button type="button" class="button" onclick="shareToFacebook()">Facebook</button>
            <button type="button" class="button" onclick="shareToTwitter()">Twitter</button>
            <button type="button" class="button" onclick="copyLink()">Копирай връзка</button>
        </div>
        
        <script>
        function shareToLinkedIn() {
            var url = '<?php echo get_permalink($post->ID); ?>';
            var text = document.getElementById('news_social_text').value || '<?php echo esc_js($post->post_title); ?>';
            window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(text), '_blank');
        }
        
        function shareToFacebook() {
            var url = '<?php echo get_permalink($post->ID); ?>';
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
        }
        
        function shareToTwitter() {
            var url = '<?php echo get_permalink($post->ID); ?>';
            var text = document.getElementById('news_social_text').value || '<?php echo esc_js($post->post_title); ?>';
            window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '_blank');
        }
        
        function copyLink() {
            var url = '<?php echo get_permalink($post->ID); ?>';
            navigator.clipboard.writeText(url).then(function() {
                alert('Връзката е копирана!');
            });
        }
        </script>
        
        <style>
        .quick-share-buttons {
            margin-top: 10px;
        }
        .quick-share-buttons .button {
            margin-right: 10px;
            margin-bottom: 5px;
        }
        </style>
        <?php
    }
    
    public function save_news_meta($post_id) {
        // Verify nonces
        if ((!isset($_POST['news_settings_nonce']) || !wp_verify_nonce($_POST['news_settings_nonce'], basename(__FILE__))) &&
            (!isset($_POST['news_promotion_nonce']) || !wp_verify_nonce($_POST['news_promotion_nonce'], basename(__FILE__)))) {
            return;
        }
        
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        $meta_fields = array(
            'news_priority',
            'news_external_link',
            'news_social_text',
            'news_email_subject',
            'news_email_preview',
            'news_tags'
        );
        
        foreach ($meta_fields as $field) {
            if (isset($_POST[$field])) {
                if ($field === 'news_external_link') {
                    update_post_meta($post_id, $field, esc_url_raw($_POST[$field]));
                } else {
                    update_post_meta($post_id, $field, sanitize_textarea_field($_POST[$field]));
                }
            }
        }
        
        // Handle checkboxes
        $checkboxes = array('news_featured', 'news_notification_sent');
        foreach ($checkboxes as $checkbox) {
            if (isset($_POST[$checkbox])) {
                update_post_meta($post_id, $checkbox, '1');
            } else {
                if ($checkbox !== 'news_notification_sent') { // Don't auto-uncheck notification sent
                    delete_post_meta($post_id, $checkbox);
                }
            }
        }
        
        // Auto-mark notification as sent when publishing
        if (get_post_status($post_id) === 'publish' && !get_post_meta($post_id, 'news_notification_sent', true)) {
            update_post_meta($post_id, 'news_notification_sent', '1');
        }
    }
    
    public function news_columns($columns) {
        $columns = array(
            'cb' => $columns['cb'],
            'title' => 'Заглавие',
            'news_priority' => 'Приоритет',
            'news_featured' => 'Препоръчана',
            'news_notification' => 'Известие',
            'date' => 'Дата'
        );
        return $columns;
    }
    
    public function news_column_content($column, $post_id) {
        switch ($column) {
            case 'news_priority':
                $priority = get_post_meta($post_id, 'news_priority', true);
                $priority_labels = array(
                    'urgent' => '<span style="color: red; font-weight: bold;">Спешен</span>',
                    'high' => '<span style="color: orange; font-weight: bold;">Висок</span>',
                    'normal' => 'Нормален',
                    'low' => '<span style="color: #666;">Нисък</span>'
                );
                echo isset($priority_labels[$priority]) ? $priority_labels[$priority] : 'Нормален';
                break;
                
            case 'news_featured':
                $featured = get_post_meta($post_id, 'news_featured', true);
                echo $featured ? '<span style="color: #ECB629;">★ Да</span>' : '—';
                break;
                
            case 'news_notification':
                $sent = get_post_meta($post_id, 'news_notification_sent', true);
                echo $sent ? '<span style="color: green;">✓ Изпратено</span>' : '<span style="color: #666;">Не</span>';
                break;
        }
    }
}

new Pravda_News();