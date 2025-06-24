import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "../shared/schema";
import { z } from "zod";

import { registerAdminRoutes } from "./admin-routes";
import { setupDefaultAdmin } from "./admin-setup";


export async function registerRoutes(app: Express): Promise<Server> {
  // Setup default admin user on startup
  setupDefaultAdmin();
  
  // Register admin routes first
  registerAdminRoutes(app);
  
  // Списък с валидни routes
  const validRoutes = [
    '/',
    '/services',
    '/services/seo-struktor',
    '/services/clientomat', 
    '/services/trendlab',
    '/services/clickstarter',
    '/case-studies',
    '/about',
    '/contact',
    '/admin',
    '/strapi-test'
  ];

  // Middleware за проверка на валидни routes - трябва да е ПРЕДИ Vite middleware
  app.use((req, res, next) => {
    // Пропускаме API заявки и статични файлове
    if (req.path.startsWith('/api/') || 
        req.path.startsWith('/src/') ||
        req.path.startsWith('/node_modules/') ||
        req.path.startsWith('/@') ||
        req.path.includes('.')) {
      return next();
    }

    // Проверяваме дали е валиден route
    const isValidRoute = validRoutes.includes(req.path);
    
    // Ако не е валиден route, задаваме 404 статус но позволяваме на React да се зареди
    if (!isValidRoute) {
      res.status(404);
    }
    
    next();
  });

  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        message: "Съобщението е изпратено успешно! Ще се свържем с вас скоро.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Невалидни данни", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          error: "Възникна грешка при изпращането на съобщението" 
        });
      }
    }
  });

  // Public blog routes
  app.get('/api/blog/posts', async (req, res) => {
    try {
      const posts = await storage.getBlogPosts(true);
      res.json(posts);
    } catch (error) {
      console.error('Error fetching published posts:', error);
      res.status(500).json({ message: 'Failed to fetch posts' });
    }
  });

  app.get('/api/blog/posts/:slug', async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.slug);
      if (!post || !post.published) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ message: 'Failed to fetch post' });
    }
  });

  app.get('/api/categories', async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Failed to fetch categories' });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // XML Sitemap endpoint премествен в index.ts преди security middleware

  // Robots.txt endpoint
  app.get("/robots.txt", async (req: Request, res: Response) => {
    try {
      const robotsContent = seoGenerator.generateRobotsTxt();

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      res.send(robotsContent);
    } catch (error) {
      console.error('Robots.txt generation error:', error);
      res.status(500).send('Error generating robots.txt');
    }
  });

  // Schema.org JSON-LD endpoint за организацията
  app.get("/api/schema/organization", async (req: Request, res: Response) => {
    try {
      const schema = seoGenerator.generateOrganizationSchema();
      res.setHeader('Content-Type', 'application/ld+json');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.json(schema);
    } catch (error) {
      console.error('Schema generation error:', error);
      res.status(500).json({ error: 'Error generating schema' });
    }
  });

  // Schema.org JSON-LD endpoint за уеб сайта
  app.get("/api/schema/website", async (req: Request, res: Response) => {
    try {
      const schema = seoGenerator.generateWebsiteSchema();
      res.setHeader('Content-Type', 'application/ld+json');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.json(schema);
    } catch (error) {
      console.error('Website schema generation error:', error);
      res.status(500).json({ error: 'Error generating website schema' });
    }
  });

  // Sitemap XML API endpoint за Vercel compatibility
  app.get("/api/sitemap.xml", async (req: Request, res: Response) => {
    try {
      const xmlContent = seoGenerator.generateSitemap();
      res.setHeader('Content-Type', 'text/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.send(xmlContent);
    } catch (error) {
      console.error('Sitemap generation error:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  // API 404 обработка
  app.use('/api/*', (req: Request, res: Response) => {
    res.status(404).json({ error: 'API endpoint not found' });
  });

  const httpServer = createServer(app);
  return httpServer;
}