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