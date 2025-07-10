
'use client';

import { useEffect } from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: ArticleSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      author: {
        '@type': 'Person',
        name: author,
      },
      datePublished,
      dateModified: dateModified || datePublished,
      image: image || 'https://www.pravdagency.eu/og-images/default.svg',
      url,
      publisher: {
        '@type': 'Organization',
        name: 'Pravda Agency',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.pravdagency.eu/favicon.ico',
        },
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, author, datePublished, dateModified, image, url]);

  return null;
}
