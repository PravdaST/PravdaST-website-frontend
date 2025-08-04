'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  slug: string;
  tags: string[];
  featuredImage?: string;
  isWordPress?: boolean;
  originalSlug?: string;
}

export default function BlogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Load blog posts from API (both local and WordPress)
  useEffect(() => {
    async function loadBlogPosts() {
      try {
        // Load local blog posts
        const localResponse = await fetch('/api/blog/files');
        let localPosts = [];
        if (localResponse.ok) {
          localPosts = await localResponse.json();
        }

        // Load WordPress posts
        const wpResponse = await fetch('/api/wordpress/posts?per_page=10');
        let wpPosts = [];
        if (wpResponse.ok) {
          const wpResult = await wpResponse.json();
          if (wpResult.success) {
            // Convert WordPress posts to BlogPost format
            wpPosts = wpResult.data.posts.map((post: any) => ({
              id: `wp-${post.id}`,
              title: post.title.rendered.replace(/<[^>]*>/g, ''),
              excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
              content: post.content.rendered,
              author: post._embedded?.author?.[0]?.name || 'Pravda Agency',
              publishedAt: post.date,
              readTime: Math.ceil(post.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length / 200),
              category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'WordPress',
              slug: `wp-${post.slug}`,
              tags: post._embedded?.['wp:term']?.[1]?.map((tag: any) => tag.name) || [],
              featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
              isWordPress: true,
              originalSlug: post.slug
            }));
          }
        }

        // Combine and sort posts by date
        const allPosts = [...localPosts, ...wpPosts].sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        
        setBlogPosts(allPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadBlogPosts();
  }, []);

  // Filtering logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  if (loading) {
    return (
      <div className="min-h-screen text-white">
        <Navigation />
        <main className="flex-1 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#ECB629] mx-auto"></div>
              <p className="mt-4 text-gray-400">Зарежда се...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-transparent to-blue-600/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Блог за <span className="text-[#ECB629]">Бизнес Инженерство</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 sm:mb-12 leading-relaxed text-gray-300 max-w-3xl mx-auto">
              Практически съвети, стратегии и казуси за предсказуем растеж на бизнеса чрез системен подход
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Търсене в блога..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glassmorphism border-gray-700 text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#ECB629] text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category === "all" ? "Всички" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Няма намерени статии</h3>
              <p className="text-gray-500">Опитайте с други ключови думи или изберете друга категория</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:border-[#ECB629]/50 transition-all duration-300 h-full group">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Category Badge */}
                      <Badge 
                        variant="secondary" 
                        className="bg-[#ECB629]/20 text-[#ECB629] mb-4 w-fit"
                      >
                        {post.category}
                      </Badge>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ECB629] transition-colors leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} мин</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.publishedAt}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Read More Button */}
                      <Link href={`/blog/${post.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black transition-all group/btn"
                        >
                          Прочети повече
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ECB629]/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <CheckCircle className="w-16 h-16 text-[#ECB629] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Готови за системен растеж?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Свържете се с нас за безплатна консултация и открийте как нашите бизнес системи могат да трансформират вашата компания
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Безплатна консултация
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black px-8 py-3"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Вижте услугите ни
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}