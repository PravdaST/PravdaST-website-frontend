# Pravdast Website - Next.js Business Engineering Platform

## Overview
The Pravdast Website is a business engineering platform showcasing four proprietary business systems: SEO Struktor™, Trendlab™, Clickstarter™, and Clientomat™. Migrated to Next.js App Router, it provides interactive tools for business growth analysis and client engagement, aiming for increased digital marketing ROI and organic traffic. The platform emphasizes a modern, premium feel with sophisticated design and comprehensive SEO optimization, with a business vision to provide innovative solutions for digital marketing and client acquisition.

## User Preferences
Preferred communication style: Simple, everyday language.
Project organization: Documentation files organized in `/docs` folder for cleaner structure.

## System Architecture

### Frontend
- **Framework**: Next.js 15.5.0 with App Router (SSR)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **State Management**: React hooks (React 19.1.1)
- **UI/UX**: Dark theme with glassmorphism effects, animated background orbs (Pravdast yellow #ECB628), consistent design language, optimized for mobile performance, and includes a landing page system.

### Backend
- **Framework**: Next.js API Routes (App Router)
- **Database**: PostgreSQL with Drizzle ORM
- **API Structure**: `/api/contacts` endpoint with rate limiting
- **Content Management**: WordPress Headless CMS integration for blog content, replacing local `.md` file processing.

### Key Features
- **Core Business Systems**: SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™.
- **Interactive Elements**: Validated contact forms, ROI calculators, scroll-to-top functionality, interactive step forms.
- **Analytics & Tracking**: Klaviyo, Google Analytics 4, Meta Pixel, Microsoft Clarity Heatmap.
- **SEO & Performance**: Server-side rendering, dynamic meta tag generation (next-seo), Schema.org structured data (Article, Breadcrumb, Service), sitemap.xml (next-sitemap), robots.txt, optimized image compression (Next.js native), advanced internal linking, AI-powered meta descriptions (GPT-4o).
- **Advanced Features**: Blog content management via WordPress API, advanced site search, regional content personalization, service worker caching, admin dashboard, API optimizations (rate limiting, caching), retargeting pixels (Facebook, Google, LinkedIn), CRM integration (HubSpot, Pipedrive), server components and streaming for performance.

## External Dependencies

### Production Services
- **Resend** - Transactional email delivery
- **Klaviyo** - Marketing automation and CRM
- **Google Analytics 4** - Web analytics
- **Meta Pixel** - Facebook advertising
- **Vercel Speed Insights** - Performance monitoring
- **PostgreSQL** - Database
- **HubSpot** - CRM integration
- **Pipedrive** - CRM integration
- **Microsoft Clarity** - User behavior tracking
- **WordPress Headless CMS** - Blog content
- **Airtable** - Data storage for landing page forms
- **OpenAI** - AI-powered meta description generation

### Frontend Stack
- **Next.js 15.5.0** - React framework
- **React 19.1.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **embla-carousel-react** - Carousel implementation
- **next-seo** - Dynamic meta tag management
- **next-sitemap** - Automatic sitemap generation

## Recent MVP Landing Page Generator System (January 2025)

### ✅ COMPLETE LANDING PAGE GENERATOR MVP - PRODUCTION READY
**Location:** `/campaigns/landing-page`
**Purpose:** Automated landing page generation system for Pravda ST Agency clients

**🚀 COMPLETE SYSTEM WORKFLOW:**
1. **Client Order Form** → Customer submits business details with category selection
2. **Admin Authentication** → Secure admin login with bcrypt protection  
3. **Order Management** → Admin dashboard for order review and approval
4. **Template Generation** → Automated mini-site creation from order data
5. **Preview & Deploy** → Admin preview and approval for client delivery

**📊 SYSTEM COMPONENTS:**

**✅ Orders Management System**
- Complete PostgreSQL schema with all necessary fields
- Real-time order processing with form validation
- Customer data collection (business name, type, contact info)
- Order status tracking (pending → approved → generated → deployed)
- Secure customer PII protection with authenticated admin-only access

**✅ Admin Authentication & Dashboard**  
- Secure admin login system with bcrypt password protection
- IP-based rate limiting (5 attempts per 15 minutes)
- HttpOnly secure cookies with proper expiration
- Complete admin dashboard for order management
- Order filtering, sorting, pagination, and status updates
- Admin middleware protection for all sensitive routes

**✅ Template Generation Engine**
- Automated template creation from order data
- **6 Business Type Support**: Restaurant, Cafe, Shop, Services, Beauty, Education
- **Bulgarian Language Content**: Automatic content generation with cultural context
- **Mobile-Responsive Design**: Professional layouts optimized for all devices
- **Business-Specific Features**: Menus, services, contact forms, galleries
- **Static File Generation**: HTML/CSS/JS packages ready for deployment

**✅ Admin Preview System**
- Live template preview functionality in admin dashboard
- Generate/Regenerate capabilities with version management
- Direct HTML preview via `/api/admin/orders/[id]/preview/view`
- Template customization and iteration workflow

**🔧 TECHNICAL ARCHITECTURE:**

**Database Layer:**
- Orders table with complete customer and business data
- Admin users with secure authentication
- Template metadata storage with customization options
- Proper database relationships and constraints

**API Layer:**
- `/api/orders` - Customer order submission (POST only)
- `/api/admin/orders` - Admin order management (authenticated)
- `/api/admin/orders/[id]/generate` - Template generation (POST/PUT)
- `/api/admin/orders/[id]/preview` - Template preview (GET/POST)
- `/api/admin/orders/[id]/preview/view` - HTML preview rendering
- `/api/admin/login|logout|me` - Admin authentication endpoints

**Template System:**
- `TemplateGenerator.ts` - Main orchestration engine
- `ContentAutomation.ts` - Bulgarian content generation
- `BusinessTypeHandlers` - Specialized generators for each business type
- Static file generation for Cloudflare deployment readiness

**🎯 BUSINESS IMPACT:**
- **Automated Client Acquisition**: Streamlined order-to-delivery workflow
- **Professional Mini-Sites**: High-quality templates for all business types
- **Admin Efficiency**: Complete management dashboard for order processing
- **Scalable Architecture**: Ready for expansion and Cloudflare deployment
- **Security-First Design**: Customer data protection and admin access control

**💡 MVP STATUS: PRODUCTION READY**
The system successfully implements the complete workflow from client order submission through admin approval to automated template generation. All critical security issues have been resolved, database systems are stable, and the template engine produces professional Bulgarian business sites ready for deployment.

## Recent New Features (January 2025)

### ✅ New Creatives Services Page - COMPLETED
**Location:** `/campaigns/creatives`
**Purpose:** Professional creative services offering for Carousels, Video & UGC content

**Key Features:**
- **Light Theme Design:** Modern white background with gradient accents
- **Service Pricing:** Three professional packages (Basic 299лв, Standard 599лв, Premium 999лв)
- **Multi-Step Form:** 8-step personalized calculator for custom quotes
- **Airtable Integration:** Automated lead capture with proper field mapping
- **Service Showcase:** Clear presentation of Carousels, Video & UGC offerings
- **Social Proof:** Case studies with real performance metrics (+320% sales growth)
- **Responsive Design:** Mobile-optimized with professional styling

**Technical Implementation:**
- Next.js 15 App Router with TypeScript
- Framer Motion animations
- Airtable API integration (Base: appkwDzbKRNTf1WZV, Table: tbl8OOQkbiArX7znY)
- Form validation with Bulgarian phone/email formats
- Light theme conversion from previous dark design
- Component architecture: CreativesHeroSection, PricingSection, CreativesStepForm

**Business Impact:**
- Positioned Pravda ST as professional creative services provider
- Clear pricing structure for client acquisition
- Automated lead qualification system
- Professional service differentiation from competitors

## Recent Performance Optimizations (January 2025)

### P0 Safe Optimizations - COMPLETED ✅
Following the TODO2025.md performance framework with strict safety protocols:

**✅ P0.1 Server Components Optimization**
- Converted heavy client components to server components where appropriate
- Maintained all UI/UX functionality without visual changes

**✅ P0.2 Lazy Loading Implementation**
- CaseStudiesSlider: Dynamic import with `next/dynamic` and loading placeholder
- Below-the-fold heavy components optimized for better initial page load

**✅ P0.3 Font Optimization** 
- Inter font properly configured via `next/font/google` with optimal subsets
- Maintained existing font appearance while improving load performance

**✅ P0.4 Hero LCP Optimization**
- Critical images configured with `priority={true}` and proper `sizes` attributes
- Maintained visual design while optimizing Largest Contentful Paint metrics

**✅ P0.5 Third-party Script Optimization**
- Google Analytics: Migrated to `next/script` with `strategy="afterInteractive"`  
- Microsoft Clarity: Optimized loading strategy for non-blocking performance
- Meta Pixel: Already optimized with proper Next.js Script component

**✅ P0.6 Cache & ISR Implementation**
- Static pages optimized with appropriate revalidation periods:
  - About, FAQ: 600s (10 minutes) revalidation
  - Terms, Privacy: 3600s (1 hour) revalidation
- `dynamic = 'force-static'` applied for optimal caching

**📊 Performance Results:**
- Production build: Successful compilation in 27.7s
- Homepage bundle: Maintained at 16.8kB (stable)
- Cache implementation: ISR working with proper revalidation intervals
- All optimizations applied without UI/UX changes ✅

**🎯 Next Phase:** P1 optimizations (JS bundle reduction) available in TODO2025.md roadmap

## Recent SEO Optimizations (January 2025)

### Comprehensive Metadata Enhancement - COMPLETED ✅

**✅ AI-Powered Meta Generation System**
- Implemented OpenAI GPT-4o integration for natural, human-sounding meta descriptions
- Created centralized `page-meta-generator.ts` for consistent 2025 SEO best practices
- All meta descriptions optimized to 145-158 characters for perfect SERP display

**✅ Missing Metadata Implementation**
- Added complete metadata to `/glovo` page with AI-generated descriptions
- Enhanced `/campaigns` page with business-focused meta optimization  
- Optimized `/campaigns/glovo` campaign page with specialized targeting
- All pages now include OpenGraph, Twitter cards, and canonical URLs

**✅ 2025 SEO Best Practices Applied**
- **Local SEO**: Bulgaria/Sofia geographic targeting and schema markup
- **Brand Consistency**: "Pravda ST Agency" mentioned in all meta descriptions
- **Human-Centered Content**: Conversational, non-robotic meta descriptions
- **Advanced Robots Directives**: max-snippet, max-image-preview optimizations
- **Theme Color**: Consistent brand color (#ECB629) across all pages
- **Mobile Optimization**: Apple web app meta tags for better mobile experience

**📊 SEO Coverage Results:**
- **100% Metadata Coverage**: All pages now have optimized meta descriptions
- **Natural Language**: AI-generated descriptions sound human, not corporate
- **Local Targeting**: Bulgarian market optimization with Sofia keywords
- **Schema Ready**: Geographic and business data structured for search engines
- **Brand Reinforcement**: Consistent Pravda ST Agency mentions across all pages ✅

**🎯 SEO Foundation:** Complete metadata infrastructure ready for advanced schema markup and international SEO expansion