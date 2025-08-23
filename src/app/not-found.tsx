'use client'

import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowLeft, Search, Settings, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInView } from "@/components/motion/FadeInView";
import { GlassCard } from "@/components/ui/GlassCard";
import PravdaButton from "@/components/ui/PravdaButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Animated Background Orbs - matching site style */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-[#ECB629]/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-[#ECB629]/15 rounded-full blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#ECB629]/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Error Badge */}
              <FadeIn 
                distance={20} 
                duration={0.6}
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism border border-[#ECB629]/30"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#ECB629]" />
                  <span className="text-sm text-[#ECB629] font-bold">ГРЕШКА 404</span>
                </div>
              </FadeIn>

              {/* Large 404 */}
              <motion.div
                className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold mb-6 text-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                404
              </motion.div>

              <FadeIn
                delay={0.4}
                distance={20}
                duration={0.8}
                as="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                Страницата не е <br />
                <span className="text-[#ECB629] relative">
                  намерена
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </FadeIn>

              <FadeIn
                delay={0.5}
                distance={20}
                duration={0.8}
                as="p"
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Търсената от вас страница не съществува или е била преместена. Но не се притеснявайте - в Pravda ST имаме системно решение за всичко.
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn
                delay={0.6}
                duration={0.8}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <Link href="/">
                  <PravdaButton
                    variant="primary"
                    size="lg"
                    icon={Home}
                    className="shadow-2xl"
                  >
                    Начална страница
                  </PravdaButton>
                </Link>

                <PravdaButton
                  variant="outline"
                  size="lg"
                  icon={ArrowLeft}
                  iconPosition="left"
                  onClick={() => window.history.back()}
                >
                  Назад
                </PravdaButton>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <FadeInView
                as="h2"
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                duration={0.8}
              >
                Нашите бизнес системи
              </FadeInView>
              <FadeInView
                as="p"
                className="text-gray-300 text-lg"
                delay={0.2}
                duration={0.8}
              >
                Може би търсите една от нашите проверени системи?
              </FadeInView>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Service Cards */}
              {[
                {
                  title: "SEO Struktor™",
                  description: "Системна SEO оптимизация за предсказуем органичен растеж",
                  href: "/services/seo-struktor",
                  icon: Search,
                  color: "text-[#ECB629]"
                },
                {
                  title: "Trendlab™", 
                  description: "Проследяване и анализ на пазарни тенденции",
                  href: "/services/trendlab",
                  icon: TrendingUp,
                  color: "text-[#ECB629]"
                },
                {
                  title: "Clickstarter™",
                  description: "Платени реклами и конверсии с максимален ROI",
                  href: "/services/clickstarter", 
                  icon: Target,
                  color: "text-[#ECB629]"
                },
                {
                  title: "Clientomat™",
                  description: "Автоматизация на клиентски процеси и повишаване на лоялността",
                  href: "/services/clientomat",
                  icon: Settings,
                  color: "text-[#ECB629]"
                },
                {
                  title: "Казуси",
                  description: "Вижте реални резултати от нашите проекти",
                  href: "/case-studies",
                  icon: AlertTriangle,
                  color: "text-[#ECB629]"
                },
                {
                  title: "Контакти",
                  description: "Свържете се с нас за безплатна консултация", 
                  href: "/contact",
                  icon: Home,
                  color: "text-[#ECB629]"
                }
              ].map((item, index) => (
                <FadeInView
                  key={index}
                  className="group"
                  duration={0.8}
                  delay={index * 0.1}
                >
                  <Link
                    href={item.href}
                    className="block"
                  >
                    <GlassCard
                      padding="md"
                      rounded="md"
                      hoverScale={true}
                      hoverBorder={true}
                      borderOpacity="20"
                      className="transition-all duration-300"
                    >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-[#ECB629]/10 border border-[#ECB629]/20 ${item.color}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#ECB629] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    </GlassCard>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <GlassCard 
              className="max-w-4xl mx-auto text-center"
              padding="xl"
              rounded="3xl"
            >
              <FadeInView
                as="h2"
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                duration={0.8}
              >
                Нуждаете се от помощ?
              </FadeInView>

              <FadeInView
                as="p"
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                duration={0.8}
                delay={0.2}
              >
                В Pravda ST всеки проблем е възможност за системно решение. Свържете се с нас за безплатна консултация.
              </FadeInView>

              <FadeInView
                className="flex flex-col sm:flex-row gap-4 justify-center"
                duration={0.8}
                delay={0.4}
              >
                <Link href="/contact">
                  <PravdaButton
                    variant="primary"
                    size="lg"
                    icon={Search}
                    className="shadow-[#ECB629]/25 hover:shadow-2xl"
                  >
                    Безплатна консултация
                  </PravdaButton>
                </Link>
                
                <Link href="/about">
                  <PravdaButton
                    variant="outline"
                    size="lg"
                    icon={Home}
                  >
                    За нас
                  </PravdaButton>
                </Link>
              </FadeInView>
            </GlassCard>
          </div>
        </section>
      </main>

    </div>
  );
}