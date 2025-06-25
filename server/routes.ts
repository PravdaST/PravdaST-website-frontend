import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { seoGenerator } from "./lib/seo-generator";
import { sanitizeInput, validateContentType } from "./middleware/security";
import { emailService } from "./lib/email-service";
import { trackBlogView, trackBlogLike, trackBlogShare, getBlogStats } from "./blog-analytics";


export async function registerRoutes(app: Express): Promise<Server> {
  // Списък с валидни routes
  const validRoutes = [
    '/',
    '/services',
    '/services/seo-struktor',
    '/services/clientomat', 
    '/services/trendlab',
    '/services/sales-engine',
    '/case-studies',
    '/about',
    '/contact',
    '/faq',
    '/blog',
    '/strapi-test',
    '/admin-pravda'
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

  // Contact form submission with security middleware
  app.post("/api/contacts", sanitizeInput, validateContentType, async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Изпращане на имейл до contact@pravdast.agency
      const emailData = {
        ...validatedData,
        company: validatedData.company || undefined
      };
      const emailSent = await emailService.sendContactNotification(emailData);
      
      if (emailSent) {
        console.log('Имейл изпратен успешно до contact@pravdast.agency');
      } else {
        console.log('Имейлът не беше изпратен, но контактът е запазен в базата данни');
      }

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

  // Admin authentication endpoints
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
      }

      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const bcrypt = require('bcrypt');
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create session
      const { randomBytes } = require('crypto');
      const sessionToken = randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

      await storage.createAdminSession({
        sessionToken,
        userId: user.id,
        expiresAt,
      });

      res.json({ 
        message: "Login successful", 
        token: sessionToken,
        user: { id: user.id, username: user.username }
      });
    } catch (error: any) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });

  // Simple auth middleware for admin routes
  const authenticateAdmin = async (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.substring(7);
    const session = await storage.getAdminSession(token);
    
    if (!session) {
      return res.status(401).json({ message: "Invalid or expired session" });
    }

    req.adminUserId = session.userId;
    next();
  };

  app.post("/api/admin/logout", authenticateAdmin, async (req: any, res) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader.substring(7);
      await storage.deleteAdminSession(token);
      res.json({ message: "Logout successful" });
    } catch (error: any) {
      console.error("Error during logout:", error);
      res.status(500).json({ message: "Logout failed" });
    }
  });

  // Admin CRM endpoints for blog management
  app.get("/api/admin/blog/posts", authenticateAdmin, async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error: any) {
      console.error("Error fetching admin blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.post("/api/admin/blog/posts", authenticateAdmin, async (req: any, res) => {
    try {
      const { insertBlogPostSchema } = require("@shared/schema");
      const postData = insertBlogPostSchema.parse({
        ...req.body,
        authorId: req.adminUserId,
      });
      const post = await storage.createBlogPost(postData);
      res.json({ message: "Blog post created successfully", post });
    } catch (error: any) {
      console.error("Error creating blog post:", error);
      res.status(400).json({ 
        message: "Failed to create blog post", 
        error: error.message 
      });
    }
  });

  app.put("/api/admin/blog/posts/:id", authenticateAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updateData = req.body;
      delete updateData.authorId; // Don't allow changing author
      
      const post = await storage.updateBlogPost(id, updateData);
      res.json({ message: "Blog post updated successfully", post });
    } catch (error: any) {
      console.error("Error updating blog post:", error);
      res.status(400).json({ 
        message: "Failed to update blog post", 
        error: error.message 
      });
    }
  });

  app.delete("/api/admin/blog/posts/:id", authenticateAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteBlogPost(id);
      res.json({ message: "Blog post deleted successfully" });
    } catch (error: any) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ message: "Failed to delete blog post" });
    }
  });

  app.post("/api/admin/blog/posts/:id/publish", authenticateAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.publishBlogPost(id);
      res.json({ message: "Blog post published successfully" });
    } catch (error: any) {
      console.error("Error publishing blog post:", error);
      res.status(500).json({ message: "Failed to publish blog post" });
    }
  });

  app.post("/api/admin/blog/posts/:id/unpublish", authenticateAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.unpublishBlogPost(id);
      res.json({ message: "Blog post unpublished successfully" });
    } catch (error: any) {
      console.error("Error unpublishing blog post:", error);
      res.status(500).json({ message: "Failed to unpublish blog post" });
    }
  });

  // Admin contacts endpoint
  app.get("/api/admin/contacts", authenticateAdmin, async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Public blog endpoints (for frontend consumption)
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error: any) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post || !post.isPublished) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error: any) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Blog analytics endpoints
  app.post("/api/blog/:slug/view", trackBlogView);
  app.post("/api/blog/:slug/like", trackBlogLike);
  app.post("/api/blog/:slug/share", trackBlogShare);
  app.get("/api/blog/:slug/stats", getBlogStats);

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ error: "Възникна грешка при зареждането на съобщенията" });
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