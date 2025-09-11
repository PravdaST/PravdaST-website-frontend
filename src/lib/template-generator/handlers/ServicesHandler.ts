import { BusinessData, GeneratedContent, TemplateFile, MenuCategory } from '../types';
import { BaseHandler } from './BaseHandler';

export class ServicesHandler extends BaseHandler {

  async generateMenuCategories(businessData: BusinessData): Promise<MenuCategory[]> {
    return [
      {
        name: "Основни услуги",
        icon: "🔧",
        items: [
          { name: "Консултации", price: 80, description: "Професионални консултации и съвети" },
          { name: "Диагностика", price: 50, description: "Пълна диагностика и анализ" },
          { name: "Ремонт", price: 120, description: "Качествен ремонт с гаранция" },
          { name: "Поддръжка", price: 60, description: "Редовна поддръжка и профилактика" }
        ]
      },
      {
        name: "Специализирани",
        icon: "⚡",
        items: [
          { name: "Експресни услуги", price: 150, description: "Бързо изпълнение до 24 часа" },
          { name: "VIP пакети", price: 300, description: "Премиум обслужване" },
          { name: "Абонаментни", price: 200, description: "Месечни пакети за редовни клиенти" }
        ]
      },
      {
        name: "Допълнителни",
        icon: "📋",
        items: [
          { name: "Обучение", price: 100, description: "Обучение на персонал" },
          { name: "Сертификация", price: 250, description: "Издаване на сертификати" },
          { name: "Техническа поддръжка", price: 80, description: "24/7 техническа поддръжка" }
        ]
      }
    ];
  }

  async generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]> {
    const files: TemplateFile[] = [];

    files.push({
      path: 'index.html',
      content: this.generateServicesHTML(content, businessData),
      type: 'html'
    });

    files.push({
      path: 'styles.css',
      content: this.generateServicesCSS(content),
      type: 'css'
    });

    files.push({
      path: 'scripts.js',
      content: this.generateServicesJS(content, businessData),
      type: 'js'
    });

    return files;
  }

  private generateServicesHTML(content: GeneratedContent, businessData: BusinessData): string {
    const { businessInfo, menuCategories, features, reviews, colorScheme } = content;
    
    return `<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name} - ${businessInfo.tagline}</title>
    <meta name="description" content="${businessInfo.description}">
    <meta name="keywords" content="${businessData.name}, услуги, професионални, ${this.extractLocation(businessData)}">
    
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
    <section class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
            <div class="container">
                <div class="hero-badge">
                    <span class="icon">🏆</span>
                    <span>ПРОФЕСИОНАЛНИ УСЛУГИ</span>
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
                    <a href="#services" class="btn btn-primary">
                        <span class="icon">🔧</span>
                        НАШИТЕ УСЛУГИ
                    </a>
                    <a href="#contact" class="btn btn-outline">
                        <span class="icon">📞</span>
                        БЕЗПЛАТНА КОНСУЛТАЦИЯ
                    </a>
                </div>

                <div class="hero-info">
                    <div class="info-item">
                        <span class="icon">⚡</span>
                        <span>Бързо изпълнение</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">🛡️</span>
                        <span>Пълна гаранция</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">📞</span>
                        <span>24/7 поддръжка</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

    <section id="services" class="services section">
        <div class="container">
            <div class="section-header text-center">
                <div class="section-badge">НАШИТЕ УСЛУГИ</div>
                <h2 class="section-title">Професионални решения за всяка нужда</h2>
                <p class="section-desc">Опит, качество и гарантирани резултати във всеки проект</p>
            </div>

            <div class="services-filters">
                ${menuCategories?.map((category, index) => `
                    <button class="service-filter ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-name">${category.name}</span>
                    </button>
                `).join('')}
            </div>

            <div class="services-content">
                ${menuCategories?.map((category, index) => `
                    <div class="service-category ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <div class="card">
                            <div class="category-header">
                                <span class="category-icon">${category.icon}</span>
                                <h3 class="category-title">${category.name}</h3>
                            </div>
                            
                            <div class="service-items">
                                ${category.items.map(item => `
                                    <div class="service-item">
                                        <div class="item-info">
                                            <h4 class="item-name">${item.name}</h4>
                                            <p class="item-desc">${item.description}</p>
                                        </div>
                                        <div class="item-price">
                                            <span class="price">${item.price > 0 ? `${item.price.toFixed(0)} лв` : 'По договаряне'}</span>
                                            <button class="request-quote">Запитване</button>
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
                <div class="contact-form">
                    <h2 class="section-title">Безплатна консултация</h2>
                    <form class="consultation-form">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Вашето име" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" name="phone" placeholder="Телефон" required>
                        </div>
                        <div class="form-group">
                            <select name="service" required>
                                <option value="">Изберете услуга</option>
                                <option value="consultation">Консултация</option>
                                <option value="repair">Ремонт</option>
                                <option value="maintenance">Поддръжка</option>
                                <option value="other">Друго</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea name="message" placeholder="Опишете накратко нуждата си..." rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <span class="icon">📞</span>
                            ИЗПРАТИ ЗАПИТВАНЕ
                        </button>
                    </form>
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

  private generateServicesCSS(content: GeneratedContent): string {
    return `${this.generateBaseCSS(content)}

/* Services-specific styles */
.hero-background {
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);
    opacity: 0.9;
}

.services-filters {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.service-filter {
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

.service-filter:hover {
    background: #e5e7eb;
    color: var(--color-text);
}

.service-filter.active {
    background: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
}

.service-category {
    display: none;
}

.service-category.active {
    display: block;
}

.service-items {
    margin-bottom: 2rem;
}

.service-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem;
    background: #f9fafb;
    border-radius: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
}

.service-item:hover {
    background: #f3f4f6;
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.item-price {
    margin-left: 1.5rem;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.request-quote {
    padding: 0.5rem 1rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.request-quote:hover {
    background: var(--color-secondary);
    transform: scale(1.05);
}

.contact-form {
    background: var(--color-light);
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid var(--color-accent);
}

.consultation-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}`;
  }

  private generateServicesJS(content: GeneratedContent, businessData: BusinessData): string {
    return `${this.generateBaseJS()}

// Services-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Service filter functionality
    const serviceFilters = document.querySelectorAll('.service-filter');
    const serviceCategories = document.querySelectorAll('.service-category');
    
    serviceFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            serviceFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            serviceCategories.forEach(category => {
                category.classList.remove('active');
                if (category.getAttribute('data-category') === targetCategory) {
                    category.classList.add('active');
                }
            });
        });
    });
    
    // Quote request functionality
    const quoteButtons = document.querySelectorAll('.request-quote');
    quoteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const serviceName = this.closest('.service-item').querySelector('.item-name').textContent;
            showQuoteModal(serviceName);
        });
    });
    
    // Consultation form
    const consultationForm = document.querySelector('.consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Consultation request:', data);
            showNotification('Запитването е изпратено! Ще се свържем с вас в рамките на 1 час.');
            this.reset();
        });
    }
});

