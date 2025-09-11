import { BusinessData, GeneratedContent, TemplateFile, MenuCategory, MenuItem } from '../types';
import { BaseHandler } from './BaseHandler';

export class RestaurantHandler extends BaseHandler {

  /**
   * Generate menu categories specific to restaurants
   */
  async generateMenuCategories(businessData: BusinessData): Promise<MenuCategory[]> {
    const businessName = businessData.name;
    const location = this.extractLocation(businessData);
    
    return [
      {
        name: "Предястия",
        icon: "🥗",
        items: [
          { name: "Шопска салата", price: 8.50, description: "Домати, краставици, лук, сирене, зехтин" },
          { name: "Овчарска салата", price: 12.90, description: "Смесена салата с овче сирене и орехи" },
          { name: "Таратор", price: 6.00, description: "Студена супа с кисело мляко и краставици" },
          { name: "Луканка", price: 14.50, description: "Домашна суха наденица с хляб и лютеница" }
        ]
      },
      {
        name: "Основни ястия",
        icon: "🍖",
        items: [
          { name: "Мусака", price: 16.90, description: "Картофи, кайма, бешамел - семейна рецепта" },
          { name: "Каварма", price: 18.50, description: "Свинско месо с лук и специи в гювеч" },
          { name: "Пълнени чушки", price: 15.20, description: "С ориз, кайма и билки" },
          { name: "Агнешко печено", price: 22.90, description: "Бавно печено агне с розмарин и чесън" },
          { name: "Пиле по селски", price: 17.80, description: "Цяло пиле с картофи и зеленчуци" }
        ]
      },
      {
        name: "Десерти",
        icon: "🍰",
        items: [
          { name: "Баклава", price: 7.50, description: "Домашна баклава с орехи и мед" },
          { name: "Гарашки сладкиш", price: 6.80, description: "Шоколадов сладкиш с орехи" },
          { name: "Сладолед", price: 4.50, description: "Ванилия, шоколад или ягода" }
        ]
      },
      {
        name: "Напитки",
        icon: "🍷",
        items: [
          { name: "Домашна ракия", price: 4.50, description: "Сливова или гроздова - 50мл" },
          { name: "Българско вино", price: 18.00, description: "Каберне Совиньон - бутилка" },
          { name: "Айрян", price: 3.20, description: "Прясно кисело мляко" },
          { name: "Боза", price: 3.80, description: "Традиционна българска напитка" }
        ]
      }
    ];
  }

  /**
   * Generate restaurant template files
   */
  async generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]> {
    const files: TemplateFile[] = [];

    // Generate main HTML file
    files.push({
      path: 'index.html',
      content: this.generateRestaurantHTML(content, businessData),
      type: 'html'
    });

    // Generate CSS file
    files.push({
      path: 'styles.css',
      content: this.generateRestaurantCSS(content),
      type: 'css'
    });

    // Generate JavaScript file
    files.push({
      path: 'scripts.js',
      content: this.generateRestaurantJS(content, businessData),
      type: 'js'
    });

    return files;
  }

  /**
   * Generate restaurant HTML
   */
  private generateRestaurantHTML(content: GeneratedContent, businessData: BusinessData): string {
    const { businessInfo, menuCategories, features, reviews, colorScheme } = content;
    
    return `<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name} - ${businessInfo.tagline}</title>
    <meta name="description" content="${businessInfo.description}">
    <meta name="keywords" content="${businessData.name}, ресторант, храна, меню, ${this.extractLocation(businessData)}">
    
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
                    <span class="icon">🍽️</span>
                    <span>СЕМЕЙНА ТРАДИЦИЯ</span>
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
                        <span class="icon">🍽️</span>
                        ВИЖДАНЕ НА МЕНЮТО
                    </a>
                    <a href="#contact" class="btn btn-outline">
                        <span class="icon">📞</span>
                        РЕЗЕРВАЦИЯ
                    </a>
                </div>

                <div class="hero-info">
                    <div class="info-item">
                        <span class="icon">🕐</span>
                        <span>Отворени до 23:00ч</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">📞</span>
                        <span>${businessInfo.phone}</span>
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
                <h2 class="section-title">Традиционни български вкусове</h2>
                <p class="section-desc">Всички ястия се приготвят по традиционни рецепти с пресни, качествени продукти</p>
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
                                    <div class="icon">🚗</div>
                                    <div>
                                        <p class="method-title">Безплатна доставка</p>
                                        <p class="method-desc">над 25 лв в ${this.extractLocation(businessData)}</p>
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
   * Generate restaurant CSS
   */
  private generateRestaurantCSS(content: GeneratedContent): string {
    return `${this.generateBaseCSS(content)}

/* Restaurant-specific styles */

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
    background: linear-gradient(135deg, #7c2d12 0%, #dc2626 50%, #ea580c 100%);
    opacity: 0.9;
}

.hero-background::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
}

