// Script to replace entire blog.tsx content with API version
const fs = require('fs');

const newBlogContent = `import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
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
} from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  created_at: string;
  category: string;
  slug: string;
  tags: string[];
  is_published?: boolean;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  // Fetch blog posts from API
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog/posts');
      if (!response.ok) {
        throw new Error(\`Failed to fetch posts: \${response.status}\`);
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    },
    retry: 3,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Calculate read time based on content length
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content ? content.split(' ').length : 0;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  };

  // Transform API data to match component expectations
  const transformedPosts = posts && Array.isArray(posts) ? posts.map((post: any) => ({
    ...post,
    id: post.id?.toString() || '0',
    author: post.author || 'Pravdast Team',
    tags: Array.isArray(post.tags) ? post.tags : [],
  })) : [];

  // Get all categories from posts
  const allCategories = ['Всички', ...Array.from(new Set(
    transformedPosts && transformedPosts.length > 0 ? transformedPosts.map((post: BlogPost) => post.category) : []
  ))];

  const filteredPosts = transformedPosts && Array.isArray(transformedPosts) && transformedPosts.length > 0 ? transformedPosts.filter((post: BlogPost) => {
    const matchesSearch = post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.tags && Array.isArray(post.tags) && post.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesCategory = selectedCategory === 'Всички' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) : [];

  return (
    <>
      <SEOHead 
        title="Блог - Pravdast Business Engineering"
        description="Научете най-новите тенденции в бизнес инженерството, системното мащабиране и предсказуемия растеж. Експертни статии за B2B компании."
        keywords="блог, бизнес инженерство, B2B растеж, системи, автоматизация, SEO, маркетинг"
        type="blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Блог за <span className="text-[#ECB629]">бизнес инженерство</span>
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Научете най-новите стратегии за системен растеж, автоматизация на процесите 
                  и изграждане на предсказуеми бизнес системи за B2B компании.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-slate-800/30 border-t border-slate-700/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Търсете статии..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                          : "border-slate-600 text-gray-300 hover:bg-slate-700/50"
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

        {/* Blog Posts Grid */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden bg-slate-800/50 border-slate-700/50 animate-pulse">
                    <div className="h-48 bg-slate-700/50"></div>
                    <CardContent className="p-6">
                      <div className="h-4 bg-slate-700/50 rounded mb-2"></div>
                      <div className="h-6 bg-slate-700/50 rounded mb-4"></div>
                      <div className="h-4 bg-slate-700/50 rounded"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredPosts && Array.isArray(filteredPosts) && filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post: BlogPost, index: number) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative bg-slate-800/50 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 group overflow-hidden h-full">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardContent className="p-6 relative z-10 h-full flex flex-col">
                      {/* Category Badge */}
                      <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Badge className="bg-[#ECB629]/20 text-[#ECB629] border-[#ECB629]/30">
                          {post.category}
                        </Badge>
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-xl font-semibold text-white mb-4 group-hover:text-[#ECB629] transition-colors duration-300 flex-grow"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {post.title}
                      </motion.h3>

                      {/* Excerpt */}
                      <motion.p 
                        className="text-gray-400 mb-6 line-clamp-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {post.excerpt}
                      </motion.p>

                      {/* Meta Info */}
                      <motion.div 
                        className="flex items-center gap-4 text-sm text-gray-500 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-gray-400 text-sm">
                            {new Date(post.created_at).toLocaleDateString('bg-BG', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-gray-400 text-sm">
                            {calculateReadTime(post.content || '')} мин четене
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author || 'Pravdast Team'}</span>
                        </div>
                      </motion.div>

                      {/* Tags */}
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {post.tags && Array.isArray(post.tags) && post.tags.length > 0 ? (
                          post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                            {post.category || 'Общо'}
                          </span>
                        )}
                      </motion.div>

                      {/* Read More Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-auto"
                      >
                        <Link href={\`/blog/\${post.slug}\`}>
                          <Button className="w-full bg-transparent border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black transition-all duration-300 group">
                            <motion.div
                              className="w-2 h-2 bg-[#ECB629] rounded-full mr-2"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                            />
                            Четете повече <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
                ))}
              </div>
            ) : (
              // No posts message
              <div className="text-center py-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-md mx-auto"
                >
                  <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Няма налични статии в момента
                  </h3>
                  <p className="text-gray-400 mb-8">
                    {searchTerm || selectedCategory !== 'Всички' 
                      ? 'Опитайте с различни ключови думи или категория.' 
                      : 'Работим върху ново съдържание. Очаквайте скоро експертни статии за бизнес инженерство.'
                    }
                  </p>
                  <Link href="/contact">
                    <Button className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold">
                      Свържете се с нас
                    </Button>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] text-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-black rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Готови за следващото ниво?
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                  Свържете се с нас за безплатна консултация и разберете как можем да трансформираме вашия бизнес със системен подход.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-black text-[#ECB629] hover:bg-gray-900 px-8 py-4 text-lg font-semibold">
                      Безплатна консултация
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-[#ECB629] px-8 py-4 text-lg font-semibold">
                      Нашите услуги
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}`;

console.log('Writing new blog.tsx content...');
fs.writeFileSync('client/src/pages/blog.tsx', newBlogContent);
console.log('Blog.tsx updated successfully with API integration!');