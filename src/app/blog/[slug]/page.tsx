import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'
import { readBlogPostsFromFiles, getBlogPostBySlugFromFiles } from '@/lib/blog-file-reader'
import { getWordPressPost } from '@/lib/wordpress'
import { decodeHtmlEntities } from '@/lib/html-decoder'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // All blog posts now come from WordPress only
  return []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  // Check if this is a WordPress post first
  if (slug.startsWith('wp-')) {
    try {
      const wpSlug = slug.replace('wp-', '')
      const post = await getWordPressPost(wpSlug)
      
      if (post) {
        // Use imported HTML entity decoder

        const title = decodeHtmlEntities(post.title.rendered.replace(/<[^>]*>/g, ''))
        const description = decodeHtmlEntities(post.excerpt.rendered.replace(/<[^>]*>/g, '')).substring(0, 160)
        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

        // Truncate title if too long (max 60 characters for SEO)
        const shortTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
        
        return {
          title: `${shortTitle} - Pravda Agency`,
          description,
          keywords: ['бизнес инженерство', 'растеж', 'маркетинг', 'SEO', 'Pravda Agency'],
          openGraph: {
            title: shortTitle,
            description,
            url: `https://www.pravdagency.eu/blog/${slug}`,
            siteName: 'Pravda Agency',
            locale: 'bg_BG',
            images: featuredImage ? [
              {
                url: featuredImage,
                width: 1200,
                height: 630,
                alt: shortTitle,
              }
            ] : [
              {
                url: 'https://pravdagency.eu/pravda-og-blog.png',
                width: 1200,
                height: 630,
                alt: 'Pravda Agency Blog',
              }
            ],
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.modified,
            authors: [post._embedded?.author?.[0]?.name || 'Pravda Agency'],
          },
          twitter: {
            card: 'summary_large_image',
            title: shortTitle,
            description,
            images: [featuredImage || 'https://pravdagency.eu/pravda-og-blog.png'],
          },
          alternates: {
            canonical: `https://www.pravdagency.eu/blog/${slug}`,
          },
        }
      }
    } catch (error) {
      console.error('Error loading WordPress post metadata:', error)
    }
  }
  
  // No local blog posts - only WordPress posts
  return {
    title: 'Статията не е намерена - Pravda Agency Blog',
    description: 'Статията която търсите не съществува.',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  
  // Check if this is a WordPress post first
  if (slug.startsWith('wp-')) {
    try {
      const wpSlug = slug.replace('wp-', '')
      const post = await getWordPressPost(wpSlug)
      
      if (post) {
        // Import WordPress client dynamically
        const WordPressPostClient = (await import('../wp-[slug]/WordPressPostClient')).default
        return <WordPressPostClient post={post} />
      }
    } catch (error) {
      console.error('Error loading WordPress post:', error)
    }
    
    // If WordPress post not found, show 404
    notFound()
  }
  
  // No local blog posts exist - only WordPress posts
  notFound()
}