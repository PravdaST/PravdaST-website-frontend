# Модерна SEO-Готова SPA - Пълна Методика

## Фаза 1: Основа на Проекта & Настройка

### 1.1 Създаване на Проект
```bash
# Създаване на Vite + React + TypeScript проект
npm create vite@latest project-name -- --template react-ts
cd project-name
npm install

# Git инициализация
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Основни Зависимости
```bash
# SEO и Analytics
npm install react-ga4 react-helmet-async

# UI Framework (shadcn/ui)
npm install @radix-ui/react-* tailwindcss

# Routing (за SPA)
npm install wouter

# Валидация и Type Safety
npm install zod drizzle-zod

# Performance мониторинг
npm install @vercel/speed-insights
```

### 1.3 Структура на Проекта
```
src/
├── components/
│   ├── seo-head.tsx
│   ├── schema-markup.tsx
│   └── breadcrumbs.tsx
├── data/
│   └── seo-pages.ts
├── hooks/
│   └── usePageTracking.ts
├── lib/
│   └── analytics.ts
├── pages/
├── shared/
│   └── seo-types.ts
└── server/
    └── lib/
        └── seo-generator.ts
```

### 1.4 Environment Variables
```bash
# .env файл
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://your-domain.com

# .gitignore
echo ".env" >> .gitignore
```

## Фаза 2: Основно Развитие на Приложението

### 2.1 Routing Система
```typescript
// src/App.tsx
import { Switch, Route } from "wouter";
import usePageTracking from "./hooks/usePageTracking";

function App() {
  usePageTracking(); // SPA Analytics tracking
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

### 2.2 SEO Types и Схеми
```typescript
// shared/seo-types.ts
import { z } from 'zod';

export const seoDataSchema = z.object({
  title: z.string().min(10).max(60),
  description: z.string().min(120).max(160),
  keywords: z.string().optional(),
  canonical: z.string().url(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().url().optional(),
  robots: z.string().default("index, follow"),
  structuredData: z.any().optional(),
});

export type SEOData = z.infer<typeof seoDataSchema>;
```

### 2.3 SPA Analytics Hook
```typescript
// src/hooks/usePageTracking.ts
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
  const [location] = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
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

## Фаза 3: SEO Имплементация

### 3.1 SEO Head Компонент
```typescript
// src/components/seo-head.tsx
import { useEffect } from 'react';
import { SEOData } from '../../shared/seo-types';

interface SEOHeadProps {
  seo: Partial<SEOData>;
}

export function SEOHead({ seo }: SEOHeadProps) {
  useEffect(() => {
    // Dynamic title
    document.title = seo.title || 'Default Title';
    
    // Meta description
    updateMetaTag('description', seo.description);
    
    // Canonical URL
    updateLinkTag('canonical', seo.canonical);
    
    // Open Graph tags
    updateMetaTag('og:title', seo.ogTitle, 'property');
    updateMetaTag('og:description', seo.ogDescription, 'property');
    
    // Structured data
    if (seo.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seo.structuredData);
      document.head.appendChild(script);
    }
  }, [seo]);

  return null;
}
```

### 3.2 SEO Данни за Страници
```typescript
// src/data/seo-pages.ts
export const pageSEOData: Record<string, Partial<SEOData>> = {
  home: {
    title: "Начална Страница - Вашата Компания",
    description: "Описание на началната страница с ключови думи за SEO оптимизация. Минимум 120 символа.",
    canonical: "https://your-domain.com/",
    ogTitle: "Open Graph заглавие за социални мрежи",
    ogDescription: "OG описание за Facebook, LinkedIn споделяне",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Вашата Компания",
      "url": "https://your-domain.com"
    }
  },
  // Други страници...
};
```

### 3.3 Server-Side SEO Генератор
```typescript
// server/lib/seo-generator.ts
export class SEOGenerator {
  generateSitemap(): string {
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
      sitemap += `
  <url>
    <loc>https://your-domain.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    sitemap += '\n</urlset>';
    return sitemap;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Disallow: /admin/
Disallow: /api/

Sitemap: https://your-domain.com/sitemap.xml`;
  }
}
```

### 3.4 API Routes
```typescript
// api/sitemap.xml.ts (Vercel функция)
import { SEOGenerator } from '../server/lib/seo-generator';

