import { Helmet } from 'react-helmet-async';
import { SEOData, defaultSEOConfig } from '../../shared/seo-types';
import { ogImageGenerator } from '@/lib/og-generator';

interface SEOHelmetProps {
  seo?: Partial<SEOData>;
  pageSlug?: string;
}

export function SEOHelmet({ seo, pageSlug }: SEOHelmetProps) {
  const title = seo?.title || defaultSEOConfig.defaultTitle;
  const description = seo?.description || defaultSEOConfig.defaultDescription;
  
  // Debug log to check if SEO is working
  console.log('SEOHelmet loaded:', { title, description, pageSlug });
  const keywords = seo?.keywords;
  const canonical = seo?.canonical || `${defaultSEOConfig.siteUrl}${pageSlug ? `/${pageSlug}` : ''}`;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage = seo?.ogImage || ogImageGenerator.getStaticOGImageUrl(pageSlug || '/');
  const ogType = seo?.ogType || 'website';
  const twitterCard = seo?.twitterCard || 'summary_large_image';
  const twitterTitle = seo?.twitterTitle || ogTitle;
  const twitterDescription = seo?.twitterDescription || ogDescription;
  const twitterImage = seo?.twitterImage || ogImage;
  const robots = seo?.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const noIndex = seo?.noIndex || false;

  // Schema.org structured data
  const getStructuredData = () => {
    if (seo?.structuredData) {
      return seo.structuredData;
    }

    // Default organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "name": defaultSEOConfig.siteName,
      "alternateName": "Pravda Agency",
      "url": defaultSEOConfig.siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${defaultSEOConfig.siteUrl}/favicon-192.png`,
        "width": 192,
        "height": 192
      },
      "image": `${defaultSEOConfig.siteUrl}/og-home.png`,
      "description": description,
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Дебър №58",
        "addressLocality": "Варна",
        "addressRegion": "Варна", 
        "postalCode": "9000",
        "addressCountry": "BG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.2141,
        "longitude": 27.9147
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+359879282299",
        "email": "contact@pravdast.agency",
        "contactType": "Customer Service",
        "areaServed": "BG",
        "availableLanguage": "Bulgarian"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "BGN",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Бизнес инженерни услуги",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Struktor™",
              "description": "Инженерни SEO системи за предвидим растеж"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Clickstarter™",
              "description": "Оптимизация на рекламни кампании"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Trendlab™",
              "description": "Изграждане на авторитет чрез съдържание"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Clientomat™", 
              "description": "Автоматизиране на клиентския цикъл"
            }
          }
        ]
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Варна"
        },
        {
          "@type": "City", 
          "name": "София"
        },
        {
          "@type": "City",
          "name": "Пловдив"
        },
        {
          "@type": "City",
          "name": "Бургас"
        },
        {
          "@type": "Country",
          "name": "България"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/pravdast.agency/",
        "https://www.youtube.com/@PravdaST",
        "https://www.instagram.com/pravdast.agency/",
        "https://www.linkedin.com/company/pravda-st/"
      ]
    };

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
      }
    };

    return [organizationSchema, websiteSchema];
  };

  const structuredDataArray = Array.isArray(getStructuredData()) 
    ? getStructuredData() as object[]
    : [getStructuredData() as object];

  return (
    <Helmet prioritizeSeoTags>
      {/* Critical SEO tags first for better indexing */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph tags (high priority for social sharing) */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />

      {/* Additional SEO meta tags */}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : robots} />
      
      {/* Geographic and language tags */}
      <meta name="author" content="Pravdast" />
      <meta name="language" content="Bulgarian" />
      <meta name="geo.region" content="BG" />
      <meta name="geo.country" content="Bulgaria" />
      <meta name="geo.placename" content="Варна" />
      <meta name="ICBM" content="43.2141, 27.9147" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Theme and mobile */}
      <meta name="theme-color" content="#ECB628" />
      <meta name="msapplication-TileColor" content="#ECB628" />
      <meta name="msapplication-TileImage" content="/icon-512.png" />
      <meta name="msapplication-config" content="none" />

      {/* Google Site Verification */}
      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION && (
        <meta name="google-site-verification" content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION} />
      )}

      <meta property="og:site_name" content={defaultSEOConfig.siteName} />
      <meta property="og:locale" content={defaultSEOConfig.locale} />
      
      {/* Twitter site and handle */}
      <meta name="twitter:site" content={defaultSEOConfig.twitterHandle} />

      {/* Favicons and app icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
      <link rel="shortcut icon" href="/favicon-192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Structured Data */}
      {structuredDataArray.map((schema, index) => (
        <script 
          key={`schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}