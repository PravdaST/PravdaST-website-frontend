# Pravdast Website - Next.js Business Engineering Platform

## Overview
The Pravdast Website is a fully optimized business engineering platform showcasing four proprietary business systems: SEO Struktor™, Trendlab™, Clickstarter™, and Clientomat™. Successfully upgraded to Next.js 15.5.0 with React 19.1.1, the platform now utilizes Server Components, streaming architecture, and comprehensive performance optimizations including dynamic imports, critical CSS inlining, and JSON-LD schemas. 

## Recent Optimizations (January 25, 2025)
- **Unified Hero Component**: Consolidated 6 duplicate hero components into single UnifiedHero
- **Optimized Navigation**: Added React.memo and debounced scroll handlers 
- **Unified Color System**: Single source of truth for all colors (lib/unified-colors.ts)
- **Performance Monitoring**: Added Web Vitals tracking and performance hooks
- **Server Components**: Converted HomeOptimized to server component for better performance
- **Code Splitting**: Implemented lazy loading for heavy components
- **Fixed Hydration Issues**: Removed Math.random() animations causing SSR mismatches

## User Preferences
Preferred communication style: Simple, everyday language.
Project organization: Documentation files organized in `/docs` folder for cleaner structure.

## System Architecture

### Frontend
- **Framework**: Next.js 15.5.0 with App Router (SSR + React 19.1.1)
- **Styling**: Tailwind CSS with JIT mode + unified design system
- **UI Components**: shadcn/ui (Radix UI primitives) with dynamic imports
- **Animations**: Framer Motion (lazy-loaded with code splitting)
- **State Management**: React hooks with automatic memoization
- **UI/UX**: Dark theme with glassmorphism effects, animated background orbs (Pravdast yellow #ECB628), consistent design language, optimized for mobile performance, critical CSS inlining, and includes a landing page system.

### Backend
- **Framework**: Next.js API Routes (App Router)
- **Database**: PostgreSQL with Drizzle ORM
- **API Structure**: `/api/contacts` endpoint with rate limiting
- **Content Management**: WordPress Headless CMS integration for blog content, replacing local `.md` file processing.

### Key Features
- **Core Business Systems**: SEO Struktor™, Trendlab™, Clickstarter™, Clientomat™.
- **Interactive Elements**: Validated contact forms, ROI calculators (lazy-loaded), scroll-to-top functionality, interactive step forms.
- **Analytics & Tracking**: Klaviyo, Google Analytics 4, Meta Pixel, Microsoft Clarity Heatmap.
- **SEO & Performance**: Server-side rendering, dynamic meta tag generation (next-seo), JSON-LD schemas (Organization, Service, Article, Breadcrumb, FAQ), OG image generation API, sitemap.xml (next-sitemap), robots.txt, optimized image compression (AVIF/WebP with blur placeholders), advanced internal linking, AI-powered meta descriptions (GPT-4o).
- **Advanced Features**: Blog content management via WordPress API with multi-layer caching, advanced site search, regional content personalization, service worker caching, admin dashboard, API optimizations (rate limiting, caching), retargeting pixels (Facebook, Google, LinkedIn), CRM integration (HubSpot, Pipedrive), server components and streaming for performance, critical CSS inlining, dynamic imports for code splitting.

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