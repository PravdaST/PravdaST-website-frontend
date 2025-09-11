import { 
  BusinessData, 
  GeneratedContent, 
  GeneratedTemplate, 
  TemplateFile, 
  TemplateGeneratorConfig,
  BusinessType,
  GenerationJob,
  GenerationStatus
} from './types';
import { RestaurantHandler } from './handlers/RestaurantHandler';
import { CafeHandler } from './handlers/CafeHandler';
import { ShopHandler } from './handlers/ShopHandler';
import { ServicesHandler } from './handlers/ServicesHandler';
import { BeautyHandler } from './handlers/BeautyHandler';
import { EducationHandler } from './handlers/EducationHandler';
import { ContentAutomation } from './ContentAutomation';

export class TemplateGenerator {
  private handlers: Map<string, any> = new Map();
  private contentAutomation: ContentAutomation;
  private config: TemplateGeneratorConfig;

  constructor(config: TemplateGeneratorConfig) {
    this.config = config;
    this.contentAutomation = new ContentAutomation();
    
    // Initialize business type handlers
    this.handlers.set(BusinessType.RESTAURANT, new RestaurantHandler());
    this.handlers.set(BusinessType.CAFE, new CafeHandler());
    this.handlers.set(BusinessType.SHOP, new ShopHandler());
    this.handlers.set(BusinessType.SERVICES, new ServicesHandler());
    this.handlers.set(BusinessType.BEAUTY, new BeautyHandler());
    this.handlers.set(BusinessType.EDUCATION, new EducationHandler());
  }

