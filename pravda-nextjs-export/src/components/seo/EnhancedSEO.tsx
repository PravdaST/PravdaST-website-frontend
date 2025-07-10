'use client';

import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string[];
  structuredData?: object;
}

export function EnhancedSEO({
  title,
  description,
  canonical,
  ogImage = '/og-images/default.svg',
  keywords = [],
  structuredData
}: EnhancedSEOProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://www.pravdagency.eu${ogImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:site_name" content="Pravda Agency" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.pravdagency.eu${ogImage}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Bulgarian" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}