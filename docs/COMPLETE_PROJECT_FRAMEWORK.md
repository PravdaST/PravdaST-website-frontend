
# 🏗️ Pravda Agency - Complete Project Framework & Architecture

## 📊 Пълен Технически Stack

### **Frontend Framework**
```json
"next": "15.3.5"                    // React метафреймуърк с App Router
"react": "^18.2.0"                  // UI библиотека
"react-dom": "^18.2.0"              // DOM rendering
"typescript": "^5.1.3"              // Type safety
```

### **Styling & UI Components**
```json
"tailwindcss": "^3.3.2"            // Utility-first CSS framework
"@radix-ui/react-dialog": "^1.1.14" // Modal компоненти
"@radix-ui/react-label": "^2.1.7"   // Form labels
"@radix-ui/react-select": "^2.2.5"  // Select dropdown
"@radix-ui/react-slider": "^1.3.5"  // Range sliders
"@radix-ui/react-slot": "^1.0.0"    // Slot композиция
"@radix-ui/react-tabs": "^1.1.12"   // Tabs навигация
"@radix-ui/react-toast": "^1.0.0"   // Toast нотификации
"@radix-ui/react-tooltip": "^1.0.0" // Tooltip компоненти
"class-variance-authority": "^0.7.0" // CSS класове утилити
"clsx": "^2.0.0"                    // Conditional CSS classes
"tailwind-merge": "^2.0.0"         // Tailwind class merging
```

### **Animation & Motion**
```json
"framer-motion": "^12.23.5"        // Анимации и transitions
"embla-carousel-react": "^8.6.0"   // Карусел компоненти
"lucide-react": "^0.400.0"         // SVG икони библиотека
```

### **Database & Backend**
```json
"@neondatabase/serverless": "^1.0.1" // PostgreSQL cloud database
"drizzle-orm": "^0.44.2"            // Type-safe ORM
"drizzle-kit": "^0.31.4"            // Database migrations
"drizzle-zod": "^0.8.2"             // Schema validation
"zod": "^3.25.1"                    // TypeScript schema validation
```

### **Form Management & Validation**
```json
"react-hook-form": "^7.60.0"       // Form state management
"@hookform/resolvers": "^5.1.1"    // Form validation resolvers
```

### **HTTP Client & APIs**
```json
"axios": "^1.11.0"                 // HTTP client
"@tanstack/react-query": "^5.0.0"  // Server state management
```

### **Email & Communication**
```json
"resend": "^4.7.0"                 // Email delivery service
```

### **Security & Authentication**
```json
"bcrypt": "^6.0.0"                 // Password hashing
"@types/bcrypt": "^5.0.2"          // TypeScript types
```

### **Content Management**
```json
"gray-matter": "^4.0.3"            // Markdown frontmatter parser
```

### **Analytics & Tracking**
```json
"@vercel/speed-insights": "^1.0.0" // Performance monitoring
"@types/facebook-pixel": "^0.0.31" // Facebook Pixel types
```

### **SEO & Site Generation**
```json
"next-seo": "^6.8.0"               // SEO meta tags
"next-sitemap": "^4.2.3"           // Sitemap generation
```

### **Development Tools**
```json
"@next/bundle-analyzer": "^15.3.5" // Bundle size analysis
"eslint": "^8.42.0"                // Code linting
"eslint-config-next": "15.3.5"     // Next.js ESLint config
"autoprefixer": "^10.4.14"         // CSS vendor prefixes
"postcss": "^8.4.24"               // CSS processing
```

### **WebSocket & Real-time**
```json
"ws": "^8.18.3"                    // WebSocket implementation
```

---

## 🏛️ Архитектурен Дизайн

