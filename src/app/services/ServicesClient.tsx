'use client'

import { motion, useInView } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRef, useState, useEffect } from "react"
import {
  ArrowRight,
  Search,
  Users,
  Bot,
  Edit,
  TrendingUp,
  TrendingDown,
  Target,
  Zap,
  CheckCircle,
  Crown,
  Phone,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

// Systems Background Component
const SystemsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {/* Engineering Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="systems-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="40" cy="40" r="2" fill="#ECB629" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#systems-grid)" />
      </svg>

      {/* Floating System Keywords */}
      {[
        "SYSTEMS",
        "ENGINEERING", 
        "GROWTH",
        "AUTOMATION",
        "RESULTS",
        "SCALE",
      ].map((keyword, i) => (
        <motion.div
          key={keyword}
          className="absolute text-yellow-400 font-bold text-sm opacity-20 select-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.1, 0.8],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${20 + (i * 10)}%`,
          }}
        >
          {keyword}
        </motion.div>
      ))}
    </div>
  )
}

// Service cards data
const services = [
  {
    id: "seo-struktor",
    title: "SEO Struktor™",
    subtitle: "Търсачка оптимизация",
    description: "Инженерна система за органичен трафик и видимост",
    icon: Search,
    price: "1980 лв./месечно", 
    features: ["Keyword Research", "On-page SEO", "Link Building", "Technical SEO"],
    status: "Налична",
    href: "/services/seo-struktor",
    color: "from-blue-600 to-blue-700",
    iconColor: "text-blue-400"
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Контент креация",
    description: "AI-асистирана система за създаване на влиятелен контент",
    icon: Edit,
    price: "3450 лв./месечно",
    features: ["Content Strategy", "AI Writing", "Brand Storytelling", "Content Calendar"],
    status: "Налична",
    href: "/services/trendlab",
    color: "from-purple-600 to-purple-700", 
    iconColor: "text-purple-400"
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Реклама оптимизация",
    description: "Система за максимизиране на ROI от платени реклами",
    icon: Target,
    price: "1570 лв./месечно",
    features: ["PPC Management", "Ad Optimization", "Conversion Tracking", "ROI Maximization"],
    status: "Налична",
    href: "/services/clickstarter",
    color: "from-orange-600 to-orange-700",
    iconColor: "text-orange-400"
  },
  {
    id: "clientomat",
    title: "Clientomat™", 
    subtitle: "Клиентска автоматизация",
    description: "Автоматизирана система за придобиване и задържане на клиенти",
    icon: Users,
    price: "2890 лв./месечно",
    features: ["Lead Generation", "CRM Automation", "Email Marketing", "Customer Retention"],
    status: "Налична",
    href: "/services/clientomat",
    color: "from-green-600 to-green-700",
    iconColor: "text-green-400"
  },
]

export default function ServicesClient() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })

  return (
    <div className="min-h-screen text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-10">
        <SystemsBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Приемаме проекти</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Бизнес{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Инженерство
                </span>
                <br />
                Системи
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Четири специализирани системи за предсказуем растеж.
                <br />
                Инженерни решения, а не импровизация.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Заявете консултация
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link href="tel:+359879282299">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    +359 879 282 299
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Нашите <span className="text-yellow-400">Системи</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Четири инженерни системи за всички аспекти на вашия бизнес растеж
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="group h-full bg-slate-800/50 border-slate-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                              <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                            </div>
                            <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                              {service.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
                            <div className="text-sm text-gray-400">Месечно</div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <p className="text-yellow-400 font-medium">{service.subtitle}</p>
                          <p className="text-gray-300">{service.description}</p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-400">
                            Основни функции
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Link href={service.href}>
                            <Button
                              className="w-full bg-black text-white hover:bg-gray-900 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300"
                              size="lg"
                            >
                              Научи повече
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Готови за системен растеж?
            </h2>
            <p className="text-xl text-black/80">
              Остават 3 места за 2025
            </p>
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