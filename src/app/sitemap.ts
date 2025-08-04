import { MetadataRoute } from 'next'
import { getWordPressPosts } from '@/lib/wordpress'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  const staticBlogPages = [
    '/blog/poznato-li-ti-e-tova-chuvstvo',
    '/blog/kak-da-optimizirate-vashiya-biznes-za-maksimalna-efektivnost', 
    '/blog/3-te-lazhi-za-privlichaneto-na-klienti-koito-vi-struvat-tsya',
    '/blog/biznes-inzheneri-vs-marketing-ekip-alternativa'
  ]

  // WordPress blog pages - динамично генерирани от WordPress API
  let wordpressBlogPages: string[] = []
  try {
    const wpPosts = await getWordPressPosts({ per_page: 100 }) // Get up to 100 WordPress posts
    if (wpPosts.posts && wpPosts.posts.length > 0) {
      wordpressBlogPages = wpPosts.posts.map(post => `/blog/wp-${post.slug}`)
    }
  } catch (error) {
    console.error('Error fetching WordPress posts for sitemap:', error)
  }

  // Combine all pages
  const allPages = [...staticPages, ...staticBlogPages, ...wordpressBlogPages]

  const currentDate = new Date()

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: page === '' ? 'daily' : page.includes('/blog') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.includes('/services') ? 0.9 : 0.8,
  }))
}