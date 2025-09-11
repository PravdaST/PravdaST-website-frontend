import { BusinessData, GeneratedContent, TemplateFile, MenuCategory } from '../types';
import { BaseHandler } from './BaseHandler';

export class ShopHandler extends BaseHandler {

  /**
   * Generate product categories for shops
   */
  async generateMenuCategories(businessData: BusinessData): Promise<MenuCategory[]> {
    return [
      {
        name: "Нови продукти",
        icon: "🆕",
        items: [
          { name: "Най-новите стоки", price: 0, description: "Последните постъпления в нашия магазин" },
          { name: "Trending продукти", price: 0, description: "Най-търсените артикули" },
          { name: "Препоръчани", price: 0, description: "Нашите топ препоръки за вас" }
        ]
      },
      {
        name: "Категории",
        icon: "📦",
        items: [
          { name: "Електроника", price: 0, description: "Телефони, лаптопи, аксесоари" },
          { name: "Мода", price: 0, description: "Дрехи, обувки, аксесоари" },
          { name: "Дом и градина", price: 0, description: "Мебели, декорация, инструменти" },
          { name: "Спорт и хоби", price: 0, description: "Спортни стоки и аксесоари" }
        ]
      },
      {
        name: "Промоции",
        icon: "🔥",
        items: [
          { name: "До -50% намаление", price: 0, description: "Специални промоционални цени" },
          { name: "Безплатна доставка", price: 0, description: "При поръчки над 50 лв" },
          { name: "2+1 БЕЗПЛАТНО", price: 0, description: "При избрани продукти" }
        ]
      },
      {
        name: "Услуги",
        icon: "🛠️",
        items: [
          { name: "Бърза доставка", price: 0, description: "В рамките на 24 часа" },
          { name: "Монтаж", price: 0, description: "Професионален монтаж при нужда" },
          { name: "Гаранция", price: 0, description: "Удължена гаранция за всички продукти" }
        ]
      }
    ];
  }

