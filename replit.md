# Pravdast Business Engineering Platform

## Overview

This is a modern full-stack web application for Pravdast, a business engineering consultancy focused on predictable growth systems. The platform serves as a marketing website and lead generation system, featuring a contact form for client inquiries and consultation requests.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

- **Frontend**: React-based SPA using Vite for build tooling
- **Backend**: Express.js server with RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Deployment**: Configured for Replit with auto-scaling capabilities

### Architecture Decision Rationale

The chosen stack prioritizes developer experience and rapid iteration while maintaining production readiness. React with TypeScript provides type safety and component reusability, while Express offers a lightweight, flexible backend foundation.

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for brand colors
- **Animations**: Framer Motion for smooth, professional animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **API Design**: RESTful endpoints with JSON communication
- **Middleware**: Custom logging, error handling, and request parsing
- **Development**: Hot reloading with Vite integration in development mode

### Database Layer
- **Database**: PostgreSQL for reliable, ACID-compliant data storage
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema**: Defined in shared directory for consistency between frontend and backend
- **Validation**: Zod schemas for runtime type validation and data integrity

## Data Flow

1. **Client Interaction**: Users interact with the React frontend
2. **API Communication**: Frontend makes HTTP requests to Express backend
3. **Data Validation**: Zod schemas validate incoming data
4. **Database Operations**: Drizzle ORM handles database interactions
5. **Response**: Structured JSON responses sent back to frontend
6. **UI Updates**: React Query manages cache updates and UI re-renders

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data validated with Zod schema
3. POST request sent to `/api/contacts` endpoint
4. Backend validates data and stores in PostgreSQL
5. Success/error response returned to frontend
6. UI updated with appropriate feedback message

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management for React
- **@radix-ui/***: Accessible, unstyled UI primitives
- **framer-motion**: Animation library for smooth interactions
- **zod**: Runtime type validation and schema definition

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type checking and compilation
- **tailwindcss**: Utility-first CSS framework
- **esbuild**: Fast JavaScript bundler for production builds

### Integration Considerations
The application is designed to be database-agnostic through Drizzle's abstraction layer, though currently configured for PostgreSQL. The modular architecture allows for easy integration of additional services or databases as needed.

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server and Express
- **Production**: Optimized builds with static asset serving
- **Database**: Environment-specific DATABASE_URL configuration

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: esbuild bundles Express server for production
3. **Asset Serving**: Production server serves static files and API routes
4. **Database Migrations**: Drizzle handles schema migrations

### Replit Integration
- **Auto-scaling**: Configured for Replit's auto-scaling deployment
- **Port Configuration**: External port 80 maps to internal port 5000
- **Environment**: PostgreSQL module enabled for database provisioning
- **Development**: Hot reloading and error overlay for development experience

## Changelog

Changelog:
- June 18, 2025. Initial setup with engineering-themed homepage
- June 18, 2025. Expanding to full website with case studies, services pages, and business engineering approach
- June 18, 2025. Unified tone across all pages - direct, engineering approach with "stop betting, start building systems" messaging
- June 18, 2025. Removed grid animation from background, added white color to comparison elements
- June 18, 2025. Created comprehensive footer menu with organized sections and contact information
- June 18, 2025. Restructured services page as card overview and created individual optimized landing pages for each service (SEO Struktor™, Clientomat™, Sales Engine™)
- June 19, 2025. Successfully migrated project from Replit Agent to standard Replit environment
- June 19, 2025. Fixed Vercel deployment configuration for proper file structure and build process
- June 19, 2025. Created dual configuration support for both Replit development and Vercel production deployment
- June 19, 2025. Implemented comprehensive SEO system with TypeScript schemas, automated meta tag management, and page-specific optimization
- June 19, 2025. Integrated SEO Head component across all main pages with Bulgarian-optimized content for better local search visibility
- June 19, 2025. Successfully integrated Strapi Cloud CMS with Full Access API token and established connection testing functionality
- June 19, 2025. Enhanced mobile navigation with custom background blur (#0000007d) and fixed scroll-to-top functionality for better UX
- June 19, 2025. Created comprehensive Strapi test page (/strapi-test) for monitoring CMS connection status and endpoint availability
- June 20, 2025. Updated brand color to custom #ECB628 across all components and UI elements
- June 20, 2025. Implemented complete SEO system with XML sitemap (/sitemap.xml), robots.txt, and Schema.org JSON-LD markup
- June 20, 2025. Configured local Strapi integration for development with automatic fallback to Cloud for production
- June 20, 2025. Created detailed Content Types setup guide for local Strapi CMS development
- June 20, 2025. Implemented comprehensive security system with rate limiting (5 contacts/hour, 100 requests/15min), CORS protection, helmet security headers, XSS protection, and input sanitization middleware
- June 20, 2025. Created custom 404 error page with brand-consistent design, animations, and helpful navigation links for better user experience
- June 20, 2025. Integrated Vercel Speed Insights for performance monitoring and Core Web Vitals tracking
- June 20, 2025. Fixed sitemap.xml XML parsing errors by removing CSP headers and positioning sitemap route before security middleware
- June 20, 2025. Updated all URLs from pravdast.vercel.app to production domain https://www.pravdagency.eu for proper deployment configuration
- June 20, 2025. Enhanced CORS settings to include production domain (www.pravdagency.eu) for secure cross-origin requests
- June 20, 2025. Implemented Google-compliant SEO system with emoji-enhanced meta descriptions, structured data (Schema.org), Twitter Cards, Open Graph, canonical URLs, and robots directives for all pages
- June 20, 2025. Enhanced XML sitemap with mobile tags, multi-namespace support, and priority optimization for business conversion pages
- June 20, 2025. Created comprehensive robots.txt with bot-specific crawl delays and strategic allow/disallow rules for optimal indexing
- June 20, 2025. Integrated real Pravda Agency contact data: office in Varna (ул. Дебър №58), contact@pravda.agency, +359 879 282 299, Viber chat, and social media links (Facebook, YouTube, Instagram, LinkedIn)
- June 20, 2025. Updated all SEO structured data, Footer component, and Contact page with authentic business information for production deployment
- June 20, 2025. Added mandatory website field to contact form and updated all email addresses to contact@pravdast.agency throughout the system
- June 20, 2025. Implemented SendGrid email service for automatic contact form notifications with beautiful HTML/text formatting sent to contact@pravdast.agency
- June 20, 2025. Updated database schema to include website field, enhanced contact form validation, and created professional email templates for lead notifications
- June 20, 2025. Created comprehensive favicon system with P icon in all formats (192x192, Apple touch, manifest.json) for professional brand presentation
- June 20, 2025. Built complete blog system with Bulgarian content, categories, search functionality, and SEO optimization integrated with main site design
- June 20, 2025. Integrated Google Analytics 4 with comprehensive event tracking for forms, CTA clicks, conversions, and user engagement metrics
- June 20, 2025. Implemented Google Search Console integration with specialized sitemaps (blog-sitemap.xml, services-sitemap.xml, sitemap-index.xml) and verification setup
- June 20, 2025. Built comprehensive performance monitoring system with Service Worker caching, Core Web Vitals tracking, image optimization, and bundle analysis
- June 20, 2025. Created advanced mobile navigation with touch gestures, bottom navigation bar, PWA shortcuts, and responsive design optimizations
- June 20, 2025. Implemented WCAG 2.1 accessibility compliance with screen reader support, keyboard navigation, high contrast mode, and accessibility control panel
- June 20, 2025. Enhanced security system with CSRF protection, XSS prevention, SQL injection protection, input validation, and comprehensive security headers
- June 20, 2025. Completed comprehensive SEO optimization with custom OG images for all pages (9 SVG files), breadcrumb navigation with Schema markup, enhanced LocalBusiness structured data, and FAQ page with FAQPage Schema
- June 20, 2025. Enhanced organization Schema.org markup with geo-coordinates (Varna location), service catalog, payment methods, opening hours, and aggregate ratings for improved local search visibility
- June 20, 2025. Fixed contact form for Vercel deployment by creating serverless function api/contacts.ts with SendGrid integration, proper CORS handling, and HTML email templates for production use
- June 21, 2025. Successfully migrated project from Replit Agent to standard Replit environment with PostgreSQL database, all packages installed, and workflow running correctly
- June 21, 2025. Reviewed Vercel documentation and confirmed project structure follows best practices: proper serverless functions, environment variables usage, security compliance, and deployment-ready architecture
- June 21, 2025. Fixed SPA routing 404 issue on Vercel by adding rewrites configuration to serve index.html for all non-API, non-static file routes
- June 21, 2025. Enhanced contact form email templates with premium design including gradient backgrounds, priority badges, interactive elements, and mobile-responsive styling for professional client notifications
- June 21, 2025. Updated 404 error page with modern engineering-themed design using brand colors (#ECB628), interactive service cards, grid patterns, and enhanced user experience consistent with main site design
- June 21, 2025. Cleaned sitemap.xml generation to meet modern Google standards by removing outdated mobile namespaces and tags, keeping only the core sitemap schema for better indexing compatibility
- June 21, 2025. Confirmed comprehensive SEO implementation: robots.txt with AI bot permissions, complete structured data (Organization/LocalBusiness Schema), dynamic page metadata with Open Graph and Twitter Cards across all pages
- June 21, 2025. Fixed 404 page design with dark slate-900 background, white text, and proper brand-consistent styling replacing the previous white design
- June 21, 2025. Corrected 404 page button colors to proper brand yellow (#ECB628) with black text using !important CSS overrides
- June 21, 2025. Optimized robots.txt following modern best practices: removed outdated crawl-delay, eliminated redundant Allow rules, simplified to essential Disallow directives only
- June 21, 2025. Enhanced sitemap.xml with realistic lastmod dates reflecting actual page update history for better Google indexing signals
- June 21, 2025. Configured Google Analytics 4 integration with measurement ID G-JQ8F0NZDX0, ready for activation via VITE_GA_MEASUREMENT_ID environment variable in Vercel deployment
- June 21, 2025. Implemented react-ga4 integration with usePageTracking hook for proper SPA pageview tracking across all route changes without page reloads
- June 21, 2025. Created comprehensive project methodology documentation in /project-methodology/ folder with SEO implementation changelog and complete blueprint for building modern SEO-ready SPAs on Vercel
- June 22, 2025. Removed mobile bottom navigation from footer and adjusted header background to semi-transparent dark with proper backdrop blur effect for glass appearance
- June 22, 2025. Created mobile sticky CTA navigation inspired by Stripe design, visible only on phones (md:hidden) with primary/secondary buttons and scroll-triggered appearance
- June 22, 2025. Removed sticky positioning from header navigation for all devices - now positioned statically at top without following on scroll
- June 22, 2025. Fixed spacing issue by removing mt-16 from yellow business engineering header banner in hero section
- June 22, 2025. Removed mobile sticky CTA navigation completely due to background rendering issues - reverted to clean mobile experience without bottom navigation
- June 22, 2025. Reverted header navigation back to clean dark design (bg-slate-900) after gradient experiment didn't work well with current layout
- June 22, 2025. Fixed footer alignment issue by adding items-center to footer links container for proper vertical centering
- June 22, 2025. Added premium status badge above H1 with animated green dot and "Приемаме проекти" text, plus gradient glow effects on CTA buttons inspired by modern design trends
- June 22, 2025. Redesigned FAQ page with project styling: removed breadcrumbs, added gradient hero, converted FAQ to modern card grid layout (3 columns), removed expand/collapse for cleaner presentation
- June 22, 2025. Optimized all title tags to 50-60 characters for better SEO performance and created comprehensive link building strategy for 2025
- June 22, 2025. Replaced dual dots with Framer-style radar effect in hero status badge: core dot with pulsing outer ring for professional online indicator
- June 22, 2025. Added interactive case studies slider to homepage with 4 real client cases, smooth animations, navigation controls, and results metrics display
- June 22, 2025. Applied global white color styling to all headings (H1-H6) across the entire website for consistent text visibility
- June 22, 2025. Fixed contact form label colors to white for better visibility against dark background
- June 22, 2025. Improved case studies slider design with consistent brand colors, proper card styling, and navigation elements matching site theme
- June 22, 2025. Integrated Klaviyo email marketing platform with frontend tracking script and backend API integration for automatic profile creation from contact form submissions
- June 22, 2025. Highlighted "Ново" word in hero section status badge with brand yellow color for visual emphasis
- June 22, 2025. Added Inter font integration via Google Fonts import to resolve 404 font loading errors and improved typography consistency
- June 22, 2025. Removed local font preloading from performance.ts that was causing 404 errors for inter-regular.woff2 and inter-semibold.woff2
- June 23, 2025. Enhanced all homepage sections with animated yellow accent badges (Системна, Инженерен, Контролиран, Проверени, Безплатна, Проследими) using motion.div with gradient backgrounds and smooth animations for professional branding consistency
- June 23, 2025. Removed breadcrumb navigation from all service pages (SEO Struktor™, Clientomat™, Sales Engine™) and implemented unique parallax background animations in hero sections with floating geometric elements for enhanced visual engagement
- June 23, 2025. Created completely unique tech background systems for each service: SEO Struktor™ with radar search system (radial grid + rotating sweep + search blips), Clientomat™ with client network hub (linear grid + central hub + 6 connection lines + data particles), Sales Engine™ with pipeline flow system (track gradient + 5 vertical stages + processing nodes + flowing particles) - each visually distinct from homepage and other services
- June 23, 2025. Replaced complex parallax effects with simple, elegant animated backgrounds for all service pages - SEO Struktor™ (blueprint grid with network nodes), Clientomat™ (curved data streams with traveling circles), Sales Engine™ (rotating gears with flowing particles) - all with low opacity for better text readability
- June 23, 2025. Updated CTA section with complete rewrite following user specifications: "Приемаме до 3 нови партньори за следващото тримесечие" headline, detailed explanation about limited capacity, objections handling section with 3 cards answering common concerns, dual CTA buttons with specific messaging about 48-hour response and 5-minute process
- June 23, 2025. Restored original yellow background (bg-[var(--pravdast-yellow)]) and exact user-provided text content in CTA section with modern layout design while maintaining all original messaging and structure
- June 23, 2025. Created modern partners carousel component with animated sliding logos of major platforms (Google, Meta, HubSpot, Klaviyo, WordPress) and placed it after hero section on homepage for trust building
- June 23, 2025. Redesigned CTA section with highly engaging layout: urgency badge, oversized "3" with animation, two-column layout (text left, sticky CTA card right), hover effects, floating elements, and improved visual hierarchy to maximize button clicks

## User Preferences

Preferred communication style: Simple, everyday language.