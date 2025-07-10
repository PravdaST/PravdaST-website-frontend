import express, { type Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import prerender from "prerender-node";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { securityManager } from "./lib/security";
import { seoMiddleware } from "./lib/seo-middleware";

const app = express();

// Debug logging за Prerender integration
app.use((req, res, next) => {
  const userAgent = req.get('User-Agent') || '';
  if (userAgent.includes('Prerender') || userAgent.includes('bot') || userAgent.includes('Bot')) {
    console.log('🤖 Bot detected:', userAgent);
    console.log('📍 IP:', req.ip);
    console.log('🔗 URL:', req.url);
    console.log('🎫 Token exists:', !!process.env.PRERENDER_TOKEN);
  }
  next();
});

// Test endpoint за проверка на Prerender интеграция
app.get('/test-prerender', (req, res) => {
  const userAgent = req.get('User-Agent') || '';
  const isBot = userAgent.includes('bot') || userAgent.includes('Bot') || userAgent.includes('Prerender');
  
  res.json({
    status: 'Prerender integration test',
    userAgent: userAgent,
    isBotDetected: isBot,
    hasToken: !!process.env.PRERENDER_TOKEN,
    middleware: process.env.PRERENDER_TOKEN ? 'active' : 'inactive (development)',
    timestamp: new Date().toISOString()
  });
});

// Prerender.io middleware за SEO - работи само ако има token
if (process.env.PRERENDER_TOKEN) {
  console.log('✅ Prerender.io middleware активен с token');
  app.use(prerender.set("prerenderToken", process.env.PRERENDER_TOKEN)
    .set("prerenderServiceUrl", "https://service.prerender.io")
    .set("protocol", "https"));
} else {
  console.log('⚠️ PRERENDER_TOKEN липсва - middleware неактивен в development');
  console.log('ℹ️ За тестване на интеграцията посетете: /test-prerender');
}

// Trust proxy for rate limiting
app.set("trust proxy", 1);

// Security headers для production
app.use((req, res, next) => {
  // Basic security headers
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'SAMEORIGIN');
  res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // CSP header for production
  res.header('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.klaviyo.com https://static-tracking.klaviyo.com https://www.googletagmanager.com https://region1.google-analytics.com https://analytics.ahrefs.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static-tracking.klaviyo.com https://static.klaviyo.com; " +
    "img-src 'self' data: https://upload.wikimedia.org https://framerusercontent.com https://d3k81ch9hvuctc.cloudfront.net; " +
    "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com; " +
    "connect-src 'self' https://vitals.vercel-insights.com https://a.klaviyo.com https://fast.a.klaviyo.com https://static-forms.klaviyo.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.ahrefs.com https://www.googletagmanager.com https://static.klaviyo.com https://fonts.googleapis.com https://framerusercontent.com https://fonts.gstatic.com https://service.prerender.io; " +
    "frame-src 'self' https://www.google.com; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "worker-src 'self'"
  );
  
  // Bot-specific cache headers
  if (req.get('User-Agent')?.includes('bot') || req.get('User-Agent')?.includes('Bot')) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
  }
  next();
});

// Sitemap routes ПРЕДИ security middleware
app.get("/sitemap.xml", async (req, res) => {
  try {
    const { seoGenerator } = await import("./lib/seo-generator");
    const xmlContent = seoGenerator.generateSitemap();

    // Премахване на всички whitespace преди XML декларацията
    const cleanXml = xmlContent.trim();

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(cleanXml);
  } catch (error) {
    console.error("Sitemap generation error:", error);
    res.status(500).send("Error generating sitemap");
  }
});

// Sitemap route използва SEOGenerator класа
// Explicit 404 routes за legacy sitemap URLs
app.get("/blog-sitemap.xml", (req, res) => {
  res.status(404).send("Not Found");
});

app.get("/services-sitemap.xml", (req, res) => {
  res.status(404).send("Not Found");
});

app.get("/sitemap-index.xml", (req, res) => {
  res.status(404).send("Not Found");
});

// Security middleware (след sitemap route)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
          "https://static.klaviyo.com",
        ],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: [
          "'self'",
          "data:",
          "https:",
          "https://d3k81ch9hvuctc.cloudfront.net",
        ],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://www.googletagmanager.com",
          "https://region1.google-analytics.com",
          "https://static.klaviyo.com",
          "https://analytics.ahrefs.com",
        ],
        connectSrc: [
          "'self'",
          "https:",
          "http://localhost:*",
          "http://127.0.0.1:*",
          "https://www.google-analytics.com",
          "https://region1.google-analytics.com",
          "https://static.klaviyo.com",
          "https://static-tracking.klaviyo.com",
          "https://d3k81ch9hvuctc.cloudfront.net",
          "https://service.prerender.io",
        ],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      
      const allowedOrigins = process.env.NODE_ENV === "production"
        ? [
            "https://www.pravdagency.eu",
            "https://pravdagency.eu", 
            "https://pravdast.vercel.app",
            "https://service.prerender.io"
          ]
        : [
            "http://localhost:5000",
            "http://127.0.0.1:5000",
            "http://localhost:1337",
            "http://127.0.0.1:1337",
            "https://service.prerender.io"
          ];
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Rate limiting - disabled in development, whitelist Prerender.io IPs
if (process.env.NODE_ENV === "production") {
  const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минути
    max: 100, // 100 заявки на IP
    message: { error: "Твърде много заявки. Опитайте отново след 15 минути." },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Whitelist Prerender.io official IP ranges
      const clientIP = req.ip;
      const userAgent = req.get('User-Agent') || '';
      
      // Check for Prerender user agent
      if (userAgent.includes('Prerender') || userAgent.includes('prerender')) {
        return true;
      }
      
      // Check official IP ranges
      // 103.207.40.0/22 = 103.207.40.0 - 103.207.43.255
      // 104.224.12.0/22 = 104.224.12.0 - 104.224.15.255
      if (clientIP.startsWith('103.207.4') || 
          clientIP.startsWith('104.224.1')) {
        return true;
      }
      
      return false;
    },
  });

  const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 час
    max: 5, // 5 съобщения на час
    message: { error: "Твърде много съобщения. Опитайте отново след 1 час." },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Whitelist Prerender.io official IP ranges
      const clientIP = req.ip;
      const userAgent = req.get('User-Agent') || '';
      
      // Check for Prerender user agent
      if (userAgent.includes('Prerender') || userAgent.includes('prerender')) {
        return true;
      }
      
      // Check official IP ranges
      // 103.207.40.0/22 = 103.207.40.0 - 103.207.43.255
      // 104.224.12.0/22 = 104.224.12.0 - 104.224.15.255
      if (clientIP.startsWith('103.207.4') || 
          clientIP.startsWith('104.224.1')) {
        return true;
      }
      
      return false;
    },
  });

  app.use(generalLimiter);
  app.use("/api/contacts", contactLimiter);
}

// Body parsing with limits
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

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

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
