'use client'

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";
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
} from "lucide-react";
import Link from "next/link";
import { Magnet } from "@/components/reactbits";
import ServicesJsonLd from "@/components/services-json-ld";
import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInView } from "@/components/motion/FadeInView";
import { GlassCard } from "@/components/ui/GlassCard";

// Systems Background Component
const SystemsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

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
          className="absolute text-[#ECB629] font-mono text-xs opacity-20"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            x: mousePosition.x * 0.015 * (i % 2 === 0 ? 1 : -1),
            y: mousePosition.y * 0.015 * (i % 2 === 0 ? -1 : 1),
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 10,
            opacity: { duration: 3, repeat: Infinity },
          }}
        >
          {keyword}
        </motion.div>
      ))}

      {/* Network connections representing system architecture */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        animate={{
          x: mousePosition.x * 0.008,
          y: mousePosition.y * 0.008,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 15 }}
      >
        {/* Central hub */}
        <circle cx="500" cy="400" r="4" fill="#ECB629" opacity="0.6" />

        {/* Connecting lines representing system architecture */}
        <path
          d="M 200 300 Q 500 200 800 300"
          fill="none"
          stroke="#ECB629"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 200 700 Q 500 800 800 700"
          fill="none"
          stroke="#ECB629"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 300 200 L 500 500 L 700 200"
          fill="none"
          stroke="#ECB629"
          strokeWidth="1"
          opacity="0.3"
        />
      </motion.svg>
    </div>
  );
};

const services = [
  {
    id: "seo-struktor",
    title: "SEO Struktor™",
    subtitle: "Нашата система за онлайн доминация",
    description:
      "Ние изграждаме вашето онлайн присъствие като крепост. Чрез прецизна структура на сайта и съдържание, което отговаря на въпросите на клиентите ви, ние ви превръщаме в авторитета, който Google показва на първо място.",
    price: "от 1980 лв. / месец",
    icon: Search,
    slug: "seo-struktor",
    benefits: [
      "Техническа SEO основа",
      "Съдържание за доверие",
      "Постоянна оптимизация",
    ],
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Нашата система за създаване на въздействащо съдържание",
    description:
      "Ние създаваме горивото за вашия растеж. Продуцираме видеа, статии и визуални материали, които не просто изглеждат добре, а разказват вашата история, демонстрират експертизата ви и изграждат общност около вашия бранд.",
    price: "от 3450 лв. / месец",
    icon: Edit,
    slug: "trendlab",
    benefits: ["Видео съдържание", "Социални канали", "Брандиране експертиза"],
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Нашата система за ускорен растеж",
    description:
      "Когато имате нужда от бързи и предвидими резултати, тази система използва платени канали, за да постави вашето послание директно пред идеалните ви клиенти – в точния момент, когато те са готови да купят.",
    price: "от 1570 лв. / месец",
    icon: Zap,
    slug: "clickstarter",
    benefits: [
      "Прецизно насочване",
      "Измерима възвръщаемост",
      "Бързо валидиране",
    ],
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Нашата система за автоматизирани връзки с клиенти",
    description:
      "Тази система създава автоматизиран процес, който превръща заинтересования посетител в лоялен клиент. Тя поддържа връзката, отговаря на въпроси и насочва към продажба, без да изисква вашето време.",
    price: "от 2750 лв. / месец",
    icon: Bot,
    slug: "clientomat",
    benefits: [
      "Автоматизирана комуникация",
      "Персонализиран клиентски път",
      "Спестяване на време",
    ],
  },
];

