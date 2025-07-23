import { MetadataRoute } from 'next'
import { readBlogPostsFromFiles } from '@/lib/blog-file-reader'

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

  // Dynamic blog posts from files
  const blogPosts = readBlogPostsFromFiles()
  const blogPages = blogPosts.map(post => `/blog/${post.slug}`)

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