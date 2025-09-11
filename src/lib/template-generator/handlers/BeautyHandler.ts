import { BusinessData, GeneratedContent, TemplateFile, MenuCategory } from '../types';
import { BaseHandler } from './BaseHandler';

export class BeautyHandler extends BaseHandler {

  async generateMenuCategories(businessData: BusinessData): Promise<MenuCategory[]> {
    return [
      {
        name: "Грижа за лицето",
        icon: "✨",
        items: [
          { name: "Почистване на лице", price: 45, description: "Дълбоко почистване с професионални продукти" },
          { name: "Хидратираща терапия", price: 60, description: "Интензивна хидратация за всички типове кожа" },
          { name: "Антиейдж терапия", price: 85, description: "Процедура против стареене" },
          { name: "Масаж на лице", price: 40, description: "Релаксиращ масаж за тонус" }
        ]
      },
      {
        name: "Грижа за косата",
        icon: "💇‍♀️",
        items: [
          { name: "Подстригване", price: 35, description: "Професионално подстригване според типа лице" },
          { name: "Боядисване", price: 80, description: "Боядисване с качествени продукти" },
          { name: "Балеаж", price: 120, description: "Модерна техника за естествен ефект" },
          { name: "Възстановяваща терапия", price: 65, description: "Дълбоко възстановяване на косата" }
        ]
      },
      {
        name: "Маникюр и педикюр",
        icon: "💅",
        items: [
          { name: "Класически маникюр", price: 25, description: "Професионален маникюр с лак" },
          { name: "Гел лак", price: 35, description: "Дълготраен гел лак до 3 седмици" },
          { name: "Педикюр", price: 40, description: "Пълен педикюр с грижа за краката" },
          { name: "Nail Art", price: 15, description: "Художествени декорации на ноктите" }
        ]
      },
      {
        name: "Тяло и релакс",
        icon: "🧘‍♀️",
        items: [
          { name: "Релаксиращ масаж", price: 70, description: "60 минути пълно релаксиране" },
          { name: "Антицелулитен масаж", price: 85, description: "Специализиран масаж срещу целулит" },
          { name: "Епилация", price: 50, description: "Професионална епилация с восък" },
          { name: "Скраб за тяло", price: 45, description: "Ексфолиация и хидратация" }
        ]
      }
    ];
  }

