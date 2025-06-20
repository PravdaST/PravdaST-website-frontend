import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { SitemapGenerator } from "./lib/sitemap-generator"; // Assuming SitemapGenerator is in this path

export async function registerRoutes(app: Express): Promise<Server> {
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

  // XML Sitemap endpoint
  app.get("/sitemap.xml", async (req: Request, res: Response) => {
    try {
      const generator = new SitemapGenerator();
      generator.generateStaticPages();

      const xmlContent = generator.generateXML();

      res.setHeader('Content-Type', 'application/xml');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      res.send(xmlContent);
    } catch (error) {
      console.error('Sitemap generation error:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  // Robots.txt endpoint
  app.get("/robots.txt", async (req: Request, res: Response) => {
    try {
      const generator = new SitemapGenerator();
      const robotsContent = generator.generateRobotsTxt();

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      res.send(robotsContent);
    } catch (error) {
      console.error('Robots.txt generation error:', error);
      res.status(500).send('Error generating robots.txt');
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}