import { BusinessData, GeneratedContent, TemplateFile, MenuCategory, MenuItem } from '../types';
import { BaseHandler } from './BaseHandler';

export class CafeHandler extends BaseHandler {

  /**
   * Generate menu categories specific to cafes
   */
  async generateMenuCategories(businessData: BusinessData): Promise<MenuCategory[]> {
    return [
      {
        name: "Кафе",
        icon: "☕",
        items: [
          { name: "Еспресо", price: 2.80, description: "Италиански еспресо с богат вкус" },
          { name: "Капучино", price: 4.20, description: "Класическо капучино с млечна пяна" },
          { name: "Плоско бяло", price: 4.50, description: "Specialty кафе с микропяна" },
          { name: "Кафе лате", price: 4.80, description: "Нежно кафе с парно мляко" },
          { name: "Американо", price: 3.50, description: "Разреден еспресо с топла вода" },
          { name: "Mocha", price: 5.20, description: "Кафе с шоколад и взбита сметана" }
        ]
      },
      {
        name: "Студени напитки",
        icon: "🧊",
        items: [
          { name: "Iced latte", price: 5.50, description: "Студен лате с лед и сладка сметана" },
          { name: "Фрапе", price: 4.80, description: "Гръцко ледено кафе с пяна" },
          { name: "Студен чай", price: 3.90, description: "Освежаващ студен чай с лимон" },
          { name: "Лимонада", price: 4.20, description: "Домашна лимонада с мента" },
          { name: "Смути", price: 6.50, description: "Плодов смути от сезонни плодове" }
        ]
      },
      {
        name: "Закуски",
        icon: "🥐",
        items: [
          { name: "Круасан", price: 3.50, description: "Свеж френски круасан с масло" },
          { name: "Круасан с шунка", price: 5.80, description: "Круасан с качествена шунка и сирене" },
          { name: "Тост", price: 4.20, description: "Препечен хляб с домати и босилек" },
          { name: "Сандвич", price: 7.50, description: "Домашен сандвич с пилешко филе" },
          { name: "Гранола", price: 6.80, description: "Домашна гранола с йогурт и мед" }
        ]
      },
      {
        name: "Десерти",
        icon: "🍰",
        items: [
          { name: "Чийзкейк", price: 6.90, description: "Кремообразен чийзкейк с горски плодове" },
          { name: "Тирамису", price: 7.50, description: "Класически италиански тирамису" },
          { name: "Браунис", price: 5.80, description: "Шоколадов браунис с орехи" },
          { name: "Мъфин", price: 4.20, description: "Домашен мъфин с черешови" },
          { name: "Еклер", price: 3.90, description: "Френски еклер с ванилов крем" }
        ]
      }
    ];
  }

