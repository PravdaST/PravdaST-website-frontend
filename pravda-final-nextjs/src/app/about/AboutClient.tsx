'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Target,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description:
      "Всяко решение е базирано на данни, а не на предположения. Измерваме всичко и оптимизираме постоянно.",
  },
  {
    icon: Shield,
    title: "Прозрачност",
    description:
      "Никакви скрити такси или неясни процеси. Знаете точно какво правим и защо го правим.",
  },
  {
    icon: Zap,
    title: "Ефективност",
    description:
      "Не губим време с експерименти. Прилагаме проверени системи, които дават предвидими резултати.",
  },
]

const teamMembers = [
  {
    id: "simo",
    name: "Симеон Сираков",
    role: "Бизнес директор",
    image: "/simo.webp",
    description: "Ръководи стратегическото развитие и бизнес операциите на агенцията.",
  },
  {
    id: "tomi",
    name: "Томи Сапунджиев",
    role: "Креативен директор",
    image: "/tomi.webp",
    description: "Отговаря за креативната визия и дизайн стратегията на проектите.",
  },
  {
    id: "jivko",
    name: "Живомир Арнаудов",
    role: "Програмен мениджър",
    image: "/jivko.png",
    description: "Управлява техническата архитектура и развитието на системите.",
  },
  {
    id: "koko",
    name: "Калоян Богданов",
    role: "AI девелопър",
    image: "/koko.png",
    description: "Специалист по машинно обучение и автоматизация на процеси.",
  },
  {
    id: "viki",
    name: "Виктория Петрова",
    role: "Маркетинг експерт",
    image: "/viki.webp",
    description: "Ръководи маркетинговите стратегии и кампании на клиентите.",
  },
  {
    id: "petio",
    name: "Петър Петров",
    role: "SEO експерт",
    image: "/petio.png",
    description: "Специалист по търсачка оптимизация и техническо SEO.",
  },
]

const timeline = [
  {
    year: "2019",
    title: "Основаване",
    description: "Стартираме като малка агенция с фокус върху резултати",
  },
  {
    year: "2020",
    title: "Първи клиенти",
    description: "Изграждаме първите системи за автоматизация",
  },
  {
    year: "2021",
    title: "Растеж",
    description: "Разширяваме екипа и услугите си",
  },
  {
    year: "2022",
    title: "Инженерни системи",
    description: "Разработваме специализирани системи за различни индустрии",
  },
  {
    year: "2023",
    title: "Мащабиране",
    description: "Помагаме на 50+ бизнеса да постигнат предсказуем растеж",
  },
  {
    year: "2024",
    title: "Лидери в България",
    description: "Станахме референтна агенция за бизнес инженерство",
  },
]

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/30"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Бизнес инженери</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Превръщаме хаоса в{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                система
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Не сме обикновена агенция. Ние сме бизнес инженери, които изграждат
              системи за предсказуем растеж. Всеки проект е инженерна задача с
              измерими резултати.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Нашите <span className="text-yellow-400">Ценности</span>
              </h2>
              <p className="text-xl text-gray-300">
                Принципите, които ръководят работата ни
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-yellow-400/50 transition-all duration-300">
                    <CardContent className="p-8 text-center space-y-6">
                      <div className="inline-flex p-4 rounded-full bg-yellow-400/10">
                        <value.icon className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-bold">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Нашият <span className="text-yellow-400">Екип</span>
              </h2>
              <p className="text-xl text-gray-300">
                Експерти, които правят системите да работят
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full bg-slate-800/50 border-slate-700 hover:border-yellow-400/50 transition-all duration-300">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-yellow-400 font-medium">{member.role}</p>
                        <p className="text-gray-300 text-sm mt-2">{member.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Нашето <span className="text-yellow-400">Пътешествие</span>
              </h2>
              <p className="text-xl text-gray-300">
                От стартъп до лидери в бизнес инженерството
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-400/30"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 px-8">
                    <Card className={`bg-slate-800/50 border-slate-700 ${
                      index % 2 === 0 ? "text-right" : ""
                    }`}>
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-bold rounded-full">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <Card className="flex-1 bg-slate-800/50 border-slate-700">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-3 bg-black/20 text-black px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Остават 3 места за 2025</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Готови ли сте за система?
            </h2>

            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Спрете да импровизирате. Започнете да работите със система.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-4 text-black">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Безплатна консултация</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Без ангажименти</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Процес 5 минути</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg font-semibold"
                >
                  Заявете консултация
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+359879282299">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-black/20 text-black hover:bg-black/10 px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Обади се сега
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}