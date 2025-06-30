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
import { pageSEOData } from "@/data/seo-pages";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  BookOpen,
  TrendingUp,
  CheckCircle,
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
    id: "7",
    title: "Бизнес инженеринг: Как да превърнете хаоса в предсказуем растеж",
    excerpt:
      "Открийте как бизнес инженерингът може да трансформира хаоса във вашия бизнес в предсказуем растеж. Научете за оптимизация на процеси, предсказуем растеж и конкурентно предимство.",
    content: `
В днешния динамичен бизнес свят, много компании се сблъскват с предизвикателството да поддържат стабилен растеж и да управляват ефективно своите операции. Често пъти, това, което изглежда като спорадични успехи или случайни провали, всъщност е резултат от липсата на стратегически подход към управлението на бизнеса.

## Какво е бизнес инженеринг?

Бизнес инженерингът не е просто модна дума, а стратегически подход, който трансформира начина, по който една организация функционира. Той включва систематичен анализ на съществуващите процеси, идентифициране на неефективности и възможности за подобрение, и проектиране на нови системи, които могат да доведат до по-добри резултати.

В основата на бизнес инженеринга стои идеята, че бизнесът, подобно на сложна машина, може да бъде проектиран и оптимизиран за максимална производителност. Това включва всичко – от начина, по който се управляват взаимоотношенията с клиентите, до вътрешните операции и дори стратегическото планиране.

## Защо е важен бизнес инженерингът за вашия бизнес?

Много бизнеси разчитат на интуиция, късмет или ad-hoc решения, което води до нестабилни резултати. Бизнес инженерингът предлага алтернатива – път към **контрол и предвидимост**. Ето няколко ключови причини, поради които този подход е от съществено значение:

1. **Оптимизация на процесите:** Чрез детайлен анализ и препроектиране, бизнес инженерингът елиминира излишните стъпки, намалява разходите и повишава ефективността. Това води до по-бързо изпълнение на задачите и по-високо качество на продуктите или услугите.

2. **Предсказуем растеж:** Когато процесите са стандартизирани и измерими, става възможно да се прогнозират резултатите с по-голяма точност. Това позволява на бизнеса да планира по-добре, да инвестира разумно и да мащабира операциите си без риск от претоварване или срив.

3. **Подобрено вземане на решения:** Бизнес инженерингът предоставя ясни данни и метрики, които подкрепят информираното вземане на решения. Вместо да се разчита на догадки, мениджърите могат да базират своите стратегии на конкретни факти и тенденции.

4. **Конкурентно предимство:** Компаниите, които прилагат бизнес инженеринг, са по-гъвкави и адаптивни към промените на пазара. Те могат бързо да реагират на нови възможности и предизвикателства, изпреварвайки конкуренцията.

5. **Повишена удовлетвореност на клиентите:** Оптимизираните процеси водят до по-добро обслужване, по-бърза доставка и по-високо качество, което пряко влияе върху удовлетвореността и лоялността на клиентите.

## Как Pravda Agency може да ви помогне?

В Pravda Agency ние сме **бизнес инженери**. Нашата мисия е да превърнем хаотичния растеж във вашата компания в предвидима система за растеж. Ние не просто предлагаме маркетингови услуги; ние изграждаме цялостни системи, които работят за вас 24/7, носят измерими резултати и осигуряват устойчиво конкурентно предимство.

Нашите специализирани системи включват:

- **[SEO Struktor™](/services/seo-struktor)** - Инженерна система за търсачка оптимизация, която преобразува видимостта ви онлайн чрез структурни подходи
- **[Clientomat™](/services/clientomat)** - Автоматизирана система за управление на клиентския жизнен цикъл, която превръща интересуващите се в лоялни клиенти
- **[Clickstarter™](/services/clickstarter)** - Оптимизационна система за онлайн реклами, която максимизира възвращаемостта от всяка инвестиция в реклама
- **[Trendlab™](/services/trendlab)** - Система за изграждане на авторитет чрез стратегическо създаване на съдържание и позициониране като експерт

Всяка от тези системи е проектирана да работи като инженерно решение - с ясни входни данни, измерими процеси и предвидими резултати. Независимо дали искате да [изчислите потенциалната печалба](/calculators) от всяка система или да разгледате [нашите случаи](/case-studies) от реални клиенти, ние прилагаме принципите на бизнес инженеринга във всеки аспект от работата си.

## Заключение

Бизнес инженерингът е ключът към устойчив и предсказуем растеж в съвременния бизнес пейзаж. Чрез систематично проектиране и оптимизация на процесите, компаниите могат да постигнат по-висока ефективност, да намалят рисковете и да изградят силно конкурентно предимство.
    `,
    author: "Екипът на Pravda Agency",
    publishedAt: "2025-06-29",
    readTime: 7,
    category: "Бизнес инженеринг",
    slug: "biznes-inzhenering-haos-v-predskazuem-rastezh",
    tags: ["бизнес инженеринг", "растеж", "оптимизация", "процеси", "систематизация"],
  },
];

const categories = [
  "Всички",
  "Бизнес инженеринг",
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
      <SEOHead seo={pageSEOData.blog} pageSlug="blog" />
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
                Научете как да създадете предвидим растеж във вашата фирма,
                която работи с други бизнеси, чрез нашите експертни статии за
                системи, автоматизация и подходи, основани на данни.
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

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB629] text-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-black/20 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-black font-medium">
                Остават 3 места за 2025
              </span>
            </div>

            <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">
              Готови ли сте да приложите това знание?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Превърнете експертните съвети в реални резултати за вашия бизнес с
              нашите проверени системи.
            </p>

            {/* Trust Signals */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Безплатна консултация</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Без ангажименти</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Отговор в 48 часа</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Кандидатствайте за диагностика</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