  async generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]> {
    const files: TemplateFile[] = [];

    files.push({
      path: 'index.html',
      content: this.generateBeautyHTML(content, businessData),
      type: 'html'
    });

    files.push({
      path: 'styles.css',
      content: this.generateBeautyCSS(content),
      type: 'css'
    });

    files.push({
      path: 'scripts.js',
      content: this.generateBeautyJS(content, businessData),
      type: 'js'
    });

    return files;
  }

  private generateBeautyHTML(content: GeneratedContent, businessData: BusinessData): string {
    const { businessInfo, menuCategories, features, reviews, colorScheme } = content;
    
    return `<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name} - ${businessInfo.tagline}</title>
    <meta name="description" content="${businessInfo.description}">
    <meta name="keywords" content="${businessData.name}, красота, салон, процедури, ${this.extractLocation(businessData)}">
    
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
                    <span class="icon">✨</span>
                    <span>САЛОН ЗА КРАСОТА</span>
                    <span class="icon">💆‍♀️</span>
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
                        <span class="icon">✨</span>
                        НАШИТЕ ПРОЦЕДУРИ
                    </a>
                    <a href="#booking" class="btn btn-outline">
                        <span class="icon">📅</span>
                        ЗАПАЗИ ЧАС
                    </a>
                </div>

                <div class="hero-info">
                    <div class="info-item">
                        <span class="icon">🏆</span>
                        <span>Сертифицирани специалисти</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">✨</span>
                        <span>Качествени продукти</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">💆‍♀️</span>
                        <span>Релаксираща атмосфера</span>
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
                <div class="section-badge">НАШИТЕ ПРОЦЕДУРИ</div>
                <h2 class="section-title">Професионални процедури за красота</h2>
                <p class="section-desc">Грижа и внимание към всеки детайл за вашата красота и комфорт</p>
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
                                            <span class="price">${item.price.toFixed(0)} лв</span>
                                            <button class="book-service">Запази час</button>
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

    <section class="gallery section bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Нашата работа говори за себе си</h2>
                <p class="section-desc">Преди и след - вижте резултатите от нашите процедури</p>
            </div>
            
            <div class="gallery-grid">
                ${Array(6).fill(0).map((_, i) => `
                    <div class="gallery-item">
                        <div class="gallery-image">
                            <span class="gallery-placeholder">✨</span>
                            <div class="gallery-overlay">
                                <h4>Резултат ${i + 1}</h4>
                                <p>Преди и след процедура</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section class="reviews section">
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

    <section id="booking" class="booking section bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Запазете час за процедура</h2>
                <p class="section-desc">Изберете удобно време и се насладете на професионални грижи</p>
            </div>
            
            <div class="booking-content">
                <div class="booking-form card">
                    <form class="appointment-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Име и фамилия</label>
                                <input type="text" name="name" required>
                            </div>
                            <div class="form-group">
                                <label>Телефон</label>
                                <input type="tel" name="phone" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Процедура</label>
                                <select name="service" required>
                                    <option value="">Изберете процедура</option>
                                    ${menuCategories?.flatMap(cat => 
                                        cat.items.map(item => `<option value="${item.name}">${item.name}</option>`)
                                    ).join('')}
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Специалист</label>
                                <select name="specialist">
                                    <option value="">Без предпочитание</option>
                                    <option value="maria">Мария - косметик</option>
                                    <option value="ana">Анна - фризьор</option>
                                    <option value="elena">Елена - маникюрист</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Дата</label>
                                <input type="date" name="date" required>
                            </div>
                            <div class="form-group">
                                <label>Час</label>
                                <select name="time" required>
                                    <option value="">Изберете час</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Допълнителни бележки (незадължително)</label>
                            <textarea name="notes" rows="3" placeholder="Алергии, специални изисквания..."></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-full">
                            <span class="icon">📅</span>
                            ЗАПАЗИ ЧАС
                        </button>
                    </form>
                </div>
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

  private generateBeautyCSS(content: GeneratedContent): string {
    return `${this.generateBaseCSS(content)}

/* Beauty salon specific styles */
.hero-background {
    background: linear-gradient(135deg, #be185d 0%, #db2777 50%, #ec4899 100%);
    opacity: 0.9;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .gallery-grid { grid-template-columns: repeat(3, 1fr); }
}

.gallery-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
}

.gallery-image {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--color-light) 0%, #fce7f3 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.gallery-image:hover {
    transform: scale(1.05);
}

.gallery-placeholder {
    font-size: 3rem;
    color: var(--color-primary);
}

.gallery-overlay {
    position: absolute;
    inset: 0;
    background: rgba(219, 39, 119, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1rem;
    text-align: center;
}

.gallery-image:hover .gallery-overlay {
    opacity: 1;
}

.booking-content {
    max-width: 600px;
    margin: 0 auto;
}

.booking-form {
    padding: 2rem;
}

.appointment-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}

@media (min-width: 768px) {
    .form-row { grid-template-columns: repeat(2, 1fr); }
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: 600;
    color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(219, 39, 119, 0.1);
}

.btn-full {
    width: 100%;
    justify-content: center;
    font-size: 1.125rem;
    padding: 1rem 2rem;
}

.book-service {
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

.book-service:hover {
    background: var(--color-secondary);
    transform: scale(1.05);
}`;
  }

  private generateBeautyJS(content: GeneratedContent, businessData: BusinessData): string {
    return `${this.generateBaseJS()}

// Beauty salon specific functionality
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
    
    // Book service buttons
    const bookButtons = document.querySelectorAll('.book-service');
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const serviceName = this.closest('.service-item').querySelector('.item-name').textContent;
            
            // Scroll to booking section and pre-select service
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                const serviceSelect = document.querySelector('select[name="service"]');
                if (serviceSelect) {
                    serviceSelect.value = serviceName;
                    serviceSelect.focus();
                }
            }, 500);
            
            showNotification(\`Изберете час за: \${serviceName} ✨\`);
        });
    });
    
    // Appointment form
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Appointment booking:', data);
            showNotification('Часът е запазен! Ще получите SMS потвърждение. ✨');
            this.reset();
        });
    }
    
    // Gallery lightbox effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            showGalleryModal(index);
        });
    });
    
    // Set minimum date for appointment booking
    const dateInput = document.querySelector('input[name="date"]');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }
});

function showGalleryModal(imageIndex) {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = \`
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>✨ Нашата работа - Резултат \${imageIndex + 1}</h3>
                    <button class="modal-close">✕</button>
                </div>
                <div class="gallery-modal-content">
                    <div class="before-after">
                        <div class="before-image">
                            <h4>Преди</h4>
                            <div class="image-placeholder">📷</div>
                        </div>
                        <div class="after-image">
                            <h4>След</h4>
                            <div class="image-placeholder">✨</div>
                        </div>
                    </div>
                    <p class="result-description">
                        Професионална процедура за красота с видими резултати. 
                        Нашите специалисти използват най-качествените продукти и техники.
                    </p>
                    <a href="#booking" class="btn btn-primary">
                        <span class="icon">📅</span>
                        Запази час за процедура
                    </a>
                </div>
            </div>
        </div>
    \`;
    
    // Style the modal
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
    
    const closeModal = () => document.body.removeChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    modal.querySelector('.modal-content').addEventListener('click', (e) => e.stopPropagation());
    
    // Navigate to booking if button clicked
    modal.querySelector('a[href="#booking"]').addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });
}

console.log('${businessData.name} Beauty Salon Template - Powered by Pravda Agency');`;
  }

  private getFeatureIcon(iconName: string): string {
    const iconMap: Record<string, string> = {
      'Sparkles': '✨',
      'Clock': '🕐',
      'Heart': '💖',
      'Shield': '🛡️',
      'Users': '👥',
      'Camera': '📸',
      'Award': '🏆',
      'Star': '⭐'
    };
    
    return iconMap[iconName] || '✨';
  }

}