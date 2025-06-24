import { useState } from 'react';
import { Link } from 'wouter';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEOHead } from '@/components/seo-head';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, Search, BookOpen, TrendingUp } from 'lucide-react';
// Removed framer-motion for Vercel compatibility

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
    author: 'Automation Team',
    publishedAt: '2024-12-08',
    readTime: 10,
    category: 'Автоматизация',
    slug: 'clientomat-avtomatiziran-proces',
    tags: ['автоматизация', 'клиенти', 'B2B', 'конверсия']
  },
  {
    id: '4',
    title: 'Данни срещу интуиция: Защо успешните компании винаги избират данните',
    excerpt: 'Анализ на разликата между компании, които базират решенията си на данни, и тези, които разчитат на интуиция. Резултатите са поразителни.',
    content: '',
    author: 'Data Analytics Team',
    publishedAt: '2024-12-05',
    readTime: 6,
    category: 'Данни и анализи',
    slug: 'danni-sreshtu-intuitsiya',
    tags: ['данни', 'анализи', 'решения', 'стратегия']
  },
  {
    id: '5',
    title: 'Систематично мащабиране: Как да растете без да увеличавате хаоса',
    excerpt: 'Мащабирането на бизнеса не трябва да означава увеличаване на сложността. Научете как да растете системно и контролирано.',
    content: '',
    author: 'Business Engineering Team',
    publishedAt: '2024-12-01',
    readTime: 15,
    category: 'Мащабиране',
    slug: 'sistematichno-mashtabirane',
    tags: ['мащабиране', 'системи', 'растеж', 'процеси']
  },
  {
    id: '6',
    title: 'ROI на маркетинговите системи: Как да измерите истинската стойност',
    excerpt: 'Всяка маркетингова активност трябва да се измерва. Разберете как да калкулирате точния ROI на вашите маркетингови инвестиции.',
    content: '',
    author: 'Marketing ROI Specialists',
    publishedAt: '2024-11-28',
    readTime: 9,
    category: 'Маркетинг ROI',
    slug: 'roi-marketingovi-sistemi',
    tags: ['ROI', 'маркетинг', 'измерване', 'стойност']
];

const categories = ['Всички', 'Бизнес стратегия', 'SEO', 'Автоматизация', 'Данни и анализи', 'Мащабиране', 'Маркетинг ROI'];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Всички');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Всички' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={{
        title: "Блог за бизнес инженерство | Pravdast",
        description: "Научете как да създадете предсказуем растеж в B2B компанията си с нашите експертни статии за системи, автоматизация и data-driven подходи.",
        ogImage: "/og-blog.png"
      }} pageSlug="blog" />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0">
              {/* Knowledge Grid Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
              
              {/* Floating Books */}
              {[...Array(6)].map((_, i) => (
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  <BookOpen className="w-4 h-4 text-[#ECB629]" />
                </div className=">"
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
              {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Безплатна</span> експертна информация
                  </span>
                </div>
              </div className=">"

              <div className="h1 "
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                Блог за <br />
                <span className="text-[#ECB629] relative">
                  бизнес инженерство
                  />
                </span>
              </div className="h1>"
              
              <div className="p "
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                Научете как да създадете предсказуем растеж в B2B компанията си с нашите експертни статии за системи, автоматизация и data-driven подходи.
              </div className="p>"

              {/* Search Bar */}
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Търсете статия..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-[#ECB629]"
                />
              </div className=">"
            </div className=">"
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 relative">
          <div className="container mx-auto px-6">
              {categories.map((category, index) => (
                <div className="button"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                    selectedCategory === category
                      ? 'bg-[#ECB629] text-black'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  {category}
                </div className="button>"
              ))}
            </div className=">"
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
                    {/* Hover Glow Effect */}
                    
                    <CardContent className="p-6 relative z-10 h-full flex flex-col">
                      {/* Category Badge */}
                        <Badge className="bg-[#ECB629] text-black font-semibold">
                          {post.category}
                        </Badge>
                      </div className=">"

                      {/* Title */}
                      <div className="h3 "
                        {post.title}
                      </div className="h3>"

                      {/* Excerpt */}
                      <div className="p "
                        className="text-gray-300 mb-4 flex-grow line-clamp-3"
                        {post.excerpt}
                      </div className="p>"

                      {/* Meta Info */}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString('bg-BG')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} мин</span>
                        </div>
                      </div className=">"

                      {/* Tags */}
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                            {tag}
                          </span>
                        ))}
                      </div className=">"

                      {/* Read More Button */}
                        <Button 
                          variant="outline" 
                          asChild
                          <Link href={`/blog/${post.slug}`}>
                            />
                            Четете повече <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div className=">"
                    </CardContent>
                  </Card>
                </div className=">"
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
                <TrendingUp className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Няма намерени статии</h3>
                <p className="text-gray-500">Опитайте с различни ключови думи или категория.</p>
              </div className=">"
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
              <div className="h2 "
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                Готови да приложите знанията?
              </div className="h2>"
              
              <div className="p "
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                Превърнете четенето в действие. Започнете със системен подход към растежа на вашия бизнес.
              </div className="p>"
              
                <Button 
                  size="lg"
                  variant="outline"
                  className="relative border-2 border-black text-black hover:bg-black hover:text-[#ECB629] px-8 py-4 text-lg font-semibold overflow-hidden group"
                  asChild
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    />
                    Безплатна консултация <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div className=">"
            </div className=">"
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
