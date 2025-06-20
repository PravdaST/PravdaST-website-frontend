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

## User Preferences

Preferred communication style: Simple, everyday language.