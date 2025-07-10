'use client';

import { generateMetadata } from '@/lib/metadata';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import { organizationSchema } from '@/components/SchemaMarkup';
import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

export default function AboutPage() {
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
      title: 'Качество',
      description: 'Всяка система е проектирана и тествана за максимална ефективност.'
    }
  ];

  return (
    <>
      <EnhancedSEO
        title={pageMetadata.title?.toString() || ''}
        description={pageMetadata.description || ''}
        canonical="https://www.pravdagency.eu/about"
        ogImage="/og-images/about.svg"
        structuredData={organizationSchema}
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
                За <span className="text-[var(--pravdast-yellow)]">Pravdast</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Ние сме екип от бизнес инженери, които превръщат хаотичния растеж 
                в предвидими, измерими резултати чрез проверени системи.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Нашата <span className="text-[var(--pravdast-yellow)]">Мисия</span>
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Вярваме, че всеки B2B бизнес заслужава предвидим растеж. Затова създаваме 
                  системи, които работят 24/7 и генерират качествени резултати.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  От 2019 година помагаме на компании в България да постигнат техните 
                  бизнес цели чрез SEO оптимизация, автоматизация и дигитален маркетинг.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-2">150+</div>
                    <div className="text-slate-300">Проекта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-2">5+</div>
                    <div className="text-slate-300">Години опит</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-2">85%</div>
                    <div className="text-slate-300">Успешни проекти</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--pravdast-yellow)] mb-2">24/7</div>
                    <div className="text-slate-300">Поддръжка</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Нашите <span className="text-[var(--pravdast-yellow)]">Ценности</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Принципите, които ръководят всяко наше решение и проект
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                >
                  <div className="w-16 h-16 bg-[var(--pravdast-yellow)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[var(--pravdast-yellow)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Нашият <span className="text-[var(--pravdast-yellow)]">Екип</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Експерти в различни области, обединени от общата цел за ваш успех
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
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-700">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[var(--pravdast-yellow)] text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}