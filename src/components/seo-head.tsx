import { useEffect } from "react";
import { SEOData, defaultSEOConfig } from "../../shared/seo-types";

interface SEOHeadProps {
  seo?: Partial<SEOData>;
  pageSlug?: string;
}

export function SEOHead({ seo, pageSlug }: SEOHeadProps) {
  const title = seo?.title || defaultSEOConfig.defaultTitle;
  const description = seo?.description || defaultSEOConfig.defaultDescription;
  const keywords = seo?.keywords;
  const canonical = seo?.canonical || `${defaultSEOConfig.siteUrl}${pageSlug ? `/${pageSlug}` : ''}`;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage = seo?.ogImage || `${defaultSEOConfig.siteUrl}${defaultSEOConfig.defaultImage}`;
  const noIndex = seo?.noIndex || false;

  useEffect(() => {
    // Обновяване на title
    document.title = title;

    // Функция за обновяване или създаване на meta тагове
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Основни SEO meta тагове
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (noIndex) updateMetaTag('robots', 'noindex, nofollow');

    // Open Graph тагове
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', defaultSEOConfig.siteName, true);
    updateMetaTag('og:locale', defaultSEOConfig.locale, true);

    // Twitter Card тагове
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', defaultSEOConfig.twitterHandle);
    updateMetaTag('twitter:title', ogTitle);
    updateMetaTag('twitter:description', ogDescription);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Schema.org JSON-LD
    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
      schemaScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": defaultSEOConfig.siteName,
      "url": defaultSEOConfig.siteUrl,
      "logo": `${defaultSEOConfig.siteUrl}/logo.png`,
      "description": description,
      "sameAs": [
        "https://www.linkedin.com/company/pravdast",
        "https://github.com/pravdast"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, noIndex]);

  return null; // Този компонент не рендира нищо визуално
}

// Hook за лесно използване на SEO
export function useSEO(seo?: Partial<SEOData>, pageSlug?: string) {
  useEffect(() => {
    // Тази логика се изпълнява при промяна на страницата
  }, [seo, pageSlug]);
}