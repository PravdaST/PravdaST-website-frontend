
'use client';

import { useEffect } from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  url: string;
  price?: string;
}

export function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  url,
  price,
}: ServiceSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      provider: {
        '@type': 'Organization',
        name: provider,
        url: 'https://www.pravdagency.eu',
      },
      areaServed,
      url,
      ...(price && {
        offers: {
          '@type': 'Offer',
          price,
          priceCurrency: 'BGN',
        },
      }),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, provider, areaServed, url, price]);

  return null;
}
