'use client'

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowLeft, Search, Settings } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>

            {/* Floating elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-red-500/20 rounded-full"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Error Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-red-400 font-bold">ГРЕШКА 404</span>
                </div>
              </motion.div>

              {/* Large 404 */}
              <motion.div
                className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold mb-6 text-slate-800/50"
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
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Търсената от вас страница не съществува или е била преместена. Но не се притеснявайте - можете да намерите всичко, което търсите.
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
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Популярни страници
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Може би търсите някоя от тези страници?
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
                  color: "text-blue-400"
                },
                {
                  title: "Clientomat™", 
                  description: "Автоматизация на клиентски процеси и повишаване на лоялността",
                  href: "/services/clientomat",
                  icon: Settings,
                  color: "text-green-400"
                },
                {
                  title: "Clickstarter™",
                  description: "Платени реклами и конверсии с максимален ROI",
                  href: "/services/clickstarter", 
                  icon: ArrowLeft,
                  color: "text-purple-400"
                },
                {
                  title: "Казуси",
                  description: "Вижте реални резултати от нашите проекти",
                  href: "/case-studies",
                  icon: AlertTriangle,
                  color: "text-yellow-400"
                },
                {
                  title: "За нас",
                  description: "Научете повече за нашия екип и подход",
                  href: "/about",
                  icon: Home,
                  color: "text-orange-400"
                },
                {
                  title: "Контакти",
                  description: "Свържете се с нас за безплатна консултация", 
                  href: "/contact",
                  icon: Search,
                  color: "text-red-400"
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
                    className="block p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-[#ECB629]/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-slate-700/50 ${item.color}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#ECB629] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Все още търсите нещо?
              </motion.h2>

              <motion.p
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Свържете се с нас и ще ви помогнем да намерите точно това, което търсите.
              </motion.p>

              <motion.a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="w-5 h-5" />
                <span>Помощ и поддръжка</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}