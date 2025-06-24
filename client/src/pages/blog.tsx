import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  slug: string;
  tags: string[];
  gradient: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как да създадете предсказуем растеж в B2B компанията си',
    excerpt: 'Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.',
    author: 'Екипът на Pravdast',
    publishedAt: '2024-12-15',
    readTime: 8,
    category: 'Бизнес стратегия',
    slug: 'predskazuem-rastezh-b2b-kompanii',
    tags: ['растеж', 'B2B', 'системи', 'стратегия'],
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: '2', 
    title: 'SEO Struktor™: Революционен подход към търсещата оптимизация',
    excerpt: 'Разберете как нашата собствена методология SEO Struktor™ помага на клиентите ни да достигнат топ позиции в Google за ключови думи с висок търсещ обем.',
    author: 'SEO Експерти',
    publishedAt: '2024-12-10',
    readTime: 12,
    category: 'SEO',
    slug: 'seo-struktor-revolutsionen-podhod',
    tags: ['SEO', 'органичен трафик', 'Google', 'оптимизация'],
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: '3',
    title: 'Clientomat™: Автоматизиране на процеса за придобиване на клиенти',
    excerpt: 'Научете как системата Clientomat™ трансформира начина, по който B2B компаниите привличат и конвертират потенциални клиенти в действителни продажби.',
    author: 'Бизнес Консултанти',
    publishedAt: '2024-12-05',
    readTime: 10,
    category: 'Автоматизация',
    slug: 'clientomat-avtomatzirane-klienti',
    tags: ['автоматизация', 'клиенти', 'конверсии', 'CRM'],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: '4',
    title: 'Clickstarter™: Как да ускорите растежа си с платени реклами',
    excerpt: 'Откройте стратегиите за бърз растеж чрез оптимизирани рекламни кампании. Практически съвети за максимизиране на ROI от платените канали.',
    author: 'PPC Специалисти',
    publishedAt: '2024-11-28',
    readTime: 9,
    category: 'Платена реклама',
    slug: 'clickstarter-uskoreni-rastezh-reklami',
    tags: ['PPC', 'Google Ads', 'Facebook Ads', 'ROI'],
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: '5',
    title: '5 грешки в дигиталния маркетинг, които коставт на B2B компаниите',
    excerpt: 'Разберете най-често срещаните грешки в дигиталния маркетинг и как да ги избегнете. Практически съвети за подобряване на вашите кампании.',
    author: 'Маркетинг Експерти',
    publishedAt: '2024-11-20',
    readTime: 7,
    category: 'Дигитален маркетинг',
    slug: 'greshki-digitalen-marketing-b2b',
    tags: ['грешки', 'маркетинг', 'стратегия', 'съвети'],
    gradient: 'from-yellow-500/20 to-amber-500/20'
  },
  {
    id: '6',
    title: 'Как да измерите ROI от дигиталните си маркетинг усилия',
    excerpt: 'Научете как точно да проследявате и измервате възвръщаемостта от инвестициите си в дигитален маркетинг. KPI-та, които наистина имат значение.',
    author: 'Анализатори',
    publishedAt: '2024-11-15',
    readTime: 11,
    category: 'Анализи',
    slug: 'izmerqvane-roi-digitalen-marketing',
    tags: ['ROI', 'анализи', 'KPI', 'метрики'],
    gradient: 'from-indigo-500/20 to-blue-500/20'
  }
];

const categories = ['Всички', 'Бизнес стратегия', 'SEO', 'Автоматизация', 'Платена реклама', 'Дигитален маркетинг', 'Анализи'];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Всички');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Всички' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bg-BG', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Modern Hero Section */}
      <section ref={ref} className="pt-32 pb-24 relative overflow-hidden">
        {/* Enhanced Technical Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
                <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-hero-pattern)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-slate-800/60 backdrop-blur-sm rounded-full border border-[var(--pravdast-yellow)]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium">
                <span className="text-[var(--pravdast-yellow)] font-semibold">Знания</span> - Практически съвети от експерти
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Блог за бизнес инженеринг
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Практически съвети, стратегии и знания за системен растеж на вашия бизнес
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Търсете в блога..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-[var(--pravdast-yellow)]"
                />
              </div>
              
              {/* Category filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[var(--pravdast-yellow)] text-black'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-[var(--pravdast-yellow)]/10 border border-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Connection line from hero */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="relative p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-600/30 overflow-hidden group hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated background elements */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--pravdast-yellow)]/10 rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10">
                  {/* Category badge */}
                  <div className="inline-block px-3 py-1 bg-[var(--pravdast-yellow)]/20 border border-[var(--pravdast-yellow)]/40 rounded-full mb-4">
                    <span className="text-[var(--pravdast-yellow)] text-xs font-semibold">{post.category.toUpperCase()}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[var(--pravdast-yellow)] transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} мин</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="w-full text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 group-hover:text-[var(--pravdast-yellow)] transition-all duration-300"
                    >
                      Прочети повече
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 text-lg">Няма намерени статии за тази категория или търсене.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative p-12 bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-[var(--pravdast-yellow)]/30 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--pravdast-yellow)]/10 to-[var(--pravdast-yellow)]/5 opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Готови за практическо приложение?
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Прочетохте теорията, сега е време за действие. Заявете безплатна диагностика.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        Започнете диагностиката
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}