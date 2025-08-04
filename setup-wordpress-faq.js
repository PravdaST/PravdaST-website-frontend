
// WordPress Custom Post Type за FAQ
// Добавете този код във functions.php на вашата WordPress тема в admin.pravdagency.eu

function create_faq_post_type() {
    register_post_type('faq',
        array(
            'labels' => array(
                'name' => 'FAQ',
                'singular_name' => 'FAQ въпрос',
                'add_new' => 'Добави нов въпрос',
                'add_new_item' => 'Добави нов FAQ въпрос',
                'edit_item' => 'Редактирай FAQ въпрос',
                'new_item' => 'Нов FAQ въпрос',
                'view_item' => 'Виж FAQ въпрос',
                'search_items' => 'Търси FAQ въпроси',
                'not_found' => 'Няма намерени FAQ въпроси',
                'not_found_in_trash' => 'Няма FAQ въпроси в кошчето'
            ),
            'public' => true,
            'has_archive' => true,
            'menu_icon' => 'dashicons-editor-help',
            'supports' => array('title', 'editor', 'custom-fields'),
            'show_in_rest' => true, // Важно за REST API
            'rest_base' => 'faq',
            'menu_position' => 20
        )
    );
}
add_action('init', 'create_faq_post_type');

// Добавяне на custom fields за FAQ категории
function add_faq_meta_boxes() {
    add_meta_box(
        'faq_category',
        'FAQ Категория',
        'faq_category_callback',
        'faq',
        'side'
    );
}
add_action('add_meta_boxes', 'add_faq_meta_boxes');

function faq_category_callback($post) {
    $value = get_post_meta($post->ID, 'faq_category', true);
    $categories = array(
        'Общи въпроси',
        'SEO Struktor™',
        'Clientomat™',
        'Clickstarter™',
        'Trendlab™',
        'Ценообразуване',
        'Процес',
        'Поддръжка'
    );
    
    echo '<select name="faq_category" style="width: 100%;">';
    echo '<option value="">Избери категория</option>';
    foreach($categories as $category) {
        $selected = ($value == $category) ? 'selected' : '';
        echo '<option value="' . $category . '" ' . $selected . '>' . $category . '</option>';
    }
    echo '</select>';
}

function save_faq_meta($post_id) {
    if (isset($_POST['faq_category'])) {
        update_post_meta($post_id, 'faq_category', $_POST['faq_category']);
    }
}
add_action('save_post', 'save_faq_meta');