### **Папкова Структура**
```
pravdast-website/
├── 📁 src/app/          # Next.js App Router pages (SSR)
│   ├── api/             # Backend API endpoints
│   ├── blog/            # Blog система (local + WordPress)
│   ├── campaigns/       # Landing pages за кампании
│   ├── services/        # Бизнес системи страници
│   ├── calculators/     # ROI калкулатори
│   └── globals.css      # Global стилове
│
├── 📁 src/components/   # React компоненти
│   ├── ui/              # shadcn/ui base компоненти
│   ├── reactbits/       # Custom advanced компоненти
│   ├── analytics.tsx    # Tracking интеграции
│   ├── klaviyo-*.tsx   # Email marketing
│   └── seo-helmet.tsx   # Dynamic SEO tags
│
├── 📁 src/lib/          # Utility функции
│   ├── wordpress.ts     # WordPress API client
│   ├── email-service.ts # Resend integration
│   ├── analytics.ts     # GA4, Meta Pixel setup
│   └── utils.ts         # Helper функции
│
├── 📁 src/hooks/        # Custom React hooks
│   ├── useKlaviyo.ts    # Marketing automation
│   └── usePageTracking.ts # Analytics tracking
│
├── 📁 src/data/         # Static конфигурации
│   └── seo-pages.ts     # SEO metadata за страници
│
├── 📁 server/           # Database конфигурация
│   ├── db.ts            # Drizzle ORM setup
│   └── storage.ts       # Data persistence
│
├── 📁 shared/           # Споделени типове
│   ├── schema.ts        # Database schema
│   └── seo-types.ts     # SEO TypeScript types
│
├── 📁 public/           # Static assets
│   ├── images/          # Изображения
│   ├── og-images/       # Open Graph изображения
│   ├── scripts/         # External скриптове
│   ├── robots.txt       # Search engine директиви
│   ├── sitemap.xml      # Site structure за SEO
│   └── sw.js            # Service Worker за caching
│
└── 📁 docs/             # Документация
    ├── QA_Audit_Report.md
    ├── SECURITY_AUDIT_FINAL.md
    └── ENHANCEMENT_FEATURES_COMPLETED.md
```

---

## 🎯 Основни Бизнес Системи

### **1. SEO Struktor™**
**Файлове**: `src/app/services/seo-struktor/`
**Packages**: 
- `next-seo` - Meta tags управление
- `gray-matter` - Structured data parsing
- `next-sitemap` - XML sitemap generation

**Функционалности**:
- Server-side rendered meta tags
- JSON-LD structured data
- Automatic sitemap generation
- Core Web Vitals optimization

### **2. Trendlab™**
**Файлове**: `src/app/blog/`, `src/lib/wordpress.ts`
**Packages**:
- `gray-matter` - Markdown content parsing
- `axios` - WordPress API client
- `@tanstack/react-query` - Content caching

**Функционалности**:
- Dual content system (Local + WordPress)
- SEO-optimized blog posts
- Category management
- Related posts algorithm

### **3. Clickstarter™**
**Файлове**: `src/app/campaigns/`, `src/components/retargeting-pixels.tsx`
**Packages**:
- `@types/facebook-pixel` - Meta Pixel integration
- `framer-motion` - Landing page animations
- `@vercel/speed-insights` - Performance tracking

**Функционалности**:
- Campaign landing pages
- Multi-platform pixel tracking
- A/B testing support
- Conversion optimization

### **4. Clientomat™**
**Файлове**: `src/components/klaviyo-*.tsx`, `src/hooks/useKlaviyo.ts`
**Packages**:
- `resend` - Email delivery
- `react-hook-form` - Form management
- `@hookform/resolvers` - Form validation

**Функционалности**:
- Klaviyo automation
- Contact form processing
- CRM integration
- Lead nurturing workflows

---

## 🔧 API Архитектура

### **Endpoint Structure**
```
/api/
├── contacts/            # Contact form submissions
├── klaviyo/            # Marketing automation
├── airtable/           # Data collection (Glovo calculator)
├── wordpress/          # External content API
│   ├── posts/          # Blog posts fetch
│   ├── categories/     # Content categorization
│   └── post/[slug]/    # Individual post data
└── blog/files/         # Local markdown processing
```

### **Database Schema** (Drizzle ORM + PostgreSQL)
```typescript
// contacts table
export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: text('message').notNull(),
  phone: varchar('phone', { length: 50 }),
  company: varchar('company', { length: 255 }),
  service: varchar('service', { length: 100 }),
  created_at: timestamp('created_at').defaultNow(),
  klaviyo_synced: boolean('klaviyo_synced').default(false)
});

// blog_posts table (local content)
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  title: varchar('title', { length: 500 }).notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  meta_description: varchar('meta_description', { length: 160 }),
  keywords: text('keywords'),
  published_at: timestamp('published_at'),
  updated_at: timestamp('updated_at').defaultNow(),
  view_count: integer('view_count').default(0),
  featured_image: varchar('featured_image', { length: 500 }),
  category: varchar('category', { length: 100 }),
  author: varchar('author', { length: 255 }).default('Pravda Agency'),
  status: varchar('status', { length: 20 }).default('published')
});
```

---

## 🎨 Design System & UI

### **Color Palette**
```css
:root {
  --pravda-yellow: #ECB628;      /* Primary brand color */
  --pravda-dark: #0a0a0a;        /* Background dark */
  --pravda-gray: #1a1a1a;        /* Secondary dark */
  --success-green: #22c55e;      /* Success states */
  --warning-red: #ef4444;        /* Error states */
  --text-white: #ffffff;         /* Primary text */
  --text-gray: #a1a1aa;          /* Secondary text */
}
```

