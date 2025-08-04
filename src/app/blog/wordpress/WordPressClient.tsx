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
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  date: string;
  featured_media: number;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
    author?: Array<{
      name: string;
      slug: string;
    }>;
  };
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export default function WordPressClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [wordpressPosts, setWordpressPosts] = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  // Load WordPress posts
  useEffect(() => {
    async function loadWordPressPosts() {
      try {
        setLoading(true);
        setError(null);
        
        const searchParams = new URLSearchParams({
          page: currentPage.toString(),
          per_page: '6',
        });
        
        if (searchTerm) {
          searchParams.append('search', searchTerm);
        }
        
        if (selectedCategory !== 'all') {
          searchParams.append('category', selectedCategory);
        }

        const response = await fetch(`/api/wordpress/posts?${searchParams}`);
        const result = await response.json();
        
        if (result.success) {
          setWordpressPosts(result.data.posts);
          setTotalPages(result.data.pagination.totalPages);
        } else {
          setError(result.error || 'Failed to load WordPress posts');
        }
      } catch (error) {
        console.error('Error loading WordPress posts:', error);
        setError('Connection error - unable to load WordPress posts');
      } finally {
        setLoading(false);
      }
    }

    loadWordPressPosts();
  }, [currentPage, searchTerm, selectedCategory]);

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await fetch('/api/wordpress/categories');
        const result = await response.json();
        
        if (result.success) {
          setCategories(result.data);
        }
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    }

    loadCategories();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('bg-BG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const extractTextFromHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').trim();
  };

  const getFeaturedImage = (post: WordPressPost) => {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  };

  const getPostCategories = (post: WordPressPost) => {
    return post._embedded?.['wp:term']?.[0] || [];
  };

  const getAuthor = (post: WordPressPost) => {
    return post._embedded?.author?.[0]?.name || 'Pravda Agency';
  };

  if (loading) {
    return (
      <div className="min-h-screen text-white">
        <Navigation />
        <main className="flex-1 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#ECB629] mx-auto"></div>
              <p className="mt-4 text-gray-400">Зареждат се WordPress статии...</p>
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
            <div className="inline-flex items-center gap-2 bg-[#ECB629]/10 backdrop-blur-sm border border-[#ECB629]/20 rounded-full px-6 py-3 mb-8">
              <ExternalLink className="w-4 h-4 text-[#ECB629]" />
              <span className="text-[#ECB629] font-medium">WordPress Blog</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Експертни статии от
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ECB629] to-yellow-300">
                WordPress
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 md:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Последни публикации, експертни анализи и практически съвети за бизнес растеж директно от нашия WordPress блог.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Търсене в WordPress статии..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 w-full bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-[#ECB629]/50 focus:ring-1 focus:ring-[#ECB629]/20 transition-all"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ECB629] hover:bg-[#ECB629]/90 text-black"
                >
                  Търси
                </Button>
              </div>
            </form>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                onClick={() => handleCategoryChange('all')}
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                className={selectedCategory === 'all' 
                  ? 'bg-[#ECB629] hover:bg-[#ECB629]/90 text-black' 
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                }
              >
                Всички
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id.toString())}
                  variant={selectedCategory === category.id.toString() ? 'default' : 'outline'}
                  size="sm"
                  className={selectedCategory === category.id.toString()
                    ? 'bg-[#ECB629] hover:bg-[#ECB629]/90 text-black'
                    : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  }
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Error State */}
      {error && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
                <RefreshCw className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-400 mb-2">Грешка при зареждане</h3>
                <p className="text-gray-300 mb-4">{error}</p>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Опитай отново
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WordPress Posts Grid */}
      {!error && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            {wordpressPosts.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">Няма намерени статии</h3>
                <p className="text-gray-500">
                  {searchTerm ? 'Опитайте с други ключови думи.' : 'Скоро ще публикуваме нови статии.'}
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {wordpressPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-black/40 backdrop-blur-sm border-gray-800/50 hover:border-[#ECB629]/30 transition-all duration-300 group h-full">
                        <CardContent className="p-0 h-full flex flex-col">
                          {/* Featured Image */}
                          {getFeaturedImage(post) && (
                            <div className="relative h-48 overflow-hidden rounded-t-lg">
                              <img
                                src={getFeaturedImage(post)!}
                                alt={extractTextFromHtml(post.title.rendered)}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          
                          <div className="p-6 flex-1 flex flex-col">
                            {/* Categories */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {getPostCategories(post).slice(0, 2).map((category) => (
                                <Badge
                                  key={category.id}
                                  variant="secondary"
                                  className="bg-[#ECB629]/10 text-[#ECB629] border-[#ECB629]/20 text-xs"
                                >
                                  {category.name}
                                </Badge>
                              ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#ECB629] transition-colors line-clamp-2">
                              {extractTextFromHtml(post.title.rendered)}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-400 mb-6 line-clamp-3 flex-1">
                              {extractTextFromHtml(post.excerpt.rendered)}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  <span>{getAuthor(post)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{formatDate(post.date)}</span>
                                </div>
                              </div>
                            </div>

                            {/* Read More Link */}
                            <Link
                              href={`https://admin.pravdagency.eu/${post.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#ECB629] hover:text-[#ECB629]/80 font-medium transition-colors"
                            >
                              Прочети повече
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2">
                    <Button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
                    >
                      Предишна
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const page = i + 1;
                        const isActive = page === currentPage;
                        
                        return (
                          <Button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            variant={isActive ? "default" : "outline"}
                            size="sm"
                            className={isActive
                              ? 'bg-[#ECB629] hover:bg-[#ECB629]/90 text-black'
                              : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                            }
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </div>
                    
                    <Button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50"
                    >
                      Следваща
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}