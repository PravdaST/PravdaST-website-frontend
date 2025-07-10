
// Open Graph image generation utilities

export interface OGImageConfig {
  title: string;
  subtitle?: string;
  service?: string;
  bgColor?: string;
  textColor?: string;
}

export class OGGenerator {
  private static readonly baseUrl = 'https://www.pravdagency.eu';
  
  static generateOGImage(config: OGImageConfig): string {
    const {
      title,
      subtitle = '',
      service = '',
      bgColor = '#0f172a',
      textColor = '#ffffff'
    } = config;

    // For static generation, return predefined images
    const serviceMap: Record<string, string> = {
      'seo-struktor': '/og-images/seo-struktor.svg',
      'clientomat': '/og-images/clientomat.svg',
      'trendlab': '/og-images/trendlab.svg',
      'clickstarter': '/og-images/clickstarter.svg',
      'about': '/og-images/about.svg',
      'blog': '/og-images/blog.svg',
      'case-studies': '/og-images/case-studies.svg',
      'contact': '/og-images/contact.svg',
      'services': '/og-images/services.svg',
    };

    return serviceMap[service] || '/og-images/default.svg';
  }

  // Generate structured data for pages
  static generateWebsiteSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pravdast",
      "description": "Business Engineering Platform за предсказуем растеж на B2B компании в България",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/icon-512.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+359-879-282-299",
        "contactType": "sales",
        "availableLanguage": ["Bulgarian", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Дебър №58",
        "addressLocality": "Варна",
        "addressCountry": "BG"
      },
      "sameAs": [
        "https://www.facebook.com/pravdagency",
        "https://www.linkedin.com/company/pravda-agency",
        "https://www.youtube.com/channel/UCpravdagency",
        "https://www.instagram.com/pravda.agency"
      ]
    };
  }

  static generateServiceSchema(serviceName: string, description: string): object {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "Pravdast",
        "url": this.baseUrl
      },
      "serviceType": "Business Engineering",
      "audience": {
        "@type": "Audience",
        "audienceType": "B2B Companies"
      }
    };
  }

  static generateFAQSchema(faqs: Array<{question: string, answer: string}>): object {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }
}
