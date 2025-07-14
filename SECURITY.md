# Security Guidelines

## Environment Variables

### ⚠️ NEVER commit sensitive data to Git:
- API keys (SendGrid, Klaviyo, Meta Pixel, etc.)
- Database credentials
- Authentication tokens
- Production URLs

### ✅ Proper practices:
1. **Local Development**: Use `.env.local` (already in .gitignore)
2. **Production**: Set environment variables in Vercel Dashboard
3. **Documentation**: Use `.env.example` template (no real keys)

## Environment Variables Setup

### Vercel Dashboard Configuration:
```
SENDGRID_API_KEY=SG.your_real_sendgrid_key
SENDGRID_FROM_EMAIL=website@pravdagency.eu
DATABASE_URL=postgresql://your_real_db_url
KLAVIYO_PRIVATE_API_KEY=pk_your_real_klaviyo_key
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
VITE_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
```

### Content Security Policy
The CSP headers are configured in `next.config.js` and `vercel.json` to allow:
- Google Analytics (googletagmanager.com)
- Klaviyo (static.klaviyo.com, static-forms.klaviyo.com)
- Meta Pixel (connect.facebook.net)
- Vercel Speed Insights

## API Security Features

### Rate Limiting
- Contact form: 5 submissions per hour per IP
- Automatic IP-based blocking
- Rate limit store with time-based reset

### Input Sanitization
- HTML/script tag removal
- XSS prevention
- Email validation
- URL validation

### Database Security
- Parameterized queries (Drizzle ORM)
- No direct SQL execution
- Environment-based database connections