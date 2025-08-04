<?php

class Pravda_REST_API {
    
    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
    }
    
    public function register_routes() {
        // Services API
        register_rest_route('pravda/v1', '/services', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_services'),
            'permission_callback' => '__return_true',
        ));
        
        // FAQ API
        register_rest_route('pravda/v1', '/faq', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_faq'),
            'permission_callback' => '__return_true',
        ));
        
        // Case Studies API
        register_rest_route('pravda/v1', '/case-studies', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_case_studies'),
            'permission_callback' => '__return_true',
        ));
        
        // Team API
        register_rest_route('pravda/v1', '/team', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_team'),
            'permission_callback' => '__return_true',
        ));
        
        // Resources API
        register_rest_route('pravda/v1', '/resources', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_resources'),
            'permission_callback' => '__return_true',
        ));
        
        // News API
        register_rest_route('pravda/v1', '/news', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_news'),
            'permission_callback' => '__return_true',
        ));
        
        // Testimonials API
        register_rest_route('pravda/v1', '/testimonials', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_testimonials'),
            'permission_callback' => '__return_true',
        ));
        
        // Site Settings API
        register_rest_route('pravda/v1', '/settings', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_settings'),
            'permission_callback' => '__return_true',
        ));
        
        // Single service by slug
        register_rest_route('pravda/v1', '/services/(?P<slug>[a-zA-Z0-9-]+)', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_service_by_slug'),
            'permission_callback' => '__return_true',
        ));
        
        // Single case study by slug
        register_rest_route('pravda/v1', '/case-studies/(?P<slug>[a-zA-Z0-9-]+)', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_case_study_by_slug'),
            'permission_callback' => '__return_true',
        ));
    }
    
    public function get_services($request) {
        $args = array(
            'post_type' => 'pravda_service',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'meta_query' => array(),
        );
        
        // Filter by category if provided
        if ($request->get_param('category')) {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'service_category',
                    'field' => 'slug',
                    'terms' => $request->get_param('category'),
                ),
            );
        }
        
        $posts = get_posts($args);
        $services = array();
        
        foreach ($posts as $post) {
            $services[] = $this->format_service($post);
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $services,
            'total' => count($services)
        ), 200);
    }
    
    public function get_service_by_slug($request) {
        $slug = $request->get_param('slug');
        
        $post = get_posts(array(
            'name' => $slug,
            'post_type' => 'pravda_service',
            'post_status' => 'publish',
            'numberposts' => 1
        ));
        
        if (empty($post)) {
            return new WP_REST_Response(array(
                'success' => false,
                'error' => 'Service not found'
            ), 404);
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $this->format_service($post[0])
        ), 200);
    }
    
    private function format_service($post) {
        $categories = get_the_terms($post->ID, 'service_category');
        
        return array(
            'id' => $post->ID,
            'title' => $post->post_title,
            'slug' => $post->post_name,
            'content' => $post->post_content,
            'excerpt' => $post->post_excerpt,
            'featured_image' => get_the_post_thumbnail_url($post->ID, 'full'),
            'price' => get_post_meta($post->ID, 'service_price', true),
            'features' => json_decode(get_post_meta($post->ID, 'service_features', true), true),
            'duration' => get_post_meta($post->ID, 'service_duration', true),
            'categories' => $categories ? array_map(function($cat) {
                return array('name' => $cat->name, 'slug' => $cat->slug);
            }, $categories) : array(),
            'date_created' => $post->post_date,
            'date_modified' => $post->post_modified,
        );
    }
    
    public function get_faq($request) {
        $args = array(
            'post_type' => 'pravda_faq',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'menu_order',
            'order' => 'ASC'
        );
        
        // Filter by category if provided
        if ($request->get_param('category')) {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'faq_category',
                    'field' => 'slug',
                    'terms' => $request->get_param('category'),
                ),
            );
        }
        
        $posts = get_posts($args);
        $faqs = array();
        
        foreach ($posts as $post) {
            $categories = get_the_terms($post->ID, 'faq_category');
            
            $faqs[] = array(
                'id' => $post->ID,
                'question' => $post->post_title,
                'answer' => $post->post_content,
                'category' => $categories ? $categories[0]->name : 'Общи въпроси',
                'category_slug' => $categories ? $categories[0]->slug : 'general',
                'order' => get_post_meta($post->ID, '_menu_order', true) ?: 0,
            );
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $faqs,
            'total' => count($faqs)
        ), 200);
    }
    
    public function get_case_studies($request) {
        $args = array(
            'post_type' => 'pravda_case_study',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: -1,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        $posts = get_posts($args);
        $case_studies = array();
        
        foreach ($posts as $post) {
            $case_studies[] = array(
                'id' => $post->ID,
                'title' => $post->post_title,
                'slug' => $post->post_name,
                'content' => $post->post_content,
                'excerpt' => $post->post_excerpt,
                'featured_image' => get_the_post_thumbnail_url($post->ID, 'full'),
                'client' => get_post_meta($post->ID, 'case_study_client', true),
                'results' => json_decode(get_post_meta($post->ID, 'case_study_results', true), true),
                'metrics' => json_decode(get_post_meta($post->ID, 'case_study_metrics', true), true),
                'date_created' => $post->post_date,
            );
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $case_studies,
            'total' => count($case_studies)
        ), 200);
    }
    
    public function get_case_study_by_slug($request) {
        $slug = $request->get_param('slug');
        
        $post = get_posts(array(
            'name' => $slug,
            'post_type' => 'pravda_case_study',
            'post_status' => 'publish',
            'numberposts' => 1
        ));
        
        if (empty($post)) {
            return new WP_REST_Response(array(
                'success' => false,
                'error' => 'Case study not found'
            ), 404);
        }
        
        $post = $post[0];
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => array(
                'id' => $post->ID,
                'title' => $post->post_title,
                'slug' => $post->post_name,
                'content' => $post->post_content,
                'excerpt' => $post->post_excerpt,
                'featured_image' => get_the_post_thumbnail_url($post->ID, 'full'),
                'client' => get_post_meta($post->ID, 'case_study_client', true),
                'results' => json_decode(get_post_meta($post->ID, 'case_study_results', true), true),
                'metrics' => json_decode(get_post_meta($post->ID, 'case_study_metrics', true), true),
                'date_created' => $post->post_date,
            )
        ), 200);
    }
    
    public function get_team($request) {
        $args = array(
            'post_type' => 'pravda_team',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'menu_order',
            'order' => 'ASC'
        );
        
        $posts = get_posts($args);
        $team = array();
        
        foreach ($posts as $post) {
            $team[] = array(
                'id' => $post->ID,
                'name' => $post->post_title,
                'bio' => $post->post_content,
                'photo' => get_the_post_thumbnail_url($post->ID, 'full'),
                'position' => get_post_meta($post->ID, 'team_position', true),
                'linkedin' => get_post_meta($post->ID, 'team_social_linkedin', true),
                'twitter' => get_post_meta($post->ID, 'team_social_twitter', true),
                'order' => get_post_meta($post->ID, '_menu_order', true) ?: 0,
            );
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $team,
            'total' => count($team)
        ), 200);
    }
    
    public function get_resources($request) {
        $args = array(
            'post_type' => 'pravda_resource',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: -1,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        // Filter by type if provided
        if ($request->get_param('type')) {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'resource_type',
                    'field' => 'slug',
                    'terms' => $request->get_param('type'),
                ),
            );
        }
        
        $posts = get_posts($args);
        $resources = array();
        
        foreach ($posts as $post) {
            $types = get_the_terms($post->ID, 'resource_type');
            
            $resources[] = array(
                'id' => $post->ID,
                'title' => $post->post_title,
                'slug' => $post->post_name,
                'description' => $post->post_content,
                'excerpt' => $post->post_excerpt,
                'featured_image' => get_the_post_thumbnail_url($post->ID, 'full'),
                'file_url' => get_post_meta($post->ID, 'resource_file_url', true),
                'file_size' => get_post_meta($post->ID, 'resource_file_size', true),
                'type' => $types ? $types[0]->name : 'General',
                'type_slug' => $types ? $types[0]->slug : 'general',
                'date_created' => $post->post_date,
            );
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $resources,
            'total' => count($resources)
        ), 200);
    }
    
    public function get_news($request) {
        $args = array(
            'post_type' => 'pravda_news',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: 10,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        $posts = get_posts($args);
        $news = array();
        
        foreach ($posts as $post) {
            $news[] = array(
                'id' => $post->ID,
                'title' => $post->post_title,
                'slug' => $post->post_name,
                'content' => $post->post_content,
                'excerpt' => $post->post_excerpt,
                'featured_image' => get_the_post_thumbnail_url($post->ID, 'full'),
                'date_created' => $post->post_date,
                'date_modified' => $post->post_modified,
            );
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $news,
            'total' => count($news)
        ), 200);
    }
    
    public function get_testimonials($request) {
        $args = array(
            'post_type' => 'pravda_testimonial',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: -1,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        // Filter by rating if provided
        if ($request->get_param('min_rating')) {
            $args['meta_query'] = array(
                array(
                    'key' => 'testimonial_rating',
                    'value' => (int)$request->get_param('min_rating'),
                    'compare' => '>='
                )
            );
        }
        
        $posts = get_posts($args);
        $testimonials = array();
        
        foreach ($posts as $post) {
            $testimonials[] = array(
                'id' => $post->ID,
                'content' => $post->post_content,
                'client_name' => $post->post_title,
                'client_photo' => get_the_post_thumbnail_url($post->ID, 'full'),
                'company' => get_post_meta($post->ID, 'testimonial_company', true),
                'position' => get_post_meta($post->ID, 'testimonial_position', true),
                'rating' => (int)get_post_meta($post->ID, 'testimonial_rating', true),
                'date_created' => $post->post_date,
            );
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $testimonials,
            'total' => count($testimonials)
        ), 200);
    }
    
    public function get_settings($request) {
        $settings = array(
            'company_name' => get_option('pravda_company_name', 'Pravda Agency'),
            'company_address' => get_option('pravda_company_address', 'ул. Дебър №58, Варна, България'),
            'company_phone' => get_option('pravda_company_phone', '+359 879 282 299'),
            'company_email' => get_option('pravda_company_email', 'contact@pravdast.agency'),
            'social_linkedin' => get_option('pravda_social_linkedin', ''),
            'social_facebook' => get_option('pravda_social_facebook', ''),
            'social_twitter' => get_option('pravda_social_twitter', ''),
            'social_instagram' => get_option('pravda_social_instagram', ''),
            'google_analytics_id' => get_option('pravda_google_analytics_id', ''),
            'facebook_pixel_id' => get_option('pravda_facebook_pixel_id', ''),
            'klaviyo_api_key' => get_option('pravda_klaviyo_api_key', ''),
            'maintenance_mode' => get_option('pravda_maintenance_mode', false),
            'promotional_banner' => array(
                'enabled' => get_option('pravda_banner_enabled', false),
                'text' => get_option('pravda_banner_text', ''),
                'link' => get_option('pravda_banner_link', ''),
                'background_color' => get_option('pravda_banner_bg_color', '#ECB629'),
            ),
        );
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $settings
        ), 200);
    }
}