import { SEOHelmet } from '@/components/seo-helmet';
import { BreadcrumbSchema } from './breadcrumb-schema';
import { ServiceSchema } from './service-schema';
import { FAQSchema } from './faq-schema';
import { ArticleSchema } from './article-schema';
import { WebSiteSchema } from './website-schema';
import { SEOData } from '../../../shared/seo-types';

interface EnhancedSEOProps {
  seo?: Partial<SEOData>;
  pageSlug?: string;
  pageType?: 'home' | 'service' | 'blog' | 'faq' | 'contact' | 'about';
  breadcrumbs?: Array<{ name: string; url: string }>;
  serviceData?: {
    name: string;
    description: string;
    price: string;
    features: string[];
  };
  faqData?: Array<{ question: string; answer: string }>;
  articleData?: {
    title: string;
    description: string;
    content: string;
    author: string;
    publishDate: string;
    category: string;
    imageUrl?: string;
  };
  includeWebsiteSchema?: boolean;
}

export function EnhancedSEO({ 
  seo, 
  pageSlug, 
  pageType = 'home',
  breadcrumbs,
  serviceData,
  faqData,
  articleData,
  includeWebsiteSchema = false
}: EnhancedSEOProps) {
  const currentUrl = `https://www.pravdagency.eu${pageSlug ? `/${pageSlug}` : ''}`;

  return (
    <>
      {/* Core SEO with react-helmet-async */}
      <SEOHelmet seo={seo} pageSlug={pageSlug} />
      
      {/* Website Schema for homepage */}
      {includeWebsiteSchema && <WebSiteSchema />}
      
      {/* Breadcrumb Schema if breadcrumbs provided */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}
      
      {/* Service Schema for service pages */}
      {pageType === 'service' && serviceData && (
        <ServiceSchema
          serviceName={serviceData.name}
          description={serviceData.description}
          price={serviceData.price}
          features={serviceData.features}
          url={currentUrl}
        />
      )}
      
      {/* Article Schema for blog posts */}
      {pageType === 'blog' && articleData && (
        <ArticleSchema
          title={articleData.title}
          description={articleData.description}
          content={articleData.content}
          author={articleData.author}
          publishDate={articleData.publishDate}
          category={articleData.category}
          url={currentUrl}
          imageUrl={articleData.imageUrl}
        />
      )}
      
      {/* FAQ Schema for FAQ page */}
      {pageType === 'faq' && faqData && (
        <FAQSchema faqs={faqData} />
      )}
    </>
  );
}