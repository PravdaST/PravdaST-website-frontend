import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pravdagency.eu'

  // Static pages - include ALL indexable pages
  const staticPages = [
    '',
    '/about', 
    '/services',
    '/services/seo-struktor',
    '/services/trendlab', 
    '/services/clickstarter',
    '/services/clientomat',
    '/calculators',
    '/blog',
    '/blog/biznes-inzheneri-vs-vatrehen-ekip-alternativa',
    '/blog/biznes-inzhenerstvo-predvidim-rastezh',
    '/blog/seo-struktor-revolyutsionen-podhod-seo', 
    '/blog/clientomat-avtomatizatsiya-klientski-otnosheniya',
    '/blog/clickstarter-optimizatsiya-onlain-reklami',
    '/blog/trendlab-izgrazhdane-avtoritet-sdarzhanie',
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