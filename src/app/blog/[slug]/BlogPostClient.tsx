'use client'

import { motion } from "framer-motion"
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
}

interface BlogPostClientProps {
  post: BlogPost
}

// Get hero image based on post category/slug
const getHeroImage = (slug: string, category: string) => {
  const heroImages = {
    'biznes-inzhenerstvo-predvidim-rastezh': 'M12 2L13.41 7.59L19 9L13.41 10.41L12 16L10.59 10.41L5 9L10.59 7.59L12 2Z',
    'seo-struktor-revolyutsionen-podhod-seo': 'M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z',
    'clientomat-avtomatizatsiya-klientski-otnosheniya': 'M16 4c4.42 0 8 3.58 8 8s-3.58 8-8 8c-1.95 0-3.75-.71-5.13-1.88L8.28 21.6a1 1 0 0 1-1.4-1.42l2.48-2.47C8.71 15.75 8 13.95 8 12c0-4.42 3.58-8 8-8Z',
    'clickstarter-optimizatsiya-reklami': 'M7 2v11h3v9l7-12h-4l4-8z',
    'trendlab-izgrazhdane-avtoritet': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z'
  }
  return heroImages[slug as keyof typeof heroImages] || heroImages['biznes-inzhenerstvo-predvidim-rastezh']
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

  const content = post.content || `# ${post.title}\n\n${post.excerpt}\n\n*Пълното съдържание ще бъде зареден скоро...*`
  const heroIconPath = getHeroImage(post.slug, post.category)

  return (
    <div className="min-h-screen bg-slate-900">
      
      <main className="pt-20">
        {/* Hero Section with Animation */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(236, 182, 41, 0.1) 2px, transparent 2px),
                  linear-gradient(90deg, rgba(236, 182, 41, 0.1) 2px, transparent 2px)
                `,
                backgroundSize: "60px 60px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "60px 60px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-[#ECB629] rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-40 w-6 h-6 bg-[#ECB629] rounded-full opacity-15"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link href="/blog" className="inline-flex items-center text-[#ECB629] hover:text-[#ECB629]/80 mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Обратно към блога
              </Link>
              
              {/* Hero Icon */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#ECB629] to-[#F4C842] rounded-2xl flex items-center justify-center shadow-2xl">
                  <motion.svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="white"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path d={heroIconPath} />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Category Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-[#ECB629]/20 border border-[#ECB629]/30 rounded-full text-[#ECB629] text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {post.category}
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {post.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {post.excerpt}
              </motion.p>

              {/* Meta Info */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString('bg-BG')}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime} минути четене
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Share Button */}
              <motion.div
                className="mb-8 flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {isSharing ? 'Копирано!' : 'Споделяне'}
                </Button>
              </motion.div>

              {/* Article Content */}
              <motion.article
                className="prose prose-lg prose-invert max-w-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <BlogContent content={content} />
              </motion.article>

              {/* Call to Action */}
              <motion.div
                className="mt-16 p-8 bg-gradient-to-br from-[#ECB629]/10 to-[#F4C842]/10 rounded-2xl border border-[#ECB629]/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Готови за следващата стъпка?
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Свържете се с нас за безплатна консултация и открийте как можем да помогнем на вашия бизнес да постигне предсказуем растеж.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold px-8 py-3">
                        Безплатна консултация
                      </Button>
                    </Link>
                    <Link href="/calculators">
                      <Button variant="outline" className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black px-8 py-3">
                        ROI калкулатор
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts Navigation */}
              <motion.div
                className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <Link href="/blog" className="text-[#ECB629] hover:text-[#ECB629]/80 transition-colors">
                  ← Всички статии
                </Link>
                <div className="flex gap-4">
                  <Link href="/services" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                    Услуги
                  </Link>
                  <Link href="/case-studies" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                    Казуси
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

// Enhanced Blog Content Component with styling
function BlogContent({ content }: { content: string }) {
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers - Skip H1 to avoid duplicate (already rendered in hero)
        if (line.startsWith('# ')) {
          return '' // Skip H1 to avoid duplicate with hero section
        }
        if (line.startsWith('## ')) {
          return `<h2 class="text-4xl font-bold text-white mb-6 mt-10 border-l-4 border-[#ECB629] pl-4">${line.slice(3)}</h2>`
        }
        if (line.startsWith('### ')) {
          return `<h3 class="text-2xl font-bold text-[#ECB629] mb-4 mt-8">${line.slice(4)}</h3>`
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return `<li class="text-gray-300 mb-2 pl-2">${line.slice(2)}</li>`
        }
        
        // Table headers and rows
        if (line.includes('|') && line.trim() !== '') {
          const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell !== '')
          if (line.includes('---')) {
            return '' // Skip separator line
          }
          const isHeader = line.includes('**')
          const tag = isHeader ? 'th' : 'td'
          const className = isHeader 
            ? 'px-4 py-3 bg-[#ECB629] text-black font-bold text-left border border-[#ECB629]/30' 
            : 'px-4 py-3 text-gray-300 border border-gray-600'
          
          return `<tr>${cells.map(cell => `<${tag} class="${className}">${cell.replace(/\*\*/g, '')}</${tag}>`).join('')}</tr>`
        }
        
        // Paragraphs
        if (line.trim() !== '' && !line.startsWith('<')) {
          return `<p class="text-gray-300 mb-4 leading-relaxed">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#ECB629]">$1</strong>')}</p>`
        }
        
        return line
      })
      .join('\n')
      .replace(/<li/g, '<ul class="space-y-2 mb-6 ml-6"><li')
      .replace(/<\/li>\n(?!<li)/g, '</li></ul>')
      .replace(/<tr>/g, '<table class="w-full mb-8 rounded-lg overflow-hidden"><tbody><tr>')
      .replace(/<\/tr>\n(?!<tr)/g, '</tr></tbody></table>')
  }

  return <div dangerouslySetInnerHTML={{ __html: formatContent(content) }} />
}