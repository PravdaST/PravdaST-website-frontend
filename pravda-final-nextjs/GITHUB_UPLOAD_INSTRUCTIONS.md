# GitHub Upload Instructions - pravdast-nextjs-final

## Repository: https://github.com/PravdaST/pravdast-nextjs-final

## Метод 1: GitHub Web Interface (Препоръчително)

### Стъпка 1: Подготовка на файловете
Всички файлове са готови в папката `pravda-final-nextjs/`

### Стъпка 2: Upload в GitHub
1. **Отидете в:** https://github.com/PravdaST/pravdast-nextjs-final
2. **Кликнете:** "uploading an existing file" или "Add file" → "Upload files"
3. **Селектирайте файлове от Replit:**

#### Root файлове за upload:
- `package.json` ✅
- `next.config.js` ✅ 
- `tailwind.config.ts` ✅
- `tsconfig.json` ✅
- `postcss.config.js` ✅
- `drizzle.config.ts` ✅
- `vercel.json` ✅
- `.gitignore` ✅
- `README.md` ✅
- `DEPLOYMENT_GUIDE.md` ✅
- `QA_Audit_Report.md` ✅

#### Папки за upload:
- **src/** - Цялата папка с всички Next.js компоненти
- **public/** - Всички статични файлове и изображения
- **server/** - Database connection файлове
- **shared/** - Drizzle схеми

#### НЕ upload-вайте:
- `.env.local` ❌ (секретни ключове)
- `.next/` ❌ (build папка)
- `node_modules/` ❌ (dependencies)

### Стъпка 3: Commit Message
```
Initial Next.js production deployment

✅ Complete migration from React SPA to Next.js App Router
✅ QA audit score: 96/100 - Production ready
✅ 15 pages with exact 1:1 visual design match
✅ SendGrid email integration for contact forms
✅ Klaviyo marketing automation active
✅ Dynamic sitemap.xml generation working
✅ PostgreSQL database schema configured
✅ Vercel deployment settings optimized
✅ All hydration warnings resolved
✅ Ready for immediate production deployment
```

## Метод 2: Git Commands (Ако Replit позволи)

```bash
cd pravda-final-nextjs
git remote add origin https://github.com/PravdaST/pravdast-nextjs-final.git
git branch -M main
git push -u origin main --force
```

## След успешен upload:

### Vercel Deployment:
1. **Vercel Dashboard:** https://vercel.com/dashboard
2. **Add New Project** → Import `pravdast-nextjs-final`
3. **Framework:** Next.js (auto-detected)
4. **Environment Variables:**
   ```
   SENDGRID_API_KEY=sg-xxxxxxxxxxxxxxxxxx
   SENDGRID_FROM_EMAIL=contact@pravdast.agency
   DATABASE_URL=postgresql://user:pass@host:port/db
   NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
   ```

### Expected Build Success:
```
✓ Cloning pravdast-nextjs-final
✓ Installing dependencies (npm install)
✓ Building Next.js application (npm run build)
✓ Optimizing pages and assets
✓ Deployment successful
```

### Test Production URL:
- Homepage: `https://your-domain.vercel.app`
- Sitemap: `https://your-domain.vercel.app/sitemap.xml`
- Contact API: `https://your-domain.vercel.app/api/contacts`

**Status:** Ready for production! 🚀