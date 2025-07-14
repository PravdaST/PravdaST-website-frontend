# VERCEL DEPLOYMENT FIX

## Проблем: "vite: command not found"

**Причина:** Vercel се опитва да build стария React/Vite проект вместо новия Next.js проект.

## РЕШЕНИЕ - Има 2 варианта:

### Вариант 1: Презапис на съществуващия repository (Бърз)

1. **В GitHub:** Идете в PravdaST/PravdaST-website-frontend
2. **Изтрийте всички файлове:** 
   - Кликнете всеки файл → Delete
   - Или: Settings → Delete repository → Create new with same name
3. **Upload новите Next.js файлове:**
   - Drag & drop всички файлове от pravda-final-nextjs/
   - Commit: "Replace with Next.js version - Production ready"

### Вариант 2: Нов repository + нов Vercel проект (Препоръчително)

1. **Създайте нов GitHub repository:**
   - Име: `pravdast-nextjs-production`
   - Upload всички файлове от pravda-final-nextjs/

2. **В Vercel създайте нов проект:**
   - Dashboard → Add New Project
   - Import новия repository
   - Framework: Next.js (auto-detect)

## След корекцията - Vercel настройки:

### Build Settings:
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### Environment Variables:
```
SENDGRID_API_KEY=sg-xxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=contact@pravdast.agency
DATABASE_URL=postgresql://user:pass@host:port/db
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
```

### Expected Build Log (Success):
```
✓ Cloning repository
✓ Installing dependencies (npm install)
✓ Building Next.js application (npm run build)
✓ Optimizing pages and assets
✓ Deployment ready
```

## Проверка след deploy:

```bash
curl https://your-domain.vercel.app
curl https://your-domain.vercel.app/sitemap.xml
curl https://your-domain.vercel.app/api/contacts -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Deploy test"}'
```

**Препоръка:** Използвайте Вариант 2 за чист старт.