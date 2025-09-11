import { BusinessData, GeneratedContent, TemplateFile, MenuCategory } from '../types';
import { BaseHandler } from './BaseHandler';

export class EducationHandler extends BaseHandler {

  async generateMenuCategories(businessData: BusinessData): Promise<MenuCategory[]> {
    return [
      {
        name: "Общи курсове",
        icon: "📚",
        items: [
          { name: "Основи на компютрите", price: 180, description: "Въведение в работата с компютър и интернет" },
          { name: "Microsoft Office", price: 250, description: "Word, Excel, PowerPoint - пълен курс" },
          { name: "Дигитални умения", price: 200, description: "Работа с онлайн платформи и приложения" },
          { name: "Интернет безопасност", price: 120, description: "Сигурност в дигиталния свят" }
        ]
      },
      {
        name: "Професионални",
        icon: "💼",
        items: [
          { name: "Уеб дизайн", price: 400, description: "HTML, CSS, основи на дизайна" },
          { name: "Програмиране за начинаещи", price: 500, description: "JavaScript и основи на разработката" },
          { name: "Дигитален маркетинг", price: 350, description: "Реклама в социални мрежи" },
          { name: "Графичен дизайн", price: 450, description: "Photoshop, Illustrator, брандинг" }
        ]
      },
      {
        name: "Специализирани",
        icon: "🎯",
        items: [
          { name: "E-commerce", price: 300, description: "Създаване и управление на онлайн магазин" },
          { name: "SEO оптимизация", price: 280, description: "Оптимизация за търсачки" },
          { name: "Анализ на данни", price: 380, description: "Excel за напреднали, анализи" },
          { name: "Социални мрежи", price: 220, description: "Управление на бизнес профили" }
        ]
      },
      {
        name: "Персонални",
        icon: "🎓",
        items: [
          { name: "Индивидуални уроци", price: 60, description: "Персонализирано обучение 1-на-1" },
          { name: "Корпоративно обучение", price: 800, description: "Обучение на екипи и служители" },
          { name: "Онлайн консултации", price: 40, description: "Дистанционна помощ и съвети" },
          { name: "Практически проекти", price: 150, description: "Работа върху реални задачи" }
        ]
      }
    ];
  }

