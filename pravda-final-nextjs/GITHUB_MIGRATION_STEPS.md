# GitHub Integration - Стъпка по стъпка решение

## Проблем: Replit Git pane показва грешка

**Причина:** Replit има защитени .git файлове и съществуващия repository е свързан със стария проект.

## Решение 1: Използване на GitHub Web Interface (Препоръчително)

### Стъпка 1: Създайте нов GitHub Repository
1. Идете на [github.com](https://github.com)
2. Кликнете "New repository"
3. Име: `pravdast-nextjs-final`
4. Description: `Pravdast Agency - Next.js Business Engineering Platform`
5. Изберете Public/Private според предпочитанията ви
6. ✅ Добавете README.md
7. ✅ Добавете .gitignore (Node.js)
8. Кликнете "Create repository"

### Стъпка 2: Upload файловете директно в GitHub
1. В новия repository кликнете "uploading an existing file"
2. Drag & drop всички файлове от `pravda-final-nextjs/` папката
3. Commit message: "Initial commit: Next.js migration complete"
4. Кликнете "Commit changes"

## Решение 2: Използване на Git през командния ред

### Вариант A: Нов repository
```bash
# В GitHub създайте нов празен repository, после:
cd pravda-final-nextjs
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/pravdast-nextjs-final.git
git push -u origin main
```

### Вариант B: Презапис на съществуващия repository
```bash
# ⚠️ ВНИМАНИЕ: Това ще изтрие стария код!
cd pravda-final-nextjs
git remote set-url origin https://github.com/PravdaST/PravdaST-website-frontend.git
git push --force origin main
```

## След GitHub upload - Vercel Deployment

### Стъпка 1: Свържете Vercel с GitHub
1. Идете на [vercel.com](https://vercel.com)
2. Влезте с GitHub account
3. Кликнете "Add New Project"
4. Изберете новия `pravdast-nextjs-final` repository
5. Framework: Next.js (auto-detected)
6. Root Directory: оставете празно или `./`

### Стъпка 2: Environment Variables
Добавете в Vercel → Settings → Environment Variables:

```bash
SENDGRID_API_KEY=sg-xxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=contact@pravdast.agency
DATABASE_URL=postgresql://username:password@host:port/database
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
```

### Стъпка 3: Custom Domain
1. Vercel → Settings → Domains
2. Добавете: `pravdast.agency`
3. Конфигурирайте DNS записи:
   - A record: @ → 76.76.19.61
   - CNAME: www → cname.vercel-dns.com

## Проверка на deployment

### Test URLs след deployment:
```bash
https://pravdast.agency - Homepage
https://pravdast.agency/sitemap.xml - Sitemap
https://pravdast.agency/api/contacts - Contact API
```

### Test Contact Form:
```bash
curl -X POST https://pravdast.agency/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Production test"}'
```

## Важни забележки

1. **Database:** Създайте PostgreSQL database в Vercel или използвайте външни услуги
2. **SendGrid:** API ключ трябва да има Mail Send permissions
3. **DNS:** Промените в DNS могат да отнемат до 24 часа
4. **Klaviyo:** Company ID е публичен и е безопасно да остане в кода

---

**Препоръка:** Използвайте Решение 1 (GitHub Web Interface) за най-лесно upload, после настройте Vercel deployment.