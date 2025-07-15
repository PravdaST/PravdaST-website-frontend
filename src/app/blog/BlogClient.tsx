'use client'

import { useState } from "react";
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

// Статични блог постове за стабилност
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Бизнес инженеринг: Как да превърнете хаоса в предсказуем растеж",
    excerpt: "Открийте как бизнес инженерингът може да трансформира хаоса във вашия бизнес в предсказуем растеж. Научете за оптимизация на процеси, предсказуем растеж и конкурентно предимство.",
    content: `В днешния динамичен бизнес свят, много компании се сблъскват с предизвикателството да поддържат стабилен растеж и да управляват ефективно своите операции.

## Какво е бизнес инженеринг?

Бизнес инженерингът не е просто модна дума, а стратегически подход, който трансформира начина, по който една организация функционира.

## Защо е важен бизнес инженерингът?

1. **Оптимизация на процесите**
2. **Предсказуем растеж** 
3. **Подобрено вземане на решения**
4. **Конкурентно предимство**

В Pravda Agency ние сме **бизнес инженери**. Нашата мисия е да превърнем хаотичния растеж във вашата компания в предвидима система за растеж.`,
    author: "Правдаст Екип",
    publishedAt: "2025-01-15",
    readTime: 8,
    category: "Бизнес стратегия",
    slug: "biznes-inzhenerstvo-predvidim-rastezh",
    tags: ["бизнес инженерство", "растеж", "оптимизация", "процеси"]
  },
  {
    id: "2", 
    title: "SEO Struktor™: Революционен подход към търсачка оптимизация",
    excerpt: "Научете как SEO Struktor™ системата трансформира вашата онлайн видимост чрез структурни и инженерни подходи към търсачка оптимизация.",
    content: `SEO Struktor™ е нашата собствена система за търсачка оптимизация, която използва инженерни принципи за постигане на измерими резултати.

## Какво прави SEO Struktor™ различен?

- **Структурен подход** към техническо SEO
- **Инженерни методи** за анализ на конкуренцията
- **Измерими резултати** с конкретни KPI

## Как работи системата?

1. Технически одит на сайта
2. Анализ на ключови думи и конкуренция  
3. Структурна оптимизация
4. Мониторинг и адаптация

Резултатите говорят сами за себе си - клиентите ни постигат 300-500% увеличение на органичен трафик.`,
    author: "SEO Експерт",
    publishedAt: "2025-01-12",
    readTime: 6,
    category: "SEO и Маркетинг",
    slug: "seo-struktor-revolutionen-podhod",
    tags: ["SEO", "търсачка оптимизация", "онлайн маркетинг", "трафик"]
  },
  {
    id: "3",
    title: "Clientomat™: Автоматизиране на клиентските отношения",
    excerpt: "Открийте как Clientomat™ автоматизира целия клиентски жизнен цикъл - от първия контакт до дългосрочните отношения.",
    content: `Clientomat™ е нашата система за управление на клиентския жизнен цикъл, която автоматизира процесите от първия контакт до затварянето на сделката.

## Основни компоненти:

- **Lead Generation** - Автоматично привличане на потенциални клиенти
- **Lead Nurturing** - Поддържане на интереса със персонализирано съдържание
- **Sales Automation** - Оптимизиране на продажбения процес
- **Customer Retention** - Задържане и развитие на съществуващи клиенти

## Резултати:

Клиентите ни отчитат:
- 40-60% увеличение на конверсиите
- 50% намаляване на времето за затваряне на сделка
- 3x повече повтарящи се клиенти

Системата работи 24/7 и носи консистентни резултати.`,
    author: "CRM Специалист",
    publishedAt: "2025-01-10", 
    readTime: 5,
    category: "Автоматизация",
    slug: "clientomat-avtomatiziran-klientski-otnosheniya",
    tags: ["CRM", "автоматизация", "клиенти", "продажби"]
  },
  {
    id: "4",
    title: "Clickstarter™: Оптимизация на онлайн рекламите",
    excerpt: "Научете как Clickstarter™ максимизира ROI от всяка рекламна кампания чрез данни и инженерни подходи.",
    content: `Clickstarter™ е нашата система за оптимизация на платени реклами, която превръща всяка инвестиция в реклама в измерим растеж.

## Ключови особености:

- **A/B тестване** на всички рекламни елементи
- **Predictive Analytics** за прогнозиране на резултати
- **Real-time оптимизация** на кампании
- **Cross-platform управление**

## Резултати от системата:

- 150-300% подобрение на ROAS
- 40-60% намаляване на cost per acquisition
- 25% увеличение на conversion rates

Превърнете рекламната си инвестиция в предсказуем канал за растеж.`,
    author: "PPC Експерт",
    publishedAt: "2025-01-08",
    readTime: 7,
    category: "Онлайн реклама",
    slug: "clickstarter-optimizatsiya-onlain-reklami",
    tags: ["PPC", "Google Ads", "Facebook Ads", "ROI", "оптимизация"]
  },
  {
    id: "5",
    title: "Trendlab™: Изграждане на авторитет чрез съдържание",
    excerpt: "Открийте как Trendlab™ позиционира вашия бизнес като експерт в индустрията чрез стратегическо създаване на съдържание.",
    content: `Trendlab™ е нашата система за изграждане на авторитет и лидерство в индустрията чрез стратегическо създаване и разпространение на съдържание.

## Компоненти на системата:

- **Content Strategy** - Планиране на съдържание за максимален импакт
- **Authority Building** - Позициониране като експерт
- **Multi-channel Distribution** - Разпространение на множество канали
- **Engagement Optimization** - Максимизиране на взаимодействието

## Измерими резултати:

- 200-400% увеличение на brand awareness
- 3x повече qualified leads от съдържание
- Подобрено доверие и авторитет в индустрията

Превърнете експертизата си в конкурентно предимство.`,
    author: "Content Стратег",
    publishedAt: "2025-01-05",
    readTime: 6,
    category: "Content Marketing",
    slug: "trendlab-izgrazhdane-avtoritet-sadarzhanie",
    tags: ["content marketing", "branding", "авторитет", "експертиза"]
  }
];

const categories = [
  "Всички",
  "Бизнес стратегия",
  "SEO и Маркетинг", 
  "Автоматизация",
  "Онлайн реклама",
  "Content Marketing"
];

export default function BlogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
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
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <BookOpen size={48} className="mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400 text-lg">Няма намерени статии за вашата заявка.</p>
              </div>
            )}

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
                          <span>{post.readTime} мин</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.publishedAt).toLocaleDateString('bg-BG')}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
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