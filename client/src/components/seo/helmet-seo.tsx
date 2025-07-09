import { Helmet } from "react-helmet-async";
import { SEOData } from "../../../shared/seo-types";

interface HelmetSEOProps {
  seo: Partial<SEOData>;
  pageSlug?: string;
}

export function HelmetSEO({ seo, pageSlug }: HelmetSEOProps) {
  // Debug log to see if component is rendering
  console.log('HelmetSEO rendering:', seo.title);
  
  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      
      {/* Open Graph Tags */}
      {seo.ogTitle && <meta property="og:title" content={seo.ogTitle} />}
      {seo.ogDescription && <meta property="og:description" content={seo.ogDescription} />}
      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
      {seo.canonical && <meta property="og:url" content={seo.canonical} />}
      {seo.ogType && <meta property="og:type" content={seo.ogType} />}
      <meta property="og:site_name" content="Pravdast" />
      <meta property="og:locale" content="bg_BG" />
      
      {/* Twitter Cards */}
      {seo.twitterCard && <meta name="twitter:card" content={seo.twitterCard} />}
      {seo.twitterTitle && <meta name="twitter:title" content={seo.twitterTitle} />}
      {seo.twitterDescription && <meta name="twitter:description" content={seo.twitterDescription} />}
      {seo.twitterImage && <meta name="twitter:image" content={seo.twitterImage} />}
      
      {/* Additional SEO */}
      <meta name="robots" content={seo.robots || "index, follow"} />
      <meta name="author" content="Pravdast" />
      <meta name="language" content="Bulgarian" />
      <meta name="geo.region" content="BG" />
      <meta name="geo.country" content="Bulgaria" />
      <meta name="geo.placename" content="Варна" />
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