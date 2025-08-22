import axios from 'axios'
import { getCachedData, setCachedData } from './wordpress-cache'

const WORDPRESS_BASE_URL = 'https://admin.pravdagency.eu'
const WP_API_BASE = `${WORDPRESS_BASE_URL}/wp-json/wp/v2`

// WordPress credentials
const WP_USERNAME = 'Pravda Website'
const WP_PASSWORD = 'GprR PbZk UjrC dszy Y6KJ BD1I'

// Create base64 auth header
const auth = Buffer.from(`${WP_USERNAME}:${WP_PASSWORD}`).toString('base64')

const wpClient = axios.create({
  baseURL: WP_API_BASE,
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/json'
  }
})

export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  slug: string
  date: string
  modified: string
  featured_media: number
  categories: number[]
  tags: number[]
  author: number
  status: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
    author?: Array<{
      name: string
      slug: string
    }>
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

export async function getWordPressPosts(params: {
  page?: number
  per_page?: number
  search?: string
  categories?: string
  orderby?: 'date' | 'title' | 'relevance'
  order?: 'asc' | 'desc'
} = {}): Promise<{ posts: WordPressPost[], totalPages: number, total: number }> {
  // Create cache key from parameters
  const cacheKey = `wp_posts_${JSON.stringify(params)}`;
  
  // Try to get from cache first
  const cachedResult = getCachedData(cacheKey);
  if (cachedResult) {
    return cachedResult;
  }

  try {
    const queryParams = {
      page: params.page || 1,
      per_page: params.per_page || 10,
      status: 'publish',
      _embed: true,
      ...params
    }

    const response = await wpClient.get('/posts', { params: queryParams })
    
    const result = {
      posts: response.data,
      totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
      total: parseInt(response.headers['x-wp-total'] || '0')
    };
    
    // Cache for 60 minutes
    setCachedData(cacheKey, result, 60);
    
    return result;
  } catch (error) {
    console.error('WordPress API Error:', error)
    throw new Error('Failed to fetch WordPress posts')
  }
}

export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  const cacheKey = `wp_post_${slug}`;
  const cachedResult = getCachedData(cacheKey);
  if (cachedResult) {
    return cachedResult;
  }

  try {
    const response = await wpClient.get('/posts', {
      params: {
        slug,
        status: 'publish',
        _embed: true
      }
    })

    const result = response.data.length > 0 ? response.data[0] : null;
    setCachedData(cacheKey, result, 120); // Cache for 2 hours
    return result;
  } catch (error) {
    console.error('WordPress API Error:', error)
    return null
  }
}

export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  const cacheKey = 'wp_categories';
  const cachedResult = getCachedData(cacheKey);
  if (cachedResult) {
    return cachedResult;
  }

  try {
    const response = await wpClient.get('/categories', {
      params: {
        per_page: 100,
        orderby: 'count',
        order: 'desc'
      }
    })

    setCachedData(cacheKey, response.data, 240); // Cache categories for 4 hours
    return response.data;
  } catch (error) {
    console.error('WordPress API Error:', error)
    return []
  }
}

export async function searchWordPressPosts(query: string, page = 1): Promise<{ posts: WordPressPost[], totalPages: number }> {
  return getWordPressPosts({
    search: query,
    page,
    per_page: 6,
    orderby: 'relevance'
  })
}

// Helper function to clean WordPress content
export function cleanWordPressContent(content: string): string {
  // Remove WordPress shortcodes and clean HTML
  return content
    .replace(/\[.*?\]/g, '') // Remove shortcodes
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '') // Remove styles
    .trim()
}

// Helper function to extract featured image
export function getWordPressFeaturedImage(post: WordPressPost): string | null {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url
  }
  return null
}

// Helper function to extract categories from post
export function getWordPressPostCategories(post: WordPressPost): Array<{ id: number, name: string, slug: string }> {
  const categories = post._embedded?.['wp:term']?.[0] || []
  return categories.filter(term => term.id && term.name)
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}