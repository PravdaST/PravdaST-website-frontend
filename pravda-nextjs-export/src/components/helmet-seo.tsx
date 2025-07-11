import { Helmet } from "react-helmet-async";
import { SEOData } from "../../../shared/seo-types";

interface HelmetSEOProps {
  seo: Partial<SEOData>;
  pageSlug?: string;
}

export function HelmetSEO({ seo, pageSlug }: HelmetSEOProps) {
  const canonicalUrl = seo.canonical || `https://www.pravdagency.eu/${pageSlug || ''}`;
  
  // SEO meta tags will be injected dynamically
  
  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags - Always include */}
      <meta property="og:title" content={seo.ogTitle || seo.title} />
      <meta property="og:description" content={seo.ogDescription || seo.description} />
      <meta property="og:image" content={seo.ogImage || 'https://www.pravdagency.eu/og-home.jpg'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={seo.ogType || 'website'} />
      <meta property="og:site_name" content="Pravdast - Бизнес Инженеринг" />
      <meta property="og:locale" content="bg_BG" />
      
      {/* Twitter Cards - Always include */}
      <meta name="twitter:card" content={seo.twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={seo.twitterTitle || seo.title} />
      <meta name="twitter:description" content={seo.twitterDescription || seo.description} />
      <meta name="twitter:image" content={seo.twitterImage || 'https://www.pravdagency.eu/twitter-home.jpg'} />
      <meta name="twitter:site" content="@pravdast" />
      <meta name="twitter:creator" content="@pravdast" />
      
      {/* Additional SEO */}
      <meta name="robots" content={seo.robots || "index, follow"} />
      <meta name="author" content="Pravdast Team" />
      <meta name="language" content="Bulgarian" />
      <meta name="geo.region" content="BG-VAR" />
      <meta name="geo.country" content="Bulgaria" />
      <meta name="geo.placename" content="Varna, Bulgaria" />
      <meta name="geo.position" content="43.2141;27.9147" />
      <meta name="ICBM" content="43.2141, 27.9147" />
      
      {/* Schema.org JSON-LD */}
      {seo.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      )}
    </Helmet>
  );
}