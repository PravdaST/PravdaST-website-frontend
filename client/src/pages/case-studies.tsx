import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Target,
  Zap,
  CheckCircle,
  Eye,
  Star,
} from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline:
      "Mарка с обичан вкус и богата история, но без изградена дигитална връзка със своите потребители и търговски партньори.",
    description:
      "Традиционен млечен производител с богата история, който се нуждаеше от модерна дигитална присъствие за достигане до нови аудитории.",
    challenge:
      "Компанията разчиташе основно на традиционни канали за продажба и имаше слаба онлайн видимост. Нуждаеше се от система за изграждане на бранд авторитет и привличане на по-млада аудитория.",
    solution:
      "Първо внедрихме Trendlab™ система, която създаде стратегия за носталгия и доверие, базирана на богатата история на бранда. След това произведохме над 100 видео публикации месечно, разказващи автентични истории. Накрая активирахме Clientomat™ за разпространение на съдържанието до 5 милиона гледания месечно с минимален рекламен бюджет.",
    results: [
      {
        metric: "5 000 000",
        description: "гледания на месец с минимален бюджет",
      },
      { metric: "+243%", description: "ръст на месечната бранд аудитория" },
      { metric: "70%", description: "ръст на запитванията от дистрибутори" },
    ],
    systems: ["Trendlab™", "Clientomat™"],
    testimonial:
      "Pravdast ни помогна да превърнем традиционния ни бизнес в модерен бранд, без да загубим автентичността си.",
    image: "/api/placeholder/600/400",
  },
  {
    id: "euphoria-beauty",
    company: "Euphoria Beauty",
    industry: "Козметични услуги",
    tagline: "Салон с репутация. Без дигитална визия.",
    description:
      "Успешен козметичен салон във Варна с отлична репутация сред съществуващите клиенти, но липса на онлайн присъствие.",
    challenge:
      "Салонът разчиташе изцяло на препоръки от уста на уста и нямаше видимост в Google. Нуждаеше се от локална SEO стратегия и система за привличане на нови клиенти.",
    solution:
      "Внедрихме SEO Struktor™ система, фокусирана върху локални търсения. Оптимизирахме Google My Business профила и създадохме съдържание, насочено към местната аудитория във Варна.",
    results: [
      { metric: "+280%", description: "повече запитвания онлайн" },
      { metric: "+137%", description: "нови клиенти от Google" },
      { metric: "+42%", description: "разпознаваемост на бранд" },
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial:
      "Благодарение на Pravdast сега имаме постоянен поток от нови клиенти.",
    image: "/api/placeholder/600/400",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData["case-studies"]} pageSlug="case-studies" />
      <Navigation />

      <main className="pt-10">
        {/* Hero Section */}
        <section className="py-10 relative overflow-hidden">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0">
              {/* Success Pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0)
                `,
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Growth Lines */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
                  style={{
                    left: `${i * 20}%`,
                    top: `${80 - i * 15}%`,
                    width: `${30 + i * 10}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleX: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <motion.div
                      className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-20"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Проследими</span>{" "}
                    резултати от реални проекти
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Реални резултати от <br />
                <span className="text-[#ECB629] relative">
                  нашите системи
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Разгледайте как нашите клиенти постигнаха измерим растеж с
                инженерни бизнес системи. Вижте{" "}
                <Link
                  href="/services"
                  className="text-[#ECB629] hover:underline"
                >
                  всички наши услуги
                </Link>{" "}
                или{" "}
                <Link
                  href="/calculators"
                  className="text-[#ECB629] hover:underline"
                >
                  изчислете своята възвърната инвестиция
                </Link>
                .
              </motion.p>

              {/* Stats Preview */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {[
                  { label: "Средно увеличение", value: "+250%" },
                  { label: "Успешни проекта", value: "47+" },
                  { label: "Възвърната инвестиция", value: "380%" },
                  { label: "Време за резултат", value: "3-6м" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-[#ECB629] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ECB629] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative bg-slate-800/50 border-slate-700 overflow-hidden group hover:border-[#ECB629]/50 transition-all duration-300">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <CardContent className="p-0 relative z-10">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Content */}
                        <div className="p-8 lg:p-12">
                          <motion.div
                            className="flex flex-wrap gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            {study.systems.map((system, idx) => (
                              <Badge
                                key={idx}
                                className="bg-[#ECB629] text-black font-semibold px-3 py-1"
                              >
                                {system}
                              </Badge>
                            ))}
                            <Badge
                              variant="outline"
                              className="border-slate-600 text-gray-300 px-3 py-1"
                            >
                              {study.industry}
                            </Badge>
                          </motion.div>

                          <motion.h3
                            className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#ECB629] transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            {study.company}
                          </motion.h3>

                          <motion.p
                            className="text-gray-400 mb-6 italic"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            viewport={{ once: true }}
                          >
                            {study.tagline}
                          </motion.p>

                          <div className="space-y-6">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                            >
                              <h4 className="text-lg font-semibold text-[#ECB629] mb-2 flex items-center gap-2">
                                <Target className="w-5 h-5" />
                                Предизвикателство
                              </h4>
                              <p className="text-gray-300">{study.challenge}</p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <h4 className="text-lg font-semibold text-[#ECB629] mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Решение
                              </h4>
                              <p className="text-gray-300">{study.solution}</p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <blockquote className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-[#ECB629]">
                                <p className="text-gray-300 italic">
                                  "{study.testimonial}"
                                </p>
                              </blockquote>
                            </motion.div>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="bg-slate-800/30 p-8 lg:p-12 flex items-center relative">
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `
                                linear-gradient(45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
                                linear-gradient(-45deg, rgba(236, 182, 40, 0.1) 25%, transparent 25%),
                                linear-gradient(45deg, transparent 75%, rgba(236, 182, 40, 0.1) 75%),
                                linear-gradient(-45deg, transparent 75%, rgba(236, 182, 40, 0.1) 75%)
                              `,
                                backgroundSize: "20px 20px",
                                backgroundPosition:
                                  "0 0, 0 10px, 10px -10px, -10px 0px",
                              }}
                            ></div>
                          </div>

                          <div className="w-full relative z-10">
                            <motion.h4
                              className="text-xl font-bold text-white mb-6 text-center"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              viewport={{ once: true }}
                            >
                              Ключови резултати
                            </motion.h4>
                            <div className="space-y-6">
                              {study.results.map((result, metricIndex) => (
                                <motion.div
                                  key={metricIndex}
                                  className="text-center group/metric"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.6,
                                    delay: 0.4 + metricIndex * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <div className="relative">
                                    <div className="text-3xl font-bold text-[#ECB629] mb-2 group-hover/metric:scale-110 transition-transform">
                                      {result.metric}
                                    </div>
                                    <motion.div
                                      className="absolute inset-0 bg-[#ECB629] rounded-full opacity-0 group-hover/metric:opacity-20 blur-xl"
                                      transition={{ duration: 0.3 }}
                                    />
                                  </div>
                                  <div className="text-sm text-gray-400">
                                    {result.description}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Urgency Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-black/10 backdrop-blur-sm border border-black/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm text-black font-semibold">
                    Само 3 места за 2025
                  </span>
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Готови за такива резултати?
              </motion.h2>

              <motion.p
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Започнете своята история на успех с безплатна консултация.
              </motion.p>

              {/* Trust Signals */}
              <motion.div
                className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Безплатна стратегия</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Конкретен план</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Гарантирани резултати</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  whileHover={{ 
                    y: -8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Започнете сега</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
