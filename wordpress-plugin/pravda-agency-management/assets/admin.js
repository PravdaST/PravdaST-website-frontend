/**
 * Pravda Agency Management Plugin Admin JavaScript
 */

jQuery(document).ready(function($) {
    
    // Initialize admin functionality
    PravdaAdmin.init();
    
});

var PravdaAdmin = {
    
    init: function() {
        this.initTabs();
        this.initFormValidation();
        this.initQuickActions();
        this.initRealTimeUpdates();
        this.initNotifications();
    },
    
    // Tab functionality for settings pages
    initTabs: function() {
        $('.nav-tab').on('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs and content
            $('.nav-tab').removeClass('nav-tab-active');
            $('.tab-content').removeClass('active');
            
            // Add active class to clicked tab
            $(this).addClass('nav-tab-active');
            
            // Show corresponding content
            var target = $(this).attr('href');
            $(target).addClass('active');
        });
    },
    
    // Form validation for various admin forms
    initFormValidation: function() {
        
        // Validate email fields
        $('input[type="email"]').on('blur', function() {
            var email = $(this).val();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                $(this).addClass('error');
                PravdaAdmin.showNotification('Невалиден имейл адрес', 'error');
            } else {
                $(this).removeClass('error');
            }
        });
        
        // Validate URL fields
        $('input[type="url"]').on('blur', function() {
            var url = $(this).val();
            var urlRegex = /^https?:\/\/.+/;
            
            if (url && !urlRegex.test(url)) {
                $(this).addClass('error');
                PravdaAdmin.showNotification('URL трябва да започва с http:// или https://', 'error');
            } else {
                $(this).removeClass('error');
            }
        });
        
        // Validate required fields before form submission
        $('form').on('submit', function(e) {
            var hasErrors = false;
            
            $(this).find('input[required], textarea[required], select[required]').each(function() {
                if (!$(this).val()) {
                    $(this).addClass('error');
                    hasErrors = true;
                }
            });
            
            if (hasErrors) {
                e.preventDefault();
                PravdaAdmin.showNotification('Моля попълнете всички задължителни полета', 'error');
            }
        });
    },
    
    // Quick actions and shortcuts
    initQuickActions: function() {
        
        // Quick save functionality with Ctrl+S
        $(document).on('keydown', function(e) {
            if (e.ctrlKey && e.which === 83) { // Ctrl+S
                e.preventDefault();
                $('#submit').click();
                PravdaAdmin.showNotification('Запазване...', 'info');
            }
        });
        
        // Auto-save draft functionality
        var autoSaveInterval;
        $('textarea, input[type="text"]').on('input', function() {
            clearTimeout(autoSaveInterval);
            autoSaveInterval = setTimeout(function() {
                if ($('#post_type').val() !== 'page') { // Don't auto-save pages
                    PravdaAdmin.autoSave();
                }
            }, 30000); // Auto-save after 30 seconds of inactivity
        });
        
        // Copy to clipboard functionality
        $('.copy-to-clipboard').on('click', function(e) {
            e.preventDefault();
            var target = $(this).data('target');
            var text = $(target).val() || $(target).text();
            
            navigator.clipboard.writeText(text).then(function() {
                PravdaAdmin.showNotification('Копирано в клипборда', 'success');
            });
        });
    },
    
    // Real-time updates and dynamic content
    initRealTimeUpdates: function() {
        
        // Update character count for text areas
        $('textarea[maxlength]').each(function() {
            var maxLength = $(this).attr('maxlength');
            var currentLength = $(this).val().length;
            var counter = $('<div class="char-counter">' + currentLength + '/' + maxLength + '</div>');
            $(this).after(counter);
            
            $(this).on('input', function() {
                var currentLength = $(this).val().length;
                counter.text(currentLength + '/' + maxLength);
                
                if (currentLength > maxLength * 0.9) {
                    counter.addClass('warning');
                } else {
                    counter.removeClass('warning');
                }
            });
        });
        
        // Dynamic preview for social media text
        $('#news_social_text, #testimonial_content').on('input', function() {
            var text = $(this).val();
            var preview = $(this).next('.social-preview');
            
            if (preview.length === 0) {
                preview = $('<div class="social-preview"></div>');
                $(this).after(preview);
            }
            
            preview.html('<strong>Преглед:</strong> ' + text.substring(0, 280));
            if (text.length > 280) {
                preview.append('<span class="warning"> (текстът е твърде дълъг за Twitter)</span>');
            }
        });
        
        // Real-time rating preview
        $('select[name*="rating"]').on('change', function() {
            var rating = parseInt($(this).val());
            var preview = $(this).siblings('.rating-preview');
            
            if (preview.length === 0) {
                preview = $('<div class="rating-preview"></div>');
                $(this).after(preview);
            }
            
            if (rating) {
                var stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
                preview.html('<span class="rating-display">' + stars + '</span>');
            } else {
                preview.html('Няма оценка');
            }
        });
    },
    
    // Notification system
    initNotifications: function() {
        // Create notification container if it doesn't exist
        if ($('#pravda-notifications').length === 0) {
            $('body').append('<div id="pravda-notifications"></div>');
        }
    },
    
    showNotification: function(message, type) {
        type = type || 'info';
        
        var notification = $('<div class="pravda-notice ' + type + '">' + message + '</div>');
        $('#pravda-notifications').append(notification);
        
        // Auto-hide after 5 seconds
        setTimeout(function() {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 5000);
        
        // Allow manual close
        notification.on('click', function() {
            $(this).fadeOut(300, function() {
                $(this).remove();
            });
        });
    },
    
    // Auto-save functionality
    autoSave: function() {
        var postId = $('#post_ID').val();
        if (!postId) return;
        
        var formData = new FormData();
        formData.append('action', 'pravda_auto_save');
        formData.append('post_id', postId);
        formData.append('nonce', pravda_admin.nonce);
        
        // Collect form data
        $('input, textarea, select').each(function() {
            if ($(this).attr('name')) {
                formData.append($(this).attr('name'), $(this).val());
            }
        });
        
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.success) {
                    $('.auto-save-status').text('Автоматично запазено в ' + new Date().toLocaleTimeString());
                }
            }
        });
    },
    
    // Media upload helper
    initMediaUpload: function(buttonSelector, inputSelector) {
        $(buttonSelector).on('click', function(e) {
            e.preventDefault();
            
            var mediaUploader = wp.media({
                title: 'Избери изображение',
                button: {
                    text: 'Използвай това изображение'
                },
                multiple: false
            });
            
            mediaUploader.on('select', function() {
                var attachment = mediaUploader.state().get('selection').first().toJSON();
                $(inputSelector).val(attachment.url);
                
                // Show preview if image
                if (attachment.type === 'image') {
                    var preview = $(inputSelector).siblings('.image-preview');
                    if (preview.length === 0) {
                        preview = $('<div class="image-preview"></div>');
                        $(inputSelector).after(preview);
                    }
                    preview.html('<img src="' + attachment.url + '" style="max-width: 200px; height: auto;">');
                }
            });
            
            mediaUploader.open();
        });
    },
    
    // Export/Import functionality
    exportSettings: function() {
        window.location.href = ajaxurl + '?action=pravda_export_settings&nonce=' + pravda_admin.nonce;
    },
    
    importSettings: function(file) {
        var formData = new FormData();
        formData.append('action', 'pravda_import_settings');
        formData.append('file', file);
        formData.append('nonce', pravda_admin.nonce);
        
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.success) {
                    PravdaAdmin.showNotification('Настройките са импортирани успешно', 'success');
                    setTimeout(function() {
                        location.reload();
                    }, 2000);
                } else {
                    PravdaAdmin.showNotification('Грешка при импортиране: ' + response.data, 'error');
                }
            }
        });
    }
};

// Global functions for external use
window.PravdaAdmin = PravdaAdmin;