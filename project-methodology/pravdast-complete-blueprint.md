# Pravdast Business Engineering Platform - Пълна Методика

## Преглед на Проекта

**Pravdast** е модерна business engineering платформа за предсказуем растеж на B2B компании в България. Платформата предлага три основни услуги: SEO Struktor™, Clientomat™, и Sales Engine™.

### Технически Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Express.js + Node.js
- **Database:** PostgreSQL + Drizzle ORM
- **UI Framework:** shadcn/ui + Radix UI + Tailwind CSS
- **Routing:** wouter (lightweight SPA router)
- **State Management:** TanStack Query
- **Animations:** Framer Motion
- **Deployment:** Vercel + Replit development
- **Analytics:** Google Analytics 4 (react-ga4)
- **Email:** SendGrid integration

## Фаза 1: Проектна Архитектура & Foundation

### 1.1 Създаване на Full-Stack Структурата
```bash
# Основна структура
mkdir pravdast-platform
cd pravdast-platform

# Frontend setup
npm create vite@latest client -- --template react-ts
cd client && npm install

# Backend директории
mkdir -p server/{lib,middleware,routes}
mkdir -p shared
mkdir -p api
mkdir -p public

# Database schema
mkdir -p server/db
```

### 1.2 Ключови Зависимости
```bash
# Frontend Dependencies
npm install @radix-ui/react-* tailwindcss @tailwindcss/typography
npm install framer-motion wouter @tanstack/react-query
npm install react-ga4 react-hook-form @hookform/resolvers
npm install lucide-react class-variance-authority clsx
npm install date-fns zod drizzle-zod

# Backend Dependencies
npm install express cors helmet express-rate-limit
npm install @neondatabase/serverless drizzle-orm drizzle-kit
npm install @sendgrid/mail nodemailer
npm install passport passport-local express-session
npm install bcryptjs zod-validation-error

# Development
npm install @types/* typescript tsx vite
npm install @vercel/speed-insights @vercel/node
```

### 1.3 Структура на Файловете
```
pravdast-platform/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/ (shadcn/ui компоненти)
│   │   │   ├── hero-section.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── seo-head.tsx
│   │   │   └── mobile-navigation.tsx
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   ├── services/
│   │   │   ├── case-studies.tsx
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── not-found.tsx
│   │   ├── data/
│   │   │   └── seo-pages.ts
│   │   ├── hooks/
│   │   │   └── usePageTracking.ts
│   │   └── lib/
│   │       ├── analytics.ts
│   │       └── queryClient.ts
├── server/
│   ├── lib/
│   │   ├── seo-generator.ts
│   │   ├── email-service.ts
│   │   └── security.ts
│   ├── middleware/
│   ├── routes.ts
│   ├── storage.ts
│   └── index.ts
├── shared/
│   ├── schema.ts (Drizzle schema)
│   └── seo-types.ts
├── api/ (Vercel serverless functions)
│   ├── contacts.ts
│   └── sitemap.xml.ts
├── public/
│   ├── robots.txt
│   └── favicon files
└── project-methodology/
```

## Фаза 2: Database & Backend Architecture

### 2.1 Database Schema (Drizzle ORM)
```typescript
// shared/schema.ts
import { pgTable, serial, varchar, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  website: varchar("website", { length: 200 }).notNull(),
  company: varchar("company", { length: 100 }),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const insertContactSchema = createInsertSchema(contacts);
```

### 2.2 Express Server Setup
```typescript
// server/index.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { registerRoutes } from './routes';

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      fontSrc: ["'self'", "fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "https://www.googletagmanager.com"],
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://www.pravdagency.eu', 'https://pravdagency.eu']
    : ['http://localhost:5173', 'http://localhost:5000'],
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

registerRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 2.3 Storage Layer (Repository Pattern)
```typescript
// server/storage.ts
import { db } from './db';
import { users, contacts, insertUserSchema, insertContactSchema } from '../shared/schema';
import type { User, Contact, InsertUser, InsertContact } from '../shared/schema';

export interface IStorage {
  createUser(user: InsertUser): Promise<User>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class DatabaseStorage implements IStorage {
  async createUser(insertUser: InsertUser): Promise<User> {
    const validatedUser = insertUserSchema.parse(insertUser);
    const [user] = await db.insert(users).values(validatedUser).returning();
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await db.select().from(users).where(eq(users.email, email)).limit(1);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const validatedContact = insertContactSchema.parse(insertContact);
    const [contact] = await db.insert(contacts).values(validatedContact).returning();
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.submittedAt));
  }
}

export const storage = new DatabaseStorage();
```

## Фаза 3: Business Logic & Services

### 3.1 Email Service (SendGrid)
```typescript
// server/lib/email-service.ts
import sgMail from '@sendgrid/mail';

interface ContactFormData {
  name: string;
  email: string;
  website: string;
  company?: string;
  message: string;
}

class EmailService {
  private initialized = false;

