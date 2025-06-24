# Strapi Local Setup и Content Types

## 1. Настройка на локален Strapi

```bash
# Вече инсталиран локален Strapi на порт 1337
cd pravdast-cms
npm run develop
```

## 2. Content Types за създаване

### А) Pages Content Type
**Collection: `pages`**

Полета:
- `title` (Text) - Заглавие на страницата
- `slug` (UID based on title) - URL slug
- `content` (Rich Text) - Основно съдържание
- `excerpt` (Text) - Кратко описание
- `seo` (Component - SEO)
- `published` (Boolean) - Публикувана ли е
- `featured_image` (Media) - Основна снимка

### Б) SEO Component
**Component: `seo`**

Полета:
- `meta_title` (Text) - SEO заглавие
- `meta_description` (Text) - SEO описание  
- `keywords` (Text) - Ключови думи
- `canonical_url` (Text) - Canonical URL
- `og_title` (Text) - Open Graph заглавие
- `og_description` (Text) - Open Graph описание
- `og_image` (Media) - Open Graph снимка
- `no_index` (Boolean) - Забрана за индексиране

### В) Services Content Type
**Collection: `services`**

Полета:
- `name` (Text) - Име на услугата
- `slug` (UID based on name) - URL slug
- `description` (Rich Text) - Описание
- `short_description` (Text) - Кратко описание
- `price` (Text) - Цена
- `features` (JSON) - Характеристики
- `seo` (Component - SEO)
- `icon` (Text) - Име на икона
- `published` (Boolean)

### Г) Blog Posts Content Type
**Collection: `blog-posts`**

Полета:
- `title` (Text) - Заглавие
- `slug` (UID based on title) - URL slug
- `content` (Rich Text) - Съдържание
- `excerpt` (Text) - Извадка
- `author` (Text) - Автор
- `published_at` (DateTime) - Дата на публикуване
- `featured_image` (Media) - Основна снимка
- `tags` (JSON) - Етикети
- `seo` (Component - SEO)
- `published` (Boolean)

### Д) Contact Messages Content Type
**Collection: `contact-messages`**

Полета:
- `name` (Text) - Име
- `email` (Email) - Имейл
- `phone` (Text) - Телефон
- `company` (Text) - Компания
- `message` (Text) - Съобщение
- `service_interest` (Text) - Интерес към услуга
- `status` (Enumeration: new, contacted, converted) - Статус
- `created_at` (DateTime) - Дата на създаване

## 3. API Permissions

### За публичен достъп (неautenticated):
- `pages` - find, findOne
- `services` - find, findOne  
- `blog-posts` - find, findOne
- `contact-messages` - create

### За API Token:
- Всички операции за всички Content Types

## 4. Стъпки за настройка

1. **Отвори Strapi Admin**: http://localhost:1337/admin
2. **Създай Content Types** (Content-Type Builder):
   - Създай SEO component първо
   - Добави всички полета според схемата
   - Настрой validations където е необходимо
3. **Настрой Permissions** (Settings > Roles):
   - Public role - ограничен достъп
   - Authenticated role - пълен достъп
4. **Генерирай API Token** (Settings > API Tokens):
   - Full access token за development
5. **Тествай API endpoints**:
   - GET /api/pages
   - GET /api/services  
   - POST /api/contact-messages

## 5. Миграция на данни

След създаване на Content Types, ще мигрираме:
- Статичните страници към Pages
- Услугите към Services
- SEO данните към съответните entities

## 6. Интеграция с Frontend

API ще работи автоматично:
- Development: http://localhost:1337/api
- Production: Cloud Strapi API

Конфигурацията вече е готова в `src/lib/strapi-api.ts`.