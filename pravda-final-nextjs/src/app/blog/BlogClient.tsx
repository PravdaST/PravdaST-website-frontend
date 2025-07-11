'use client'

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Phone,
} from "lucide-react"
import { motion } from "framer-motion"

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
  featuredImage?: string
}

// Български блог постове за бизнес инженерство
const blogPosts: BlogPost[] = [
  {
    id: "7",
    title: "Бизнес инженеринг: Как да превърнете хаоса в предсказуем растеж",
    excerpt:
      "Открийте как бизнес инженерингът може да трансформира хаоса във вашия бизнес в предсказуем растеж. Научете за оптимизация на процеси, предсказуем растеж и конкурентно предимство.",
    content: `Пълно съдържание на статията тук...`,
    author: "Симеон Сираков",
    publishedAt: "2024-12-15",
    readTime: 7,
    category: "Бизнес инженеринг",
    slug: "biznes-inzhenering-haos-v-predskazuem-rastezh",
    tags: ["бизнес инженеринг", "растеж", "оптимизация", "процеси"],
  },
]

const categories = ["Всички", "Бизнес инженеринг"]

export default function BlogClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Всички")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Всички" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('bg-BG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Знания за растеж</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Блог за{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                бизнес инженерство
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Практически съвети, стратегии и системи за предсказуем растеж на вашия бизнес.
              Споделяме знания от реални проекти и успешни внедрявания.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Търсете статии..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-yellow-400 text-black hover:bg-yellow-500" 
                      : "border-slate-700 text-white hover:bg-slate-800"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Няма намерени статии</h3>
                <p className="text-gray-400">Опитайте с различни ключови думи или категория</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="group h-full bg-slate-800/50 border-slate-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Category Badge */}
                          <div className="flex items-start justify-between">
                            <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                              {post.category}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime} мин
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-bold line-clamp-2 group-hover:text-yellow-400 transition-colors">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-gray-300 text-sm line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-slate-700">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {formatDate(post.publishedAt)}
                              </div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-slate-700 text-xs rounded-full text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More Button */}
                          <Link href={`/blog/${post.slug}`}>
                            <Button 
                              className="w-full mt-4 bg-transparent border border-slate-700 text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                              variant="outline"
                            >
                              Прочети повече
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-3 bg-black/20 text-black px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Остават 3 места за 2025</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Готови ли сте да приложите това знание?
            </h2>

            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Прочетохте теорията. Време е за практика.
              Кандидатствайте за диагностика на вашия бизнес.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-4 text-black">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Безплатна консултация</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Без ангажименти</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Процес 5 минути</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg font-semibold"
                >
                  Кандидатствайте за диагностика
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+359879282299">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-black/20 text-black hover:bg-black/10 px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Обади се сега
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}