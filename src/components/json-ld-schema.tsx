// JSON-LD Schema Components for SEO
import Script from 'next/script';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationSchema({
  name = 'Pravda Agency',
  url = 'https://pravdast.agency',
  logo = 'https://pravdast.agency/logo.png',
  description = 'Бизнес инженерство за предсказуем растеж. SEO оптимизация, дигитален маркетинг и автоматизация.'
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    sameAs: [
      'https://www.facebook.com/pravdaagency',
      'https://www.linkedin.com/company/pravda-agency',
      'https://www.instagram.com/pravdaagency'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+359-88-888-8888',
      contactType: 'customer service',
      areaServed: 'BG',
      availableLanguage: ['Bulgarian', 'English']
    }
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string;
  url?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = 'Pravda Agency',
  serviceType = 'Digital Marketing',
  areaServed = 'Bulgaria',
  url
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider
    },
    serviceType,
    areaServed,
    url
  };

  return (
    <Script
      id={`service-schema-${name.toLowerCase().replace(/\s/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export function ArticleSchema({
  title,
  description,
  author = 'Pravda Agency',
  datePublished,
  dateModified,
  image,
  url
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: author
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Pravda Agency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pravdast.agency/logo.png'
      }
    }
  };

  return (
    <Script
      id={`article-schema-${title.toLowerCase().replace(/\s/g, '-').substring(0, 20)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}