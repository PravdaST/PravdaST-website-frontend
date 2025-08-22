"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

// Real landing pages data
const landingPages = [
  {
    id: 1,
    title: "Glovo Liberation Calculator",
    description: "Помогнахме на 23+ ресторанта в София да спестят средно 1,800 лв месечно от Glovo комисионни.",
    image: "/images/glovo-landing-preview.svg",
    category: "Ресторанти",
    icon: <Target className="w-6 h-6" />,
    href: "/glovo",
    comingSoon: false,
  },
];

export default function LandingPagesShowcase() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Orbs */}
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white px-4 sm:px-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-[#ECB629] to-white bg-clip-text text-transparent">
                Landing Pages
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl text-gray-300">
                Showcase
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Откриете нашите специализирани landing pages, създадени за максимални конверсии 
              и бизнес резултати. Всяка страница е оптимизирана за конкретна цел и индустрия.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              >
                Разгледай Landing Pages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#ECB629]/30 text-[#ECB629] hover:bg-[#ECB629]/10 px-8 py-4 text-lg w-full sm:w-auto"
                >
                  Поръчай Персонализирана
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Landing Pages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Наши Landing Pages
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Всяка landing page е създадена с фокус върху конверсиите и потребителското изживяване. 
              Проектирани са за различни индустрии и бизнес цели.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {landingPages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glassmorphism border border-[#ECB629]/20 rounded-2xl p-8 h-full hover:border-[#ECB629]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ECB629]/10">
                  {/* Coming Soon Badge */}
                  {page.comingSoon && (
                    <div className="absolute top-4 right-4 bg-[#ECB629] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Скоро
                    </div>
                  )}

                  {/* Category and Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-[#ECB629]/10 rounded-lg border border-[#ECB629]/20">
                      <div className="text-[#ECB629]">
                        {page.icon}
                      </div>
                    </div>
                    <span className="text-[#ECB629] text-sm font-semibold uppercase tracking-wider">
                      {page.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#ECB629] transition-colors">
                      {page.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {page.description}
                    </p>

                    {/* Preview Image Placeholder */}
                    <div className="mt-6 p-8 bg-gradient-to-br from-[#ECB629]/5 to-[#ECB629]/10 rounded-lg border border-[#ECB629]/10">
                      <div className="text-center text-[#ECB629] opacity-60">
                        <div className="w-16 h-16 mx-auto mb-3 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                          {page.icon}
                        </div>
                        <p className="text-sm">Preview изображение</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      {page.comingSoon ? (
                        <Button
                          disabled
                          className="w-full bg-gray-600 text-gray-400 cursor-not-allowed"
                        >
                          Скоро достъпна
                        </Button>
                      ) : (
                        <Link href={page.href}>
                          <Button className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90">
                            Преглед
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center glassmorphism border border-[#ECB629]/20 rounded-3xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Искате персонализирана Landing Page?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Нашият екип може да създаде уникална landing page, специално адаптирана към вашия бизнес и цели. 
              Свържете се с нас за безплатна консултация.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-4 text-lg font-semibold"
                >
                  Започни проект
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#ECB629]/30 text-[#ECB629] hover:bg-[#ECB629]/10 px-8 py-4 text-lg"
                >
                  Виж услугите ни
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}