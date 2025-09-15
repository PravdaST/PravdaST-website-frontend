# Pravdast Website - Next.js Business Engineering Platform

## Overview
The Pravdast Website is a business engineering platform showcasing four proprietary business systems: SEO Struktor™, Trendlab™, Clickstarter™, and Clientomat™. Migrated to Next.js App Router, it provides interactive tools for business growth analysis and client engagement, aiming for increased digital marketing ROI and organic traffic. The platform emphasizes a modern, premium feel with sophisticated design and comprehensive SEO optimization, with a business vision to provide innovative solutions for digital marketing and client acquisition.

## User Preferences
Preferred communication style: Simple, everyday language.
Project organization: Documentation files organized in `/docs` folder for cleaner structure.

## System Architecture

### UI/UX Decisions
- **Design System**: Dark theme with glassmorphism effects, animated background orbs (Pravdast yellow #ECB628), consistent design language, optimized for mobile performance.
- **Components**: Utilizes shadcn/ui (Radix UI primitives) for UI components and Framer Motion for animations.

### Technical Implementations
- **Frontend**: Next.js 15.5.0 with App Router (SSR), React 19.1.1, TypeScript, Tailwind CSS.
- **Backend**: Next.js API Routes, PostgreSQL with Drizzle ORM, `/api/contacts` endpoint with rate limiting.
- **Content Management**: WordPress Headless CMS integration for blog content.
- **SEO**: Server-side rendering, dynamic meta tag generation (next-seo), Schema.org structured data (Article, Breadcrumb, Service), sitemap.xml (next-sitemap), robots.txt, optimized image compression, advanced internal linking, AI-powered meta descriptions (GPT-4o).
- **Performance**: Server Components, lazy loading, font optimization, LCP optimization, third-party script optimization, ISR and caching for static pages.

### Feature Specifications
- **Core Business Systems**: SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™.
- **Interactive Elements**: Validated contact forms, ROI calculators, scroll-to-top, interactive step forms.
- **Analytics**: Klaviyo, Google Analytics 4, Meta Pixel, Microsoft Clarity Heatmap.
- **Advanced Features**: Blog via WordPress API, advanced site search, regional content personalization, service worker caching, admin dashboard, API optimizations, retargeting pixels, CRM integration.
- **Landing Page Generator (MVP)**: Automated landing page generation workflow including client order forms, secure admin authentication, order management, template generation, and live preview. Supports 6 business types with Bulgarian language content, mobile-responsive design, and static file generation.
- **Creatives Services Page**: Light theme design with gradient accents, service pricing, 8-step multi-step form for custom quotes, Airtable integration for lead capture, and service showcase for Carousels, Video & UGC content.
- **Case Studies**: Features detailed case studies demonstrating business impact, particularly "Glovo Liberation" success stories.

## External Dependencies

### Production Services
- **Resend**: Transactional email delivery.
- **Klaviyo**: Marketing automation and CRM.
- **Google Analytics 4**: Web analytics.
- **Meta Pixel**: Facebook advertising.
- **Vercel Speed Insights**: Performance monitoring.
- **PostgreSQL**: Database.
- **HubSpot**: CRM integration.
- **Pipedrive**: CRM integration.
- **Microsoft Clarity**: User behavior tracking.
- **WordPress Headless CMS**: Blog content.
- **Airtable**: Data storage for landing page forms (specifically Creatives Services page).
- **OpenAI**: AI-powered meta description generation.

### Frontend Libraries
- **Next.js**: React framework.
- **React**: UI library.
- **TypeScript**: Type safety.
- **Tailwind CSS**: Styling.
- **shadcn/ui**: Component library.
- **Framer Motion**: Animations.
- **Lucide React**: Icons.
- **embla-carousel-react**: Carousel implementation.
- **next-seo**: Dynamic meta tag management.
- **next-sitemap**: Automatic sitemap generation.

## Recent Case Studies Expansion (September 2025)

### ✅ NEW GLOVO LIBERATION CASE STUDIES - COMPLETED
**Location:** `/case-studies` page (`src/app/case-studies/CaseStudiesClient.tsx`)
**Purpose:** Real-world results from Glovo dependency reduction campaigns demonstrating how restaurants eliminated expensive delivery platform commissions

### 🚀 4 NEW RESTAURANT LIBERATION CASE STUDIES:

#### ✅ The Key Beer Bar
- **Industry:** Ресторантьорство (Beer Bar)
- **Challenge:** 1050 monthly orders via Glovo, paying 9,450 BGN monthly commissions (50%+ of revenue). Loyal customers but Glovo owned the relationship.
- **Solution:** 3-step direct ordering strategy: 10% loyalty discount for direct orders, optimized 25-minute delivery (faster than Glovo), personalized communication via direct phone and personal service.
- **Results:** 70% Glovo commission reduction, 6,615 BGN monthly savings, 79,380 BGN annual ROI, 315 direct orders vs 735 Glovo orders, 25-minute average delivery time
- **Systems Used:** Clickstarter™, Clientomat™
- **Testimonial:** "За 3 месеца спестихме повече пари, отколкото сме инвестирали в барът за цяла година. Сега клиентите са НАШИ, не на Glovo."

#### ✅ Rosa D'Oro Pizza
- **Industry:** Ресторантьорство (Italian Pizzeria)
- **Challenge:** 1500 monthly orders via Glovo at 43 BGN average, paying 19,350 BGN monthly commissions. Authentic Italian recipes but no direct customer relationship.
- **Solution:** "Pizza Party" system with scheduled delivery and fixed timing, loyalty program with personalized offers, integrated platform for 2 locations (behind Cathedral and Vazrazhdane district).
- **Results:** 70% Glovo dependency reduction, 13,545 BGN monthly savings, 162,540 BGN annual savings, 1050 direct orders vs 450 Glovo orders, full customer data control
- **Systems Used:** Clickstarter™, Clientomat™
- **Testimonial:** "Преди Glovo ни контролираше. Сега ние контролираме нашия бизнес. Клиентите обичат директното общуване и бързите доставки."

#### ✅ Best Burgers Varna
- **Industry:** Ресторантьорство (Burger Restaurant)
- **Challenge:** 450 monthly orders via Glovo at 30 BGN, paying 4,050 BGN monthly commissions despite perfect customer reviews. Two locations but no effective direct ordering.
- **Solution:** Fast phone ordering with "order and take without waiting" motto, exclusive menu for direct customers, SMS real-time notifications for order readiness.
- **Results:** 70% Glovo dependency reduction, 2,835 BGN monthly savings, 34,020 BGN annual savings, 315 direct orders from total 450, 90% direct phone line success rate
- **Systems Used:** Clickstarter™, Clientomat™
- **Testimonial:** "Нашите клиенти винаги са казвали, че правим най-добрите бургери във Варна. Сега и печалбата ни отразява това качество."

#### ✅ Atelier 60
- **Industry:** Ресторантьорство (Premium Restaurant)
- **Challenge:** 240 monthly premium orders at 30 BGN, paying 2,160 BGN monthly to Glovo from quality-focused customers. 30% of premium value went to intermediary.
- **Solution:** "Atelier Circle" VIP club with limited edition dishes access, personal chef advisor via WhatsApp for dietary advice, weekly tasting menu exclusive to direct customers with advance reservation.
- **Results:** 60% platform dependency reduction, 1,300 BGN monthly savings, 15,600 BGN annual profit, 145 VIP clients with personal profiles, +35% average order value increase
- **Systems Used:** Clickstarter™, Clientomat™
- **Testimonial:** "Нашите клиенти търсят не просто храна, а culinary experience. Директната връзка ни позволява да им дадем точно това."

### 📊 COMBINED IMPACT METRICS:
- **291,540 BGN** total annual savings across 4 restaurants
- **70% average** Glovo dependency reduction
- **1,825 direct orders** vs 1,635 Glovo orders (direct orders exceed platform orders)
- **Complete customer data ownership** with personalized communication systems
- **Proven ROI within 3-6 months** for all implementations

### 🔧 TECHNICAL IMPLEMENTATION NOTES:
- **Data Source:** Added to `src/app/case-studies/CaseStudiesClient.tsx` (canonical source)
- **Structure:** Consistent data schema with id, company, industry, tagline, challenge, solution, results[], systems[], testimonial, image
- **Hydration Fix:** Fixed critical SSR hydration mismatch caused by Math.random() in Framer Motion animations
- **SSR Safety:** Implemented client-only mounting with useState/useEffect for random animations to prevent server/client HTML differences
- **Display:** All case studies render properly in grid layout with metrics, badges, and testimonials
- **Note:** `src/components/case-studies-new.tsx` exists but is not used by `/case-studies` page - avoid duplication

### 🎯 BUSINESS IMPACT:
These real-world case studies demonstrate concrete value proposition for Clickstarter™ and Clientomat™ systems, showing measurable ROI and customer liberation from expensive platform dependencies. Perfect for sales conversations and credibility building.