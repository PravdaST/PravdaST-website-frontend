import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, User } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";

// Fetch blog posts from database
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  slug: string;
  tags: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  // Fetch blog posts from database
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['/api/blog/posts'],
    retry: 3,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <div className="pt-20">
          <div className="container mx-auto px-6">
            <div className="text-center py-20">
              <div className="text-white text-xl">Зареждане на статии...</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <div className="pt-20">
          <div className="container mx-auto px-6">
            <div className="text-center py-20">
              <div className="text-red-400 text-xl">Грешка при зареждането на статии</div>
              <div className="text-gray-400 mt-2">Моля опитайте отново по-късно</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get unique categories from database posts
  const categories = ["Всички", ...new Set(blogPosts.map((post: BlogPost) => post.category))];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Всички" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead 
        title="Бизнес Инженерство Блог | Pravdast"
        description="Научете как да създадете предсказуем растеж в B2B компанията си с нашите експертни статии за системи, автоматизация и data-driven подходи."
        canonicalUrl="https://www.pravdagency.eu/blog"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--pravdast-yellow)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Бизнес Инженерство
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Научете как да създадете предсказуем растеж в B2B компанията си с 
              нашите експертни статии за системи, автоматизация и data-driven подходи.
            </motion.p>
          </div>

          {/* Search and Filter */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Търсете статии..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[var(--pravdast-yellow)] text-black"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-4">Няма намерени статии</h3>
              <p className="text-gray-400">Опитайте с различни ключови думи или категория.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: BlogPost, index: number) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="bg-slate-800/50 border-slate-600/30 hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300 cursor-pointer group p-6 h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <Badge className="bg-[var(--pravdast-yellow)] text-black">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--pravdast-yellow)] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>Pravda Team</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.created_at).toLocaleDateString('bg-BG')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{Math.ceil(post.content.length / 1000)} мин четене</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-xs text-gray-400 border-gray-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}