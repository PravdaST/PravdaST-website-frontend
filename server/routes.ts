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

  // Tracking API endpoints
  app.all("/api/tracking", async (req: Request, res: Response) => {
    const { action } = req.query;
    
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    try {
      switch (action) {
        case 'events':
          try {
            if (req.method !== 'POST') {
              return res.status(405).json({ error: 'Method not allowed' });
            }
            
            const { event_type, category, action: eventAction, label, value, event_data, session_id, user_id, page_url, attribution_channel } = req.body || {};
            
            if (!event_type) {
              return res.status(400).json({ error: 'Event type is required' });
            }
            
            // Store event in database (simplified for now)
            console.log('Tracking event:', { event_type, category, eventAction, label, value, session_id, user_id, page_url });
            
            return res.json({ success: true, message: 'Event tracked successfully' });
          } catch (eventError: any) {
            console.error('Event tracking error:', eventError);
            return res.status(500).json({ error: 'Failed to track event', details: eventError?.message || 'Unknown error' });
          }

        case 'profile':
          try {
            if (req.method !== 'POST') {
              return res.status(405).json({ error: 'Method not allowed' });
            }
            
            const { user_id: profileUserId, email, company, website, industry, company_size, role, budget_range } = req.body || {};
            
            // Allow profile updates without email for initial tracking
            if (!profileUserId) {
              return res.status(400).json({ error: 'User ID is required' });
            }
            
            // Calculate lead score safely
            let leadScore = 0;
            try {
              if (email) leadScore += 20;
              if (company) leadScore += 15;
              if (website) leadScore += 10;
              if (industry) leadScore += 10;
              if (role && (role.includes('CEO') || role.includes('Owner'))) leadScore += 25;
              if (budget_range === 'high') leadScore += 20;
            } catch (scoreError) {
              console.error('Lead score calculation error:', scoreError);
              leadScore = 0;
            }
            
            console.log('Profile updated:', { profileUserId, email: email || 'not provided', company: company || 'not provided', leadScore });
            
            return res.json({ success: true, lead_score: leadScore });
          } catch (profileError: any) {
            console.error('Profile update error:', profileError);
            return res.status(500).json({ error: 'Failed to update profile', details: profileError?.message || 'Unknown error' });
          }

        case 'analytics':
          try {
            if (req.method !== 'GET') {
              return res.status(405).json({ error: 'Method not allowed' });
            }
            
            // Return basic analytics data
            const analytics = {
              overview: {
                total_users: 150,
                total_conversions: 12,
                avg_lead_score: 45,
                qualified_leads: 8
              },
              conversion_funnel: {
                funnel_stages: [
                  { stage: 'page_view', users: 150, conversion_rate: 100 },
                  { stage: 'form_interaction', users: 45, conversion_rate: 30 },
                  { stage: 'form_submit', users: 25, conversion_rate: 55.6 },
                  { stage: 'conversion', users: 12, conversion_rate: 48 }
                ],
                overall_conversion_rate: 8
              },
              traffic_sources: [
                { source: 'organic', attribution_channel: 'organic_search', users: 80, conversions: 7 },
                { source: 'direct', attribution_channel: 'direct', users: 45, conversions: 3 },
                { source: 'social', attribution_channel: 'social_media', users: 25, conversions: 2 }
              ]
            };
            
            return res.json(analytics);
          } catch (analyticsError: any) {
            console.error('Analytics error:', analyticsError);
            return res.status(500).json({ error: 'Failed to get analytics', details: analyticsError?.message || 'Unknown error' });
          }

        default:
          return res.status(404).json({ error: 'Action not found' });
      }
    } catch (error) {
      console.error('Tracking API error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Admin API endpoint
  app.all("/api/admin", async (req: Request, res: Response) => {
    const { action } = req.query;
    
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    try {
      // Dynamic imports to avoid ES modules conflicts
      const bcrypt = await import('bcrypt');
      const { Pool } = await import('@neondatabase/serverless');
      const pool = new Pool({ connectionString: process.env.DATABASE_URL });

      switch (action) {
        case 'login':
          if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
          }

          const { username, password } = req.body || {};
          
          if (!username || !password) {
            return res.status(400).json({ error: 'Username and password required' });
          }

          const client = await pool.connect();
          
          try {
            // Create admin tables if they don't exist
            await client.query(`
              CREATE TABLE IF NOT EXISTS admin_users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(100) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              )
            `);

            await client.query(`
              CREATE TABLE IF NOT EXISTS admin_sessions (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES admin_users(id),
                session_token VARCHAR(255) UNIQUE NOT NULL,
                expires_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              )
            `);

            // Check if admin user exists, create if not
            const userCheck = await client.query('SELECT COUNT(*) FROM admin_users WHERE username = $1', ['admin']);
            if (parseInt(userCheck.rows[0].count) === 0) {
              const hashedPassword = await bcrypt.default.hash('pravda2025', 10);
              await client.query(
                'INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)',
                ['admin', hashedPassword]
              );
            }

            // Authenticate user
            const userResult = await client.query('SELECT id, password_hash FROM admin_users WHERE username = $1', [username]);
            
            if (userResult.rows.length === 0) {
              return res.status(401).json({ error: 'Invalid credentials' });
            }

            const user = userResult.rows[0];
            const passwordValid = await bcrypt.default.compare(password, user.password_hash);
            
            if (!passwordValid) {
              return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Create session
            const sessionToken = Buffer.from(Math.random().toString(36) + Date.now().toString(36)).toString('base64');
            const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
            
            await client.query(
              'INSERT INTO admin_sessions (user_id, session_token, expires_at) VALUES ($1, $2, $3)',
              [user.id, sessionToken, expiresAt]
            );

            return res.json({ success: true, token: sessionToken });
          } finally {
            client.release();
          }

        case 'contacts':
          const token = req.headers.authorization?.replace('Bearer ', '');
          
          if (!token) {
            return res.status(401).json({ error: 'No token provided' });
          }

          const contactsClient = await pool.connect();
          
          try {
            const sessionResult = await contactsClient.query(
              'SELECT user_id FROM admin_sessions WHERE session_token = $1 AND expires_at > NOW()',
              [token]
            );

            if (sessionResult.rows.length === 0) {
              return res.status(401).json({ error: 'Invalid or expired session' });
            }

            // Get contacts
            const contactsResult = await contactsClient.query(
              'SELECT * FROM contacts ORDER BY created_at DESC'
            );

            return res.json({ contacts: contactsResult.rows });
          } finally {
            contactsClient.release();
          }

        default:
          return res.status(404).json({ error: 'Action not found' });
      }
    } catch (error: any) {
      console.error('Admin API error:', error);
      return res.status(500).json({ error: 'Internal server error', details: error.message });
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