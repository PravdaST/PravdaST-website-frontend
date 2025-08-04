<?php

class Pravda_Resources {
    
    public function __construct() {
        add_action('add_meta_boxes', array($this, 'add_resource_meta_boxes'));
        add_action('save_post', array($this, 'save_resource_meta'));
        add_filter('manage_pravda_resource_posts_columns', array($this, 'resource_columns'));
        add_action('manage_pravda_resource_posts_custom_column', array($this, 'resource_column_content'), 10, 2);
    }
    
    public function add_resource_meta_boxes() {
        add_meta_box(
            'resource_details',
            'Детайли за ресурса',
            array($this, 'resource_details_callback'),
            'pravda_resource',
            'normal',
            'high'
        );
        
        add_meta_box(
            'resource_file',
            'Файлови настройки',
            array($this, 'resource_file_callback'),
            'pravda_resource',
            'side',
            'default'
        );
    }
    
    public function resource_details_callback($post) {
        wp_nonce_field(basename(__FILE__), 'resource_details_nonce');
        
        $target_audience = get_post_meta($post->ID, 'resource_target_audience', true);
        $requirements = get_post_meta($post->ID, 'resource_requirements', true);
        $benefits = get_post_meta($post->ID, 'resource_benefits', true);
        $how_to_use = get_post_meta($post->ID, 'resource_how_to_use', true);
        $related_services = get_post_meta($post->ID, 'resource_related_services', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="resource_target_audience">Целева аудитория</label></th>
                <td>
                    <input type="text" id="resource_target_audience" name="resource_target_audience" value="<?php echo esc_attr($target_audience); ?>" class="regular-text" />
                    <p class="description">За кого е предназначен този ресурс</p>
                </td>
            </tr>
            <tr>
                <th><label for="resource_requirements">Изисквания</label></th>
                <td>
                    <textarea id="resource_requirements" name="resource_requirements" rows="3" cols="50" class="large-text"><?php echo esc_textarea($requirements); ?></textarea>
                    <p class="description">Какво е необходимо за използване на ресурса</p>
                </td>
            </tr>
            <tr>
                <th><label for="resource_benefits">Ползи</label></th>
                <td>
                    <textarea id="resource_benefits" name="resource_benefits" rows="4" cols="50" class="large-text"><?php echo esc_textarea($benefits); ?></textarea>
                    <p class="description">Какви ползи ще получи потребителя, една на ред</p>
                </td>
            </tr>
            <tr>
                <th><label for="resource_how_to_use">Как да използвате</label></th>
                <td>
                    <textarea id="resource_how_to_use" name="resource_how_to_use" rows="5" cols="50" class="large-text"><?php echo esc_textarea($how_to_use); ?></textarea>
                    <p class="description">Стъпки за използване на ресурса</p>
                </td>
            </tr>
            <tr>
                <th><label for="resource_related_services">Свързани услуги</label></th>
                <td>
                    <textarea id="resource_related_services" name="resource_related_services" rows="2" cols="50" class="large-text"><?php echo esc_textarea($related_services); ?></textarea>
                    <p class="description">Кои от нашите услуги са свързани с този ресурс</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    public function resource_file_callback($post) {
        wp_nonce_field(basename(__FILE__), 'resource_file_nonce');
        
        $file_url = get_post_meta($post->ID, 'resource_file_url', true);
        $file_size = get_post_meta($post->ID, 'resource_file_size', true);
        $file_format = get_post_meta($post->ID, 'resource_file_format', true);
        $download_count = get_post_meta($post->ID, 'resource_download_count', true);
        $access_level = get_post_meta($post->ID, 'resource_access_level', true);
        
        ?>
        <p>
            <label for="resource_file_url"><strong>URL на файла:</strong></label><br>
            <input type="url" id="resource_file_url" name="resource_file_url" value="<?php echo esc_attr($file_url); ?>" class="widefat" />
            <small>Пряка връзка към файла</small>
        </p>
        
        <p>
            <label for="resource_file_size"><strong>Размер на файла:</strong></label><br>
            <input type="text" id="resource_file_size" name="resource_file_size" value="<?php echo esc_attr($file_size); ?>" class="widefat" />
            <small>Например: "2.5 MB", "1.2 KB"</small>
        </p>
        
        <p>
            <label for="resource_file_format"><strong>Формат:</strong></label><br>
            <select id="resource_file_format" name="resource_file_format" class="widefat">
                <option value="">Избери формат</option>
                <option value="pdf" <?php selected($file_format, 'pdf'); ?>>PDF</option>
                <option value="doc" <?php selected($file_format, 'doc'); ?>>Word Document</option>
                <option value="xls" <?php selected($file_format, 'xls'); ?>>Excel Spreadsheet</option>
                <option value="ppt" <?php selected($file_format, 'ppt'); ?>>PowerPoint</option>
                <option value="zip" <?php selected($file_format, 'zip'); ?>>ZIP Archive</option>
                <option value="video" <?php selected($file_format, 'video'); ?>>Video</option>
                <option value="audio" <?php selected($file_format, 'audio'); ?>>Audio</option>
                <option value="other" <?php selected($file_format, 'other'); ?>>Друго</option>
            </select>
        </p>
        
        <p>
            <label for="resource_access_level"><strong>Ниво на достъп:</strong></label><br>
            <select id="resource_access_level" name="resource_access_level" class="widefat">
                <option value="public" <?php selected($access_level, 'public'); ?>>Публичен</option>
                <option value="email_required" <?php selected($access_level, 'email_required'); ?>>Изисква имейл</option>
                <option value="clients_only" <?php selected($access_level, 'clients_only'); ?>>Само за клиенти</option>
                <option value="premium" <?php selected($access_level, 'premium'); ?>>Premium</option>
            </select>
        </p>
        
        <p>
            <strong>Брой изтегляния:</strong><br>
            <input type="number" id="resource_download_count" name="resource_download_count" value="<?php echo esc_attr($download_count); ?>" class="small-text" readonly />
            <small>Автоматично се актуализира</small>
        </p>
        
        <?php if ($file_url): ?>
        <p>
            <a href="<?php echo esc_url($file_url); ?>" target="_blank" class="button button-secondary">
                Прегледай файла
            </a>
        </p>
        <?php endif; ?>
        <?php
    }
    
    public function save_resource_meta($post_id) {
        // Verify nonces
        if ((!isset($_POST['resource_details_nonce']) || !wp_verify_nonce($_POST['resource_details_nonce'], basename(__FILE__))) &&
            (!isset($_POST['resource_file_nonce']) || !wp_verify_nonce($_POST['resource_file_nonce'], basename(__FILE__)))) {
            return;
        }
        
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        $meta_fields = array(
            'resource_target_audience',
            'resource_requirements',
            'resource_benefits',
            'resource_how_to_use',
            'resource_related_services',
            'resource_file_url',
            'resource_file_size',
            'resource_file_format',
            'resource_access_level',
            'resource_download_count'
        );
        
        foreach ($meta_fields as $field) {
            if (isset($_POST[$field])) {
                if ($field === 'resource_file_url') {
                    update_post_meta($post_id, $field, esc_url_raw($_POST[$field]));
                } elseif ($field === 'resource_download_count') {
                    update_post_meta($post_id, $field, intval($_POST[$field]));
                } else {
                    update_post_meta($post_id, $field, sanitize_textarea_field($_POST[$field]));
                }
            }
        }
    }
    
    public function resource_columns($columns) {
        $columns = array(
            'cb' => $columns['cb'],
            'title' => 'Ресурс',
            'resource_type' => 'Тип',
            'resource_format' => 'Формат',
            'resource_access' => 'Достъп',
            'resource_downloads' => 'Изтегляния',
            'date' => 'Дата'
        );
        return $columns;
    }
    
    public function resource_column_content($column, $post_id) {
        switch ($column) {
            case 'resource_type':
                $terms = get_the_terms($post_id, 'resource_type');
                if ($terms && !is_wp_error($terms)) {
                    echo $terms[0]->name;
                } else {
                    echo '—';
                }
                break;
                
            case 'resource_format':
                $format = get_post_meta($post_id, 'resource_file_format', true);
                echo $format ? strtoupper($format) : '—';
                break;
                
            case 'resource_access':
                $access = get_post_meta($post_id, 'resource_access_level', true);
                $access_labels = array(
                    'public' => 'Публичен',
                    'email_required' => 'Имейл',
                    'clients_only' => 'Клиенти',
                    'premium' => 'Premium'
                );
                echo isset($access_labels[$access]) ? $access_labels[$access] : '—';
                break;
                
            case 'resource_downloads':
                $downloads = get_post_meta($post_id, 'resource_download_count', true);
                echo $downloads ? intval($downloads) : '0';
                break;
        }
    }
}

new Pravda_Resources();