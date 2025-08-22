# Pravdast Website - Next.js Business Engineering Platform

## Overview
The Pravdast Website is a business engineering platform showcasing four proprietary business systems: SEO Struktor™, Trendlab™, Clickstarter™, and Clientomat™. Migrated to Next.js App Router, it provides interactive tools for business growth analysis and client engagement, aiming for increased digital marketing ROI and organic traffic. The platform emphasizes a modern, premium feel with sophisticated design and comprehensive SEO optimization.

## User Preferences
Preferred communication style: Simple, everyday language.
Project organization: Documentation files organized in `/docs` folder for cleaner structure.

## System Architecture

### Frontend
- **Framework**: Next.js 15.3.5 with App Router (SSR)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **State Management**: React hooks
- **UI/UX**: Dark theme with glassmorphism effects, animated background orbs (Pravdast yellow #ECB628), consistent design language across all pages.

### Backend
- **Framework**: Next.js API Routes (App Router)
- **Database**: PostgreSQL with Drizzle ORM
- **API Structure**: `/api/contacts` endpoint with rate limiting
- **Content Management**: Automated blog system processing `.md` files for metadata, excerpts, slugs, and reading time.

### Key Features
- **Core Business Systems**: SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™.
- **Interactive Elements**: Validated contact forms, ROI calculators, scroll-to-top functionality.
- **Analytics & Tracking**: Klaviyo, Google Analytics 4, Meta Pixel integration.
- **SEO & Performance**: Server-side rendering, dynamic meta tag generation, Schema.org structured data, sitemap.xml, robots.txt, optimized image compression.
- **Advanced Features**: Blog content management, Microsoft Clarity Heatmap, advanced site search, regional content personalization, service worker caching, admin dashboard, API optimizations (rate limiting, caching), retargeting pixels (Facebook, Google, LinkedIn), CRM integration (HubSpot, Pipedrive).

## External Dependencies

### Production Services
- **Resend** (formerly SendGrid) - Transactional email delivery
- **Klaviyo** - Marketing automation and CRM
- **Google Analytics 4** - Web analytics
- **Meta Pixel** - Facebook advertising
- **Vercel Speed Insights** - Performance monitoring
- **PostgreSQL** - Database
- **HubSpot** - CRM integration
- **Pipedrive** - CRM integration
- **Microsoft Clarity** - User behavior tracking

### Frontend Stack
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Recent Updates

### Local Blog Posts Removal ✅ (February 4, 2025)
- **Complete Migration**: All local blog posts removed from codebase
- **WordPress Only**: Blog content now exclusively from WordPress Headless CMS
- **API Cleanup**: Removed local blog API endpoints (/api/blog/posts, /api/blog/search, /api/blog/[slug])
- **Admin Interface Removal**: Removed /admin-pravda and /admin-blog pages (redundant with WordPress admin)
- **Static Generation**: Removed hardcoded blog slugs from generateStaticParams
- **File Cleanup**: Deleted all .md blog post files and local blog data
- **Status**: WordPress is now the single source of truth for all blog content

### WordPress Headless Integration ✅ (January 31, 2025)
- **WordPress API**: Successfully connected to admin.pravdagency.eu via REST API
- **Authentication**: Using Application Password (Pravda Website / GprR PbZk UjrC dszy Y6KJ BD1I)
- **Blog Integration**: WordPress posts appear in main /blog page alongside local posts
- **Real-time Updates**: New WordPress posts automatically appear on the website
- **URL Structure**: WordPress posts accessible at pravdagency.eu/blog/wp-[slug]
- **Content Display**: Full WordPress content rendered on main website (no redirects to admin)
- **Features**: Search, filtering, pagination, featured images, categories, SEO meta tags
- **API Endpoints**: /api/wordpress/posts, /api/wordpress/categories, /api/wordpress/post/[slug]
- **Routing**: WordPress posts handled by both /blog/[slug] and /blog/wp-[slug] routes
- **Build Status**: Next.js 15 compatible, production ready
- **Status**: Fully functional - WordPress content displays natively on main website

### SEO and Internal Linking Enhancement ✅ (August 12, 2025)
- **Structured Data**: Added Article and Breadcrumb Schema.org markup for rich Google results
- **Facebook Integration**: Added fb:app_id meta property for improved Facebook sharing
- **Related Posts**: Dynamic related posts section at end of WordPress articles
- **Visual Breadcrumbs**: Added breadcrumb navigation component for better UX
- **Contextual Internal Linking**: Smart system that automatically adds relevant service links in blog content
- **Service Recommendations**: Intelligent CTA boxes suggesting relevant Pravda services based on content analysis
- **WordPress API**: Improved error handling and content loading
- **Status**: Advanced SEO optimization completed with Google-recommended internal linking structure

### Landing Pages System ✅ (August 21, 2025)
- **Navigation Update**: Replaced Calculators with Landing Pages in main navigation
- **Showcase Page**: Created `/campaigns` with hero section and card-based layout for all landing pages
- **GLOVO Landing Page**: First specialized landing page at `/campaigns/glovo` without main navigation
- **Content Structure**: Hero, social proof, problem agitation, solution preview, lead form, and credibility sections
- **Target Audience**: Bulgarian restaurants paying Glovo 30% commission fees
- **Design**: Consistent glassmorphism theme with Pravdast yellow branding
- **Status**: GLOVO landing page ready for lead generation campaigns

### GLOVO Calculator Step Form & Airtable Integration ⚠️ (August 21-22, 2025)
- **Interactive Step Form**: Created 6-step Bulgarian language form with full validation ✅
- **Email & Phone Validation**: Strict Bulgarian format validation with visual indicators ✅
- **Airtable Connection**: Connected to Base ID: appkwDzbKRNTf1WZV, Table ID: tblofYDOCTS2PHwBP ✅
- **API Token**: Configured with user's personal access token pat5BTtwvg2zwK12N ✅
- **Current Issue**: Airtable table missing required fields (only has "Created" field) ⚠️
- **Temporary Solution**: Form works perfectly, data logged in console and basic record in Airtable
- **Required Action**: User needs to add fields in Airtable: Restaurant Name, Daily Orders, Average Order Value, Email, Phone, Timestamp
- **Form Status**: ✅ Production ready with fallback behavior
- **Klaviyo Exclusion**: Disabled Klaviyo popup specifically for /campaigns/glovo ✅

### Email Delivery Status ✅ (January 31, 2025)
- **Resend Integration**: Completely replaced SendGrid with Resend.com for better reliability
- **Email Recipients**: All contact forms send to contact@pravdast.agency only (per user request)
- **Sender Domain**: Using verified pravdagency.eu domain (website@pravdagency.eu)
- **API Configuration**: Using valid RESEND_API_KEY with proper permissions
- **Rate Limiting**: Active (5 submissions per hour per IP)
- **Delivery Status**: Successfully tested - emails deliver with unique IDs
- **Status**: Ready for production - Resend is more reliable than SendGrid

### UI Components Enhancement ✅ (August 22, 2025)
- **Animation Optimization**: Using existing framer-motion for animated KPI numbers instead of adding react-countup (saves 7KB)
- **Carousel Implementation**: Added embla-carousel-react (20-30KB) instead of heavier swiper.js (35-45KB) for better performance
- **SEO Enhancement**: Integrated next-seo for dynamic meta tags and OG images for landing page templates
- **New Components**: AnimatedKPI, TestimonialsCarousel, CampaignSEO - production-ready and optimized
- **Bundle Impact**: Minimal increase with maximum functionality - leverages existing dependencies
- **Status**: Smart package selection prioritizes performance over feature bloat