.hero-background::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%);
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
    background: rgba(245, 158, 11, 0.2);
    backdrop-filter: blur(8px);
    border-radius: 2rem;
    border: 1px solid rgba(245, 158, 11, 0.3);
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
}

@media (min-width: 768px) {
    .hero-title { font-size: 4rem; }
}

@media (min-width: 1024px) {
    .hero-title { font-size: 5rem; }
}

.hero-tagline {
    font-size: 1.25rem;
    color: rgba(245, 158, 11, 0.9);
    margin-bottom: 2rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 768px) {
    .hero-tagline { font-size: 1.5rem; }
}

.hero-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
}

.stars {
    color: #fbbf24;
    font-size: 1.25rem;
}

.rating-value {
    font-size: 1.125rem;
    font-weight: 600;
}

.rating-count {
    color: rgba(245, 158, 11, 0.8);
}

.hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 3rem;
}

@media (min-width: 640px) {
    .hero-actions {
        flex-direction: row;
        justify-content: center;
    }
}

.hero-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.875rem;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(245, 158, 11, 0.9);
}

/* Features */
.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .features-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
    .features-grid { grid-template-columns: repeat(6, 1fr); }
}

.feature-card {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.feature-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
}

.feature-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.25rem;
}

.feature-desc {
    font-size: 0.75rem;
    color: #6b7280;
}

/* Menu */
.menu-filters {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.menu-filter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    border: none;
    background: #f3f4f6;
    color: #6b7280;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.menu-filter:hover {
    background: #e5e7eb;
    color: var(--color-text);
}

.menu-filter.active {
    background: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(220, 38, 38, 0.3);
}

.menu-content {
    position: relative;
}

.menu-category {
    display: none;
}

.menu-category.active {
    display: block;
}

.category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #e5e7eb;
}

.category-icon {
    font-size: 1.875rem;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text);
}

.menu-items {
    margin-bottom: 2rem;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem;
    background: #f9fafb;
    border-radius: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    cursor: pointer;
}

.menu-item:hover {
    background: #f3f4f6;
    border-color: var(--color-primary);
    transform: scale(1.02);
}

.item-info {
    flex: 1;
}

.item-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.menu-item:hover .item-name {
    color: var(--color-primary);
}

.item-desc {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.5;
}

.item-price {
    margin-left: 1.5rem;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.price {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--color-primary);
}

.add-to-cart {
    width: 2.5rem;
    height: 2.5rem;
    background: var(--color-primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
    cursor: pointer;
}

.menu-item:hover .add-to-cart {
    opacity: 1;
}

.add-to-cart:hover {
    transform: scale(1.1);
}

.order-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, var(--color-light) 0%, #fed7aa 100%);
    border-radius: 1rem;
    border: 1px solid var(--color-accent);
}

@media (max-width: 640px) {
    .order-info { grid-template-columns: 1fr; }
}

.order-method {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.order-method .icon {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 50%;
    background: white;
}

.method-title {
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.25rem;
}

.method-desc {
    color: #6b7280;
}

/* Reviews */
.reviews-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
}

@media (min-width: 768px) {
    .reviews-grid { grid-template-columns: repeat(3, 1fr); }
}

.review-card {
    transition: all 0.3s ease;
}

.review-card:hover {
    transform: translateY(-4px);
}

.review-stars {
    color: #fbbf24;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.review-text {
    font-style: italic;
    color: #374151;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.review-author {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.author-name {
    font-weight: 600;
    color: var(--color-text);
}

.review-date {
    font-size: 0.875rem;
    color: #6b7280;
}

/* Contact */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
}

@media (min-width: 768px) {
    .contact-grid { grid-template-columns: repeat(2, 1fr); }
}

.contact-items {
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-icon {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--color-primary);
    margin-top: 0.25rem;
}

.contact-label {
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.25rem;
}

.contact-value {
    color: #6b7280;
}

.social-media {
    margin-top: 2rem;
}

.social-title {
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 1rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    border-color: var(--color-primary);
    background: var(--color-light);
}

