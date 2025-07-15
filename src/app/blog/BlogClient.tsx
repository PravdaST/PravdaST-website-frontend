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
} from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  read_time: number;
  category: string;
  slug: string;
  tags: string[];
  featured_image?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

const categories = [
  "Всички",
  "Бизнес стратегия",
  "SEO и Маркетинг", 
  "Автоматизация",
  "Бизнес инженеринг",
];

export default function BlogClient() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  // Fetch blog posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blog/posts?published=true');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (err) {
        setError('Грешка при зареждане на постове. Моля опитайте отново.');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (Array.isArray(post.tags) && post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    const matchesCategory =
      selectedCategory === "Всички" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="pt-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0">
              {/* Knowledge Grid Pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "50px 50px",
                }}
              ></div>

              {/* Data Flow Lines */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                  style={{
                    top: `${15 + i * 15}%`,
                  }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scaleX: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECB629]/10 border border-[#ECB629]/20 text-[#ECB629] text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <BookOpen size={16} />
                Знания за растеж
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Блог за бизнес <br />
                <span className="text-[#ECB629]">инженерство</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Научете стратегии, методи и техники за изграждане на системи за предсказуем растеж
              </p>
            </motion.div>

            {/* Search and Filter Section */}
            <motion.div
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Търсете статии..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-[#ECB629]"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white focus:border-[#ECB629] focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            {loading && (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#ECB629]"></div>
                <p className="text-gray-400 mt-4">Зареждане на статии...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-16">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-400">{error}</p>
                  <Button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 bg-red-600 hover:bg-red-700"
                  >
                    Опитайте отново
                  </Button>
                </div>
              </div>
            )}

            {!loading && !error && filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <BookOpen size={48} className="mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400 text-lg">Няма намерени статии за вашата заявка.</p>
              </div>
            )}

            {!loading && !error && filteredPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-800 border-slate-700 hover:border-[#ECB629]/50 transition-all duration-300 h-full group">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="bg-[#ECB629]/10 text-[#ECB629] border-[#ECB629]/20">
                            {post.category}
                          </Badge>
                        </div>

                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#ECB629] transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.read_time} мин</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{new Date(post.published_at).toLocaleDateString('bg-BG')}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {Array.isArray(post.tags) && post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <Button className="w-full bg-transparent border border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-slate-900 transition-all duration-300 group">
                            Прочети статията
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
        <section className="py-16 sm:py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Готови за <span className="text-[#ECB629]">растеж</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Свържете се с нас за безплатна консултация как да трансформираме вашия бизнес
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#ECB629] hover:bg-[#D4A017] text-slate-900 font-semibold px-8 py-3">
                    <Phone size={20} className="mr-2" />
                    Безплатна консултация
                  </Button>
                </Link>
                <Link href="/calculators">
                  <Button variant="outline" className="border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-slate-900 px-8 py-3">
                    <TrendingUp size={20} className="mr-2" />
                    ROI калкулатор
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}