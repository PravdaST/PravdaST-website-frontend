'use client'

import { motion } from "framer-motion"
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
}

interface BlogPostClientProps {
  post: BlogPost
}

import { getBlogPostBySlug } from '@/lib/blog-data'

// Get blog content from centralized data
const getBlogContent = (slug: string) => {
  const post = getBlogPostBySlug(slug);
  return post?.content || null;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [isSharing, setIsSharing] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
      setIsSharing(true)
      setTimeout(() => setIsSharing(false), 2000)
    }
  }

  const content = getBlogContent(post.slug) || `# ${post.title}\n\n${post.excerpt}\n\n*Пълното съдържание ще бъде зареден скоро...*`

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-[#ECB629] hover:text-[#ECB629]/80 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Обратно към блога
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-[#ECB629]/20 text-[#ECB629] rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-slate-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('bg-BG')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime} мин четене</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <motion.div 
                  className="lg:flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="prose prose-lg prose-invert max-w-none">
                    <div 
                      className="text-slate-200 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: content.replace(/\n/g, '<br>').replace(/##/g, '<h2>').replace(/#/g, '<h1>') 
                      }} 
                    />
                  </div>
                </motion.div>
                
                {/* Sidebar */}
                <motion.div 
                  className="lg:w-80"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="sticky top-24 space-y-6">
                    {/* Share */}
                    <div className="bg-slate-800 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Споделете статията</h3>
                      <Button 
                        onClick={handleShare}
                        variant="outline" 
                        className="w-full border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        {isSharing ? 'Копирано!' : 'Споделете'}
                      </Button>
                    </div>
                    
                    {/* Table of Contents */}
                    <div className="bg-slate-800 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Съдържание
                      </h3>
                      <nav className="space-y-2 text-sm">
                        <a href="#section1" className="block text-slate-300 hover:text-[#ECB629] transition-colors">
                          Въведение
                        </a>
                        <a href="#section2" className="block text-slate-300 hover:text-[#ECB629] transition-colors">
                          Основни принципи
                        </a>
                        <a href="#section3" className="block text-slate-300 hover:text-[#ECB629] transition-colors">
                          Практическо приложение
                        </a>
                        <a href="#section4" className="block text-slate-300 hover:text-[#ECB629] transition-colors">
                          Резултати и метрики
                        </a>
                        <a href="#section5" className="block text-slate-300 hover:text-[#ECB629] transition-colors">
                          Заключение
                        </a>
                      </nav>
                    </div>
                    
                    {/* CTA */}
                    <div className="bg-gradient-to-r from-[#ECB629] to-[#F4C842] rounded-lg p-6 text-black">
                      <h3 className="text-lg font-semibold mb-3">Готови за действие?</h3>
                      <p className="text-sm mb-4">
                        Свържете се с нас за безплатна консултация и узнайте как можем да помогнем на вашия бизнес.
                      </p>
                      <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                        <Link href="/contact">
                          Безплатна консултация
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}