  /**
   * Generate shop template files
   */
  async generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]> {
    const files: TemplateFile[] = [];

    files.push({
      path: 'index.html',
      content: this.generateShopHTML(content, businessData),
      type: 'html'
    });

    files.push({
      path: 'styles.css',
      content: this.generateShopCSS(content),
      type: 'css'
    });

    files.push({
      path: 'scripts.js',
      content: this.generateShopJS(content, businessData),
      type: 'js'
    });

    return files;
  }

  private generateShopHTML(content: GeneratedContent, businessData: BusinessData): string {
    const { businessInfo, menuCategories, features, reviews, colorScheme } = content;
    
    return `<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name} - ${businessInfo.tagline}</title>
    <meta name="description" content="${businessInfo.description}">
    <meta name="keywords" content="${businessData.name}, магазин, онлайн, продукти, ${this.extractLocation(businessData)}">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    
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
                    <span class="icon">🛒</span>
                    <span>ОНЛАЙН МАГАЗИН</span>
                    <span class="icon">✨</span>
                </div>
                
                <h1 class="hero-title">${businessInfo.name.toUpperCase()}</h1>
                <p class="hero-tagline">${businessInfo.tagline}</p>
                
                <div class="hero-rating">
                    <div class="stars">${'★'.repeat(5)}</div>
                    <span class="rating-value">${businessInfo.rating}</span>
                    <span class="rating-count">(${businessInfo.reviews} отзива)</span>
                </div>

                <div class="hero-actions">
                    <a href="#products" class="btn btn-primary">
                        <span class="icon">🛒</span>
                        РАЗГЛЕДАЙ ПРОДУКТИТЕ
                    </a>
                    <a href="#contact" class="btn btn-outline">
                        <span class="icon">📞</span>
                        СВЪРЖИ СЕ С НАС
                    </a>
                </div>

                <div class="hero-info">
                    <div class="info-item">
                        <span class="icon">🚚</span>
                        <span>Безплатна доставка над 50лв</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">💳</span>
                        <span>Сигурно плащане</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">🔄</span>
                        <span>30 дни връщане</span>
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

    <!-- Products Section -->
    <section id="products" class="products section">
        <div class="container">
            <div class="section-header text-center">
                <div class="section-badge">НАШИТЕ ПРОДУКТИ</div>
                <h2 class="section-title">Качествени продукти на достъпни цени</h2>
                <p class="section-desc">Широк избор от продукти с гарантирано качество и бърза доставка</p>
            </div>

            <div class="products-filters">
                ${menuCategories?.map((category, index) => `
                    <button class="product-filter ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-name">${category.name}</span>
                    </button>
                `).join('')}
            </div>

            <div class="products-content">
                ${menuCategories?.map((category, index) => `
                    <div class="product-category ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <div class="card">
                            <div class="category-header">
                                <span class="category-icon">${category.icon}</span>
                                <h3 class="category-title">${category.name}</h3>
                            </div>
                            
                            <div class="product-grid">
                                ${category.items.map(item => `
                                    <div class="product-item">
                                        <div class="product-image">📦</div>
                                        <div class="product-info">
                                            <h4 class="product-name">${item.name}</h4>
                                            <p class="product-desc">${item.description}</p>
                                            <div class="product-actions">
                                                <button class="btn btn-primary btn-small">
                                                    <span class="icon">🛒</span>
                                                    ВИЖДАНЕ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Reviews & Contact sections similar to other templates -->
    <section class="reviews section bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Какво казват нашите клиенти</h2>
            </div>
            <div class="reviews-grid">
                ${reviews.map(review => `
                    <div class="review-card card">
                        <div class="review-stars">${'★'.repeat(review.rating)}</div>
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
                </div>
                <div class="contact-map">
                    <h2 class="section-title">Как да ни намерите</h2>
                    <div class="map-placeholder card">
                        <div class="map-content">
                            <div class="map-icon">📍</div>
                            <p class="map-title">Интерактивна карта</p>
                            <p class="map-desc">GPS координати и маршрути</p>
                            <a href="#" class="btn btn-primary">Отвори в Google Maps</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

    <script src="scripts.js"></script>
</body>
</html>`;
  }

  private generateShopCSS(content: GeneratedContent): string {
    return `${this.generateBaseCSS(content)}

/* Shop-specific styles */
.hero-background {
    background: linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%);
    opacity: 0.9;
}

.hero-background::before {
    background: rgba(0, 0, 0, 0.3);
}

.products-filters {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.product-filter {
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

.product-filter:hover {
    background: #e5e7eb;
    color: var(--color-text);
}

.product-filter.active {
    background: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(5, 150, 105, 0.3);
}

.product-category {
    display: none;
}

.product-category.active {
    display: block;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
}

@media (min-width: 768px) {
    .product-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .product-grid { grid-template-columns: repeat(3, 1fr); }
}

.product-item {
    background: #f9fafb;
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    cursor: pointer;
}

.product-item:hover {
    background: #f3f4f6;
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.product-image {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1rem;
    padding: 2rem;
    background: var(--color-light);
    border-radius: 0.5rem;
}

.product-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.5rem;
}

.product-desc {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.product-actions {
    display: flex;
    justify-content: center;
}

.btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}`;
  }

  private generateShopJS(content: GeneratedContent, businessData: BusinessData): string {
    return `${this.generateBaseJS()}

// Shop-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product filter functionality
    const productFilters = document.querySelectorAll('.product-filter');
    const productCategories = document.querySelectorAll('.product-category');
    
    productFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            productFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            productCategories.forEach(category => {
                category.classList.remove('active');
                if (category.getAttribute('data-category') === targetCategory) {
                    category.classList.add('active');
                }
            });
        });
    });
    
    // Product click tracking
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            showNotification(\`Интересувате се от: \${productName}\`);
        });
    });
});

console.log('${businessData.name} Shop Template - Powered by Pravda Agency');`;
  }

  private getFeatureIcon(iconName: string): string {
    const iconMap: Record<string, string> = {
      'ShoppingCart': '🛒',
      'CreditCard': '💳',
      'Truck': '🚚',
      'Phone': '📞',
      'Award': '🏆',
      'Users': '👥',
      'Shield': '🛡️',
      'Clock': '🕐'
    };
    
    return iconMap[iconName] || '🛒';
  }

  private extractLocation(businessData: BusinessData): string {
    return businessData.customizationData?.location || 'София';
  }
}