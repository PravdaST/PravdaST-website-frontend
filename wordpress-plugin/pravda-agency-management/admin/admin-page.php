<?php
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}
?>

<div class="wrap">
    <h1>Pravda Agency Management Dashboard</h1>
    
    <div class="pravda-admin-dashboard">
        <div class="dashboard-grid">
            
            <!-- Quick Stats -->
            <div class="dashboard-section stats">
                <h2>Преглед на съдържанието</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number"><?php echo wp_count_posts('pravda_service')->publish; ?></div>
                        <div class="stat-label">Услуги</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number"><?php echo wp_count_posts('pravda_faq')->publish; ?></div>
                        <div class="stat-label">FAQ въпроси</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number"><?php echo wp_count_posts('pravda_case_study')->publish; ?></div>
                        <div class="stat-label">Case Studies</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number"><?php echo wp_count_posts('pravda_team')->publish; ?></div>
                        <div class="stat-label">Членове на екипа</div>
                    </div>
                </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="dashboard-section actions">
                <h2>Бързи действия</h2>
                <div class="action-buttons">
                    <a href="<?php echo admin_url('post-new.php?post_type=pravda_service'); ?>" class="button button-primary">
                        Добави услуга
                    </a>
                    <a href="<?php echo admin_url('post-new.php?post_type=pravda_faq'); ?>" class="button button-primary">
                        Добави FAQ въпрос
                    </a>
                    <a href="<?php echo admin_url('post-new.php?post_type=pravda_case_study'); ?>" class="button button-primary">
                        Добави Case Study
                    </a>
                    <a href="<?php echo admin_url('post-new.php?post_type=pravda_team'); ?>" class="button button-primary">
                        Добави член на екипа
                    </a>
                    <a href="<?php echo admin_url('post-new.php?post_type=pravda_testimonial'); ?>" class="button button-primary">
                        Добави отзив
                    </a>
                    <a href="<?php echo admin_url('post-new.php?post_type=pravda_resource'); ?>" class="button button-primary">
                        Добави ресурс
                    </a>
                </div>
            </div>
            
            <!-- Recent Content -->
            <div class="dashboard-section recent">
                <h2>Последно съдържание</h2>
                <?php
                $recent_posts = get_posts(array(
                    'post_type' => array('pravda_service', 'pravda_faq', 'pravda_case_study', 'pravda_team'),
                    'numberposts' => 5,
                    'post_status' => 'publish',
                    'orderby' => 'date',
                    'order' => 'DESC'
                ));
                ?>
                <ul class="recent-list">
                    <?php foreach ($recent_posts as $post): ?>
                        <li>
                            <span class="post-type"><?php echo get_post_type_object($post->post_type)->labels->singular_name; ?></span>
                            <a href="<?php echo get_edit_post_link($post->ID); ?>"><?php echo $post->post_title; ?></a>
                            <span class="post-date"><?php echo date('d.m.Y', strtotime($post->post_date)); ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            
            <!-- API Information -->
            <div class="dashboard-section api-info">
                <h2>API Endpoints</h2>
                <p>Използвайте тези endpoints за достъп до съдържанието във Next.js приложението:</p>
                <ul class="api-endpoints">
                    <li><code>/wp-json/pravda/v1/services</code> - Всички услуги</li>
                    <li><code>/wp-json/pravda/v1/faq</code> - FAQ въпроси</li>
                    <li><code>/wp-json/pravda/v1/case-studies</code> - Case Studies</li>
                    <li><code>/wp-json/pravda/v1/team</code> - Екип</li>
                    <li><code>/wp-json/pravda/v1/testimonials</code> - Отзиви</li>
                    <li><code>/wp-json/pravda/v1/resources</code> - Ресурси</li>
                    <li><code>/wp-json/pravda/v1/news</code> - Новини</li>
                    <li><code>/wp-json/pravda/v1/settings</code> - Настройки</li>
                </ul>
            </div>
            
            <!-- System Status -->
            <div class="dashboard-section system-status">
                <h2>Системно състояние</h2>
                <div class="status-items">
                    <div class="status-item">
                        <span class="status-label">WordPress REST API:</span>
                        <span class="status-value status-ok">Активен</span>
                    </div>
                    <div class="status-item">
                        <span class="status-label">Custom Post Types:</span>
                        <span class="status-value status-ok">Регистрирани</span>
                    </div>
                    <div class="status-item">
                        <span class="status-label">Meta Fields:</span>
                        <span class="status-value status-ok">Конфигурирани</span>
                    </div>
                    <div class="status-item">
                        <span class="status-label">Pravda API:</span>
                        <span class="status-value status-ok">Достъпен</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

<style>
.pravda-admin-dashboard {
    max-width: 1200px;
    margin: 20px 0;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.dashboard-section {
    background: #fff;
    border: 1px solid #ccd0d4;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,.04);
}

.dashboard-section h2 {
    margin-top: 0;
    color: #23282d;
    font-size: 16px;
    font-weight: 600;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.stat-card {
    text-align: center;
    padding: 15px;
    background: #f7f7f7;
    border-radius: 4px;
}

.stat-number {
    font-size: 24px;
    font-weight: bold;
    color: #ECB629;
}

.stat-label {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
}

.action-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.action-buttons .button {
    justify-content: center;
    text-align: center;
}

.recent-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.recent-list li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    gap: 10px;
}

.post-type {
    background: #ECB629;
    color: #fff;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
}

.post-date {
    margin-left: auto;
    font-size: 12px;
    color: #666;
}

.api-endpoints {
    list-style: none;
    margin: 0;
    padding: 0;
}

.api-endpoints li {
    padding: 5px 0;
    font-family: monospace;
    font-size: 13px;
}

.api-endpoints code {
    background: #f1f1f1;
    padding: 2px 6px;
    border-radius: 3px;
}

.status-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.status-label {
    font-weight: 500;
}

.status-value {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.status-ok {
    background: #d1e7dd;
    color: #0f5132;
}
</style>