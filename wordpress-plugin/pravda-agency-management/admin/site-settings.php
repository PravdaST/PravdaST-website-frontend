<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Handle form submission
if (isset($_POST['submit'])) {
    // Verify nonce
    if (!wp_verify_nonce($_POST['pravda_settings_nonce'], 'pravda_settings_action')) {
        wp_die('Security check failed');
    }
    
    // Save settings
    $settings = array(
        'pravda_company_name',
        'pravda_company_address', 
        'pravda_company_phone',
        'pravda_company_email',
        'pravda_social_linkedin',
        'pravda_social_facebook',
        'pravda_social_twitter',
        'pravda_social_instagram',
        'pravda_google_analytics_id',
        'pravda_facebook_pixel_id',
        'pravda_klaviyo_api_key',
        'pravda_maintenance_mode',
        'pravda_banner_enabled',
        'pravda_banner_text',
        'pravda_banner_link',
        'pravda_banner_bg_color'
    );
    
    foreach ($settings as $setting) {
        if (isset($_POST[$setting])) {
            update_option($setting, sanitize_text_field($_POST[$setting]));
        }
    }
    
    echo '<div class="notice notice-success"><p>Настройките са запазени успешно!</p></div>';
}

// Get current settings
$company_name = get_option('pravda_company_name', 'Pravda Agency');
$company_address = get_option('pravda_company_address', 'ул. Дебър №58, Варна, България');
$company_phone = get_option('pravda_company_phone', '+359 879 282 299');
$company_email = get_option('pravda_company_email', 'contact@pravdast.agency');
$social_linkedin = get_option('pravda_social_linkedin', '');
$social_facebook = get_option('pravda_social_facebook', '');
$social_twitter = get_option('pravda_social_twitter', '');
$social_instagram = get_option('pravda_social_instagram', '');
$google_analytics_id = get_option('pravda_google_analytics_id', '');
$facebook_pixel_id = get_option('pravda_facebook_pixel_id', '');
$klaviyo_api_key = get_option('pravda_klaviyo_api_key', '');
$maintenance_mode = get_option('pravda_maintenance_mode', false);
$banner_enabled = get_option('pravda_banner_enabled', false);
$banner_text = get_option('pravda_banner_text', '');
$banner_link = get_option('pravda_banner_link', '');
$banner_bg_color = get_option('pravda_banner_bg_color', '#ECB629');
?>