  init() {
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      this.initialized = true;
    }
  }

  generateContactEmailHTML(data: ContactFormData): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; }
        .header { background: linear-gradient(135deg, #ECB628, #d4a422); padding: 20px; color: black; }
        .content { padding: 20px; background: #f8f9fa; }
        .priority-badge { background: #ECB628; color: black; padding: 5px 10px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h2>🎯 Нова Заявка от Pravdast.eu</h2>
          <span class="priority-badge">ВИСОК ПРИОРИТЕТ</span>
        </div>
        <div class="content">
          <p><strong>Име:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Website:</strong> ${data.website}</p>
          ${data.company ? `<p><strong>Компания:</strong> ${data.company}</p>` : ''}
          <p><strong>Съобщение:</strong></p>
          <p>${data.message}</p>
        </div>
      </div>
    </body>
    </html>`;
  }

  async sendContactNotification(data: ContactFormData): Promise<boolean> {
    if (!this.initialized) return false;

    const msg = {
      to: 'contact@pravdast.agency',
      from: 'noreply@pravdast.agency',
      subject: `🚀 Нова заявка от ${data.name} - ${data.company || data.website}`,
      html: this.generateContactEmailHTML(data),
    };

    try {
      await sgMail.send(msg);
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();
```

### 3.2 Security Service
```typescript
// server/lib/security.ts
import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';

export class SecurityManager {
  // Contact form rate limiting
  contactFormLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 submissions per hour per IP
    message: { error: 'Твърде много заявки. Опитайте отново след час.' },
  });

  // Input sanitization
  sanitizeInput(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  // Contact form validation
  validateContactFormData(data: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.name || data.name.length < 2) {
      errors.push('Името трябва да е поне 2 символа');
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Невалиден email адрес');
    }

    if (!data.website || !/^https?:\/\/.+/.test(data.website)) {
      errors.push('Невалиден website URL');
    }

    if (!data.message || data.message.length < 10) {
      errors.push('Съобщението трябва да е поне 10 символа');
    }

    return { isValid: errors.length === 0, errors };
  }
}

export const securityManager = new SecurityManager();
```

## Фаза 4: Frontend Development

### 4.1 Brand Design System
```typescript
// src/lib/brand-config.ts
export const brandConfig = {
  colors: {
    primary: '#ECB628', // Pravdast Yellow
    primaryHover: '#d4a422',
    secondary: '#1f2937', // Dark Gray
    background: '#ffffff',
    text: '#1f2937',
    muted: '#6b7280',
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    headingFamily: 'Cal Sans, Inter, sans-serif',
  },
  spacing: {
    section: '6rem', // 96px
    container: '1200px',
  }
};
```

### 4.2 Hero Section Component
```typescript
// src/components/hero-section.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Спрете да залагате на{' '}
            <span className="text-[#ECB628]">късмет</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
            Започнете да строите{' '}
            <span className="text-[#ECB628] font-semibold">системи</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Превръщаме хаоса в предсказуем растеж с инженерни решения за B2B компании
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="bg-[#ECB628] text-black hover:bg-[#d4a422] px-8 py-4">
            <Target className="mr-2 h-5 w-5" />
            Безплатна Консултация
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-[#ECB628] text-[#ECB628] hover:bg-[#ECB628] hover:text-black px-8 py-4">
            Вижте Нашите Системи
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
```

### 4.3 Services Architecture
```typescript
// src/pages/services/seo-struktor.tsx
import { SEOHead } from '@/components/seo-head';
import { pageSEOData } from '@/data/seo-pages';

export default function SeoStruktor() {
  return (
    <>
      <SEOHead seo={pageSEOData['services/seo-struktor']} />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Service-specific content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-8">
              SEO Struktor™
            </h1>
            <p className="text-xl text-slate-300 mb-12">
              Инженерна система за органична видимост
            </p>
            {/* Feature details, pricing, case studies */}
          </div>
        </section>
      </div>
    </>
  );
}
```

### 4.4 Contact Form с Validation
```typescript
// src/pages/contact.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';

const contactSchema = z.object({
  name: z.string().min(2, 'Името трябва да е поне 2 символа'),
  email: z.string().email('Невалиден email адрес'),
  website: z.string().url('Невалиден website URL'),
  company: z.string().optional(),
  message: z.string().min(10, 'Съобщението трябва да е поне 10 символа'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Успешно изпратено!", description: "Ще се свържем с вас в рамките на 24 часа." });
      form.reset();
    },
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-12">Свържете се с нас</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => submitContact.mutate(data))}>
            {/* Form fields */}
            <Button type="submit" disabled={submitContact.isPending}>
              {submitContact.isPending ? 'Изпраща...' : 'Изпрати заявка'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
```

## Фаза 5: SEO & Analytics Implementation

### 5.1 Dynamic SEO Management
```typescript
// src/data/seo-pages.ts
export const pageSEOData: Record<string, Partial<SEOData>> = {
  home: {
    title: "Pravdast - Бизнес Инженеринг за Предсказуем Растеж | България 2025",
    description: "🎯 Превръщаме хаоса в предсказуем растеж с инженерни системи. ⚡ SEO Struktor™, Sales Engine™, Clientomat™ за B2B компании в България. ✅ Безплатна консултация.",
    keywords: "бизнес инженеринг българия, b2b растеж системи, предсказуем бизнес растеж",
    canonical: "https://www.pravdagency.eu/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "name": "Pravdast",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Дебър №58",
        "addressLocality": "Варна",
        "addressCountry": "BG"
      }
    }
  },
  // Additional pages...
};
```

### 5.2 Analytics Integration
```typescript
// src/hooks/usePageTracking.ts
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
  const [location] = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.VITE_GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location });
    }
  }, [initialized, location]);
};

export default usePageTracking;
```

## Фаза 6: Performance & Optimization

### 6.1 Performance Monitoring
```typescript
// src/lib/performance.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const initPerformanceMonitoring = () => {
  getCLS(metric => {
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'CLS',
        value: Math.round(metric.value * 1000),
      });
    }
  });

  getFID(metric => {
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'FID',
        value: Math.round(metric.value),
      });
    }
  });

  // Additional vitals tracking...
};
```

### 6.2 Service Worker для PWA
```typescript
// public/sw.js
const CACHE_NAME = 'pravdast-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## Фаза 7: Vercel Deployment & Production

### 7.1 Vercel Configuration
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
      "destination": "/index.html"
    }
  ],
  "functions": {
    "api/**/*.ts": {
      "runtime": "@vercel/node"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### 7.2 Environment Variables Setup
```bash
# Vercel Environment Variables
VITE_GA_MEASUREMENT_ID=G-JQ8F0NZDX0
DATABASE_URL=postgresql://...
SENDGRID_API_KEY=SG.xxx
NEXTAUTH_SECRET=your-secret
VERCEL_URL=https://www.pravdagency.eu
```

### 7.3 API Routes для Vercel
```typescript
// api/contacts.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { emailService } from '../server/lib/email-service';
import { storage } from '../server/storage';
import { securityManager } from '../server/lib/security';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Security validation
  const validation = securityManager.validateContactFormData(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.errors.join(', ') });
  }

  try {
    // Save to database
    const contact = await storage.createContact(req.body);
    
    // Send notification email
    emailService.init();
    await emailService.sendContactNotification(req.body);

    res.status(200).json({ success: true, id: contact.id });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Вътрешна грешка на сървъра' });
  }
}
```

## Фаза 8: Мониторинг & Maintenance

### 8.1 Google Search Console Setup
1. Property verification с HTML tag
2. Sitemap submission: `https://www.pravdagency.eu/sitemap.xml`
3. Core Web Vitals мониторинг
4. Search performance tracking

### 8.2 Analytics Dashboard
```typescript
// src/pages/admin/analytics-dashboard.tsx
export default function AnalyticsDashboard() {
  const { data: contacts } = useQuery({
    queryKey: ['/api/contacts'],
    queryFn: () => fetch('/api/contacts').then(res => res.json()),
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      {/* Contact Form Submissions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Общо Заявки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{contacts?.length || 0}</div>
          </CardContent>
        </Card>
        {/* Additional metrics */}
      </div>
    </div>
  );
}
```

### 8.3 Error Monitoring
```typescript
// src/lib/error-tracking.ts
export const trackError = (error: Error, context?: any) => {
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      ...context
    });
  }

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error tracked:', error, context);
  }
};
```

## Технически Features

### Implemented Features
- ✅ Full-stack TypeScript architecture
- ✅ PostgreSQL database с Drizzle ORM
- ✅ Contact form с email notifications (SendGrid)
- ✅ Complete SEO system (sitemap, robots.txt, structured data)
- ✅ Google Analytics 4 integration за SPA
- ✅ Security middleware (rate limiting, input sanitization)
- ✅ Mobile-first responsive design
- ✅ Performance monitoring (Core Web Vitals)
- ✅ Error boundary system
- ✅ Accessibility compliance (WCAG 2.1)
- ✅ PWA capabilities
- ✅ Vercel deployment optimization

### Business Features
- ✅ Hero section с brand messaging
- ✅ Services pages (SEO Struktor™, Clientomat™, Sales Engine™)
- ✅ Case studies showcase
- ✅ Contact form за lead generation
- ✅ Blog system за content marketing
- ✅ FAQ page със structured data
- ✅ 404 page с service suggestions
- ✅ Mobile navigation
- ✅ Footer със company information

## Performance Benchmarks

### Target Metrics
- **Lighthouse Score:** 95+ (Performance, SEO, Accessibility)
- **Core Web Vitals:** Green scores
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s

### Security Standards
- HTTPS enforcement
- Content Security Policy (CSP)
- Rate limiting за API endpoints
- Input sanitization
- SQL injection protection
- XSS protection
- CSRF protection

Тази методика осигурява пълна production-ready business platform с модерни web стандарти, SEO optimization, и scalable architecture.