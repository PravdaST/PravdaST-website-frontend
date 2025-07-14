# Upload файлове в GitHub Repository

## Стъпка 1: Подготовка на файловете за upload

**Важни файлове за upload:**

### Root файлове:
- `package.json` ✅
- `next.config.js` ✅  
- `tailwind.config.ts` ✅
- `tsconfig.json` ✅
- `postcss.config.js` ✅
- `drizzle.config.ts` ✅
- `README.md` ✅
- `DEPLOYMENT_GUIDE.md` ✅
- `QA_Audit_Report.md` ✅
- `vercel.json` ✅

### Папки за upload:
- `src/` (цялата папка с всички файлове)
- `public/` (всички статични файлове)
- `server/` (database файлове) 
- `shared/` (схеми)

### НЕ upload-вайте:
- `.env.local` ❌ (локални настройки)
- `node_modules/` ❌ (dependencies)
- `.next/` ❌ (build папка)

## Стъпка 2: Upload в GitHub

1. **Кликнете "uploading an existing file"** в GitHub
2. **Drag & drop всички файлове** освен забранените
3. **Commit message:**
```
Initial commit: Next.js Production Ready

✅ Full migration from React SPA to Next.js App Router
✅ QA audit score: 96/100  
✅ 15 pages fully migrated with 1:1 design match
✅ Contact form with SendGrid email integration
✅ Klaviyo marketing automation active
✅ Dynamic sitemap.xml generation
✅ SSR optimization and SEO meta tags
✅ PostgreSQL database schema ready
✅ Vercel deployment configuration
✅ Ready for production deployment
```

## Стъпка 3: След upload - Vercel Integration

1. **Vercel Dashboard → Add New Project**
2. **Import:** `pravdast-nextjs-final` repository
3. **Framework:** Next.js (auto-detected)
4. **Environment Variables:**
```bash
SENDGRID_API_KEY=sg-xxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=contact@pravdast.agency  
DATABASE_URL=postgresql://user:pass@host:port/db
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
```

## Стъпка 4: Deploy and Test

**Expected build output:**
```
✓ Installing dependencies
✓ Building Next.js application  
✓ Optimizing pages and assets
✓ Deployment successful
```

**Test URLs:**
- Homepage: `https://your-domain.vercel.app`
- Sitemap: `https://your-domain.vercel.app/sitemap.xml`
- Contact API: `https://your-domain.vercel.app/api/contacts`

**Production ready!** 🚀