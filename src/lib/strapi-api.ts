// Strapi API интеграция за SEO и съдържание
export interface StrapiSEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface StrapiPage {
  slug: string;
  seo: StrapiSEOData;
  content: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    sections?: any[];
  };
  updatedAt: string;
}

export interface StrapiBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  featuredImage?: string;
  seo: StrapiSEOData;
  tags: string[];
}

class StrapiAPI {
  private baseURL: string;
  private apiToken: string;

  constructor() {
    // Използваме локален Strapi за development, Cloud за production
    const isProduction = process.env.NODE_ENV === 'production';
    
    if (typeof window !== 'undefined') {
      // Frontend environment
      this.baseURL = isProduction 
        ? import.meta.env.VITE_STRAPI_API_URL || 'https://talented-oasis-899b2552b2.strapiapp.com'
        : 'http://localhost:1337';
      this.apiToken = isProduction
        ? import.meta.env.VITE_STRAPI_API_TOKEN || ''
        : import.meta.env.VITE_STRAPI_LOCAL_API_TOKEN || '';
    } else {
      // Backend environment
      this.baseURL = isProduction
        ? process.env.STRAPI_API_URL || 'https://talented-oasis-899b2552b2.strapiapp.com'
        : 'http://localhost:1337';
      this.apiToken = isProduction
        ? process.env.STRAPI_API_TOKEN || ''
        : process.env.STRAPI_LOCAL_API_TOKEN || '';
    }
  }

  private async request<T>(endpoint: string): Promise<T> {
    const url = `${this.baseURL}/api${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${this.apiToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Strapi API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Strapi API не е достъпен, използваме локални данни:', error);
      throw error;
    }
  }

  // Тестваме връзката с Strapi
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/api`, {
        headers: {
          'Authorization': `Bearer ${this.apiToken}`,
          'Content-Type': 'application/json',
        },
      });
      
      // Дори да получим 404, това означава че Strapi отговаря
      return response.status === 404 || response.ok;
    } catch (error) {
      console.warn('Strapi connection test failed:', error);
      return false;
    }
  }

  async getPageSEO(slug: string): Promise<StrapiPage | null> {
    try {
      const data = await this.request<any>(`/pages?filters[slug][$eq]=${slug}&populate=seo`);
      return data.data?.[0] || null;
    } catch (error) {
      return null;
    }
  }

  async getBlogPosts(): Promise<StrapiBlogPost[]> {
    try {
      const data = await this.request<any>('/blog-posts?populate=*&sort=publishedAt:desc');
      return data.data || [];
    } catch (error) {
      return [];
    }
  }

  async getBlogPost(slug: string): Promise<StrapiBlogPost | null> {
    try {
      const data = await this.request<any>(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
      return data.data?.[0] || null;
    } catch (error) {
      return null;
    }
  }

  async getServices(): Promise<any[]> {
    try {
      const data = await this.request<any>('/services?populate=*');
      return data.data || [];
    } catch (error) {
      return [];
    }
  }

  async updatePageViews(slug: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseURL}/api/analytics/page-view`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug, timestamp: new Date().toISOString() }),
      });
      // Тихо игнорираме грешките при analytics
    } catch (error) {
      // Тихо игнорираме грешките при analytics
    }
  }
}

export const strapiAPI = new StrapiAPI();

// Hook за използване на Strapi данни
export function useStrapiSEO(slug: string) {
  // В реална среда този hook ще използва react-query за кеширане
  // За сега връщаме локалните данни като fallback
  return null;
}