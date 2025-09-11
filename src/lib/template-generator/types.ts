// Template generation types and interfaces

export interface BusinessData {
  name: string;
  businessType: string;
  templateType: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  businessWebsite?: string;
  message?: string;
  customizationData?: Record<string, any>;
}

export interface GeneratedContent {
  businessInfo: {
    name: string;
    tagline: string;
    description: string;
    phone: string;
    address: string;
    email: string;
    hours: {
      weekdays: string;
      weekend: string;
    };
    rating: number;
    reviews: number;
  };
  menuCategories?: MenuCategory[];
  features: Feature[];
  reviews: CustomerReview[];
  colorScheme: ColorScheme;
  imagery: ImageryConfig;
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface CustomerReview {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  light: string;
}

export interface ImageryConfig {
  heroBackground: string;
  logoPlaceholder: string;
  menuImages: string[];
  galleryImages: string[];
}

export interface TemplateFile {
  path: string;
  content: string;
  type: 'html' | 'css' | 'js' | 'json' | 'image';
}

export interface GeneratedTemplate {
  id: string;
  businessName: string;
  templateType: string;
  files: TemplateFile[];
  deploymentUrl?: string;
  metadata: {
    generatedAt: Date;
    orderId: number;
    version: string;
  };
}

export interface TemplateGeneratorConfig {
  outputDir: string;
  baseUrl: string;
  enablePreview: boolean;
  assetsCDN?: string;
}

export interface BusinessTypeHandler {
  generateContent(businessData: BusinessData): Promise<GeneratedContent>;
  generateTemplate(content: GeneratedContent, businessData: BusinessData): Promise<TemplateFile[]>;
  getColorScheme(businessType: string): ColorScheme;
  getDefaultFeatures(): Feature[];
}

// Enum for supported business types
export enum BusinessType {
  RESTAURANT = 'restaurant',
  CAFE = 'cafe', 
  SHOP = 'shop',
  SERVICES = 'services',
  BEAUTY = 'beauty',
  EDUCATION = 'education'
}

// Template generation status
export enum GenerationStatus {
  PENDING = 'pending',
  GENERATING = 'generating',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

export interface GenerationJob {
  id: string;
  orderId: number;
  status: GenerationStatus;
  businessData: BusinessData;
  result?: GeneratedTemplate;
  error?: string;
  createdAt: Date;
  updatedAt: Date;
}