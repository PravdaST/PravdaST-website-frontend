import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pravdagency.eu'

  // Static pages
  const staticPages = [
    '',
    '/services',
    '/services/seo-struktor',
    '/services/trendlab',
    '/services/clickstarter',
    '/services/clientomat',
    '/calculators',
    '/blog',
    '/case-studies',
    '/contact',
    '/faq',
    '/terms',
    '/privacy'
  ]

  const currentDate = new Date()

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: page === '' ? 'daily' : page.includes('/blog') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.includes('/services') ? 0.9 : 0.8,
  }))
}