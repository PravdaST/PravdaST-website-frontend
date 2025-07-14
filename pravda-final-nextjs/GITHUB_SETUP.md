# GitHub Integration & Vercel Deployment Setup

## Step 1: Create GitHub Repository

### 1.1 Initialize Git Repository
```bash
cd pravda-final-nextjs
git init
git add .
git commit -m "Initial commit: Next.js migration complete"
```

### 1.2 Connect to GitHub
```bash
# Create new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/pravdast-nextjs.git
git branch -M main
git push -u origin main
```

## Step 2: Vercel Deployment Setup

### 2.1 Connect Vercel to GitHub
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click "Add New Project"
4. Import your `pravdast-nextjs` repository
5. Configure as follows:

### 2.2 Environment Variables (Required)
Add these in Vercel dashboard → Settings → Environment Variables:

```bash
SENDGRID_API_KEY=sg-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=contact@pravdast.agency
DATABASE_URL=postgresql://username:password@host:port/database
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=UTqrCz
```

### 2.3 Domain Configuration
1. In Vercel dashboard → Settings → Domains
2. Add custom domain: `pravdast.agency`
3. Configure DNS records:
   - Type: A, Name: @, Value: 76.76.19.61
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## Step 3: Database Setup

### 3.1 PostgreSQL Database (Recommended: Vercel Postgres)
```bash
# In Vercel dashboard → Storage → Create → Postgres
# Copy the DATABASE_URL and add to environment variables
```

### 3.2 Push Database Schema
```bash
npm run db:push
```

## Step 4: SendGrid Configuration

### 4.1 Get SendGrid API Key
1. Visit [sendgrid.com](https://sendgrid.com)
2. Create account or login
3. Go to Settings → API Keys
4. Create new API key with "Mail Send" permissions
5. Copy key starting with `sg-`

### 4.2 Verify Domain (Optional but recommended)
1. In SendGrid → Settings → Sender Authentication
2. Add domain `pravdast.agency`
3. Configure DNS records as instructed

## Step 5: Final Verification

### 5.1 Test Deployment
```bash
# After Vercel deployment completes:
curl -s https://pravdast.agency -w "Status: %{http_code}\n"
curl -s https://pravdast.agency/sitemap.xml -w "Sitemap: %{http_code}\n"
```

### 5.2 Test Contact Form
```bash
curl -X POST https://pravdast.agency/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "company": "Test Company",
    "message": "Production test message"
  }'
```

### Expected Response:
```json
{"success":true,"message":"Съобщението е изпратено успешно!"}
```

## Step 6: Monitoring & Analytics

### 6.1 Core Web Vitals
- Monitor via Google PageSpeed Insights
- Target scores: Performance >90, SEO >95

### 6.2 Klaviyo Dashboard
- Verify page view events are tracked
- Check contact form submissions create profiles

### 6.3 Email Deliverability
- Monitor SendGrid dashboard for delivery rates
- Check spam folder if emails not received

---

## Quick Commands Summary

```bash
# Git setup
git init && git add . && git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# Database setup (after Vercel deployment)
npm run db:push

# Local development
npm run dev

# Production build test
npm run build && npm run start
```

## Support Checklist ✅

- ✅ All 15 pages migrated and tested
- ✅ Contact form with email integration
- ✅ Klaviyo marketing automation active
- ✅ Sitemap.xml generated dynamically
- ✅ SEO optimized meta tags
- ✅ Mobile responsive design
- ✅ Performance optimized
- ✅ Production ready

**Status: Ready for deployment!**