### **Typography System**
```css
/* Font Stack */
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;

/* Heading Scale */
h1: 3.75rem (60px) - Hero titles
h2: 3rem (48px) - Section titles  
h3: 2.25rem (36px) - Subsection titles
h4: 1.875rem (30px) - Card titles
h5: 1.5rem (24px) - Small headings
h6: 1.25rem (20px) - Labels

/* Body Text */
body: 1rem (16px) - Base text
small: 0.875rem (14px) - Secondary text
```

### **Component Architecture**
```
UI Components (shadcn/ui):
├── Button - 8 variants (default, destructive, outline, etc.)
├── Card - Glassmorphism design với border effects
├── Dialog - Modal windows и popups
├── Form - Validated input handling
├── Input - Text fields с error states
├── Select - Dropdown menus
├── Slider - Range controls за calculators
├── Tabs - Content navigation
├── Toast - Success/error notifications
└── Tooltip - Contextual help

Custom Business Components:
├── GlovoStepForm - Multi-step calculator
├── KlaviyoIntegration - Email capture
├── AnimatedKPI - Stats counters
├── TestimonialsCarousel - Social proof
├── BackgroundEffects - Animated orbs
├── SEOHelmet - Dynamic meta tags
├── NavigationMenu - Site navigation
└── Footer - Contact information
```

---

## 📈 Marketing & Analytics Stack

### **Tracking Implementation**
```typescript
// Google Analytics 4
"@vercel/speed-insights": "^1.0.0"
// Custom events: page_view, contact_form_submit, calculator_complete

// Meta Pixel (Facebook/Instagram)
"@types/facebook-pixel": "^0.0.31" 
// Custom events: PageView, Lead, Contact

// Klaviyo (Email Marketing)
// Events: Viewed Page, Started Calculator, Downloaded Resource

// Microsoft Clarity (Heatmaps)
// Session recordings, click tracking, user behavior
```

### **SEO Optimization Stack**
```typescript
// Structured Data (JSON-LD)
- Organization schema
- Service schema
- Article schema
- LocalBusiness schema

// Meta Tags Management
"next-seo": "^6.8.0"
- Dynamic title/description
- Open Graph optimization
- Twitter Cards
- Canonical URLs

// Performance Optimization
- Next.js Image optimization
- Service Worker caching
- Code splitting
- Bundle analysis
```

---

## 🔒 Security & Performance

### **Security Headers** (next.config.js)
```typescript
{
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.klaviyo.com https://www.googletagmanager.com https://connect.facebook.net",
    "connect-src 'self' https://static.klaviyo.com https://www.google-analytics.com https://connect.facebook.net",
    "style-src 'self' 'unsafe-inline' https://static.klaviyo.com",
    "img-src 'self' data: https: https://www.google-analytics.com https://www.facebook.com",
    "font-src 'self' data: https:",
    "frame-src 'self'"
  ]
}
```

### **Performance Optimization**
```typescript
// Image Optimization
- Next.js Image component с lazy loading
- WebP format support
- Responsive images

// Code Splitting
- Dynamic imports for large components
- Route-based splitting
- Bundle analyzer monitoring

// Caching Strategy
- Service Worker implementation
- Static asset caching
- API response caching
- CDN optimization
```

---

## 🚀 Deployment & Environment

### **Replit Configuration** (.replit)
```ini
modules = ["nodejs-20", "web", "postgresql-16"]
run = "npm run dev"
hidden = [".config", ".git", "node_modules", "dist"]

[deployment]
deploymentTarget = "autoscale"
build = ["npm run build"]
run = ["npm run start"]

[[ports]]
localPort = 5000
externalPort = 80
```

### **Environment Variables**
```bash
# Database
DATABASE_URL=postgresql://...

# Email Service
RESEND_API_KEY=...
FROM_EMAIL=contact@pravdagency.eu

# Analytics
NEXT_PUBLIC_GA_ID=G-...
NEXT_PUBLIC_META_PIXEL_ID=...

# Marketing Automation
KLAVIYO_API_KEY=...
KLAVIYO_LIST_ID=...

# CRM Integration
AIRTABLE_API_KEY=...
AIRTABLE_BASE_ID=...
AIRTABLE_TABLE_NAME=...

# WordPress Integration
WORDPRESS_API_URL=https://blog.pravdagency.eu/wp-json/wp/v2
```

### **Build Commands**
```bash
# Development
npm run dev              # Start dev server на port 5000

# Production Build
npm run build           # Next.js production build
npm run start           # Start production server

# Database Operations
npm run db:push         # Push schema changes to database
npm run db:studio       # Open Drizzle Studio GUI

# Code Quality
npm run lint            # ESLint code checking

# Bundle Analysis
ANALYZE=true npm run build  # Generate bundle size report
```

