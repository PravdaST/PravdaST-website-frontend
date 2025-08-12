import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import WordPressPostClient from './WordPressPostClient'
import { getWordPressPost } from '@/lib/wordpress'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await getWordPressPost(slug)
    
    if (!post) {
      return {
        title: 'Статия не е намерена - Pravda Agency',
        description: 'Търсената статия не съществува.'
      }
    }

    const title = post.title.rendered.replace(/<[^>]*>/g, '')
    const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

    return {
      title: `${title} - Pravda Agency`,
      description,
      keywords: ['бизнес инженерство', 'растеж', 'маркетинг', 'SEO', 'Pravda Agency'],
      openGraph: {
        title,
        description,
        url: `https://www.pravdagency.eu/blog/wp-${slug}`,
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
        canonical: `https://www.pravdagency.eu/blog/wp-${slug}`,
      },
      other: {
        'fb:app_id': '1234567890123456',
      },
    }
  } catch (error) {
    return {
      title: 'Грешка при зареждане - Pravda Agency',
      description: 'Възникна грешка при зареждане на статията.'
    }
  }
}

export default async function WordPressPostPage({ params }: Props) {
  try {
    const { slug } = await params
    const post = await getWordPressPost(slug)
    
    if (!post) {
      notFound()
    }

    return <WordPressPostClient post={post} />
  } catch (error) {
    console.error('Error loading WordPress post:', error)
    notFound()
  }
}