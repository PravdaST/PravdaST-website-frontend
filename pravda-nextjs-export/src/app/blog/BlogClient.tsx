'use client';

import { generateMetadata } from '@/lib/metadata';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogClient() {
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

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <EnhancedSEO {...pageMetadata} />

      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        
        <main className="pt-10 sm:pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
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
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Експертен <span className="text-[#ECB629]">блог</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Актуални съвети за SEO, дигитален маркетинг и бизнес растеж
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white mb-8">Препоръчани статии</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-[#ECB629]/50 transition-all duration-300 group"
                    >
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span className="px-3 py-1 bg-[#ECB629]/20 text-[#ECB629] rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('bg-BG')}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ECB629] transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-[#ECB629] hover:text-white transition-colors font-medium"
                        >
                          Прочети повече
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Recent Posts */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-white mb-8">Последни статии</h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                  {recentPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-[#ECB629]/50 transition-all duration-300 group"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span className="px-3 py-1 bg-[#ECB629]/20 text-[#ECB629] rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ECB629] transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('bg-BG')}
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-[#ECB629] hover:text-white transition-colors text-sm font-medium"
                          >
                            Прочети
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#ECB629]">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    Готови ли сте да приложите това знание?
                  </h2>
                  <p className="text-xl text-black/80 mb-8">
                    Остават 3 места за 2025
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                      whileHover={{ y: -8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Кандидатствайте за диагностика
                    </motion.a>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-black/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Безплатна консултация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Без ангажименти</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Отговор в 48 часа</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}