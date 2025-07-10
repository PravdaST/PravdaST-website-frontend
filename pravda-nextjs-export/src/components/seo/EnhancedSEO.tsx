
'use client';

import { Helmet } from 'react-helmet-async';
import { usePageTracking } from '@/hooks/usePageTracking';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  keywords?: string[];
}

export default function EnhancedSEO({
  title,
  description,
  canonicalUrl,
  ogImage = '/og-images/default.svg',
  structuredData,
  noIndex = false,
  keywords = []
}: EnhancedSEOProps) {
  usePageTracking();

  const fullTitle = title.includes('Pravdast') ? title : `${title} | Pravdast`;
  const ogUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `https://www.pravdagency.eu${canonicalUrl}`;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `https://www.pravdagency.eu${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pravdast" />
      <meta property="og:locale" content="bg_BG" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional Meta */}
      <meta name="author" content="Pravdast" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
  );
}
