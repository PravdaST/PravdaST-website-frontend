import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'

interface Props {
  params: Promise<{ slug: string }>
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  slug: string
  tags: string[]
}

export async function generateStaticParams() {
  // Fallback към известни slug-ове за избягване на webpack грешки
  return [
    { slug: 'poznato-li-ti-e-tova-chuvstvo' },
    { slug: 'kak-da-optimizirate-vashiya-biznes-za-maksimalna-efektivnost' },
    { slug: '3-te-lazhi-za-privlichaneto-na-klienti-koito-vi-struvat-tsya' },
    { slug: 'biznes-inzheneri-vs-marketing-ekip-alternativa' }
  ]
}

async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`http://localhost:5000/api/blog/files`, {
      cache: 'no-store'
    })
    if (!response.ok) return null
    
    const posts: BlogPost[] = await response.json()
    return posts.find(post => post.slug === slug) || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  
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
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}