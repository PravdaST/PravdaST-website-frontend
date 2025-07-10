
import { SITE_CONFIG } from './constants'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  noindex?: boolean
  jsonLd?: any
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  noindex = false,
}: SEOProps) {
  const seoTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title
  const seoDescription = description || SITE_CONFIG.description
  const seoImage = ogImage || SITE_CONFIG.ogImage
  const seoUrl = canonicalUrl || SITE_CONFIG.url

  return {
    title: seoTitle,
    description: seoDescription,
    keywords,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    canonical: seoUrl,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  price?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'BGN',
      },
    }),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'customer service',
      email: SITE_CONFIG.contact.email,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Варна',
      addressCountry: 'BG',
      streetAddress: SITE_CONFIG.contact.address,
    },
    sameAs: [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.linkedin,
      SITE_CONFIG.links.instagram,
      SITE_CONFIG.links.youtube,
    ],
  }
}
