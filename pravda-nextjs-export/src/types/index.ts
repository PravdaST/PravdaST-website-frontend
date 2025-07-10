
export interface SEOData {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  structuredData?: any
  noindex?: boolean
  nofollow?: boolean
}

export interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

export interface CaseStudy {
  id: number
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    traffic: string
    conversions: string
    revenue: string
    timeframe: string
  }
  testimonial: string
  systems: string[]
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
}

export interface Service {
  name: string
  description: string
  features: string[]
  price: string
  duration: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}
