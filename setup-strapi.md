# Автоматична настройка на Strapi Content Types

## Стъпки за изпълнение:

### 1. Стартирай локалния Strapi
```bash
cd pravdast-cms
npm run develop
```
Strapi ще стартира на http://localhost:1337

### 2. Създай admin потребител
- Отвори http://localhost:1337/admin
- Създай първоначален admin акаунт
- Влез в admin панела

### 3. Генерирай API Token
- Settings > API Tokens > Create new API Token
- Name: "Development Token"
- Token type: Full Access
- Copy the generated token (това е твоят Full Access token)

### 4. Изпълни setup script
```bash
# В главната директория на проекта
node strapi-setup-script.js
```

Script-ът автоматично ще създаде:
- SEO Component (shared.seo)
- Pages Content Type
- Services Content Type  
- Blog Posts Content Type
- Contact Messages Content Type

### 5. Настрой Permissions
След създаване на Content Types:

**Settings > Roles > Public role:**
- pages: find, findOne ✓
- services: find, findOne ✓
- blog-posts: find, findOne ✓
- contact-messages: create ✓

**Settings > Roles > Authenticated:**
- Всички permissions ✓

### 6. Тествай интеграцията
Отвори http://localhost:5000/strapi-test в браузъра за да видиш статуса на връзката.

### 7. Добави тестово съдържание
Създай няколко записа в:
- Pages (за главната страница)
- Services (за услугите)
- За тестване на API endpoints

## Troubleshooting

**Ако Strapi не стартира на порт 1337:**
Промени порта в `strapi-setup-script.js` на реда 4

**Ако има грешки при създаване:**
Script-ът ще покаже конкретната грешка и кои Content Types са създадени успешно.

**Ако API Token не работи:**
Провери дали token-ът е "Full Access" и копиран правилно в script-а.