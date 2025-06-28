import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { UnifiedCTASection } from "@/components/unified-cta-section";
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
    title:
      "Как да създадете предсказуем растеж в компанията си за бизнес клиенти",
    excerpt:
      "Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.",
    content: "",
    author: "Екипът на Pravdast",
    publishedAt: "2024-12-15",
    readTime: 8,
    category: "Бизнес стратегия",
    slug: "predskazuem-rastezh-b2b-kompanii",
    tags: ["растеж", "бизнес клиенти", "системи", "стратегия"],
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
      "Научете как системата Clientomat™ трансформира начина, по който компаниите за бизнес клиенти привличат и конвертират потенциални клиенти в действителни продажби.",
    content: "",
    author: "Екипът за автоматизация",
    publishedAt: "2024-12-08",
    readTime: 10,
    category: "Автоматизация",
    slug: "clientomat-avtomatiziran-proces",
    tags: ["автоматизация", "клиенти", "бизнес клиенти", "конверсия"],
  },
  {
    id: "4",
    title:
      "Данни срещу интуиция: Защо успешните компании винаги избират данните",
    excerpt:
      "Анализ на разликата между компании, които базират решенията си на данни, и тези, които разчитат на интуиция. Резултатите са поразителни.",
    content: "",
    author: "Екипът за анализи",
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
    author: "Екипът за бизнес инженерство",
    publishedAt: "2024-12-01",
    readTime: 15,
    category: "Мащабиране",
    slug: "sistematichno-mashtabirane",
    tags: ["мащабиране", "системи", "растеж", "процеси"],
  },
  {
    id: "6",
    title:
      "Възвърната инвестиция на маркетинговите системи: Как да измерите истинската стойност",
    excerpt:
      "Всяка маркетингова активност трябва да се измерва. Разберете как да калкулирате точната възвърната инвестиция на вашите маркетингови дейности.",
    content: "",
    author: "Специалисти по маркетингова възвърната инвестиция",
    publishedAt: "2024-11-28",
    readTime: 9,
    category: "Маркетингова възвърната инвестиция",
    slug: "roi-marketingovi-sistemi",
    tags: ["възвърната инвестиция", "маркетинг", "измерване", "стойност"],
  },
];

const categories = [
  "Всички",
  "Бизнес стратегия",
  "SEO",
  "Автоматизация",
  "Данни и анализи",
  "Мащабиране",
  "Маркетингова възвърната инвестиция",
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
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        seo={{
          title: "Блог за бизнес инженерство | Pravdast",
          description:
            "Изградете предвидим растеж за вашата компания. Нашите статии ще ви покажат как чрез изпитани системи, автоматизация на дейностите и решения, базирани на данни.",
          ogImage: "/og-blog.png",
        }}
        pageSlug="blog"
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
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

              {/* Floating Books */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  <BookOpen className="w-4 h-4 text-[#ECB629]" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    <div className="absolute inset-0 bg-[#ECB629] rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Безплатна</span>{" "}
                    експертна информация
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Блог за <br />
                <span className="text-[#ECB629] relative">
                  бизнес инженерство
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Научете как да създадете предсказуем растеж в B2B компанията си
                с нашите експертни статии за системи, автоматизация и
                data-driven подходи.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                className="max-w-md mx-auto relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Търсете статия..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-[#ECB629]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#ECB629] text-black"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
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
                        <Badge className="bg-[#ECB629] text-black font-semibold">
                          {post.category}
                        </Badge>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-xl font-bold text-white mb-3 group-hover:text-[#ECB629] transition-colors line-clamp-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {post.title}
                      </motion.h3>

                      {/* Excerpt */}
                      <motion.p
                        className="text-gray-300 mb-4 flex-grow line-clamp-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {post.excerpt}
                      </motion.p>

                      {/* Meta Info */}
                      <motion.div
                        className="flex items-center gap-4 text-sm text-gray-400 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString(
                              "bg-BG",
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} мин</span>
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
                      >
                        <Button
                          className="bg-[#ECB629] hover:bg-[#ECB629]/90 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                          asChild
                        >
                          <Link href={`/blog/${post.slug}`}>
                            Прочетете повече{" "}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
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
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  Няма намерени статии
                </h3>
                <p className="text-gray-500">
                  Опитайте с различни ключови думи или категория.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Unified CTA Section */}
      <UnifiedCTASection
        buttonText="Заявете разговор"
        headline="Готови ли сте да приложите това знание?"
        description="Превърнете експертните съвети в реални резултати за вашия бизнес с нашите проверени системи."
      />

      <Footer />
    </div>
  );
}