  async generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]> {
    const files: TemplateFile[] = [];

    files.push({
      path: 'index.html',
      content: this.generateEducationHTML(content, businessData),
      type: 'html'
    });

    files.push({
      path: 'styles.css',
      content: this.generateEducationCSS(content),
      type: 'css'
    });

    files.push({
      path: 'scripts.js',
      content: this.generateEducationJS(content, businessData),
      type: 'js'
    });

    return files;
  }

  private generateEducationHTML(content: GeneratedContent, businessData: BusinessData): string {
    const { businessInfo, menuCategories, features, reviews, colorScheme } = content;
    
    return `<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessInfo.name} - ${businessInfo.tagline}</title>
    <meta name="description" content="${businessInfo.description}">
    <meta name="keywords" content="${businessData.name}, образование, курсове, обучение, ${this.extractLocation(businessData)}">
    
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
                    <span class="icon">🎓</span>
                    <span>ОБРАЗОВАТЕЛЕН ЦЕНТЪР</span>
                    <span class="icon">📚</span>
                </div>
                
                <h1 class="hero-title">${businessInfo.name.toUpperCase()}</h1>
                <p class="hero-tagline">${businessInfo.tagline}</p>
                
                <div class="hero-rating">
                    <div class="stars">${'★'.repeat(5)}</div>
                    <span class="rating-value">${businessInfo.rating}</span>
                    <span class="rating-count">(${businessInfo.reviews} отзива)</span>
                </div>

                <div class="hero-actions">
                    <a href="#courses" class="btn btn-primary">
                        <span class="icon">📚</span>
                        НАШИТЕ КУРСОВЕ
                    </a>
                    <a href="#enrollment" class="btn btn-outline">
                        <span class="icon">✍️</span>
                        ЗАПИШИ СЕ СЕГА
                    </a>
                </div>

                <div class="hero-info">
                    <div class="info-item">
                        <span class="icon">🏆</span>
                        <span>Сертифицирани курсове</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">👨‍🏫</span>
                        <span>Опитни преподаватели</span>
                    </div>
                    <div class="info-item">
                        <span class="icon">💻</span>
                        <span>Онлайн и присъствено</span>
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

    <section id="courses" class="courses section">
        <div class="container">
            <div class="section-header text-center">
                <div class="section-badge">НАШИТЕ КУРСОВЕ</div>
                <h2 class="section-title">Качествено образование за бъдещето</h2>
                <p class="section-desc">Практически знания и умения от опитни преподаватели</p>
            </div>

            <div class="courses-filters">
                ${menuCategories?.map((category, index) => `
                    <button class="course-filter ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-name">${category.name}</span>
                    </button>
                `).join('')}
            </div>

            <div class="courses-content">
                ${menuCategories?.map((category, index) => `
                    <div class="course-category ${index === 0 ? 'active' : ''}" data-category="${category.name}">
                        <div class="card">
                            <div class="category-header">
                                <span class="category-icon">${category.icon}</span>
                                <h3 class="category-title">${category.name}</h3>
                            </div>
                            
                            <div class="course-items">
                                ${category.items.map(item => `
                                    <div class="course-item">
                                        <div class="course-icon">🎓</div>
                                        <div class="item-info">
                                            <h4 class="item-name">${item.name}</h4>
                                            <p class="item-desc">${item.description}</p>
                                            <div class="course-details">
                                                <span class="duration">⏱️ 4-6 седмици</span>
                                                <span class="level">📊 Всички нива</span>
                                                <span class="certificate">🏆 Сертификат</span>
                                            </div>
                                        </div>
                                        <div class="item-price">
                                            <span class="price">${item.price.toFixed(0)} лв</span>
                                            <button class="enroll-course">Запиши се</button>
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

    <section class="instructors section bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Нашите преподаватели</h2>
                <p class="section-desc">Опитни професионалисти с богат практически опит</p>
            </div>
            
            <div class="instructors-grid">
                ${Array(3).fill(0).map((_, i) => `
                    <div class="instructor-card card">
                        <div class="instructor-avatar">👨‍🏫</div>
                        <h4 class="instructor-name">Преподавател ${i + 1}</h4>
                        <p class="instructor-specialty">Специалист по IT технологии</p>
                        <p class="instructor-experience">10+ години опит</p>
                        <div class="instructor-skills">
                            <span class="skill">JavaScript</span>
                            <span class="skill">Web Design</span>
                            <span class="skill">Digital Marketing</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section class="reviews section">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Какво казват нашите студенти</h2>
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

    <section id="enrollment" class="enrollment section bg-light">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Запишете се за курс</h2>
                <p class="section-desc">Започнете пътя си към нови знания и умения</p>
            </div>
            
            <div class="enrollment-content">
                <div class="enrollment-form card">
                    <form class="course-enrollment-form">
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
                                <label>Имейл</label>
                                <input type="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label>Възраст</label>
                                <select name="age" required>
                                    <option value="">Изберете</option>
                                    <option value="18-25">18-25 години</option>
                                    <option value="26-35">26-35 години</option>
                                    <option value="36-45">36-45 години</option>
                                    <option value="46-55">46-55 години</option>
                                    <option value="55+">55+ години</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Интересуващ курс</label>
                                <select name="course" required>
                                    <option value="">Изберете курс</option>
                                    ${menuCategories?.flatMap(cat => 
                                        cat.items.map(item => `<option value="${item.name}">${item.name}</option>`)
                                    ).join('')}
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Предпочитание</label>
                                <select name="preference" required>
                                    <option value="">Изберете</option>
                                    <option value="online">Онлайн обучение</option>
                                    <option value="offline">Присъствено обучение</option>
                                    <option value="hybrid">Комбинирано</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Опит в областта</label>
                            <select name="experience" required>
                                <option value="">Изберете ниво</option>
                                <option value="beginner">Начинаещ</option>
                                <option value="intermediate">Средно ниво</option>
                                <option value="advanced">Напреднал</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Допълнителни въпроси (незадължително)</label>
                            <textarea name="questions" rows="3" placeholder="Имате ли въпроси или специални изисквания?"></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-full">
                            <span class="icon">🎓</span>
                            ЗАПИШИ СЕ ЗА КУРС
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

  private generateEducationCSS(content: GeneratedContent): string {
    return `${this.generateBaseCSS(content)}

/* Education specific styles */
.hero-background {
    background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #8b5cf6 100%);
    opacity: 0.9;
}

.courses-filters {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.course-filter {
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

.course-filter:hover {
    background: #e5e7eb;
    color: var(--color-text);
}

.course-filter.active {
    background: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(124, 58, 237, 0.3);
}

.course-category {
    display: none;
}

.course-category.active {
    display: block;
}

.course-item {
    display: flex;
    align-items: flex-start;
    padding: 2rem;
    background: #f9fafb;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
}

.course-item:hover {
    background: #f3f4f6;
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);
}

.course-icon {
    font-size: 3rem;
    margin-right: 1.5rem;
    color: var(--color-primary);
}

.course-details {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
}

.course-details span {
    font-size: 0.875rem;
    color: #6b7280;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.enroll-course {
    padding: 0.75rem 1.5rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.enroll-course:hover {
    background: var(--color-secondary);
    transform: scale(1.05);
}

.instructors-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
}

@media (min-width: 768px) {
    .instructors-grid { grid-template-columns: repeat(3, 1fr); }
}

.instructor-card {
    text-align: center;
    padding: 2rem;
}

.instructor-avatar {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.instructor-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.5rem;
}

.instructor-specialty {
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.instructor-experience {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.instructor-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.skill {
    background: var(--color-light);
    color: var(--color-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
}

.enrollment-content {
    max-width: 600px;
    margin: 0 auto;
}

.enrollment-form {
    padding: 2rem;
}

.course-enrollment-form {
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
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.btn-full {
    width: 100%;
    justify-content: center;
    font-size: 1.125rem;
    padding: 1rem 2rem;
}`;
  }

  private generateEducationJS(content: GeneratedContent, businessData: BusinessData): string {
    return `${this.generateBaseJS()}

// Education specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Course filter functionality
    const courseFilters = document.querySelectorAll('.course-filter');
    const courseCategories = document.querySelectorAll('.course-category');
    
    courseFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            courseFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            courseCategories.forEach(category => {
                category.classList.remove('active');
                if (category.getAttribute('data-category') === targetCategory) {
                    category.classList.add('active');
                }
            });
        });
    });
    
    // Enroll course buttons
    const enrollButtons = document.querySelectorAll('.enroll-course');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const courseName = this.closest('.course-item').querySelector('.item-name').textContent;
            
            // Scroll to enrollment section and pre-select course
            document.getElementById('enrollment').scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                const courseSelect = document.querySelector('select[name="course"]');
                if (courseSelect) {
                    courseSelect.value = courseName;
                    courseSelect.focus();
                }
            }, 500);
            
            showNotification(\`Записване за: \${courseName} 🎓\`);
        });
    });
    
    // Course enrollment form
    const enrollmentForm = document.querySelector('.course-enrollment-form');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Course enrollment:', data);
            showNotification('Записването е успешно! Ще получите информация за започване на курса. 🎓');
            this.reset();
        });
    }
    
    // Course info tooltips
    const courseItems = document.querySelectorAll('.course-item');
    courseItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const courseName = this.querySelector('.item-name').textContent;
            this.setAttribute('title', \`Кликнете за повече информация за: \${courseName}\`);
        });
        
        item.addEventListener('click', function() {
            const courseName = this.querySelector('.item-name').textContent;
            const courseDesc = this.querySelector('.item-desc').textContent;
            const coursePrice = this.querySelector('.price').textContent;
            
            showCourseModal(courseName, courseDesc, coursePrice);
        });
    });
});

function showCourseModal(courseName, courseDesc, coursePrice) {
    const modal = document.createElement('div');
    modal.className = 'course-modal';
    modal.innerHTML = \`
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎓 \${courseName}</h3>
                    <button class="modal-close">✕</button>
                </div>
                <div class="course-modal-content">
                    <div class="course-info">
                        <h4>Описание на курса</h4>
                        <p>\${courseDesc}</p>
                        
                        <h4>Какво ще научите:</h4>
                        <ul>
                            <li>✅ Практически знания и умения</li>
                            <li>✅ Работа с реални проекти</li>
                            <li>✅ Сертификат за завършване</li>
                            <li>✅ Подкрепа от преподавателите</li>
                        </ul>
                        
                        <h4>Детайли за курса:</h4>
                        <div class="course-details-modal">
                            <div class="detail">
                                <span class="label">Продължителност:</span>
                                <span class="value">4-6 седмици</span>
                            </div>
                            <div class="detail">
                                <span class="label">Занятия седмично:</span>
                                <span class="value">2 x 2 часа</span>
                            </div>
                            <div class="detail">
                                <span class="label">Максимален брой:</span>
                                <span class="value">12 участници</span>
                            </div>
                            <div class="detail">
                                <span class="label">Цена:</span>
                                <span class="value">\${coursePrice}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <a href="#enrollment" class="btn btn-primary">
                            <span class="icon">✍️</span>
                            Запиши се за курса
                        </a>
                        <button class="btn btn-outline" onclick="window.open('tel:${content.businessInfo?.phone || ''}', '_self')">
                            <span class="icon">📞</span>
                            Обади се за въпроси
                        </button>
                    </div>
                </div>
            </div>
        </div>
    \`;
    
    document.body.appendChild(modal);
    
    const closeModal = () => document.body.removeChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    modal.querySelector('.modal-content').addEventListener('click', (e) => e.stopPropagation());
    
    // Navigate to enrollment if button clicked
    modal.querySelector('a[href="#enrollment"]').addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
        document.getElementById('enrollment').scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            const courseSelect = document.querySelector('select[name="course"]');
            if (courseSelect) {
                courseSelect.value = courseName;
            }
        }, 500);
    });
}

console.log('${businessData.name} Education Template - Powered by Pravda Agency');`;
  }

  private getFeatureIcon(iconName: string): string {
    const iconMap: Record<string, string> = {
      'GraduationCap': '🎓',
      'Users': '👥',
      'Clock': '🕐',
      'Laptop': '💻',
      'Award': '🏆',
      'BookOpen': '📖',
      'Star': '⭐',
      'Shield': '🛡️'
    };
    
    return iconMap[iconName] || '🎓';
  }

  private extractLocation(businessData: BusinessData): string {
    return businessData.customizationData?.location || 'София';
  }
}