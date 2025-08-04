<?php

class Pravda_Team {
    
    public function __construct() {
        add_action('add_meta_boxes', array($this, 'add_team_meta_boxes'));
        add_action('save_post', array($this, 'save_team_meta'));
        add_filter('manage_pravda_team_posts_columns', array($this, 'team_columns'));
        add_action('manage_pravda_team_posts_custom_column', array($this, 'team_column_content'), 10, 2);
        add_action('pre_get_posts', array($this, 'team_admin_order'));
    }
    
    public function add_team_meta_boxes() {
        add_meta_box(
            'team_details',
            'Детайли за член на екипа',
            array($this, 'team_details_callback'),
            'pravda_team',
            'normal',
            'high'
        );
        
        add_meta_box(
            'team_social',
            'Социални мрежи',
            array($this, 'team_social_callback'),
            'pravda_team',
            'side',
            'default'
        );
    }
    
    public function team_details_callback($post) {
        wp_nonce_field(basename(__FILE__), 'team_details_nonce');
        
        $position = get_post_meta($post->ID, 'team_position', true);
        $expertise = get_post_meta($post->ID, 'team_expertise', true);
        $experience_years = get_post_meta($post->ID, 'team_experience_years', true);
        $education = get_post_meta($post->ID, 'team_education', true);
        $certifications = get_post_meta($post->ID, 'team_certifications', true);
        $order = get_post_meta($post->ID, '_menu_order', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="team_position">Позиция</label></th>
                <td>
                    <input type="text" id="team_position" name="team_position" value="<?php echo esc_attr($position); ?>" class="regular-text" />
                    <p class="description">Например: "Senior SEO Specialist", "Business Engineer"</p>
                </td>
            </tr>
            <tr>
                <th><label for="team_experience_years">Години опит</label></th>
                <td>
                    <input type="number" id="team_experience_years" name="team_experience_years" value="<?php echo esc_attr($experience_years); ?>" class="small-text" />
                    <p class="description">Общ опит в години</p>
                </td>
            </tr>
            <tr>
                <th><label for="team_expertise">Експертиза</label></th>
                <td>
                    <textarea id="team_expertise" name="team_expertise" rows="4" cols="50" class="large-text"><?php echo esc_textarea($expertise); ?></textarea>
                    <p class="description">Основни умения и специализации, един на ред</p>
                </td>
            </tr>
            <tr>
                <th><label for="team_education">Образование</label></th>
                <td>
                    <textarea id="team_education" name="team_education" rows="3" cols="50" class="large-text"><?php echo esc_textarea($education); ?></textarea>
                    <p class="description">Университет, степен, специалност</p>
                </td>
            </tr>
            <tr>
                <th><label for="team_certifications">Сертификати</label></th>
                <td>
                    <textarea id="team_certifications" name="team_certifications" rows="3" cols="50" class="large-text"><?php echo esc_textarea($certifications); ?></textarea>
                    <p class="description">Google Ads, Facebook Blueprint, и др., един на ред</p>
                </td>
            </tr>
            <tr>
                <th><label for="menu_order">Ред на показване</label></th>
                <td>
                    <input type="number" id="menu_order" name="menu_order" value="<?php echo esc_attr($order); ?>" class="small-text" />
                    <p class="description">По-малкото число се показва първо</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    public function team_social_callback($post) {
        wp_nonce_field(basename(__FILE__), 'team_social_nonce');
        
        $linkedin = get_post_meta($post->ID, 'team_social_linkedin', true);
        $twitter = get_post_meta($post->ID, 'team_social_twitter', true);
        $github = get_post_meta($post->ID, 'team_social_github', true);
        $personal_website = get_post_meta($post->ID, 'team_personal_website', true);
        $email = get_post_meta($post->ID, 'team_email', true);
        
        ?>
        <p>
            <label for="team_email"><strong>Имейл:</strong></label><br>
            <input type="email" id="team_email" name="team_email" value="<?php echo esc_attr($email); ?>" class="widefat" />
        </p>
        <p>
            <label for="team_social_linkedin"><strong>LinkedIn:</strong></label><br>
            <input type="url" id="team_social_linkedin" name="team_social_linkedin" value="<?php echo esc_attr($linkedin); ?>" class="widefat" />
        </p>
        <p>
            <label for="team_social_twitter"><strong>Twitter/X:</strong></label><br>
            <input type="url" id="team_social_twitter" name="team_social_twitter" value="<?php echo esc_attr($twitter); ?>" class="widefat" />
        </p>
        <p>
            <label for="team_social_github"><strong>GitHub:</strong></label><br>
            <input type="url" id="team_social_github" name="team_social_github" value="<?php echo esc_attr($github); ?>" class="widefat" />
        </p>
        <p>
            <label for="team_personal_website"><strong>Личен уебсайт:</strong></label><br>
            <input type="url" id="team_personal_website" name="team_personal_website" value="<?php echo esc_attr($personal_website); ?>" class="widefat" />
        </p>
        <?php
    }
    
    public function save_team_meta($post_id) {
        // Verify nonces
        if ((!isset($_POST['team_details_nonce']) || !wp_verify_nonce($_POST['team_details_nonce'], basename(__FILE__))) &&
            (!isset($_POST['team_social_nonce']) || !wp_verify_nonce($_POST['team_social_nonce'], basename(__FILE__)))) {
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
        
        $meta_fields = array(
            'team_position',
            'team_expertise',
            'team_experience_years',
            'team_education',
            'team_certifications',
            'team_email',
            'team_social_linkedin',
            'team_social_twitter',
            'team_social_github',
            'team_personal_website'
        );
        
        foreach ($meta_fields as $field) {
            if (isset($_POST[$field])) {
                if ($field === 'team_email') {
                    update_post_meta($post_id, $field, sanitize_email($_POST[$field]));
                } elseif (strpos($field, 'social_') !== false || $field === 'team_personal_website') {
                    update_post_meta($post_id, $field, esc_url_raw($_POST[$field]));
                } else {
                    update_post_meta($post_id, $field, sanitize_textarea_field($_POST[$field]));
                }
            }
        }
    }
    
    public function team_columns($columns) {
        $columns = array(
            'cb' => $columns['cb'],
            'title' => 'Име',
            'team_position' => 'Позиция',
            'team_experience' => 'Опит',
            'menu_order' => 'Ред',
            'date' => 'Дата'
        );
        return $columns;
    }
    
    public function team_column_content($column, $post_id) {
        switch ($column) {
            case 'team_position':
                $position = get_post_meta($post_id, 'team_position', true);
                echo $position ? esc_html($position) : '—';
                break;
                
            case 'team_experience':
                $years = get_post_meta($post_id, 'team_experience_years', true);
                echo $years ? $years . ' год.' : '—';
                break;
                
            case 'menu_order':
                $order = get_post_meta($post_id, '_menu_order', true);
                echo $order ? intval($order) : '0';
                break;
        }
    }
    
    public function team_admin_order($query) {
        if (!is_admin()) {
            return;
        }
        
        if ($query->get('post_type') === 'pravda_team') {
            $query->set('orderby', 'menu_order');
            $query->set('order', 'ASC');
        }
    }
}

new Pravda_Team();