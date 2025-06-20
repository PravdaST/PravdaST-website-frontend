import { useState } from 'react';
import { Link } from 'wouter';
import { SEOHead } from '@/components/seo-head';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';

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
    id: '1',
    title: 'Как да създадете предсказуем растеж в B2B компанията си',
    excerpt: 'Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.',
    content: '',
    author: 'Екипът на Pravdast',
    publishedAt: '2024-12-15',
    readTime: 8,
    category: 'Бизнес стратегия',
    slug: 'predskazuem-rastezh-b2b-kompanii',
    tags: ['растеж', 'B2B', 'системи', 'стратегия']
  },
  {
    id: '2', 
    title: 'SEO Struktor™: Революционен подход към търсещата оптимизация',
    excerpt: 'Разберете как нашата собствена методология SEO Struktor™ помага на клиентите ни да достигнат топ позиции в Google за ключови думи с висок търсещ обем.',
    content: '',
    author: 'SEO Експерти',
    publishedAt: '2024-12-10',
    readTime: 12,
    category: 'SEO',
    slug: 'seo-struktor-revolutsionen-podhod',
    tags: ['SEO', 'органичен трафик', 'Google', 'оптимизация']
  },
  {
    id: '3',
    title: 'Clientomat™: Автоматизиране на процеса за придобиване на клиенти',
    excerpt: 'Научете как системата Clientomat™ трансформира начина, по който B2B компаниите привличат и конвертират потенциални клиенти в действителни продажби.',
    content: '',
    author: 'Маркетинг Експерти',
    publishedAt: '2024-12-05',
    readTime: 10,
    category: 'Автоматизация',
    slug: 'clientomat-avtomatizatsiya-klienti',
    tags: ['автоматизация', 'CRM', 'lead generation', 'продажби']
  },
  {
    id: '4',
    title: 'Sales Engine™: Оптимизация на продажбения процес за максимални резултати',
    excerpt: 'Открийте как Sales Engine™ помага на компаниите да увеличат конверсията си с до 300% чрез данни-базирана оптимизация на продажбените фунии.',
    content: '',
    author: 'Продажбени Консултанти',
    publishedAt: '2024-11-28',
    readTime: 15,
    category: 'Продажби',
    slug: 'sales-engine-optimizatsiya-prodazhbi',
    tags: ['продажби', 'конверсия', 'оптимизация', 'CRO']
  },
  {
    id: '5',
    title: 'Българският B2B пазар: Тенденции и възможности за 2025',
    excerpt: 'Анализ на българския B2B пазар, ключови тенденции за следващата година и как компаниите могат да се възползват от новите възможности.',
    content: '',
    author: 'Пазарни Аналитици',
    publishedAt: '2024-11-20',
    readTime: 6,
    category: 'Пазарен анализ',
    slug: 'bulgarski-b2b-pazar-tendentsii-2025',
    tags: ['България', 'B2B пазар', 'тенденции', 'анализ']
  }
];

const categories = ['Всички', 'Бизнес стратегия', 'SEO', 'Автоматизация', 'Продажби', 'Пазарен анализ'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Всички');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Всички' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const seoData = {
    title: '📚 Блог | Pravdast - Експертни съвети за бизнес инженерство',
    description: '🚀 Научете най-новите стратегии за B2B растеж, SEO оптимизация и автоматизация на продажбите. Експертни съвети от водещите консултанти в България.',
    keywords: 'блог, бизнес инженерство, B2B растеж, SEO съвети, автоматизация продажби, маркетинг стратегии, България',
    canonical: 'https://www.pravdagency.eu/blog'
  };

  return (
    <>
      <SEOHead seo={seoData} pageSlug="blog" />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Експертен Блог
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Научете най-новите стратегии за <span className="text-[#ECB628] font-semibold">предсказуем бизнес растеж</span> от водещите експерти в България
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Търсете статии..."
                className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[#ECB628] transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-[#ECB628] text-black font-semibold'
                      : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 group"
                >
                  {/* Featured Image Placeholder */}
                  <div className="h-48 bg-gradient-to-r from-[#ECB628]/20 to-[#ECB628]/5 flex items-center justify-center">
                    <div className="text-[#ECB628] font-bold text-2xl">P</div>
                  </div>
                  
                  <div className="p-6">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-semibold text-[#ECB628] bg-[#ECB628]/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <Clock className="w-3 h-3" />
                        {post.readTime} мин четене
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ECB628] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-zinc-400 bg-zinc-700/30 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString('bg-BG')}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link href={`/blog/${post.slug}`}>
                      <a className="inline-flex items-center gap-2 text-[#ECB628] hover:text-[#ECB628]/80 transition-colors font-semibold text-sm">
                        Прочети повече
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zinc-400 text-lg">
                  Няма намерени статии за "{searchTerm}" в категория "{selectedCategory}"
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 bg-gradient-to-r from-[#ECB628]/10 to-[#ECB628]/5 border-t border-zinc-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готови за собствена трансформация?
            </h2>
            <p className="text-zinc-300 text-lg mb-8">
              Свържете се с нас за безплатна консултация и започнете да строите системи за предсказуем растеж още днес.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-[#ECB628] text-black px-8 py-4 rounded-lg font-bold hover:bg-[#ECB628]/90 transition-colors">
                Безплатна консултация
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}