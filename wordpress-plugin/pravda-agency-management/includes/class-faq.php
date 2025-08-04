<?php

class Pravda_FAQ {
    
    public function __construct() {
        add_action('add_meta_boxes', array($this, 'add_faq_meta_boxes'));
        add_action('save_post', array($this, 'save_faq_meta'));
        add_filter('manage_pravda_faq_posts_columns', array($this, 'faq_columns'));
        add_action('manage_pravda_faq_posts_custom_column', array($this, 'faq_column_content'), 10, 2);
        add_action('pre_get_posts', array($this, 'faq_admin_order'));
    }
    
    public function add_faq_meta_boxes() {
        add_meta_box(
            'faq_settings',
            'FAQ Настройки',
            array($this, 'faq_settings_callback'),
            'pravda_faq',
            'side',
            'default'
        );
    }
    
    public function faq_settings_callback($post) {
        wp_nonce_field(basename(__FILE__), 'faq_settings_nonce');
        
        $order = get_post_meta($post->ID, '_menu_order', true);
        $featured = get_post_meta($post->ID, 'faq_featured', true);
        
        ?>
        <p>
            <label for="menu_order"><strong>Ред на показване:</strong></label><br>
            <input type="number" id="menu_order" name="menu_order" value="<?php echo esc_attr($order); ?>" class="small-text" />
            <small>По-малкото число се показва първо</small>
        </p>
        <p>
            <label>
                <input type="checkbox" name="faq_featured" value="1" <?php checked($featured, '1'); ?> />
                <strong>Популярен въпрос</strong>
            </label><br>
            <small>Ще се показва в секцията с популярни въпроси</small>
        </p>
        <?php
    }
    
    public function save_faq_meta($post_id) {
        if (!isset($_POST['faq_settings_nonce']) || !wp_verify_nonce($_POST['faq_settings_nonce'], basename(__FILE__))) {
            return;
        }
        
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        // Save menu order
        if (isset($_POST['menu_order'])) {
            $order = intval($_POST['menu_order']);
            wp_update_post(array(
                'ID' => $post_id,
                'menu_order' => $order
            ));
        }
        
        // Save featured status
        if (isset($_POST['faq_featured'])) {
            update_post_meta($post_id, 'faq_featured', '1');
        } else {
            delete_post_meta($post_id, 'faq_featured');
        }
    }
    
    public function faq_columns($columns) {
        $columns = array(
            'cb' => $columns['cb'],
            'title' => 'Въпрос',
            'faq_category' => 'Категория',
            'faq_featured' => 'Популярен',
            'menu_order' => 'Ред',
            'date' => 'Дата'
        );
        return $columns;
    }
    
    public function faq_column_content($column, $post_id) {
        switch ($column) {
            case 'faq_category':
                $terms = get_the_terms($post_id, 'faq_category');
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
                
            case 'faq_featured':
                $featured = get_post_meta($post_id, 'faq_featured', true);
                echo $featured ? '<span style="color: #ECB629;">★ Да</span>' : '—';
                break;
                
            case 'menu_order':
                $order = get_post_meta($post_id, '_menu_order', true);
                echo $order ? intval($order) : '0';
                break;
        }
    }
    
    public function faq_admin_order($query) {
        if (!is_admin()) {
            return;
        }
        
        if ($query->get('post_type') === 'pravda_faq') {
            $query->set('orderby', 'menu_order');
            $query->set('order', 'ASC');
        }
    }
}

new Pravda_FAQ();