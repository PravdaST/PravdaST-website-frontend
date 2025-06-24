import { useEffect } from "react";
import { SEOData, defaultSEOConfig } from "../../shared/seo-types";

interface SEOHeadProps {
  seo?: Partial<SEOData>;
  pageSlug?: string;

export function SEOHead({ seo, pageSlug }: SEOHeadProps) {
  const title = seo?.title || defaultSEOConfig.defaultTitle;
  const description = seo?.description || defaultSEOConfig.defaultDescription;
  const keywords = seo?.keywords;
  const canonical = seo?.canonical || `${defaultSEOConfig.siteUrl}${pageSlug ? `/${pageSlug}` : ''}`;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  // Статично OG изображение за страницата
  const ogImage = seo?.ogImage || `${defaultSEOConfig.siteUrl}/og-images/${pageSlug || 'home'}.jpg`;
  const ogType = seo?.ogType || 'website';
  const twitterCard = seo?.twitterCard || 'summary_large_image';
  const twitterTitle = seo?.twitterTitle || ogTitle;
  const twitterDescription = seo?.twitterDescription || ogDescription;
  const twitterImage = seo?.twitterImage || ogImage;
  const robots = seo?.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
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
        document.head.appendChild(meta);
      meta.setAttribute('content', content);
    };

    // Основни SEO meta тагове
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', robots);
    
    // Допълнителни SEO тагове
    updateMetaTag('author', 'Pravdast');
    updateMetaTag('language', 'Bulgarian');
    updateMetaTag('geo.region', 'BG');
    updateMetaTag('geo.country', 'Bulgaria'); 
    updateMetaTag('geo.placename', 'София');
    updateMetaTag('ICBM', '42.6977, 23.3219'); // София координати
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('rating', 'general');
    updateMetaTag('distribution', 'global');
    
    // Viewport и мобилна оптимизация (ако не са зададени)
    
    // Тема цвят за мобилни браузъри
    updateMetaTag('theme-color', '#ECB628');
    updateMetaTag('msapplication-TileColor', '#ECB628');

    // Favicon и app icons
    const updateLinkTag = (rel: string, href: string, sizes?: string, type?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      link.setAttribute('href', href);
      if (sizes) link.setAttribute('sizes', sizes);
      if (type) link.setAttribute('type', type);
    };

    // Standard favicon
    updateLinkTag('icon', '/favicon-192.png', '192x192', 'image/png');
    updateLinkTag('shortcut icon', '/favicon-192.png');
    
    // Apple touch icons
    updateLinkTag('apple-touch-icon', '/apple-touch-icon.png', '180x180');
    updateLinkTag('apple-touch-icon-precomposed', '/apple-touch-icon.png');
    
    // Manifest for PWA
    updateLinkTag('manifest', '/manifest.json');
    
    // Microsoft tiles
    updateMetaTag('msapplication-TileImage', '/icon-512.png');
    updateMetaTag('msapplication-config', 'none');

    // Google Search Console verification
    const googleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
    if (googleVerification) {
      updateMetaTag('google-site-verification', googleVerification);

    // Open Graph тагове
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', defaultSEOConfig.siteName, true);
    updateMetaTag('og:locale', defaultSEOConfig.locale, true);

    // Twitter Card тагове
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:site', defaultSEOConfig.twitterHandle);
    updateMetaTag('twitter:title', twitterTitle);
    updateMetaTag('twitter:description', twitterDescription);
    updateMetaTag('twitter:image', twitterImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    canonicalLink.setAttribute('href', canonical);

    // Schema.org JSON-LD
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    // Използване на персонализирани структурирани данни ако са налични
    if (seo?.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seo.structuredData);
      script.setAttribute('data-schema-type', 'custom');
      document.head.appendChild(script);
    } else {
      // Основна организация schema като fallback
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": defaultSEOConfig.siteName,
        "url": defaultSEOConfig.siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${defaultSEOConfig.siteUrl}/logo.png`,
          "width": 300,
          "height": 100
        },
        "description": description,
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Дебър №58",
          "addressCountry": "BG",
          "addressRegion": "Варна",
          "addressLocality": "Варна"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+359 879 282 299",
          "email": "contact@pravdast.agency",
          "contactType": "Customer Service",
          "areaServed": "BG",
          "availableLanguage": "Bulgarian"
        },
        "sameAs": [
          "https://www.facebook.com/pravdast.agency/",
          "https://www.youtube.com/@PravdaST",
          "https://www.instagram.com/pravdast.agency/",
          "https://www.linkedin.com/company/pravda-st/"
        ]
      };

      // Website schema
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": defaultSEOConfig.siteName,
        "url": defaultSEOConfig.siteUrl,
        "description": description,
        "inLanguage": "bg-BG",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${defaultSEOConfig.siteUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
      };

      // Добавяне на основните schemas
      [organizationSchema, websiteSchema].forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        script.setAttribute('data-schema-type', schema['@type']);
        document.head.appendChild(script);
      });

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard, twitterTitle, twitterDescription, twitterImage, robots, noIndex, seo?.structuredData]);

  return null; // Този компонент не рендира нищо визуално

// Hook за лесно използване на SEO
export function useSEO(seo?: Partial<SEOData>, pageSlug?: string) {
  useEffect(() => {
    // Тази логика се изпълнява при промяна на страницата
  }, [seo, pageSlug]);
