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