<?php

class Pravda_Site_Settings {
    
    public function __construct() {
        add_action('admin_init', array($this, 'register_settings'));
        add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));
    }
    
    public function register_settings() {
        // Company Information
        register_setting('pravda_settings', 'pravda_company_name');
        register_setting('pravda_settings', 'pravda_company_address');
        register_setting('pravda_settings', 'pravda_company_phone');
        register_setting('pravda_settings', 'pravda_company_email');
        
        // Social Media
        register_setting('pravda_settings', 'pravda_social_linkedin');
        register_setting('pravda_settings', 'pravda_social_facebook');
        register_setting('pravda_settings', 'pravda_social_twitter');
        register_setting('pravda_settings', 'pravda_social_instagram');
        
        // Analytics & Tracking
        register_setting('pravda_settings', 'pravda_google_analytics_id');
        register_setting('pravda_settings', 'pravda_facebook_pixel_id');
        register_setting('pravda_settings', 'pravda_klaviyo_api_key');
        register_setting('pravda_settings', 'pravda_microsoft_clarity_id');
        
        // Advanced Settings
        register_setting('pravda_settings', 'pravda_maintenance_mode');
        register_setting('pravda_settings', 'pravda_banner_enabled');
        register_setting('pravda_settings', 'pravda_banner_text');
        register_setting('pravda_settings', 'pravda_banner_link');
        register_setting('pravda_settings', 'pravda_banner_bg_color');
        
        // SEO Settings
        register_setting('pravda_settings', 'pravda_seo_title_suffix');
        register_setting('pravda_settings', 'pravda_seo_meta_description');
        register_setting('pravda_settings', 'pravda_seo_keywords');
        register_setting('pravda_settings', 'pravda_og_image_url');
        
        // Contact Settings
        register_setting('pravda_settings', 'pravda_contact_form_recipients');
        register_setting('pravda_settings', 'pravda_contact_form_subject');
        register_setting('pravda_settings', 'pravda_contact_auto_reply');
        
        // Business Hours
        register_setting('pravda_settings', 'pravda_business_hours');
        register_setting('pravda_settings', 'pravda_timezone');
        
        // API Keys for integrations
        register_setting('pravda_settings', 'pravda_hubspot_api_key');
        register_setting('pravda_settings', 'pravda_pipedrive_api_key');
        register_setting('pravda_settings', 'pravda_resend_api_key');
    }
    
    public function get_default_settings() {
        return array(
            'company_name' => 'Pravda Agency',
            'company_address' => 'ул. Дебър №58, Варна, България',
            'company_phone' => '+359 879 282 299',
            'company_email' => 'contact@pravdast.agency',
            'social_linkedin' => '',
            'social_facebook' => '',
            'social_twitter' => '',
            'social_instagram' => '',
            'google_analytics_id' => '',
            'facebook_pixel_id' => '',
            'klaviyo_api_key' => '',
            'microsoft_clarity_id' => '',
            'maintenance_mode' => false,
            'banner_enabled' => false,
            'banner_text' => '',
            'banner_link' => '',
            'banner_bg_color' => '#ECB629',
            'seo_title_suffix' => ' - Pravda Agency',
            'seo_meta_description' => 'Pravda Agency - Бизнес инженерство за предсказуем растеж в България. SEO, автоматизация и дигитален маркетинг системи.',
            'seo_keywords' => 'бизнес инженерство, SEO, дигитален маркетинг, автоматизация, растеж, България',
            'og_image_url' => '',
            'contact_form_recipients' => 'contact@pravdast.agency',
            'contact_form_subject' => 'Ново запитване от сайта',
            'contact_auto_reply' => true,
            'business_hours' => json_encode(array(
                'monday' => array('open' => '09:00', 'close' => '18:00'),
                'tuesday' => array('open' => '09:00', 'close' => '18:00'),
                'wednesday' => array('open' => '09:00', 'close' => '18:00'),
                'thursday' => array('open' => '09:00', 'close' => '18:00'),
                'friday' => array('open' => '09:00', 'close' => '18:00'),
                'saturday' => array('open' => '', 'close' => ''),
                'sunday' => array('open' => '', 'close' => '')
            )),
            'timezone' => 'Europe/Sofia',
            'hubspot_api_key' => '',
            'pipedrive_api_key' => '',
            'resend_api_key' => ''
        );
    }
    
    public static function get_setting($key, $default = '') {
        $option_key = 'pravda_' . $key;
        return get_option($option_key, $default);
    }
    
    public static function update_setting($key, $value) {
        $option_key = 'pravda_' . $key;
        return update_option($option_key, $value);
    }
    
    public static function get_business_hours() {
        $hours = get_option('pravda_business_hours', '');
        if ($hours) {
            return json_decode($hours, true);
        }
        
        // Default business hours
        return array(
            'monday' => array('open' => '09:00', 'close' => '18:00'),
            'tuesday' => array('open' => '09:00', 'close' => '18:00'),
            'wednesday' => array('open' => '09:00', 'close' => '18:00'),
            'thursday' => array('open' => '09:00', 'close' => '18:00'),
            'friday' => array('open' => '09:00', 'close' => '18:00'),
            'saturday' => array('open' => '', 'close' => ''),
            'sunday' => array('open' => '', 'close' => '')
        );
    }
    
    public static function is_business_hours() {
        $hours = self::get_business_hours();
        $timezone = get_option('pravda_timezone', 'Europe/Sofia');
        
        try {
            $now = new DateTime('now', new DateTimeZone($timezone));
            $day = strtolower($now->format('l'));
            $current_time = $now->format('H:i');
            
            if (isset($hours[$day]) && $hours[$day]['open'] && $hours[$day]['close']) {
                return $current_time >= $hours[$day]['open'] && $current_time <= $hours[$day]['close'];
            }
            
            return false;
        } catch (Exception $e) {
            return false;
        }
    }
    
    public static function get_company_info() {
        return array(
            'name' => self::get_setting('company_name', 'Pravda Agency'),
            'address' => self::get_setting('company_address', 'ул. Дебър №58, Варна, България'),
            'phone' => self::get_setting('company_phone', '+359 879 282 299'),
            'email' => self::get_setting('company_email', 'contact@pravdast.agency'),
        );
    }
    
    public static function get_social_links() {
        return array(
            'linkedin' => self::get_setting('social_linkedin', ''),
            'facebook' => self::get_setting('social_facebook', ''),
            'twitter' => self::get_setting('social_twitter', ''),
            'instagram' => self::get_setting('social_instagram', ''),
        );
    }
    
    public static function get_tracking_codes() {
        return array(
            'google_analytics' => self::get_setting('google_analytics_id', ''),
            'facebook_pixel' => self::get_setting('facebook_pixel_id', ''),
            'klaviyo' => self::get_setting('klaviyo_api_key', ''),
            'microsoft_clarity' => self::get_setting('microsoft_clarity_id', ''),
        );
    }
    
    public function admin_scripts($hook) {
        if (strpos($hook, 'pravda-settings') !== false) {
            wp_enqueue_script('pravda-settings', PRAVDA_PLUGIN_URL . 'assets/settings.js', array('jquery'), PRAVDA_PLUGIN_VERSION, true);
            wp_enqueue_style('pravda-settings', PRAVDA_PLUGIN_URL . 'assets/settings.css', array(), PRAVDA_PLUGIN_VERSION);
        }
    }
    
    // Helper method to export all settings for API
    public static function export_all_settings() {
        $settings = array();
        $option_keys = array(
            'company_name', 'company_address', 'company_phone', 'company_email',
            'social_linkedin', 'social_facebook', 'social_twitter', 'social_instagram',
            'google_analytics_id', 'facebook_pixel_id', 'klaviyo_api_key', 'microsoft_clarity_id',
            'maintenance_mode', 'banner_enabled', 'banner_text', 'banner_link', 'banner_bg_color',
            'seo_title_suffix', 'seo_meta_description', 'seo_keywords', 'og_image_url',
            'contact_form_recipients', 'contact_form_subject', 'contact_auto_reply',
            'business_hours', 'timezone'
        );
        
        foreach ($option_keys as $key) {
            $settings[$key] = self::get_setting($key, '');
        }
        
        // Parse business hours
        if ($settings['business_hours']) {
            $settings['business_hours'] = json_decode($settings['business_hours'], true);
        }
        
        // Add computed values
        $settings['is_business_hours'] = self::is_business_hours();
        $settings['company_info'] = self::get_company_info();
        $settings['social_links'] = self::get_social_links();
        $settings['tracking_codes'] = self::get_tracking_codes();
        
        return $settings;
    }
}

new Pravda_Site_Settings();