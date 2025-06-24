// Comprehensive security utilities и CSRF защита

import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';

export interface SecurityConfig {
  csrfSecret: string;
  sessionSecret: string;
  rateLimitWindowMs: number;
  maxRequestsPerWindow: number;
  enableCSRF: boolean;
  enableXSSProtection: boolean;
  enableSQLInjectionProtection: boolean;
}

export class SecurityManager {
  private config: SecurityConfig;
  private csrfTokens: Map<string, { token: string; expires: number }> = new Map();

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      csrfSecret: config.csrfSecret || process.env.CSRF_SECRET || crypto.randomBytes(32).toString('hex'),
      sessionSecret: config.sessionSecret || process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex'),
      rateLimitWindowMs: config.rateLimitWindowMs || 15 * 60 * 1000, // 15 минути
      maxRequestsPerWindow: config.maxRequestsPerWindow || 100,
      enableCSRF: config.enableCSRF ?? true,
      enableXSSProtection: config.enableXSSProtection ?? true,
      enableSQLInjectionProtection: config.enableSQLInjectionProtection ?? true
    };
  }

  // CSRF Token Generation
  generateCSRFToken(sessionId: string): string {
    const token = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + (24 * 60 * 60 * 1000); // 24 часа
    
    this.csrfTokens.set(sessionId, { token, expires });
    
    // Почистване на изтекли токени
    this.cleanupExpiredTokens();
    
    return token;
  }

  // CSRF Token Validation
  validateCSRFToken(sessionId: string, token: string): boolean {
    const storedToken = this.csrfTokens.get(sessionId);
    
    if (!storedToken) {
      return false;
    }
    
    if (Date.now() > storedToken.expires) {
      this.csrfTokens.delete(sessionId);
      return false;
    }
    
    return storedToken.token === token;
  }

  // Cleanup expired CSRF tokens
  private cleanupExpiredTokens(): void {
    const now = Date.now();
    for (const [sessionId, tokenData] of this.csrfTokens.entries()) {
      if (now > tokenData.expires) {
        this.csrfTokens.delete(sessionId);
      }
    }
  }

  // XSS Protection - HTML Sanitization
  sanitizeHTML(input: string): string {
    if (!this.config.enableXSSProtection) return input;
    
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  // SQL Injection Prevention
  sanitizeSQLInput(input: string): string {
    if (!this.config.enableSQLInjectionProtection) return input;
    
    // Премахва опасни SQL ключови думи и символи
    const dangerousPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
      /[';--]/g,
      /\/\*.*?\*\//g,
      /\bOR\b.*?=.*?=|\bAND\b.*?=.*?=/gi
    ];
    
    let sanitized = input;
    dangerousPatterns.forEach(pattern => {
      sanitized = sanitized.replace(pattern, '');
    });
    
    return sanitized.trim();
  }

  // Input validation за форми
  validateContactFormData(data: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    // Име валидация
    if (!data.name || typeof data.name !== 'string') {
      errors.push('Име е задължително поле');
    } else if (data.name.length < 2 || data.name.length > 100) {
      errors.push('Името трябва да бъде между 2 и 100 символа');
    } else if (!/^[a-zA-Zа-яА-Я\s]+$/.test(data.name)) {
      errors.push('Името може да съдържа само букви и интервали');
    }
    
    // Email валидация
    if (!data.email || typeof data.email !== 'string') {
      errors.push('Email е задължително поле');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Невалиден email формат');
    } else if (data.email.length > 255) {
      errors.push('Email адресът е твърде дълъг');
    }
    
    // Website валидация
    if (!data.website || typeof data.website !== 'string') {
      errors.push('Website е задължително поле');
    } else if (!/^https?:\/\/.+\..+/.test(data.website)) {
      errors.push('Невалиден website формат');
    }
    
    // Компания валидация (опционално)
    if (data.company && typeof data.company === 'string') {
      if (data.company.length > 200) {
        errors.push('Името на компанията е твърде дълго');
      }
    }
    
    // Съобщение валидация
    if (!data.message || typeof data.message !== 'string') {
      errors.push('Съобщение е задължително поле');
    } else if (data.message.length < 10 || data.message.length > 5000) {
      errors.push('Съобщението трябва да бъде между 10 и 5000 символа');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Rate limiting utilities
  createRateLimitKey(ip: string, endpoint: string): string {
    return `ratelimit:${ip}:${endpoint}`;
  }

  // Security headers middleware
  securityHeaders() {
    return (req: Request, res: Response, next: NextFunction) => {
      // Content Security Policy
      res.setHeader('Content-Security-Policy', 
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: https:; " +
        "connect-src 'self' https:; " +
        "frame-ancestors 'none'"
      );
      
      // XSS Protection
      res.setHeader('X-XSS-Protection', '1; mode=block');
      
      // Content Type Options
      res.setHeader('X-Content-Type-Options', 'nosniff');
      
      // Frame Options
      res.setHeader('X-Frame-Options', 'DENY');
      
      // Referrer Policy
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      
      // Permissions Policy
      res.setHeader('Permissions-Policy', 
        'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=()'
      );
      
      next();
    };
  }

  // CSRF middleware
  csrfProtection() {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!this.config.enableCSRF) {
        return next();
      }
      
      // Пропускаме GET заявки
      if (req.method === 'GET') {
        return next();
      }
      
      const sessionId = req.sessionID || req.ip;
      const token = req.headers['x-csrf-token'] || req.body._csrf;
      
      if (!token || !this.validateCSRFToken(sessionId, token as string)) {
        return res.status(403).json({
          error: 'Невалиден CSRF токен',
          code: 'INVALID_CSRF_TOKEN'
        });
      }
      
      next();
    };
  }

  // Input sanitization middleware
  inputSanitization() {
    return (req: Request, res: Response, next: NextFunction) => {
      if (req.body && typeof req.body === 'object') {
        this.sanitizeObject(req.body);
      }
      
      if (req.query && typeof req.query === 'object') {
        this.sanitizeObject(req.query);
      }
      
      next();
    };
  }

  // Recursively sanitize object
  private sanitizeObject(obj: any): void {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        obj[key] = this.sanitizeHTML(obj[key]);
        obj[key] = this.sanitizeSQLInput(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.sanitizeObject(obj[key]);
      }
    }
  }

  // Audit logging
  auditLog(action: string, userId: string | null, ip: string, details: any = {}): void {
    const logEntry = {
      timestamp: new Date().toISOString(),
      action,
      userId: userId || 'anonymous',
      ip,
      details,
      userAgent: details.userAgent || 'unknown'
    };
    
    // В production тук ще логваме в база данни или файл
    console.log('AUDIT LOG:', JSON.stringify(logEntry));
  }

  // Session security
  generateSecureSessionId(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  // Password hashing (за бъдещи нужди)
  async hashPassword(password: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString('hex');
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve(salt + ':' + derivedKey.toString('hex'));
      });
    });
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    const [salt, key] = hash.split(':');
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
        if (err) reject(err);
        resolve(key === derivedKey.toString('hex'));
      });
    });
  }
}

// Export configured security manager
export const securityManager = new SecurityManager();