'use client'

import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowLeft, Search, Settings, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

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
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism border border-[#ECB629]/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#ECB629]" />
                  <span className="text-sm text-[#ECB629] font-bold">ГРЕШКА 404</span>
                </div>
              </motion.div>

              {/* Large 404 */}
              <motion.div
                className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold mb-6 text-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                404
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Търсената от вас страница не съществува или е била преместена. Но не се притеснявайте - в Pravda ST имаме системно решение за всичко.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#ECB629] text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <Home className="w-5 h-5" />
                  <span>Към началото</span>
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black font-semibold rounded-lg transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Назад</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Нашите бизнес системи
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Може би търсите една от нашите проверени системи?
              </motion.p>
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
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="block p-6 glassmorphism border border-[#ECB629]/20 hover:border-[#ECB629]/50 transition-all duration-300 hover:transform hover:scale-105 rounded-xl"
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center glassmorphism border border-[#ECB629]/20 rounded-3xl p-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Нуждаете се от помощ?
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                В Pravda ST всеки проблем е възможност за системно решение. Свържете се с нас за безплатна консултация.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#ECB629] text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-[#ECB629]/25"
                >
                  <Search className="w-5 h-5" />
                  <span>Безплатна консултация</span>
                </Link>
                
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black font-semibold rounded-lg transition-all duration-300"
                >
                  <Home className="w-5 h-5" />
                  <span>За нас</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}