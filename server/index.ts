import express, { type Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import { registerRoutes } from "./routes";

const app = express();

// Trust proxy for rate limiting
app.set('trust proxy', 1);

// Sitemap routes ПРЕДИ security middleware
app.get("/sitemap.xml", async (req, res) => {
  try {
    const { seoGenerator } = await import("./lib/seo-generator");
    const xmlContent = seoGenerator.generateSitemap();
    
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(xmlContent);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
});

// Специализирани sitemap файлове за Google Search Console
app.get("/blog-sitemap.xml", async (req, res) => {
  try {
    // Блог sitemap с всички статии
    const baseUrl = 'https://www.pravdagency.eu';
    const blogPosts = [
      {
        slug: 'predskazuem-rastezh-b2b-kompanii',
        lastmod: '2024-12-15',
        priority: '0.8',
        changefreq: 'monthly'
      },
      {
        slug: 'seo-struktor-revolutsionen-podhod', 
        lastmod: '2024-12-10',
        priority: '0.8',
        changefreq: 'monthly'
      },
      {
        slug: 'clientomat-avtomatiziran-sistem',
        lastmod: '2024-12-05',
        priority: '0.8', 
        changefreq: 'monthly'
      },
      {
        slug: 'sales-engine-prodazhbi-sistema',
        lastmod: '2024-12-01',
        priority: '0.8',
        changefreq: 'monthly'
      },
      {
        slug: 'biznes-inzhenering-budeshte',
        lastmod: '2024-11-25',
        priority: '0.8',
        changefreq: 'monthly'
      }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <mobile:mobile/>
  </url>
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;
    
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(xml);
  } catch (error) {
    console.error('Blog sitemap generation error:', error);
    res.status(500).send('Error generating blog sitemap');
  }
});

app.get("/services-sitemap.xml", async (req, res) => {
  try {
    // Услуги sitemap
    const baseUrl = 'https://www.pravdagency.eu';
    const services = [
      { slug: 'services', priority: '0.9' },
      { slug: 'services/seo-struktor', priority: '0.8' },
      { slug: 'services/clientomat', priority: '0.8' },
      { slug: 'services/sales-engine', priority: '0.8' }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${services.map(service => `  <url>
    <loc>${baseUrl}/${service.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${service.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;
    
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(xml);
  } catch (error) {
    console.error('Services sitemap generation error:', error);
    res.status(500).send('Error generating services sitemap');
  }
});

app.get("/sitemap-index.xml", async (req, res) => {
  try {
    // Sitemap index за Google Search Console
    const baseUrl = 'https://www.pravdagency.eu';
    const sitemaps = [
      { loc: `${baseUrl}/sitemap.xml`, lastmod: new Date().toISOString() },
      { loc: `${baseUrl}/blog-sitemap.xml`, lastmod: new Date().toISOString() },
      { loc: `${baseUrl}/services-sitemap.xml`, lastmod: new Date().toISOString() }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
    
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(xml);
  } catch (error) {
    console.error('Sitemap index generation error:', error);
    res.status(500).send('Error generating sitemap index');
  }
});

// Security middleware (след sitemap route)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'", "https:", "http://localhost:*", "http://127.0.0.1:*"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://www.pravdagency.eu', 'https://pravdagency.eu', 'https://pravdast.vercel.app']
    : ['http://localhost:5000', 'http://127.0.0.1:5000', 'http://localhost:1337', 'http://127.0.0.1:1337'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rate limiting - disabled in development
if (process.env.NODE_ENV === 'production') {
  const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минути
    max: 100, // 100 заявки на IP
    message: { error: "Твърде много заявки. Опитайте отново след 15 минути." },
    standardHeaders: true,
    legacyHeaders: false,
  });

  const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 час
    max: 5, // 5 съобщения на час
    message: { error: "Твърде много съобщения. Опитайте отново след 1 час." },
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use(generalLimiter);
  app.use('/api/contacts', contactLimiter);
}

// Body parsing with limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Simple static file serving for Vercel deployment
app.use(express.static('./dist'));

// SPA fallback - serve index.html for non-API routes
app.get('*', (req, res) => {
  res.sendFile('./dist/index.html', { root: process.cwd() });
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Pravdast server running on port ${port}`);
});
