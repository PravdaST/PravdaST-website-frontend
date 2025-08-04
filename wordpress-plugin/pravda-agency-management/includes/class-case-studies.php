<?php

class Pravda_Case_Studies {
    
    public function __construct() {
        add_action('add_meta_boxes', array($this, 'add_case_study_meta_boxes'));
        add_action('save_post', array($this, 'save_case_study_meta'));
        add_filter('manage_pravda_case_study_posts_columns', array($this, 'case_study_columns'));
        add_action('manage_pravda_case_study_posts_custom_column', array($this, 'case_study_column_content'), 10, 2);
    }
    
    public function add_case_study_meta_boxes() {
        add_meta_box(
            'case_study_details',
            'Детайли за проекта',
            array($this, 'case_study_details_callback'),
            'pravda_case_study',
            'normal',
            'high'
        );
        
        add_meta_box(
            'case_study_metrics',
            'Резултати и метрики',
            array($this, 'case_study_metrics_callback'),
            'pravda_case_study',
            'normal',
            'high'
        );
    }
    
    public function case_study_details_callback($post) {
        wp_nonce_field(basename(__FILE__), 'case_study_details_nonce');
        
        $client = get_post_meta($post->ID, 'case_study_client', true);
        $industry = get_post_meta($post->ID, 'case_study_industry', true);
        $challenge = get_post_meta($post->ID, 'case_study_challenge', true);
        $solution = get_post_meta($post->ID, 'case_study_solution', true);
        $timeline = get_post_meta($post->ID, 'case_study_timeline', true);
        $services_used = get_post_meta($post->ID, 'case_study_services', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="case_study_client">Клиент</label></th>
                <td>
                    <input type="text" id="case_study_client" name="case_study_client" value="<?php echo esc_attr($client); ?>" class="regular-text" />
                    <p class="description">Име на клиента (може да бъде анонимизирано)</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_industry">Индустрия</label></th>
                <td>
                    <input type="text" id="case_study_industry" name="case_study_industry" value="<?php echo esc_attr($industry); ?>" class="regular-text" />
                    <p class="description">Например: E-commerce, SaaS, Производство</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_timeline">Времева рамка</label></th>
                <td>
                    <input type="text" id="case_study_timeline" name="case_study_timeline" value="<?php echo esc_attr($timeline); ?>" class="regular-text" />
                    <p class="description">Например: "6 месеца", "Януари - Юни 2024"</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_services">Използвани услуги</label></th>
                <td>
                    <textarea id="case_study_services" name="case_study_services" rows="3" cols="50" class="large-text"><?php echo esc_textarea($services_used); ?></textarea>
                    <p class="description">Списък с услуги, една на ред</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_challenge">Предизвикателство</label></th>
                <td>
                    <textarea id="case_study_challenge" name="case_study_challenge" rows="5" cols="50" class="large-text"><?php echo esc_textarea($challenge); ?></textarea>
                    <p class="description">Какъв беше проблемът който решихме</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_solution">Решение</label></th>
                <td>
                    <textarea id="case_study_solution" name="case_study_solution" rows="8" cols="50" class="large-text"><?php echo esc_textarea($solution); ?></textarea>
                    <p class="description">Как решихме проблема - подход и стратегия</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    public function case_study_metrics_callback($post) {
        wp_nonce_field(basename(__FILE__), 'case_study_metrics_nonce');
        
        $metrics = get_post_meta($post->ID, 'case_study_metrics', true);
        $before_after = get_post_meta($post->ID, 'case_study_before_after', true);
        $testimonial = get_post_meta($post->ID, 'case_study_testimonial', true);
        $testimonial_author = get_post_meta($post->ID, 'case_study_testimonial_author', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="case_study_metrics">Ключови метрики</label></th>
                <td>
                    <textarea id="case_study_metrics" name="case_study_metrics" rows="6" cols="50" class="large-text"><?php echo esc_textarea($metrics); ?></textarea>
                    <p class="description">Формат: Метрика: Стойност<br>Например:<br>Organic traffic: +150%<br>Leads: +85%<br>ROI: 280%</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_before_after">Преди/След</label></th>
                <td>
                    <textarea id="case_study_before_after" name="case_study_before_after" rows="5" cols="50" class="large-text"><?php echo esc_textarea($before_after); ?></textarea>
                    <p class="description">Сравнение преди и след проекта</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_testimonial">Отзив от клиента</label></th>
                <td>
                    <textarea id="case_study_testimonial" name="case_study_testimonial" rows="4" cols="50" class="large-text"><?php echo esc_textarea($testimonial); ?></textarea>
                    <p class="description">Цитат от клиента за проекта</p>
                </td>
            </tr>
            <tr>
                <th><label for="case_study_testimonial_author">Автор на отзива</label></th>
                <td>
                    <input type="text" id="case_study_testimonial_author" name="case_study_testimonial_author" value="<?php echo esc_attr($testimonial_author); ?>" class="regular-text" />
                    <p class="description">Име и позиция на човека дал отзива</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    public function save_case_study_meta($post_id) {
        // Verify nonces
        if ((!isset($_POST['case_study_details_nonce']) || !wp_verify_nonce($_POST['case_study_details_nonce'], basename(__FILE__))) &&
            (!isset($_POST['case_study_metrics_nonce']) || !wp_verify_nonce($_POST['case_study_metrics_nonce'], basename(__FILE__)))) {
            return;
        }
        
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        $meta_fields = array(
            'case_study_client',
            'case_study_industry',
            'case_study_challenge',
            'case_study_solution',
            'case_study_timeline',
            'case_study_services',
            'case_study_metrics',
            'case_study_before_after',
            'case_study_testimonial',
            'case_study_testimonial_author'
        );
        
        foreach ($meta_fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, $field, sanitize_textarea_field($_POST[$field]));
            }
        }
    }
    
    public function case_study_columns($columns) {
        $columns = array(
            'cb' => $columns['cb'],
            'title' => 'Case Study',
            'case_study_client' => 'Клиент',
            'case_study_industry' => 'Индустрия',
            'case_study_timeline' => 'Период',
            'date' => 'Дата'
        );
        return $columns;
    }
    
    public function case_study_column_content($column, $post_id) {
        switch ($column) {
            case 'case_study_client':
                $client = get_post_meta($post_id, 'case_study_client', true);
                echo $client ? esc_html($client) : '—';
                break;
                
            case 'case_study_industry':
                $industry = get_post_meta($post_id, 'case_study_industry', true);
                echo $industry ? esc_html($industry) : '—';
                break;
                
            case 'case_study_timeline':
                $timeline = get_post_meta($post_id, 'case_study_timeline', true);
                echo $timeline ? esc_html($timeline) : '—';
                break;
        }
    }
}

new Pravda_Case_Studies();