'use client';

import Image from 'next/image';
import { generateMetadata } from '@/lib/metadata';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import { organizationSchema } from '@/components/SchemaMarkup';
import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

export default function AboutClient() {
  const pageMetadata = generateMetadata({
    title: 'За Нас - Pravdast | Бизнес Инженери за Растеж',
    description: 'Научете повече за Pravdast - екипът от бизнес инженери, който помага на B2B компании в България да постигнат предвидим растеж чрез проверени системи.',
    canonical: 'https://www.pravdagency.eu/about',
    ogImage: '/og-images/about.svg',
  });

  const teamMembers = [
    {
      name: 'Петър Петров',
      role: 'Основател & CEO',
      image: '/team/Petio.webp',
      description: 'Бизнес инженер с 10+ години опит в дигиталния маркетинг и автоматизация.'
    },
    {
      name: 'Симеон Симеонов',
      role: 'CTO & Tech Lead',
      image: '/team/Simo.webp',
      description: 'Технически директор специализиран в SEO технологии и системна архитектура.'
    },
    {
      name: 'Виктория Георгиева',
      role: 'Head of Content',
      image: '/team/Viki.webp',
      description: 'Ръководител съдържание с експертиза в SEO copywriting и content strategy.'
    },
    {
      name: 'Томислав Томов',
      role: 'Lead Developer',
      image: '/team/Tomi.webp',
      description: 'Водещ разработчик отговарящ за техническо SEO и уеб разработка.'
    },
    {
      name: 'Живко Живков',
      role: 'Marketing Strategist',
      image: '/team/Jivko.webp',
      description: 'Маркетинг стратег с фокус върху B2B lead generation и конверсии.'
    },
    {
      name: 'Константин Константинов',
      role: 'Data Analyst',
      image: '/team/Koko.webp',
      description: 'Аналитик данни специализиран в SEO метрики и бизнес интелигентност.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Предвидимост',
      description: 'Превръщаме хаотичния растеж в предвидими, измерими резултати чрез системен подход.'
    },
    {
      icon: TrendingUp,
      title: 'Устойчивост',
      description: 'Създаваме дългосрочни решения, които растат заедно с вашия бизнес.'
    },
    {
      icon: Users,
      title: 'Партньорство',
      description: 'Работим като разширение на вашия екип, не просто като външен доставчик.'
    },
    {
      icon: Award,
      title: 'Превъзходство',
      description: 'Стремим се към най-високи стандарти в всяко решение, което доставяме.'
    }
  ];

  return (
    <>
      <EnhancedSEO {...pageMetadata} />
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

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
                    За <span className="text-[#ECB629]">Pravdast</span>
                  </h1>
                  <p className="text-xl text-gray-300">
                    Бизнес инженери, които превръщат хаоса в предвидим растеж
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Нашата мисия
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Вярваме, че всеки бизнес заслужава предвидим растеж. Затова създадохме системи, 
                    които превръщат случайните успехи в постоянни резултати. Не продаваме чудеса - 
                    строим машини за растеж.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Нашите ценности
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-6 bg-slate-800/50 border border-white/10 rounded-xl hover:border-[#ECB629]/50 transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-[#ECB629]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-[#ECB629]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-300">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Нашият екип
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Експерти в бизнес инженеринг, обединени от страстта към измерими резултати
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-[#ECB629]/50 transition-all duration-300 group"
                    >
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#ECB629]/30 group-hover:border-[#ECB629] transition-all duration-300">
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                          quality={85}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ECB629] font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {member.description}
                      </p>
                    </motion.div>
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
                    Готови ли сте за система?
                  </h2>
                  <p className="text-xl text-black/80 mb-8">
                    Спрете да залагате на късмет. Започнете да строите предвидим растеж.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Започнете диагностика
                    </motion.a>
                    <motion.a
                      href="tel:+359879282299"
                      className="inline-flex items-center px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Обади се сега
                    </motion.a>
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