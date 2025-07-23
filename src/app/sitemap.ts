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
    '/case-studies',
    '/contact',
    '/faq',
    '/terms',
    '/privacy'
  ]

  // Static blog pages - правилно генерирани slug-ове от системата
  const blogPages = [
    '/blog/poznato-li-ti-e-tova-chuvstvo',
    '/blog/kak-da-optimizirate-vashiya-biznes-za-maksimalna-efektivnost', 
    '/blog/3-te-lazhi-za-privlichaneto-na-klienti-koito-vi-struvat-tsya',
    '/blog/biznes-inzheneri-vs-marketing-ekip-alternativa'
  ]

  // Combine all pages
  const allPages = [...staticPages, ...blogPages]

  const currentDate = new Date()

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: page === '' ? 'daily' : page.includes('/blog') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.includes('/services') ? 0.9 : 0.8,
  }))
}