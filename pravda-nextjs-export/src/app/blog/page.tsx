'use client';

import { generateMetadata } from '@/lib/metadata';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const pageMetadata = generateMetadata({
    title: 'Блог - Pravdast | SEO и Дигитален Маркетинг Съвети',
    description: 'Актуални статии за SEO оптимизация, дигитален маркетинг и бизнес растеж. Експертни съвети от екипа на Pravdast.',
    canonical: 'https://www.pravdagency.eu/blog',
    ogImage: '/og-images/blog.svg',
  });

  const blogPosts = [
    {
      title: 'SEO Стратегии за B2B Компании в България 2024',
      excerpt: 'Актуалните SEO техники и стратегии, които работят за B2B бизнеси в българския пазар.',
      date: '2024-01-15',
      readTime: '8 мин',
      category: 'SEO',
      slug: 'seo-strategies-b2b-bulgaria-2024',
      featured: true
    },
    {
      title: 'Как да Автоматизирате Lead Generation с CRM',
      excerpt: 'Пълно ръководство за автоматизация на клиентския цикъл с модерни CRM системи.',
      date: '2024-01-10',
      readTime: '12 мин',
      category: 'Автоматизация',
      slug: 'automate-lead-generation-crm',
      featured: true
    },
    {
      title: 'Google Analytics 4: Настройка за B2B Бизнес',
      excerpt: 'Как да настроите GA4 за максимална полза от вашия B2B уебсайт и маркетинг кампании.',
      date: '2024-01-05',
      readTime: '6 мин',
      category: 'Analytics',
      slug: 'google-analytics-4-b2b-setup',
      featured: false
    },
    {
      title: 'Facebook Ads за B2B: Стратегии за Успех',
      excerpt: 'Как да използвате Facebook реклами ефективно за генериране на B2B лийдове.',
      date: '2023-12-28',
      readTime: '10 мин',
      category: 'Реклами',
      slug: 'facebook-ads-b2b-strategies',
      featured: false
    },
    {
      title: 'Техническо SEO: Checklist за 2024',
      excerpt: 'Пълен checklist с всички технически SEO елементи, които трябва да проверите.',
      date: '2023-12-20',
      readTime: '15 мин',
      category: 'SEO',
      slug: 'technical-seo-checklist-2024',
      featured: false
    },
    {
      title: 'Content Marketing Strategy за B2B',
      excerpt: 'Как да създадете успешна content strategy, която привлича и конвертира B2B клиенти.',
      date: '2023-12-15',
      readTime: '9 мин',
      category: 'Content',
      slug: 'content-marketing-strategy-b2b',
      featured: false
    }
  ];

  const categories = ['Всички', 'SEO', 'Автоматизация', 'Analytics', 'Реклами', 'Content'];

  return (
    <>
      <EnhancedSEO
        title={pageMetadata.title?.toString() || ''}
        description={pageMetadata.description || ''}
        canonical="https://www.pravdagency.eu/blog"
        ogImage="/og-images/blog.svg"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-[var(--pravdast-yellow)]">Блог</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Актуални статии за SEO, дигитален маркетинг и бизнес растеж. 
                Експертни съвети от екипа на Pravdast.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="pb-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    index === 0
                      ? 'bg-[var(--pravdast-yellow)] text-black font-semibold'
                      : 'bg-slate-800/50 border border-slate-600 hover:border-[var(--pravdast-yellow)] hover:text-[var(--pravdast-yellow)]'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Препоръчани <span className="text-[var(--pravdast-yellow)]">Статии</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[var(--pravdast-yellow)]/10 text-[var(--pravdast-yellow)] text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('bg-BG')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--pravdast-yellow)] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[var(--pravdast-yellow)] font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Прочети повече
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* All Posts Grid */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-8"
            >
              Всички Статии
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-[var(--pravdast-yellow)]/10 text-[var(--pravdast-yellow)] text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-[var(--pravdast-yellow)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('bg-BG')}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[var(--pravdast-yellow)] text-sm font-semibold hover:underline"
                      >
                        Прочети →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="bg-[var(--pravdast-yellow)] text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors">
                Зареди още статии
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}