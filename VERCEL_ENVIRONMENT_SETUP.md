# Vercel Environment Variables Setup

## 🔐 Environment Variables in Vercel

Всички API keys трябва да се конфигурират в Vercel Dashboard, НЕ в кода!

### Required Environment Variables in Vercel:

```bash
# SendGrid (configured in Vercel)
SENDGRID_API_KEY=SG.your_actual_api_key
SENDGRID_FROM_EMAIL=website@pravdagency.eu
SENDGRID_TO_EMAIL=contact@pravdagency.eu

# Database
DATABASE_URL=postgresql://your_db_connection_string

# Analytics & Tracking
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
VITE_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
KLAVIYO_PRIVATE_API_KEY=pk_your_klaviyo_key

# Optional: Meta Pixel
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id
```

## ✅ Code Configuration

В кода използваме само `process.env` за достъп до тези variables:

```typescript
// Правилно използване в кода
const apiKey = process.env.SENDGRID_API_KEY;
const fromEmail = process.env.SENDGRID_FROM_EMAIL;
```

## 🚫 Never in Source Code:
- API keys
- Database passwords  
- Private tokens
- Email credentials

## 🔧 Vercel Setup Steps:

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all required variables
5. Deploy

The application will automatically use these environment variables without any API keys in the source code.