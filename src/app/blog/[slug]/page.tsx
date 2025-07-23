import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'
import { readBlogPostsFromFiles, getBlogPostBySlugFromFiles } from '@/lib/blog-file-reader'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const blogPosts = readBlogPostsFromFiles()
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
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
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlugFromFiles(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}