---

## 📊 Business Intelligence & Monitoring

### **Key Performance Indicators (KPIs)**
```typescript
// Website Performance
- Page Load Speed: <3 seconds
- Core Web Vitals: Green scores
- Mobile Performance: 90+ Lighthouse score
- SEO Score: 95+ Lighthouse score

// Business Metrics  
- Contact Form Conversion: 3-5%
- Calculator Completion Rate: 60%+
- Blog Engagement: 2+ minutes average session
- Email Signup Rate: 8-12%

// Technical Metrics
- API Response Time: <500ms
- Database Query Time: <100ms
- Error Rate: <0.1%
- Uptime: 99.9%
```

### **Monitoring Tools**
```typescript
// Real-time Monitoring
- Vercel Speed Insights: Performance tracking
- Microsoft Clarity: User behavior analysis
- Google Analytics 4: Traffic และ conversion tracking
- Klaviyo Analytics: Email performance

// Error Tracking
- Next.js built-in error boundaries
- Custom error logging
- Database connection monitoring
- API endpoint health checks
```

---

## 🔗 Third-Party Integrations

### **Marketing Automation**
```typescript
// Klaviyo Integration
- Email list management
- Behavioral triggering
- Segmentation automation
- A/B testing campaigns

// Social Media Pixels
- Facebook Pixel: Instagram/Facebook retargeting
- Google Ads: Display network remarketing
- LinkedIn Insight Tag: B2B audience building
```

### **Content Management**
```typescript
// WordPress Integration
- REST API consumption
- Automatic content sync
- SEO metadata preservation
- Image optimization

// Local Content System
- Markdown file processing
- Frontmatter parsing
- Dynamic routing
- Search indexing
```

### **Customer Relationship Management**
```typescript
// Airtable Integration (Glovo Calculator)
- Lead data collection
- Form submission tracking
- Business intelligence gathering
- Export capabilities

// Future CRM Integrations
- HubSpot API ready
- Pipedrive connection prepared
- Salesforce compatibility
```

---

## 📱 Responsive Design Framework

### **Breakpoint System**
```css
/* Mobile First Design */
Mobile: 320px - 767px    (Primary focus)
Tablet: 768px - 1023px   (Secondary optimization)  
Desktop: 1024px - 1439px (Standard desktop)
Large: 1440px+           (Ultra-wide screens)

/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */ 
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

### **Mobile-First Implementation**
```typescript
// Touch-Friendly Interface
- Button size: minimum 44px touch target
- Form inputs: optimized spacing
- Navigation: hamburger menu implementation
- Images: lazy loading с intersection observer

// Performance Optimization
- Critical CSS inlining
- Progressive Web App features
- Service Worker caching
- Compressed asset delivery
```

---

## 🎯 Future Roadmap & Scalability

### **Phase 1 (Current) - Foundation**
- ✅ Core business systems implementation
- ✅ SEO optimization completed
- ✅ Analytics integration active
- ✅ Mobile responsiveness achieved

### **Phase 2 (Q2 2025) - Enhancement**
- 🔄 Advanced personalization system
- 🔄 Multi-language support (EN, BG)
- 🔄 Enhanced calculator suite
- 🔄 Video content integration

### **Phase 3 (Q3 2025) - Scale**
- 📋 Client dashboard portal
- 📋 Advanced CRM integration
- 📋 API marketplace features
- 📋 White-label solutions

### **Technical Debt & Maintenance**
```typescript
// Monthly Tasks
- Package updates and security patches
- Performance monitoring и optimization  
- SEO content refresh
- Analytics data analysis

// Quarterly Tasks
- Code refactoring и optimization
- New feature integration
- Security audit и improvements
- User experience testing
```

---

## 🏆 Success Metrics & ROI

### **Website Performance Goals**
- **PageSpeed Score**: 95+ (Mobile & Desktop)
- **SEO Visibility**: Top 3 positions за target keywords
- **Conversion Rate**: 5%+ contact form submissions
- **User Engagement**: 3+ pages per session

### **Business Impact Targets**
- **Lead Generation**: 50+ qualified leads/month
- **Revenue Attribution**: 30% от total sales
- **Brand Recognition**: 80% market awareness in Bulgaria
- **Client Retention**: 95% satisfaction rate

---

**Framework Version**: 2.0  
**Last Updated**: January 21, 2025  
**Maintained by**: Pravda Agency Development Team  
**Documentation Status**: Production Ready ✅

