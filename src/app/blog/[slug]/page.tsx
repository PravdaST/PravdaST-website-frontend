import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'
import { readBlogPostsFromFiles, getBlogPostBySlugFromFiles } from '@/lib/blog-file-reader'
import { getWordPressPost } from '@/lib/wordpress'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // Използваме статични slug-ове за избягване на build time грешки
  return [
    { slug: 'poznato-li-ti-e-tova-chuvstvo' },
    { slug: 'kak-da-optimizirate-vashiya-biznes-za-maksimalna-efektivnost' },
    { slug: '3-te-lazhi-za-privlichaneto-na-klienti-koito-vi-struvat-tsya' },
    { slug: 'biznes-inzheneri-vs-marketing-ekip-alternativa' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  // Check if this is a WordPress post first
  if (slug.startsWith('wp-')) {
    try {
      const wpSlug = slug.replace('wp-', '')
      const post = await getWordPressPost(wpSlug)
      
      if (post) {
        // Function to decode HTML entities
        const decodeHtmlEntities = (text: string): string => {
          const entityMap: { [key: string]: string } = {
            '&#8220;': '"',
            '&#8221;': '"',
            '&#8216;': "'",
            '&#8217;': "'",
            '&#8211;': '–',
            '&#8212;': '—',
            '&#8230;': '…',
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&apos;': "'",
            '&nbsp;': ' '
          };
          return text.replace(/&#?\w+;/g, (entity) => {
            return entityMap[entity] || entity;
          });
        };

        const title = decodeHtmlEntities(post.title.rendered.replace(/<[^>]*>/g, ''))
        const description = decodeHtmlEntities(post.excerpt.rendered.replace(/<[^>]*>/g, '')).substring(0, 160)
        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

        return {
          title: `${title} - Pravda Agency`,
          description,
          keywords: ['бизнес инженерство', 'растеж', 'маркетинг', 'SEO', 'Pravda Agency'],
          openGraph: {
            title,
            description,
            url: `https://www.pravdagency.eu/blog/${slug}`,
            siteName: 'Pravda Agency',
            locale: 'bg_BG',
            images: featuredImage ? [
              {
                url: featuredImage,
                width: 1200,
                height: 630,
                alt: title,
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
            title,
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
  
  try {
    const post = getBlogPostBySlugFromFiles(slug)
    
    if (!post) {
      return {
        title: 'Статията не е намерена - Pravda Agency Blog',
        description: 'Статията която търсите не съществува.',
      }
    }

    return {
      title: `${post.title} | Pravda Agency Blog`,
      description: post.excerpt,
      keywords: post.tags.join(', '),
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author],
        tags: post.tags,
        locale: 'bg_BG',
        url: `https://www.pravdagency.eu/blog/${post.slug}`,
        siteName: 'Pravda Agency',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
      alternates: {
        canonical: `https://www.pravdagency.eu/blog/${post.slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Грешка при зареждане - Pravda Agency Blog',
      description: 'Възникна грешка при зареждане на статията.',
    }
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
  
  try {
    const post = getBlogPostBySlugFromFiles(slug)

    if (!post) {
      notFound()
    }

    return <BlogPostClient post={post} />
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
}