<div class="wrap">
    <h1>Настройки на сайта</h1>
    
    <form method="post" action="">
        <?php wp_nonce_field('pravda_settings_action', 'pravda_settings_nonce'); ?>
        
        <div class="pravda-settings-tabs">
            <nav class="nav-tab-wrapper">
                <a href="#company" class="nav-tab nav-tab-active">Информация за компанията</a>
                <a href="#social" class="nav-tab">Социални мрежи</a>
                <a href="#analytics" class="nav-tab">Analytics & Tracking</a>
                <a href="#advanced" class="nav-tab">Разширени настройки</a>
            </nav>
            
            <!-- Company Information Tab -->
            <div id="company" class="tab-content active">
                <h2>Основна информация за компанията</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">Име на компанията</th>
                        <td>
                            <input type="text" name="pravda_company_name" value="<?php echo esc_attr($company_name); ?>" class="regular-text" />
                            <p class="description">Официалното име на компанията</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Адрес</th>
                        <td>
                            <textarea name="pravda_company_address" rows="3" cols="50" class="large-text"><?php echo esc_textarea($company_address); ?></textarea>
                            <p class="description">Пълен адрес на офиса</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Телефон</th>
                        <td>
                            <input type="text" name="pravda_company_phone" value="<?php echo esc_attr($company_phone); ?>" class="regular-text" />
                            <p class="description">Основен телефон за контакти</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Имейл</th>
                        <td>
                            <input type="email" name="pravda_company_email" value="<?php echo esc_attr($company_email); ?>" class="regular-text" />
                            <p class="description">Основен имейл за контакти</p>
                        </td>
                    </tr>
                </table>
            </div>
            
            <!-- Social Media Tab -->
            <div id="social" class="tab-content">
                <h2>Социални мрежи</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">LinkedIn</th>
                        <td>
                            <input type="url" name="pravda_social_linkedin" value="<?php echo esc_attr($social_linkedin); ?>" class="regular-text" />
                            <p class="description">Пълен URL към LinkedIn профила</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Facebook</th>
                        <td>
                            <input type="url" name="pravda_social_facebook" value="<?php echo esc_attr($social_facebook); ?>" class="regular-text" />
                            <p class="description">Пълен URL към Facebook страницата</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Twitter</th>
                        <td>
                            <input type="url" name="pravda_social_twitter" value="<?php echo esc_attr($social_twitter); ?>" class="regular-text" />
                            <p class="description">Пълен URL към Twitter профила</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Instagram</th>
                        <td>
                            <input type="url" name="pravda_social_instagram" value="<?php echo esc_attr($social_instagram); ?>" class="regular-text" />
                            <p class="description">Пълен URL към Instagram профила</p>
                        </td>
                    </tr>
                </table>
            </div>
            
            <!-- Analytics Tab -->
            <div id="analytics" class="tab-content">
                <h2>Analytics и проследяване</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">Google Analytics ID</th>
                        <td>
                            <input type="text" name="pravda_google_analytics_id" value="<?php echo esc_attr($google_analytics_id); ?>" class="regular-text" />
                            <p class="description">Например: G-XXXXXXXXXX</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Facebook Pixel ID</th>
                        <td>
                            <input type="text" name="pravda_facebook_pixel_id" value="<?php echo esc_attr($facebook_pixel_id); ?>" class="regular-text" />
                            <p class="description">ID на Facebook Pixel за реклами</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Klaviyo API Key</th>
                        <td>
                            <input type="text" name="pravda_klaviyo_api_key" value="<?php echo esc_attr($klaviyo_api_key); ?>" class="regular-text" />
                            <p class="description">Public API ключ за Klaviyo интеграция</p>
                        </td>
                    </tr>
                </table>
            </div>
            
            <!-- Advanced Tab -->
            <div id="advanced" class="tab-content">
                <h2>Разширени настройки</h2>
                <table class="form-table">
                    <tr>
                        <th scope="row">Maintenance режим</th>
                        <td>
                            <label>
                                <input type="checkbox" name="pravda_maintenance_mode" value="1" <?php checked($maintenance_mode, '1'); ?> />
                                Включи maintenance режим
                            </label>
                            <p class="description">Ако е активиран, сайтът ще показва maintenance страница</p>
                        </td>
                    </tr>
                </table>
                
                <h3>Промоционален банер</h3>
                <table class="form-table">
                    <tr>
                        <th scope="row">Включи банер</th>
                        <td>
                            <label>
                                <input type="checkbox" name="pravda_banner_enabled" value="1" <?php checked($banner_enabled, '1'); ?> />
                                Покажи промоционален банер в горната част на сайта
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Текст на банера</th>
                        <td>
                            <input type="text" name="pravda_banner_text" value="<?php echo esc_attr($banner_text); ?>" class="large-text" />
                            <p class="description">Текст който ще се показва в банера</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Линк на банера</th>
                        <td>
                            <input type="url" name="pravda_banner_link" value="<?php echo esc_attr($banner_link); ?>" class="large-text" />
                            <p class="description">URL към който да води банера (опционално)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Цвят на банера</th>
                        <td>
                            <input type="color" name="pravda_banner_bg_color" value="<?php echo esc_attr($banner_bg_color); ?>" />
                            <p class="description">Фонов цвят на банера</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        
        <?php submit_button('Запази настройките'); ?>
    </form>
</div>

<style>
.pravda-settings-tabs {
    margin-top: 20px;
}

.tab-content {
    display: none;
    padding: 20px 0;
}

.tab-content.active {
    display: block;
}

.nav-tab {
    cursor: pointer;
}

.form-table th {
    width: 200px;
}

.description {
    font-style: italic;
    color: #666;
}
</style>

<script>
jQuery(document).ready(function($) {
    $('.nav-tab').on('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all tabs
        $('.nav-tab').removeClass('nav-tab-active');
        $('.tab-content').removeClass('active');
        
        // Add active class to clicked tab
        $(this).addClass('nav-tab-active');
        
        // Show corresponding content
        var target = $(this).attr('href');
        $(target).addClass('active');
    });
});
</script>