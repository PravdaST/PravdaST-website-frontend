import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'
import { getStaticBlogPosts, getStaticBlogPost } from '@/lib/blog-static'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getStaticBlogPosts()
  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const post = getStaticBlogPost(slug)
    
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
  
  try {
    const post = getStaticBlogPost(slug)

    if (!post) {
      notFound()
    }

    return <BlogPostClient post={post} />
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
}