.map-placeholder {
    height: 20rem;
    background: linear-gradient(135deg, var(--color-light) 0%, #fed7aa 100%);
    border: 1px solid var(--color-accent);
}

.map-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.map-icon {
    font-size: 4rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.map-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.5rem;
}

.map-desc {
    color: #6b7280;
    margin-bottom: 1rem;
}

/* Footer */
.footer {
    background: var(--color-text);
    color: white;
    padding: 3rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    text-align: center;
}

@media (min-width: 768px) {
    .footer-content { 
        grid-template-columns: repeat(3, 1fr);
        text-align: left;
    }
}

.footer-info h3 {
    color: var(--color-accent);
    margin-bottom: 0.5rem;
}

.footer-info p {
    color: #d1d5db;
    font-size: 0.875rem;
}

.footer-contact p {
    color: #d1d5db;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.footer-credits {
    color: #9ca3af;
    font-size: 0.75rem;
}

.footer-credits a {
    color: var(--color-accent);
    text-decoration: none;
}

.footer-credits a:hover {
    text-decoration: underline;
}`;
  }

  /**
   * Generate restaurant JavaScript
   */
  private generateRestaurantJS(content: GeneratedContent, businessData: BusinessData): string {
    return `${this.generateBaseJS()}

// Restaurant-specific functionality
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
    
    // Menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add to cart functionality (placeholder)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Add animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Show feedback
            const itemName = this.closest('.menu-item').querySelector('.item-name').textContent;
            showNotification(\`\${itemName} добавено в количката!\`);
        });
    });
    
    // Reservation functionality
    const reservationButtons = document.querySelectorAll('a[href="#contact"]');
    reservationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showReservationModal();
        });
    });
    
    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone call initiated:', this.href);
        });
    });
});

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = \`
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--color-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    \`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Show reservation modal
function showReservationModal() {
    const modal = document.createElement('div');
    modal.className = 'reservation-modal';
    modal.innerHTML = \`
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Направете резервация</h3>
                    <button class="modal-close">✕</button>
                </div>
                <form class="reservation-form">
                    <div class="form-group">
                        <label>Дата</label>
                        <input type="date" name="date" required>
                    </div>
                    <div class="form-group">
                        <label>Час</label>
                        <select name="time" required>
                            <option value="">Изберете час</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Брой гости</label>
                        <select name="guests" required>
                            <option value="">Брой</option>
                            <option value="1">1 гост</option>
                            <option value="2">2 гости</option>
                            <option value="3">3 гости</option>
                            <option value="4">4 гости</option>
                            <option value="5">5 гости</option>
                            <option value="6+">6+ гости</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Име</label>
                        <input type="text" name="name" placeholder="Вашето име" required>
                    </div>
                    <div class="form-group">
                        <label>Телефон</label>
                        <input type="tel" name="phone" placeholder="+359 XXX XXX XXX" required>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Потвърди резервацията</button>
                        <button type="button" class="btn btn-outline modal-cancel">Отказ</button>
                    </div>
                </form>
            </div>
        </div>
    \`;
    
    modal.style.cssText = \`
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    \`;
    
    document.body.appendChild(modal);
    
    // Modal styling
    const style = document.createElement('style');
    style.textContent = \`
        .modal-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
        }
        .modal-content {
            position: relative;
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            max-width: 28rem;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #6b7280;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--color-text);
        }
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 1rem;
        }
        .form-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }
    \`;
    document.head.appendChild(style);
    
    // Close modal functionality
    const closeModal = () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-cancel').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    // Prevent modal content click from closing
    modal.querySelector('.modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Form submission
    modal.querySelector('.reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Reservation data:', data);
        showNotification('Резервацията е изпратена! Ще се свържем с вас скоро.');
        closeModal();
    });
}

// Add CSS animations
const animations = document.createElement('style');
animations.textContent = \`
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
\`;
document.head.appendChild(animations);

console.log('${businessData.name} Restaurant Template - Powered by Pravda Agency');`;
  }

  /**
   * Get feature icon for restaurant
   */
  private getFeatureIcon(iconName: string): string {
    const iconMap: Record<string, string> = {
      'Clock': '🕐',
      'Car': '🚗',
      'CreditCard': '💳',
      'Users': '👥',
      'Utensils': '🍽️',
      'Camera': '📸',
      'Wine': '🍷',
      'Shield': '🛡️',
      'Award': '🏆',
      'Phone': '📞'
    };
    
    return iconMap[iconName] || '⭐';
  }

  /**
   * Extract location from business data
   */
  private extractLocation(businessData: BusinessData): string {
    return businessData.customizationData?.location || 'София';
  }
}