export default function handler(req, res) {
  const seoGenerator = new SEOGenerator();
  const sitemap = seoGenerator.generateSitemap();
  
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}

// api/robots.txt.ts
export default function handler(req, res) {
  const seoGenerator = new SEOGenerator();
  const robots = seoGenerator.generateRobotsTxt();
  
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robots);
}
```

## Фаза 4: Deployment & Vercel Конфигурация

### 4.1 Vercel Конфигурация
```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/((?!api|_next/static|_next/image|favicon.ico).*)",
      "destination": "/index.html"
    }
  ],
  "functions": {
    "api/**/*.ts": {
      "runtime": "@vercel/node"
    }
  }
}
```

### 4.2 GitHub Интеграция
```bash
# Свързване с GitHub
git remote add origin https://github.com/username/repo-name.git
git push -u origin main

# Vercel CLI deployment
npm i -g vercel
vercel login
vercel --prod
```

### 4.3 Environment Variables в Vercel
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Добавяне на:
   - `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
   - `VITE_SITE_URL=https://your-domain.vercel.app`

### 4.4 Custom Domain (опционално)
1. Vercel Dashboard → Project → Settings → Domains
2. Добавяне на custom domain
3. DNS конфигурация според инструкциите

## Фаза 5: Launch & Текущ Мониторинг

### 5.1 Google Search Console
1. Отиване на [Google Search Console](https://search.google.com/search-console)
2. Добавяне на property за домейна
3. Верификация чрез HTML tag или DNS
4. Изпращане на sitemap: `https://your-domain.com/sitemap.xml`

### 5.2 Google Analytics 4
1. Създаване на GA4 property
2. Конфигуриране на goals и conversions
3. Свързване с Google Search Console
4. Настройка на custom events за SPA tracking

### 5.3 SEO Мониторинг Tools
```typescript
// src/lib/seo-monitoring.ts
export const trackSEOMetrics = () => {
  // Page load speed
  const perfObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    // Send to analytics
  });
  perfObserver.observe({ type: 'navigation', buffered: true });
  
  // Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
};
```

### 5.4 Автоматизирани SEO Проверки
```typescript
// src/lib/seo-health-check.ts
export const checkSEOHealth = () => {
  const checks = {
    hasTitle: !!document.title && document.title.length > 10,
    hasDescription: !!document.querySelector('meta[name="description"]'),
    hasCanonical: !!document.querySelector('link[rel="canonical"]'),
    hasStructuredData: !!document.querySelector('script[type="application/ld+json"]'),
    isHTTPS: location.protocol === 'https:',
    hasViewport: !!document.querySelector('meta[name="viewport"]')
  };
  
  const score = Object.values(checks).filter(Boolean).length;
  return { checks, score: (score / Object.keys(checks).length) * 100 };
};
```

## Чек Лист за Завършване

### Pre-Launch
- [ ] Всички страници имат уникални title и description
- [ ] Sitemap.xml се генерира правилно
- [ ] Robots.txt е конфигуриран
- [ ] Structured data е валидна (Schema.org validator)
- [ ] Analytics tracking работи за SPA навигация
- [ ] Mobile-friendly design
- [ ] Page speed > 90 (Lighthouse)

### Post-Launch
- [ ] Google Search Console setup и verification
- [ ] Sitemap изпратен в GSC
- [ ] Google Analytics 4 конфигуриран
- [ ] Core Web Vitals мониторинг
- [ ] Regular SEO health checks
- [ ] Content update strategy

## Полезни Инструменти

### Разработка
- [Google Structured Data Testing Tool](https://search.google.com/test/rich-results)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Schema.org Validator](https://validator.schema.org/)

### Мониторинг
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://analytics.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Ahrefs Site Explorer](https://ahrefs.com/site-explorer) (платен)

Тази методика осигурява пълна SEO-готовност за модерни SPA приложения с focus върху performance, техническо SEO и правилно проследяване на analytics данни.