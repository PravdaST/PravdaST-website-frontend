<?php
/**
 * Plugin Name: Pravda Agency Management
 * Description: Comprehensive management system for Pravda Agency website content including Services, FAQ, Case Studies, Team, Resources, News, Testimonials and Site Settings
 * Version: 1.0.0
 * Author: Pravda Agency
 * Text Domain: pravda-agency
 * Domain Path: /languages
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('PRAVDA_PLUGIN_VERSION', '1.0.0');
define('PRAVDA_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('PRAVDA_PLUGIN_URL', plugin_dir_url(__FILE__));

// Main plugin class
class PravdaAgencyManagement {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
    }
    
    public function init() {
        // Load plugin components
        $this->load_includes();
        $this->register_post_types();
        $this->register_taxonomies();
        $this->register_meta_fields();
        $this->init_rest_api();
        
        // Add admin hooks
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));
    }
    
    private function load_includes() {
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-services.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-faq.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-case-studies.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-team.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-resources.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-news.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-testimonials.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-site-settings.php';
        require_once PRAVDA_PLUGIN_PATH . 'includes/class-rest-api.php';
    }
    
    public function register_post_types() {
        // Services
        register_post_type('pravda_service', array(
            'label' => 'Услуги',
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'services',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'menu_icon' => 'dashicons-admin-tools',
            'labels' => array(
                'name' => 'Услуги',
                'singular_name' => 'Услуга',
                'add_new' => 'Добави услуга',
                'add_new_item' => 'Добави нова услуга',
                'edit_item' => 'Редактирай услуга',
                'new_item' => 'Нова услуга',
                'view_item' => 'Прегледай услуга',
                'search_items' => 'Търси услуги',
                'not_found' => 'Няма намерени услуги',
            ),
        ));
        
        // FAQ
        register_post_type('pravda_faq', array(
            'label' => 'FAQ',
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'faq',
            'supports' => array('title', 'editor', 'custom-fields'),
            'menu_icon' => 'dashicons-editor-help',
            'labels' => array(
                'name' => 'FAQ Въпроси',
                'singular_name' => 'FAQ Въпрос',
                'add_new' => 'Добави въпрос',
                'add_new_item' => 'Добави нов въпрос',
                'edit_item' => 'Редактирай въпрос',
            ),
        ));
        
        // Case Studies
        register_post_type('pravda_case_study', array(
            'label' => 'Case Studies',
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'case-studies',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'menu_icon' => 'dashicons-chart-line',
            'labels' => array(
                'name' => 'Case Studies',
                'singular_name' => 'Case Study',
                'add_new' => 'Добави case study',
                'add_new_item' => 'Добави нов case study',
                'edit_item' => 'Редактирай case study',
            ),
        ));
        
        // Team Members
        register_post_type('pravda_team', array(
            'label' => 'Екип',
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'team',
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-groups',
            'labels' => array(
                'name' => 'Членове на екипа',
                'singular_name' => 'Член на екипа',
                'add_new' => 'Добави член',
                'add_new_item' => 'Добави нов член на екипа',
                'edit_item' => 'Редактирай член на екипа',
            ),
        ));
        
        // Resources
        register_post_type('pravda_resource', array(
            'label' => 'Ресурси',
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'resources',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'menu_icon' => 'dashicons-download',
            'labels' => array(
                'name' => 'Ресурси',
                'singular_name' => 'Ресурс',
                'add_new' => 'Добави ресурс',
                'add_new_item' => 'Добави нов ресурс',
                'edit_item' => 'Редактирай ресурс',
            ),
        ));
        
        // News/Updates
        register_post_type('pravda_news', array(
            'label' => 'Новини',
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'news',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'menu_icon' => 'dashicons-megaphone',
            'labels' => array(
                'name' => 'Новини',
                'singular_name' => 'Новина',
                'add_new' => 'Добави новина',
                'add_new_item' => 'Добави нова новина',
                'edit_item' => 'Редактирай новина',
            ),
        ));
        
        // Testimonials
        register_post_type('pravda_testimonial', array(
            'label' => 'Отзиви',
            'public' => true,
            'show_in_rest' => true,
            'rest_base' => 'testimonials',
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-format-quote',
            'labels' => array(
                'name' => 'Отзиви',
                'singular_name' => 'Отзив',
                'add_new' => 'Добави отзив',
                'add_new_item' => 'Добави нов отзив',
                'edit_item' => 'Редактирай отзив',
            ),
        ));
    }
    
    public function register_taxonomies() {
        // Service Categories
        register_taxonomy('service_category', 'pravda_service', array(
            'hierarchical' => true,
            'label' => 'Категории услуги',
            'show_in_rest' => true,
            'rest_base' => 'service-categories',
        ));
        
        // FAQ Categories
        register_taxonomy('faq_category', 'pravda_faq', array(
            'hierarchical' => true,
            'label' => 'FAQ Категории',
            'show_in_rest' => true,
            'rest_base' => 'faq-categories',
        ));
        
        // Resource Types
        register_taxonomy('resource_type', 'pravda_resource', array(
            'hierarchical' => true,
            'label' => 'Типове ресурси',
            'show_in_rest' => true,
            'rest_base' => 'resource-types',
        ));
    }
    
    public function register_meta_fields() {
        // Service meta fields
        register_meta('post', 'service_price', array(
            'object_subtype' => 'pravda_service',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'service_features', array(
            'object_subtype' => 'pravda_service',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'service_duration', array(
            'object_subtype' => 'pravda_service',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        // Team member meta fields
        register_meta('post', 'team_position', array(
            'object_subtype' => 'pravda_team',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'team_social_linkedin', array(
            'object_subtype' => 'pravda_team',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'team_social_twitter', array(
            'object_subtype' => 'pravda_team',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        // Case study meta fields
        register_meta('post', 'case_study_client', array(
            'object_subtype' => 'pravda_case_study',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'case_study_results', array(
            'object_subtype' => 'pravda_case_study',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'case_study_metrics', array(
            'object_subtype' => 'pravda_case_study',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        // Testimonial meta fields
        register_meta('post', 'testimonial_rating', array(
            'object_subtype' => 'pravda_testimonial',
            'type' => 'number',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'testimonial_company', array(
            'object_subtype' => 'pravda_testimonial',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'testimonial_position', array(
            'object_subtype' => 'pravda_testimonial',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        // Resource meta fields
        register_meta('post', 'resource_file_url', array(
            'object_subtype' => 'pravda_resource',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
        
        register_meta('post', 'resource_file_size', array(
            'object_subtype' => 'pravda_resource',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true,
        ));
    }
    
    public function init_rest_api() {
        new Pravda_REST_API();
    }
    
    public function add_admin_menu() {
        add_menu_page(
            'Pravda Agency Settings',
            'Pravda Settings',
            'manage_options',
            'pravda-settings',
            array($this, 'admin_page'),
            'dashicons-admin-generic',
            30
        );
        
        add_submenu_page(
            'pravda-settings',
            'Site Settings',
            'Site Settings',
            'manage_options',
            'pravda-site-settings',
            array($this, 'site_settings_page')
        );
    }
    
    public function admin_page() {
        include PRAVDA_PLUGIN_PATH . 'admin/admin-page.php';
    }
    
    public function site_settings_page() {
        include PRAVDA_PLUGIN_PATH . 'admin/site-settings.php';
    }
    
    public function admin_scripts($hook) {
        if (strpos($hook, 'pravda') !== false) {
            wp_enqueue_style('pravda-admin', PRAVDA_PLUGIN_URL . 'assets/admin.css', array(), PRAVDA_PLUGIN_VERSION);
            wp_enqueue_script('pravda-admin', PRAVDA_PLUGIN_URL . 'assets/admin.js', array('jquery'), PRAVDA_PLUGIN_VERSION, true);
        }
    }
    
    public function activate() {
        $this->register_post_types();
        $this->register_taxonomies();
        flush_rewrite_rules();
        
        // Create default categories
        $this->create_default_categories();
    }
    
    private function create_default_categories() {
        // FAQ Categories
        $faq_categories = array(
            'Общи въпроси',
            'SEO Struktor™',
            'Trendlab™', 
            'Clickstarter™',
            'Clientomat™',
            'Ценообразуване',
            'Процес',
            'Поддръжка'
        );
        
        foreach ($faq_categories as $category) {
            if (!term_exists($category, 'faq_category')) {
                wp_insert_term($category, 'faq_category');
            }
        }
        
        // Service Categories
        $service_categories = array(
            'Основни системи',
            'Допълнителни услуги',
            'Консултации'
        );
        
        foreach ($service_categories as $category) {
            if (!term_exists($category, 'service_category')) {
                wp_insert_term($category, 'service_category');
            }
        }
        
        // Resource Types
        $resource_types = array(
            'PDF Guides',
            'Калкулатори', 
            'Templates',
            'Whitepapers',
            'Checklists'
        );
        
        foreach ($resource_types as $type) {
            if (!term_exists($type, 'resource_type')) {
                wp_insert_term($type, 'resource_type');
            }
        }
    }
    
    public function deactivate() {
        flush_rewrite_rules();
    }
}

// Initialize the plugin
new PravdaAgencyManagement();