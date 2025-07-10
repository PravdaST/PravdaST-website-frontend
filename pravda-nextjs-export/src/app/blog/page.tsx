'use client';

import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 7,
      slug: "biznes-inzhenering-haos-v-predskazuem-rastezh",
      title: "Бизнес инженеринг: Как да превърнете хаоса в предсказуем растеж",
      excerpt: "Разберете как да замените хаотичните маркетинг действия със системни решения за устойчив бизнес растеж.",
      content: "Пълно съдържание на статията за бизнес инженеринг...",
      author: "Симеон Сираков",
      publishedAt: "2025-01-10",
      readTime: "7 мин четене",
      category: "Бизнес инженеринг",
      tags: ["бизнес растеж", "системи", "стратегия", "оптимизация"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Блог - Правдаст | Експертни съвети за бизнес растеж и маркетинг</title>
        <meta 
          name="description" 
          content="📚 Научете от експертите: стратегии за бизнес растеж, SEO съвети, маркетинг тактики и системен подход за предсказуем успех в България." 
        />
        <meta name="keywords" content="бизнес блог българия, маркетинг съвети, seo стратегии, растеж на бизнеса, дигитален маркетинг" />
        <link rel="canonical" href="https://www.pravdagency.eu/blog/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Блог - Правдаст | Експертни съвети за бизнес растеж и маркетинг" />
        <meta property="og:description" content="📚 Научете от експертите: стратегии за бизнес растеж, SEO съвети, маркетинг тактики и системен подход за предсказуем успех в България." />
        <meta property="og:url" content="https://www.pravdagency.eu/blog/" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Блог - Правдаст | Експертни съвети за бизнес растеж и маркетинг" />
        <meta name="twitter:description" content="📚 Научете от експертите: стратегии за бизнес растеж, SEO съвети, маркетинг тактики и системен подход за предсказуем успех в България." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <Navigation />
        
        <main className="pt-10 sm:pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Експертни <span className="text-[#ECB629]">съвети</span> за растеж
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Научете от нашия опит как да трансформирате вашия бизнес с проверени стратегии
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-8">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-[#ECB629]/30 transition-all duration-300"
                    >
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-[#ECB629]/20 text-[#ECB629] text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.publishedAt}>
                              {new Date(post.publishedAt).toLocaleDateString('bg-BG')}
                            </time>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-[#ECB629] transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-slate-800 text-gray-400 text-xs rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-[#ECB629] hover:text-white transition-colors font-medium"
                          >
                            Прочети повече
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Блог - Pravda Agency | SEO съвети и дигитален маркетинг',
  description: 'Прочетете последните статии за SEO, дигитален маркетинг и бизнес растеж от експертите на Pravda Agency.',
  openGraph: {
    title: 'Блог - Pravda Agency | SEO съвети и дигитален маркетинг',
    description: 'Прочетете последните статии за SEO, дигитален маркетинг и бизнес растеж от експертите на Pravda Agency.',
    url: 'https://www.pravdagency.eu/blog',
    type: 'website',
  },
}

const blogPosts = [
  {
    title: 'Как да подобрите SEO на вашия уебсайт през 2024',
    excerpt: 'Научете най-новите SEO техники и стратегии, които ще ви помогнат да подобрите видимостта на вашия сайт в Google.',
    date: '15 януари 2024',
    category: 'SEO',
    readTime: '8 мин четене',
    slug: 'seo-podobreniya-2024'
  },
  {
    title: 'Автоматизация на маркетинга: Пълен гид за начинаещи',
    excerpt: 'Открийте как автоматизацията може да трансформира вашия маркетинг и да ви спести време и ресурси.',
    date: '10 януари 2024',
    category: 'Автоматизация',
    readTime: '12 мин четене',
    slug: 'marketing-avtomatizaciya-guide'
  },
  {
    title: 'Топ 10 трендове в дигиталния маркетинг за 2024',
    excerpt: 'Вижте кои са най-важните тенденции в дигиталния маркетинг, които ще формират годината.',
    date: '5 януари 2024',
    category: 'Маркетинг',
    readTime: '10 мин четене',
    slug: 'digitalen-marketing-trendove-2024'
  },
  {
    title: 'Как да създадете ефективна landing page',
    excerpt: 'Научете основните принципи за създаване на landing страници, които конвертират посетители в клиенти.',
    date: '28 декември 2023',
    category: 'Уеб дизайн',
    readTime: '6 мин четене',
    slug: 'efektivna-landing-page'
  },
  {
    title: 'Google Analytics 4: Пълен гид за настройка',
    excerpt: 'Стъпка по стъпка ръководство за настройване и използване на Google Analytics 4 за вашия бизнес.',
    date: '20 декември 2023',
    category: 'Аналитика',
    readTime: '15 мин четене',
    slug: 'google-analytics-4-guide'
  },
  {
    title: 'Локално SEO: Как да се класирате първи в Google Maps',
    excerpt: 'Всичко, което трябва да знаете за локалното SEO и как да подобрите вашето присъствие в местните търсения.',
    date: '15 декември 2023',
    category: 'SEO',
    readTime: '9 мин четене',
    slug: 'lokalno-seo-google-maps'
  }
]

export default function BlogPage() {
  return (
    <>
      <SEOHead 
        title="Блог - Pravda Agency | SEO съвети и дигитален маркетинг"
        description="Прочетете последните статии за SEO, дигитален маркетинг и бизнес растеж от експертите на Pravda Agency."
        canonicalUrl="https://www.pravdagency.eu/blog"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black">
              Блог
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Знания за <span className="text-yellow-400">растеж</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Открийте най-новите стратегии, техники и тенденции в SEO, дигиталния маркетинг 
              и автоматизацията. Знанията, които ще ускорят вашия бизнес.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Препоръчана статия</h2>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <Badge className="mb-4 bg-yellow-400 text-black">
                      {blogPosts[0].category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gray-400">{blogPosts[0].date}</span>
                      <span className="text-gray-400">{blogPosts[0].readTime}</span>
                    </div>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
                      Прочети статията
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📈</div>
                      <h4 className="text-2xl font-bold text-black">SEO 2024</h4>
                      <p className="text-black/80">Най-новите техники</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Всички статии</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="bg-black border-gray-800 overflow-hidden group hover:border-yellow-400 transition-colors">
                  <div className="p-6">
                    <Badge className="mb-4 bg-gray-800 text-gray-300 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                    >
                      Прочети повече
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Не пропускайте нови статии
              </h2>
              <p className="text-black/80 mb-8 text-lg">
                Абонирайте се за нашия бюлетин и получавайте най-новите съвети 
                за SEO и дигитален маркетинг директно в пощата си.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Вашият имейл адрес"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-black"
                />
                <Button className="bg-black text-white hover:bg-gray-800 px-8">
                  Абонирай се
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
