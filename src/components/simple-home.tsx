'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TrendingUp, Clock, HelpCircle } from "lucide-react"

const problems = [
  {
    icon: TrendingUp,
    title: "Инвестиция или разход?",
    description: "Наливате пари в маркетинг, но не виждате ясна възвръщаемост.",
  },
  {
    icon: Clock,
    title: "Оперативен хаос?",
    description:
      "Вместо да работите върху бизнеса си, вие работите в него и нямате време за растеж.",
  },
  {
    icon: HelpCircle,
    title: "Празни обещания?",
    description:
      "Омръзнало ви е от агенции, които обещават много, а постигат малко.",
  },
]

export function SimpleHome() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Pravda Agency
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Услуги
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                Резултати
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                За нас
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Блог
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Контакт
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-[#ECB629] rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-[#ECB629] rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-white font-medium">
                <span className="text-[#ECB629] font-bold">Ново</span> | Приемаме проекти
              </span>
            </motion.div>

            {/* Business Engineering Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#ECB629] to-yellow-500 text-black font-bold text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              БИЗНЕС ИНЖЕНЕРИНГ
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Престанете да залагате на маркетинг.{" "}
              <span className="text-[#ECB629] relative">
                Започнете да изграждате растеж.
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Изграждаме системи, които ви дават контрол, носят предвидими приходи
              и пестят времето ви. Разгледайте нашите{" "}
              <Link href="/services">
                <span className="text-[#ECB629] hover:underline cursor-pointer">
                  проверени системи
                </span>
              </Link>{" "}
              и{" "}
              <Link href="/case-studies">
                <span className="text-[#ECB629] hover:underline cursor-pointer">
                  реални резултати
                </span>
              </Link>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="https://form.typeform.com/to/GXLaGY98" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden group min-h-[56px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  <span className="relative z-10">Започнете днес</span>
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
                >
                  Научи повече
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Познава ли ви се?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Проблемите са едни и същи, но повечето собственици мислят, че са уникални и няма решение.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="bg-slate-800/60 border-slate-600/30 backdrop-blur-sm h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white">
                        <problem.icon className="w-8 h-8" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white">
                      {problem.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed flex-grow">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Pravda Agency</h3>
            <p className="text-gray-400 mb-6">Бизнес инженеринг за предвидим растеж</p>
            <div className="flex justify-center space-x-6">
              <Link href="/services" className="text-gray-400 hover:text-white">Услуги</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Контакт</Link>
              <Link href="/about" className="text-gray-400 hover:text-white">За нас</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}