export default function Services() {
  const philosophyRef = useRef(null);
  const systemsRef = useRef<HTMLElement>(null);
  const isInView = useInView(philosophyRef);

  const scrollToSystems = () => {
    systemsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <ServicesJsonLd />
    <div className="min-h-screen bg-black">

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <SystemsBackground />

          <div className="container mx-auto px-6 relative z-1 pt-10 sm:pt-0">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <FadeIn
                  distance={20}
                  duration={0.6}
                  className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism border border-[#ECB629]/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                      <motion.div
                        className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      <span className="text-[#ECB629] font-bold">
                        Инженерен
                      </span>{" "}
                      подход за системи
                    </span>
                  </div>
                </FadeIn>

                <FadeIn
                  delay={0.2}
                  duration={0.8}
                  as="h1"
                  className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
                >
                  Инженерни системи за <br />
                  <span className="text-[#ECB629] relative">
                    предвидим растеж
                    <motion.div
                      className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </span>
                </FadeIn>

                <FadeIn
                  delay={0.4}
                  duration={0.8}
                  as="p"
                  className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                  Спрете да залагате на късмет. Изграждаме системи, които
                  работят предвидимо и носят измерими резултати за вашия бизнес. Вижте нашите{" "}
                  <Link href="/case-studies" className="text-[#ECB629] hover:underline cursor-pointer">
                    успешни проекти
                  </Link>{" "}
                  и{" "}
                  <Link href="/about" className="text-[#ECB629] hover:underline cursor-pointer">
                    екипа ни
                  </Link>
                  .
                </FadeIn>

                <FadeIn
                  delay={0.6}
                  duration={0.8}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                >
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <Button
                      size="lg"
                      onClick={scrollToSystems}
                      className="relative bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-4 md:px-12 md:py-6 text-base md:text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
                    >
                      Разгледай системите
                      <BarChart3 className="ml-3 h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                  </div>
                </FadeIn>

                {/* Trust indicators */}
                <FadeIn
                  delay={0.8}
                  duration={0.8}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                >
                  <div className="flex items-center justify-center gap-3 p-4 glass-card">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-medium">
                      Безплатна консултация
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 glass-card">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-medium">
                      Измерими резултати
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 glass-card">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-medium">
                      Без ангажименти
                    </span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
          ref={philosophyRef}
        >

          <div className="container mx-auto px-6 relative z-1">
            <FadeInView
              className="text-center mb-16"
              duration={0.8}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Спрете да залагате на късмет. <br />
                <span className="text-[#ECB629]">
                  Започнете да изграждате системи.
                </span>
              </h2>
            </FadeInView>

            {/* Comparison visualization */}
            <div className="max-w-6xl mx-auto mb-16">
              <FadeInView
                duration={0.8}
                delay={0.2}
              >
                <GlassCard
                  padding="lg"
                  rounded="xl"
                  borderOpacity="20"
                  className="relative overflow-hidden shadow-2xl"
                >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Chaos Side */}
                  <FadeInView
                    className="text-center"
                    direction="left"
                    duration={0.8}
                    delay={0.4}
                  >
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30 mb-4 relative">
                        <TrendingDown className="text-red-400" size={40} />
                        <motion.div
                          className="absolute inset-0 bg-red-500 rounded-full opacity-10"
                          animate={{ scale: [1.1, 1.3, 1.1] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-red-300 mb-3">
                        Залагане на късмет
                      </h3>
                    </div>

                    <div className="space-y-3 text-sm text-gray-400">
                      <p>• Непредвидими резултати</p>
                      <p>• Хаотичен подход</p>
                      <p>• Неизмерима възвращаемост</p>
                      <p>• Постоянни експерименти</p>
                    </div>
                  </FadeInView>

                  {/* Systems Side */}
                  <FadeInView
                    className="text-center"
                    direction="right"
                    duration={0.8}
                    delay={0.6}
                  >
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto bg-[#ECB629]/20 rounded-full flex items-center justify-center border border-[#ECB629]/30 mb-4 relative">
                        <BarChart3 className="text-[#ECB629]" size={40} />
                        <motion.div
                          className="absolute inset-0 bg-[#ECB629] rounded-full opacity-10"
                          animate={{ scale: [1.1, 1.3, 1.1] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#ECB629] mb-3">
                        Инженерни системи
                      </h3>
                    </div>

                    <div className="space-y-3 text-sm text-gray-300">
                      <p>• Предвидими резултати</p>
                      <p>• Структуриран процес</p>
                      <p>• Измерим растеж</p>
                      <p>• Автоматизация</p>
                    </div>
                  </FadeInView>
                </div>
                </GlassCard>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Systems Overview Section */}
        <section
          ref={systemsRef}
          className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
        >

          <div className="container mx-auto px-6 relative z-1">
            <FadeInView
              className="text-center mb-16"
              duration={0.8}
            >
              <FadeInView
                duration={0.6}
              >
                <GlassCard
                  padding="md"
                  rounded="full"
                  borderOpacity="30"
                  className="inline-flex items-center gap-3 mb-8"
                >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                    <motion.div
                      className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    <span className="text-[#ECB629] font-bold">Проверени</span>{" "}
                    системи за растеж
                  </span>
                </div>
                </GlassCard>
              </FadeInView>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Нашите <span className="text-[#ECB629]">системи за растеж</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Всяка система е проектирана да решава конкретен проблем във
                вашия бизнес и да генерира измерим растеж.
              </p>
            </FadeInView>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <FadeInView
                  key={service.id}
                  duration={0.6}
                  delay={index * 0.1}
                  className="group"
                >
                  <Magnet strength={0.4} range={120}>
                    <Card className="glass-card hover:border-[#ECB629]/50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#ECB629]/10 overflow-hidden h-full relative">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardContent className="p-8 relative z-1 h-full flex flex-col">
                      {/* Header with Icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-[#ECB629]/20 rounded-full flex items-center justify-center border border-[#ECB629]/30 group-hover:bg-[#ECB629]/30 transition-all duration-300">
                            <service.icon
                              className="text-[#ECB629] group-hover:scale-110 transition-transform duration-300"
                              size={32}
                            />
                          </div>
                          <motion.div
                            className="absolute inset-0 bg-[#ECB629] rounded-full opacity-5"
                            animate={{ scale: [1.1, 1.3, 1.1] }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 1,
                            }}
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#ECB629] transition-colors duration-300 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="grid gap-3 mb-6">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center gap-3 p-3 rounded-lg glass-card group-hover:bg-slate-700/50 transition-all duration-300"
                          >
                            <CheckCircle
                              className="text-[#ECB629] flex-shrink-0"
                              size={16}
                            />
                            <span className="text-gray-300 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing & CTA */}
                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-4 p-4 glass-card">
                          <div>
                            <div className="text-2xl font-bold text-[#ECB629]">
                              {service.price}
                            </div>
                            <div className="text-xs text-gray-400">
                              минимален период: 3 месеца
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 text-right">
                            Без ангажименти
                            <br />
                            Безплатна консултация
                          </div>
                        </div>

                        <Link href={`/services/${service.slug}`}>
                          <Button
                            className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 group/btn relative overflow-hidden"
                            size="lg"
                          >
                            <span className="relative z-1 flex items-center justify-center gap-2">
                              Научете повече
                              <service.icon
                                size={18}
                                className="group-hover/btn:scale-110 transition-transform duration-300"
                              />
                            </span>
                            {/* Button shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover/btn:animate-pulse"></div>
                          </Button>
                        </Link>
                      </div>
                    </CardContent>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ECB629] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Card>
                  </Magnet>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-1">
            <FadeInView
              duration={0.8}
            >
              {/* Urgency Badge */}
              <FadeInView
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-black/10 backdrop-blur-sm border border-black/20"
                direction="down"
                distance={50}
                duration={0.6}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm text-black font-semibold">
                    Ограничени места за 2025
                  </span>
                </div>
              </FadeInView>

              <FadeInView
                as="h2"
                className="text-4xl md:text-5xl font-bold text-black mb-6"
                duration={0.8}
                delay={0.2}
              >
                Готови за предвидим растеж?
              </FadeInView>

              <FadeInView
                as="p"
                className="text-xl text-black/80 mb-8 max-w-2xl mx-auto"
                duration={0.8}
                delay={0.3}
              >
                Ние работим прецизно и внимателно преценяваме всеки случай.                Първата консултация е процес, чрез който проверяваме дали
                клиентът е подходящ за нашия подход.
              </FadeInView>

              {/* Trust Signals */}
              <FadeInView
                className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-black/70"
                duration={0.8}
                delay={0.4}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                  </div>
                  <span>Безплатна консултация</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                  </div>
                  <span>Без ангажименти</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                  </div>
                  <span>48 часа отговор</span>
                </div>
              </FadeInView>

              <FadeInView
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                duration={0.8}
                delay={0.5}
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
                  <span>Безплатна консултация</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="tel:+359879282299"
                  className="inline-flex items-center gap-3 border-2 border-black text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-black hover:text-white"
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
                  <Phone className="w-5 h-5" />
                  <span>Обади се сега</span>
                </motion.a>
              </FadeInView>
            </FadeInView>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}