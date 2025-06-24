export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

export const defaultSEOConfig: SEOData = {
  title: "Pravdast - Business Engineering Platform",
  description: "Професионална бизнес инженерна платформа за предсказуем растеж и системни решения в България.",
  author: "Pravdast Agency",
  ogType: "website",
  twitterCard: "summary_large_image"
};