function showQuoteModal(serviceName) {
    const modal = document.createElement('div');
    modal.className = 'quote-modal';
    modal.innerHTML = \`
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🔧 Запитване за: \${serviceName}</h3>
                    <button class="modal-close">✕</button>
                </div>
                <form class="quote-form">
                    <div class="form-group">
                        <label>Име и фамилия</label>
                        <input type="text" name="name" required>
                    </div>
                    <div class="form-group">
                        <label>Телефон</label>
                        <input type="tel" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label>Имейл</label>
                        <input type="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label>Подробности за услугата</label>
                        <textarea name="details" rows="4" placeholder="Опишете накратко какво ви е необходимо..."></textarea>
                    </div>
                    <div class="form-group">
                        <label>Предпочитано време за обаждане</label>
                        <select name="call_time">
                            <option value="">Изберете</option>
                            <option value="morning">Сутрин (09:00-12:00)</option>
                            <option value="afternoon">Следобед (12:00-17:00)</option>
                            <option value="evening">Вечер (17:00-19:00)</option>
                        </select>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Изпрати запитване</button>
                        <button type="button" class="btn btn-outline modal-cancel">Отказ</button>
                    </div>
                </form>
            </div>
        </div>
    \`;
    
    document.body.appendChild(modal);
    
    const closeModal = () => document.body.removeChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-cancel').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    modal.querySelector('.modal-content').addEventListener('click', (e) => e.stopPropagation());
    
    modal.querySelector('.quote-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        data.service = serviceName;
        
        console.log('Quote request:', data);
        showNotification('Запитването за оферта е изпратено! Ще получите отговор до 2 часа.');
        closeModal();
    });
}

console.log('${businessData.name} Services Template - Powered by Pravda Agency');`;
  }

  private getFeatureIcon(iconName: string): string {
    const iconMap: Record<string, string> = {
      'Award': '🏆',
      'Clock': '🕐',
      'Phone': '📞',
      'Shield': '🛡️',
      'Users': '👥',
      'CreditCard': '💳',
      'Tools': '🔧',
      'Lightning': '⚡'
    };
    
    return iconMap[iconName] || '🔧';
  }

}