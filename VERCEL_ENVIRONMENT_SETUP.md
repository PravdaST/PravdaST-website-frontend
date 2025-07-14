# Vercel Environment Variables Setup

## 1. Кликнете "Environment Variables" в Vercel setup

## 2. Добавете тези променливи:

### Задължителни за email функционалност:
```
SENDGRID_API_KEY=sg-xxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=contact@pravdast.agency
```

### Задължителни за database:
```
DATABASE_URL=postgresql://user:password@host:port/database
```

### Задължителни за Klaviyo tracking:
```
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
```

### Опционални за production:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 3. След добавяне на Environment Variables - кликнете "Deploy"

## 4. Expected Build Output:
```
✓ Cloning repository
✓ Analyzing dependencies  
✓ Installing dependencies (npm install)
✓ Building Next.js application (npm run build)
✓ Optimizing pages and assets
✓ Deployment successful
```

## 5. Test Production URLs:
- **Homepage:** https://your-domain.vercel.app
- **Contact Form:** https://your-domain.vercel.app/contact
- **Sitemap:** https://your-domain.vercel.app/sitemap.xml
- **Blog:** https://your-domain.vercel.app/blog

## 6. Възможни грешки и решения:

### Грешка: "Module not found"
- **Решение:** Всички dependencies са в package.json

### Грешка: "Build failed"
- **Решение:** Проверете дали всички файлове са upload-нати в GitHub

### Грешка: "API route not found"
- **Решение:** Проверете дали src/app/api/ папката е upload-ната

## Status: Ready for deployment! 🚀