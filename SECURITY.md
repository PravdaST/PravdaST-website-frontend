# Security Guidelines for Pravda Agency Website

## 🔐 Environment Variables Security

### Required Environment Variables
All sensitive data must be stored in environment variables, never in source code:

```bash
# SendGrid Configuration
SENDGRID_API_KEY=SG.your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=website@pravdagency.eu
SENDGRID_TO_EMAIL=contact@pravdagency.eu

# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Analytics & Tracking
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
VITE_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
KLAVIYO_PRIVATE_API_KEY=pk_your_klaviyo_private_key_here

# Optional: Meta Pixel for Facebook Ads
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id_here
```

### 🚨 Security Checklist

✅ **COMPLETED ACTIONS:**
- [x] Removed hardcoded password from `setup-admin.js`
- [x] Replaced hardcoded email addresses with environment variables
- [x] Updated email service to use `SENDGRID_TO_EMAIL` and `SENDGRID_FROM_EMAIL`
- [x] Created secure .env.example template

### 🔒 Best Practices

1. **Never Commit Secrets**: API keys, passwords, and sensitive data must never be committed to Git
2. **Use Environment Variables**: All sensitive configuration should be in environment variables
3. **Separate Environments**: Use different keys for development, staging, and production
4. **Regular Key Rotation**: Rotate API keys regularly for security
5. **Least Privilege**: Only grant minimum necessary permissions

### 🚫 What NOT to Include in Source Code

- API keys (SendGrid, Klaviyo, etc.)
- Database credentials
- Email addresses in hardcoded form
- Admin passwords
- Private tokens

### ✅ Safe for Source Code

- Environment variable templates (.env.example)
- Public configuration (Next.js public env vars)
- Default fallback values for development
- Domain names and public URLs

### 🔧 Local Development

1. Copy `.env.example` to `.env.local`
2. Fill in your actual values
3. `.env.local` is ignored by Git (never committed)

### 🚀 Production Deployment

1. Set all environment variables in Vercel Dashboard
2. Never use hardcoded values in production
3. Use secure connection strings for database
4. Enable proper CORS and security headers

## 📞 Security Contact

For security concerns or questions, contact the development team.