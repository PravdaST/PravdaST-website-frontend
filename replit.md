# Pravdast - Business Engineering Platform

## Overview

Pravdast is a Bulgarian business engineering consultancy platform built as a modern React-based single-page application (SPA) with Express.js backend. The application focuses on providing systematic business growth solutions for B2B companies through specialized services like SEO optimization, client automation, and sales systems.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **SEO**: React Helmet Async for dynamic meta tag management

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js server
- **Development**: TSX for TypeScript execution in development
- **API**: RESTful endpoints with minimal health check functionality
- **Static Serving**: Express static middleware for production builds

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon serverless PostgreSQL (configured but not actively used)
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage

## Key Components

### Core Services
1. **SEO Struktor™** - Online dominance system for technical SEO and content strategy
2. **Clientomat™** - Automated client relationship management system
3. **Sales Engine™** - Predictable sales funnel system
4. **Trendlab™** - Content creation and social media management

### Technical Components
- **SEO Management**: Comprehensive meta tag system with Bulgarian localization
- **Analytics Integration**: Google Analytics 4 and Klaviyo marketing automation
- **Performance Optimization**: Service Worker for caching and offline functionality
- **Security**: CSP headers and security best practices implemented

## Data Flow

1. **Client Request**: User navigates to any route
2. **React Router**: Wouter handles client-side routing
3. **Component Rendering**: React components with TypeScript type safety
4. **API Calls**: TanStack Query manages server state and caching
5. **SEO Processing**: Dynamic meta tags generated based on route
6. **Analytics Tracking**: Google Analytics and Klaviyo events fired

## External Dependencies

### Marketing & Analytics
- **Google Analytics 4**: Performance and user behavior tracking
- **Klaviyo**: Email marketing automation and lead management
- **SendGrid**: Email delivery service for contact forms

### Development & Deployment
- **Vercel**: Primary deployment platform with serverless functions
- **Replit**: Development environment with PostgreSQL support
- **GitHub**: Version control and CI/CD pipeline

### UI & Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter font family for typography
- **Lucide React**: Icon library

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, PostgreSQL 16
- **Port Configuration**: 
  - Frontend: Port 3000 (external)
  - Backend: Port 5000 (internal)
- **Hot Reload**: Vite development server with HMR

### Production Deployment
- **Primary**: Vercel with automatic builds from git
- **Build Process**: Vite production build with optimizations
- **Asset Strategy**: Static files served from CDN
- **Database**: Neon serverless PostgreSQL for scalability

### Performance Optimizations
- **Code Splitting**: Automatic with Vite
- **Image Optimization**: SVG-based Open Graph images
- **Caching**: Service Worker with static asset caching
- **SEO**: Server-side meta tag generation for social sharing

### Security Measures
- **CSP Headers**: Content Security Policy for XSS protection
- **CORS**: Configured for specific domain access
- **Environment Variables**: Secure API key management
- **HTTPS**: Enforced in production with security headers

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```