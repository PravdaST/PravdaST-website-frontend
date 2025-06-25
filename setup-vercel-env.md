# Setup Environment Variables in Vercel

Новата Neon база данни е създадена успешно, но трябва да настроим environment variables в Vercel.

## Стъпки:

1. **Отидете в Vercel Dashboard**
2. **Settings** → **Environment Variables**
3. **Проверете дали има DATABASE_DATABASE_URL** или **DATABASE_URL**
4. **Ако няма, добавете я ръчно:**
   - Key: `DATABASE_URL`
   - Value: Connection string от новата Neon база данни
   - Environments: Production, Preview, Development

## Алтернативно решение:

Понеже DATABASE_DATABASE_URL може да не е налична в production, всички API файлове са конфигурирани да използват fallback:

```javascript
const dbUrl = process.env.DATABASE_DATABASE_URL || process.env.DATABASE_URL;
```

Това означава че ще работи с всяка от двете променливи.

## Следващи стъпки:

1. Проверете environment variables в Vercel
2. Redeploy приложението
3. Тествайте /admin-pravda логин с admin/pravda2025

База данни е готова и съдържа:
- ✓ users table с admin user
- ✓ admin_sessions table  
- ✓ blog_posts table
- ✓ contacts table

Всички API endpoints са обновени за новата база данни.