  /**
   * Generate cafe template files
   */
  async generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]> {
    const files: TemplateFile[] = [];

    // Generate main HTML file
    files.push({
      path: 'index.html',
      content: this.generateCafeHTML(content, businessData),
      type: 'html'
    });

    // Generate CSS file
    files.push({
      path: 'styles.css',
      content: this.generateCafeCSS(content),
      type: 'css'
    });

    // Generate JavaScript file
    files.push({
      path: 'scripts.js',
      content: this.generateCafeJS(content, businessData),
      type: 'js'
    });

    return files;
  }

  /**
   * Generate cafe HTML
   */
  private generateCafeHTML(content: GeneratedContent, businessData: BusinessData): string {
    const { businessInfo, menuCategories, features, reviews, colorScheme } = content;
    
    return `<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name} - ${businessInfo.tagline}</title>
    <meta name="description" content="${businessInfo.description}">
    <meta name="keywords" content="${businessData.name}, кафе, кафене, specialty coffee, ${this.extractLocation(businessData)}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${businessInfo.name}">
    <meta property="og:description" content="${businessInfo.description}">
    <meta property="og:type" content="website">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Custom CSS Variables -->
    <style>
        :root {
            --color-primary: ${colorScheme.primary};
            --color-secondary: ${colorScheme.secondary};
            --color-accent: ${colorScheme.accent};
            --color-background: ${colorScheme.background};
            --color-text: ${colorScheme.text};
            --color-light: ${colorScheme.light};
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
            <div class="container">
                <div class="hero-badge">
                    <span class="icon">☕</span>
                    <span>SPECIALTY COFFEE</span>
                    <span class="icon">⭐</span>
                </div>
                
                <h1 class="hero-title">${businessInfo.name.toUpperCase()}</h1>
                <p class="hero-tagline">${businessInfo.tagline}</p>
                
                <div class="hero-rating">
                    <div class="stars">
                        ${'★'.repeat(5)}
                    </div>
                    <span class="rating-value">${businessInfo.rating}</span>
                    <span class="rating-count">(${businessInfo.reviews} отзива)</span>
                </div>

                <div class="hero-actions">
                    <a href="#menu" class="btn btn-primary">
                        <span class="icon">☕</span>
                        РАЗГЛЕДАЙ МЕНЮТО
                    </a>
                    <a href="#contact" class="btn btn-outline">
                        <span class="icon">💖</span>
                        РЕЗЕРВИРАЙ МАСА
                    </a>
                </div>

                <div class="hero-info">
                    <div class="info-item">
                        <span class="icon">🕐</span>
                        <span>Отворени до 22:00ч</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">📶</span>
                        <span>Безплатен WiFi</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">📍</span>
                        <span>${this.extractLocation(businessData)} център</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features section bg-light">
        <div class="container">
            <div class="features-grid">
                ${features.slice(0, 6).map(feature => `
                    <div class="feature-card">
                        <div class="feature-icon">${this.getFeatureIcon(feature.icon)}</div>
                        <h3 class="feature-title">${feature.title}</h3>
                        <p class="feature-desc">${feature.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="menu section">
        <div class="container">
            <div class="section-header text-center">
                <div class="section-badge">НАШЕТО МЕНЮ</div>
                <h2 class="section-title">Кафе, създадено с любов</h2>
                <p class="section-desc">Всяко кафе е прясно смляно и приготвено от опитни бариста</p>
            </div>

            <div class="menu-filters">
                ${menuCategories?.map((category, index) => `
                    <button class="menu-filter ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-name">${category.name}</span>
                    </button>
                `).join('')}
            </div>

            <div class="menu-content">
                ${menuCategories?.map((category, index) => `
                    <div class="menu-category ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <div class="card">
                            <div class="category-header">
                                <span class="category-icon">${category.icon}</span>
                                <h3 class="category-title">${category.name}</h3>
                            </div>
                            
                            <div class="menu-items">
                                ${category.items.map(item => `
                                    <div class="menu-item">
                                        <div class="item-info">
                                            <h4 class="item-name">${item.name}</h4>
                                            <p class="item-desc">${item.description}</p>
                                        </div>
                                        <div class="item-price">
                                            <span class="price">${item.price.toFixed(2)} лв</span>
                                            <div class="add-to-cart">🛒</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>

                            <div class="order-info">
                                <div class="order-method">
                                    <div class="icon">📞</div>
                                    <div>
                                        <p class="method-title">Поръчки по телефон</p>
                                        <p class="method-desc">${businessInfo.phone}</p>
                                    </div>
                                </div>
                                <div class="order-method">
                                    <div class="icon">📶</div>
                                    <div>
                                        <p class="method-title">Безплатен WiFi</p>
                                        <p class="method-desc">Високоскоростен интернет</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews section bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Какво казват нашите гости</h2>
            </div>

            <div class="reviews-grid">
                ${reviews.map(review => `
                    <div class="review-card card">
                        <div class="review-stars">
                            ${'★'.repeat(review.rating)}
                        </div>
                        <p class="review-text">"${review.text}"</p>
                        <div class="review-author">
                            <p class="author-name">${review.name}</p>
                            <p class="review-date">${review.date}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact section">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2 class="section-title">Контакти и информация</h2>
                    
                    <div class="contact-items">
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <div>
                                <p class="contact-label">Адрес</p>
                                <p class="contact-value">${businessInfo.address}</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📞</div>
                            <div>
                                <p class="contact-label">Телефон</p>
                                <p class="contact-value">${businessInfo.phone}</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">🕐</div>
                            <div>
                                <p class="contact-label">Работно време</p>
                                <p class="contact-value">Пон-Пет: ${businessInfo.hours.weekdays}</p>
                                <p class="contact-value">Сб-Нд: ${businessInfo.hours.weekend}</p>
                            </div>
                        </div>
                    </div>

                    <div class="social-media">
                        <p class="social-title">Последвайте ни</p>
                        <div class="social-links">
                            <a href="#" class="social-link">📘</a>
                            <a href="#" class="social-link">📷</a>
                        </div>
                    </div>
                </div>

                <div class="contact-map">
                    <h2 class="section-title">Как да ни намерите</h2>
                    <div class="map-placeholder card">
                        <div class="map-content">
                            <div class="map-icon">📍</div>
                            <p class="map-title">Интерактивна карта</p>
                            <p class="map-desc">GPS координати и маршрути</p>
                            <a href="#" class="btn btn-primary">
                                <span class="icon">🌐</span>
                                Отвори в Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta section">
        <div class="container">
            <div class="cta-content text-center">
                <h2 class="cta-title">Готови за перфектното кафе?</h2>
                <p class="cta-desc">Заповядайте на кафе или си поръчайте за вкъщи</p>
                <div class="cta-actions">
                    <a href="#menu" class="btn btn-white">
                        <span class="icon">☕</span>
                        ПОРЪЧАЙ СЕГА
                    </a>
                    <a href="tel:${businessInfo.phone}" class="btn btn-outline-white">
                        <span class="icon">📞</span>
                        ОБАДИ СЕ
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>${businessInfo.name}</h3>
                    <p>${businessInfo.description}</p>
                </div>
                <div class="footer-contact">
                    <p>${businessInfo.phone}</p>
                    <p>${businessInfo.email}</p>
                    <p>${businessInfo.address}</p>
                </div>
                <div class="footer-credits">
                    <p>Създадено от <a href="https://pravda.bg" target="_blank">Pravda Agency</a></p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="scripts.js"></script>
    
    <!-- Analytics -->
    <script>
        console.log('${businessInfo.name} - Създадено от Pravda Agency Template Generator');
    </script>
</body>
</html>`;
  }

  /**
   * Generate cafe CSS (similar to restaurant but with yellow/amber theme)
   */
  private generateCafeCSS(content: GeneratedContent): string {
    return `${this.generateBaseCSS(content)}

/* Cafe-specific styles */

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: white;
    text-align: center;
}

.hero-background {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #78350f 0%, #d97706 50%, #f59e0b 100%);
    opacity: 0.9;
}

.hero-background::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
}

.hero-background::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 50%);
}

.hero-content {
    position: relative;
    z-index: 10;
    width: 100%;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(251, 191, 36, 0.2);
    backdrop-filter: blur(8px);
    border-radius: 2rem;
    border: 1px solid rgba(251, 191, 36, 0.3);
    margin-bottom: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
}

.hero-title {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #fef3c7;
}

@media (min-width: 768px) {
    .hero-title { font-size: 4rem; }
}

@media (min-width: 1024px) {
    .hero-title { font-size: 5rem; }
}

.hero-tagline {
    font-size: 1.25rem;
    color: rgba(251, 191, 36, 0.9);
    margin-bottom: 2rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 768px) {
    .hero-tagline { font-size: 1.5rem; }
}

/* CTA Section */
.cta {
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
    color: white;
}

.cta-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .cta-title { font-size: 2.5rem; }
}

.cta-desc {
    font-size: 1.25rem;
    color: rgba(251, 191, 36, 0.9);
    margin-bottom: 2rem;
}

.cta-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

@media (min-width: 640px) {
    .cta-actions {
        flex-direction: row;
        justify-content: center;
    }
}

.btn-white {
    background: white;
    color: var(--color-secondary);
    border: 2px solid white;
}

.btn-white:hover {
    background: transparent;
    color: white;
}

.btn-outline-white {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-outline-white:hover {
    background: white;
    color: var(--color-secondary);
}

/* Override primary colors for cafe theme */
.menu-filter.active {
    background: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(217, 119, 6, 0.3);
}

.menu-item:hover .item-name {
    color: var(--color-primary);
}

.price {
    color: var(--color-primary);
}

.add-to-cart {
    background: var(--color-primary);
}

.hero-rating .stars {
    color: #fbbf24;
}

.review-stars {
    color: #fbbf24;
}

.contact-icon {
    color: var(--color-primary);
}

.map-icon {
    color: var(--color-primary);
}

/* All other styles inherit from base CSS */`;
  }

  /**
   * Generate cafe JavaScript
   */
  private generateCafeJS(content: GeneratedContent, businessData: BusinessData): string {
    return `${this.generateBaseJS()}

// Cafe-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Menu filter functionality
    const menuFilters = document.querySelectorAll('.menu-filter');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Update active filter
            menuFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Show target category
            menuCategories.forEach(category => {
                category.classList.remove('active');
                if (category.getAttribute('data-category') === targetCategory) {
                    category.classList.add('active');
                }
            });
        });
    });
    
    // Coffee order tracking
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const itemName = this.closest('.menu-item').querySelector('.item-name').textContent;
            showNotification(\`\${itemName} добавено в количката! ☕\`);
            
            // Coffee-specific animation
            this.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });
    
    // Table reservation
    const reservationButtons = document.querySelectorAll('a[href="#contact"]');
    reservationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showTableReservationModal();
        });
    });
    
    // WiFi password display
    const wifiInfo = document.createElement('div');
    wifiInfo.className = 'wifi-info';
    wifiInfo.innerHTML = \`
        <div class="wifi-card">
            <h4>📶 Безплатен WiFi</h4>
            <p><strong>Мрежа:</strong> ${businessData.name}_FREE</p>
            <p><strong>Парола:</strong> coffee2024</p>
            <button class="close-wifi">✕</button>
        </div>
    \`;
    
    // Style the WiFi info
    wifiInfo.style.cssText = \`
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        background: var(--color-primary);
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(-120%);
        transition: transform 0.3s ease;
        max-width: 250px;
    \`;
    
    // Show WiFi info after 5 seconds
    setTimeout(() => {
        document.body.appendChild(wifiInfo);
        setTimeout(() => {
            wifiInfo.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto hide after 10 seconds
        setTimeout(() => {
            wifiInfo.style.transform = 'translateX(-120%)';
            setTimeout(() => {
                if (document.body.contains(wifiInfo)) {
                    document.body.removeChild(wifiInfo);
                }
            }, 300);
        }, 10000);
    }, 5000);
    
    // Close WiFi info
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-wifi')) {
            wifiInfo.style.transform = 'translateX(-120%)';
            setTimeout(() => {
                if (document.body.contains(wifiInfo)) {
                    document.body.removeChild(wifiInfo);
                }
            }, 300);
        }
    });
});

// Show table reservation modal
function showTableReservationModal() {
    const modal = document.createElement('div');
    modal.className = 'reservation-modal';
    modal.innerHTML = \`
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>☕ Резервирай маса</h3>
                    <button class="modal-close">✕</button>
                </div>
                <p class="modal-subtitle">Осигури си място в нашето уютно кафе</p>
                <form class="reservation-form">
                    <div class="form-group">
                        <label>📅 Дата</label>
                        <input type="date" name="date" required>
                    </div>
                    <div class="form-group">
                        <label>⏰ Час</label>
                        <select name="time" required>
                            <option value="">Изберете час</option>
                            <option value="08:00">08:00 - Сутрешно кафе</option>
                            <option value="10:00">10:00 - Работна почивка</option>
                            <option value="12:00">12:00 - Обедна пауза</option>
                            <option value="14:00">14:00 - Следобед</option>
                            <option value="16:00">16:00 - Afternoon coffee</option>
                            <option value="18:00">18:00 - Вечерно кафе</option>
                            <option value="20:00">20:00 - Вечер</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>👥 Брой места</label>
                        <select name="seats" required>
                            <option value="">Брой</option>
                            <option value="1">1 място</option>
                            <option value="2">2 места</option>
                            <option value="3">3 места</option>
                            <option value="4">4 места</option>
                            <option value="5">5 места</option>
                            <option value="6+">6+ места</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>☕ Предпочитания (незадължително)</label>
                        <select name="preferences">
                            <option value="">Изберете</option>
                            <option value="quiet">Тихо кътче</option>
                            <option value="window">До прозореца</option>
                            <option value="wifi">Близо до контакт</option>
                            <option value="group">За група</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>📱 Име</label>
                        <input type="text" name="name" placeholder="Вашето име" required>
                    </div>
                    <div class="form-group">
                        <label>📞 Телефон</label>
                        <input type="tel" name="phone" placeholder="+359 XXX XXX XXX" required>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">☕ Резервирай масата</button>
                        <button type="button" class="btn btn-outline modal-cancel">Отказ</button>
                    </div>
                </form>
            </div>
        </div>
    \`;
    
    // Add modal to page and handle interactions
    document.body.appendChild(modal);
    
    // Similar modal handling as restaurant but with cafe-specific styling
    const closeModal = () => {
        document.body.removeChild(modal);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-cancel').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    modal.querySelector('.modal-content').addEventListener('click', (e) => e.stopPropagation());
    
    modal.querySelector('.reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Table reservation data:', data);
        showNotification('Масата е резервирана! ☕ Очакваме ви скоро!');
        closeModal();
    });
}

console.log('${businessData.name} Cafe Template - Powered by Pravda Agency');`;
  }

  /**
   * Get feature icon for cafe
   */
  private getFeatureIcon(iconName: string): string {
    const iconMap: Record<string, string> = {
      'Wifi': '📶',
      'Laptop': '💻',
      'Car': '🚗',
      'CreditCard': '💳',
      'Coffee': '☕',
      'Camera': '📸',
      'Star': '⭐',
      'Heart': '💖',
      'Clock': '🕐',
      'Users': '👥'
    };
    
    return iconMap[iconName] || '☕';
  }

}