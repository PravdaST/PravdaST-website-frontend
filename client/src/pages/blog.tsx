import { useState } from "react";
import { Link } from "wouter";
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
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  slug: string;
  tags: string[];
  featuredImage?: string;
}

// Български блог постове за бизнес инженерство
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Как да създадете предсказуем растеж в B2B компанията си",
    excerpt:
      "Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.",
    content: "",
    author: "Екипът на Pravdast",
    publishedAt: "2024-12-15",
    readTime: 8,
    category: "Бизнес стратегия",
    slug: "predskazuem-rastezh-b2b-kompanii",
    tags: ["растеж", "B2B", "системи", "стратегия"],
  },
  {
    id: "2",
    title: "SEO Struktor™: Революционен подход към търсещата оптимизация",
    excerpt:
      "Разберете как нашата собствена методология SEO Struktor™ помага на клиентите ни да достигнат топ позиции в Google за ключови думи с висок търсещ обем.",
    content: "",
    author: "SEO Експерти",
    publishedAt: "2024-12-10",
    readTime: 12,
    category: "SEO",
    slug: "seo-struktor-revolutsionen-podhod",
    tags: ["SEO", "органичен трафик", "Google", "оптимизация"],
  },
  {
    id: "3",
    title: "Clientomat™: Автоматизиране на процеса за придобиване на клиенти",
    excerpt:
      "Научете как системата Clientomat™ трансформира начина, по който B2B компаниите привличат и конвертират потенциални клиенти в действителни продажби.",
    content: "",
    author: "Automation Team",
    publishedAt: "2024-12-08",
    readTime: 10,
    category: "Автоматизация",
    slug: "clientomat-avtomatiziran-proces",
    tags: ["автоматизация", "клиенти", "B2B", "конверсия"],
  },
  {
    id: "4",
    title:
      "Данни срещу интуиция: Защо успешните компании винаги избират данните",
    excerpt:
      "Анализ на разликата между компании, които базират решенията си на данни, и тези, които разчитат на интуиция. Резултатите са поразителни.",
    content: "",
    author: "Data Analytics Team",
    publishedAt: "2024-12-05",
    readTime: 6,
    category: "Данни и анализи",
    slug: "danni-sreshtu-intuitsiya",
    tags: ["данни", "анализи", "решения", "стратегия"],
  },
  {
    id: "5",
    title: "Систематично мащабиране: Как да растете без да увеличавате хаоса",
    excerpt:
      "Мащабирането на бизнеса не трябва да означава увеличаване на сложността. Научете как да растете системно и контролирано.",
    content: "",
    author: "Business Engineering Team",
    publishedAt: "2024-12-01",
    readTime: 15,
    category: "Мащабиране",
    slug: "sistematichno-mashtabirane",
    tags: ["мащабиране", "системи", "растеж", "процеси"],
  },
  {
    id: "6",
    title: "ROI на маркетинговите системи: Как да измерите истинската стойност",
    excerpt:
      "Всяка маркетингова активност трябва да се измерва. Разберете как да калкулирате точния ROI на вашите маркетингови инвестиции.",
    content: "",
    author: "Marketing ROI Specialists",
    publishedAt: "2024-11-28",
    readTime: 9,
    category: "Маркетинг ROI",
    slug: "roi-marketingovi-sistemi",
    tags: ["ROI", "маркетинг", "измерване", "стойност"],
  },
];

const categories = [
  "Всички",
  "Бизнес стратегия",
  "SEO",
  "Автоматизация",
  "Данни и анализи",
  "Мащабиране",
  "Маркетинг ROI",
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "Всички" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                  {categories.map((category) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
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
                            {new Date(post.publishedAt).toLocaleDateString('bg-BG', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-gray-400 text-sm">
                            {post.readTime} мин четене
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
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
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* Read More Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-auto"
                      >
                        <Link href={`/blog/${post.slug}`}>
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

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <TrendingUp className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Няма намерени статии</h3>
                <p className="text-gray-500">
                  Опитайте с различни ключови думи или категория.
                </p>
              </motion.div>
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
}