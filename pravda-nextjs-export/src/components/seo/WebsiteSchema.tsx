
'use client';

import { useEffect } from 'react';

interface WebsiteSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function WebsiteSchema({ name, description, url }: WebsiteSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name,
      description,
      url,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, url]);

  return null;
}