  /**
   * Generate a complete template from business data
   */
  async generateTemplate(businessData: BusinessData): Promise<GeneratedTemplate> {
    try {
      console.log('Starting template generation for:', businessData.name);

      // Get the appropriate handler for the business type
      const handler = this.handlers.get(businessData.templateType);
      if (!handler) {
        throw new Error(`No handler found for business type: ${businessData.templateType}`);
      }

      // Generate content using the specific handler
      const content = await handler.generateContent(businessData);
      
      // Generate template files
      const templateFiles = await handler.generateTemplate(content, businessData);
      
      // Generate additional assets and files
      const additionalFiles = await this.generateAdditionalFiles(content, businessData);
      
      // Combine all files
      const allFiles = [...templateFiles, ...additionalFiles];
      
      // Generate unique template ID
      const templateId = this.generateTemplateId(businessData);
      
      // Create preview URL
      const previewUrl = `${this.config.baseUrl}/preview/${templateId}`;
      
      const generatedTemplate: GeneratedTemplate = {
        id: templateId,
        businessName: businessData.name,
        templateType: businessData.templateType,
        files: allFiles,
        previewUrl,
        metadata: {
          generatedAt: new Date(),
          orderId: 0, // Will be set by caller
          version: '1.0.0'
        }
      };

      console.log('Template generation completed for:', businessData.name);
      return generatedTemplate;

    } catch (error) {
      console.error('Template generation failed:', error);
      throw new Error(`Template generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Generate a preview template (lighter version for quick review)
   */
  async generatePreview(businessData: BusinessData): Promise<GeneratedTemplate> {
    try {
      console.log('Generating preview for:', businessData.name);
      
      const handler = this.handlers.get(businessData.templateType);
      if (!handler) {
        throw new Error(`No handler found for business type: ${businessData.templateType}`);
      }

      // Generate content
      const content = await handler.generateContent(businessData);
      
      // Generate only essential template files for preview
      const previewFiles = await handler.generateTemplate(content, businessData);
      
      const templateId = this.generateTemplateId(businessData) + '-preview';
      const previewUrl = `${this.config.baseUrl}/preview/${templateId}`;
      
      return {
        id: templateId,
        businessName: businessData.name,
        templateType: businessData.templateType,
        files: previewFiles,
        previewUrl,
        metadata: {
          generatedAt: new Date(),
          orderId: 0,
          version: 'preview'
        }
      };

    } catch (error) {
      console.error('Preview generation failed:', error);
      throw new Error(`Preview generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Create a generation job for async processing
   */
  createGenerationJob(orderId: number, businessData: BusinessData): GenerationJob {
    const jobId = `job-${orderId}-${Date.now()}`;
    
    return {
      id: jobId,
      orderId,
      status: GenerationStatus.PENDING,
      businessData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  /**
   * Process a generation job
   */
  async processGenerationJob(job: GenerationJob): Promise<GenerationJob> {
    try {
      job.status = GenerationStatus.GENERATING;
      job.updatedAt = new Date();

      const template = await this.generateTemplate(job.businessData);
      template.metadata.orderId = job.orderId;

      job.result = template;
      job.status = GenerationStatus.COMPLETED;
      job.updatedAt = new Date();

      return job;

    } catch (error) {
      job.status = GenerationStatus.FAILED;
      job.error = error instanceof Error ? error.message : 'Unknown error';
      job.updatedAt = new Date();

      return job;
    }
  }

  /**
   * Generate additional common files (robots.txt, sitemap, etc.)
   */
  private async generateAdditionalFiles(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]> {
    const files: TemplateFile[] = [];

    // Generate robots.txt
    files.push({
      path: 'robots.txt',
      content: this.generateRobotsTxt(businessData),
      type: 'html'
    });

    // Generate manifest.json for PWA
    files.push({
      path: 'manifest.json',
      content: this.generateManifest(content.businessInfo),
      type: 'json'
    });

    // Generate meta configuration
    files.push({
      path: 'meta.json',
      content: JSON.stringify({
        businessName: content.businessInfo.name,
        templateType: businessData.templateType,
        generatedAt: new Date().toISOString(),
        seo: {
          title: content.businessInfo.name,
          description: content.businessInfo.description,
          keywords: this.generateKeywords(businessData)
        }
      }, null, 2),
      type: 'json'
    });

    return files;
  }

  /**
   * Generate robots.txt content
   */
  private generateRobotsTxt(businessData: BusinessData): string {
    return `User-agent: *
Allow: /

Sitemap: https://${businessData.name.toLowerCase().replace(/\s+/g, '-')}.pravda-sites.com/sitemap.xml

# Generated by Pravda Agency Template Generator
# Business: ${businessData.name}
# Type: ${businessData.templateType}
`;
  }

  /**
   * Generate manifest.json for PWA
   */
  private generateManifest(businessInfo: any): string {
    return JSON.stringify({
      name: businessInfo.name,
      short_name: businessInfo.name,
      description: businessInfo.description,
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#1f2937",
      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/icon-512.png", 
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }, null, 2);
  }

  /**
   * Generate SEO keywords
   */
  private generateKeywords(businessData: BusinessData): string[] {
    const baseKeywords = [businessData.name, businessData.businessType];
    
    const typeKeywords: Record<string, string[]> = {
      restaurant: ['ресторант', 'храна', 'кухня', 'меню', 'резервация'],
      cafe: ['кафе', 'кафене', 'напитки', 'десерти', 'wifi'],
      shop: ['магазин', 'продукти', 'онлайн', 'поръчки', 'доставка'],
      services: ['услуги', 'сервиз', 'професионални', 'качество'],
      beauty: ['красота', 'салон', 'процедури', 'грижа', 'стил'],
      education: ['образование', 'курсове', 'обучение', 'учители', 'знания']
    };

    return [...baseKeywords, ...(typeKeywords[businessData.templateType] || [])];
  }

  /**
   * Generate unique template ID
   */
  private generateTemplateId(businessData: BusinessData): string {
    const timestamp = Date.now();
    const businessSlug = businessData.name.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    return `${businessData.templateType}-${businessSlug}-${timestamp}`;
  }

  /**
   * Get supported business types
   */
  getSupportedBusinessTypes(): string[] {
    return Array.from(this.handlers.keys());
  }

  /**
   * Validate business data
   */
  validateBusinessData(businessData: BusinessData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!businessData.name || businessData.name.trim().length < 2) {
      errors.push('Business name is required and must be at least 2 characters');
    }

    if (!businessData.templateType) {
      errors.push('Template type is required');
    }

    if (!this.handlers.has(businessData.templateType)) {
      errors.push(`Unsupported template type: ${businessData.templateType}`);
    }

    if (!businessData.customerEmail || !businessData.customerEmail.includes('@')) {
      errors.push('Valid customer email is required');
    }

    if (!businessData.customerPhone || businessData.customerPhone.length < 6) {
      errors.push('Valid customer phone is required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}