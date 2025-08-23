"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Users,
  Car,
  ShoppingBag,
  Dumbbell,
  Briefcase,
  Pizza,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";

// Category definitions
const categories = [
  { id: "all", name: "Всички кампании", icon: <Target className="w-4 h-4" /> },
  { id: "fast-food", name: "Fast Food", icon: <Pizza className="w-4 h-4" /> },
  {
    id: "restaurants",
    name: "Ресторанти",
    icon: <Target className="w-4 h-4" />,
  },
  { id: "auto", name: "Автосервизи", icon: <Car className="w-4 h-4" /> },
  {
    id: "ecommerce",
    name: "Онлайн магазини",
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  {
    id: "fitness",
    name: "Фитнес & Здраве",
    icon: <Dumbbell className="w-4 h-4" />,
  },
  { id: "services", name: "Услуги", icon: <Briefcase className="w-4 h-4" /> },
];

// Real Кампании data
const landingPages = [
  {
    id: 1,
    title: "Glovo – реален кейс с цифри",
    description:
      "Истинска история: помогнахме на 23 ресторанта в София да намалят Glovo комисионните си с 1,800 лв месечно.",
    image: "/images/glovo-landing-preview.svg",
    category: "restaurants",
    categoryDisplay: "Ресторанти",
    icon: <Target className="w-6 h-6" />,
    href: "/campaigns/glovo",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Fast Food Profit Maximizer",
    description:
      "За собствениците на fast food, които искат повече поръчки и по-големи печалби без да наемат още хора.",
    image: "/images/fast-food-preview.svg",
    category: "fast-food",
    categoryDisplay: "Fast Food",
    icon: <Pizza className="w-6 h-6" />,
    href: "#",
    comingSoon: true,
  },
  {
    id: 3,
    title: "Auto Service Lead Generator",
    description:
      "Автосервизи постоянно търсят клиенти. Тази страница ги привлича и ги превръща в записани часове.",
    image: "/images/auto-service-preview.svg",
    category: "auto",
    categoryDisplay: "Автосервизи",
    icon: <Car className="w-6 h-6" />,
    href: "#",
    comingSoon: true,
  },
  {
    id: 4,
    title: "E-commerce Conversion Booster",
    description:
      "За онлайн магазини, които искат повече продажби от същия трафик. Работи на психологията на купуването.",
    image: "/images/ecommerce-preview.svg",
    category: "ecommerce",
    categoryDisplay: "Онлайн магазини",
    icon: <ShoppingBag className="w-6 h-6" />,
    href: "#",
    comingSoon: true,
  },
  {
    id: 5,
    title: "Fitness Membership Generator",
    description:
      "Фитнес центровете се борят за членове. Тази страница превръща посетителите в абонати.",
    image: "/images/fitness-preview.svg",
    category: "fitness",
    categoryDisplay: "Фитнес & Здраве",
    icon: <Dumbbell className="w-6 h-6" />,
    href: "#",
    comingSoon: true,
  },
  {
    id: 6,
    title: "Service Business Amplifier",
    description:
      "За всякакви услуги - от почистване до адвокати. Адаптира се лесно за всеки бизнес.",
    image: "/images/services-preview.svg",
    category: "services",
    categoryDisplay: "Услуги",
    icon: <Briefcase className="w-6 h-6" />,
    href: "#",
    comingSoon: true,
  },
];

export default function CampaignsClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter Кампании based on selected category
  const filteredPages =
    selectedCategory === "all"
      ? landingPages
      : landingPages.filter((page) => page.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
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
                Ето какво правим
              </span>
              <br />
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Всяка от тези страници е направена с една цел - да донесе
              клиенти на бизнеса. Не просто красиви дизайни, а реални
              инструменти за повече продажби.
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
                Покажи ми
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#ECB629]/30 text-[#ECB629] hover:bg-[#ECB629]/10 px-8 py-4 text-lg w-full sm:w-auto"
                >
                  Искам моя собствена
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Кампании Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Какво имаме готово?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Вместо да почваме от нула, имаме готови страници, които вече работят.
              Всяка е тествана с истински клиенти и дава резултат.
            </p>

            {/* Category Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                    ${
                      selectedCategory === category.id
                        ? "bg-[#ECB629] text-black shadow-lg shadow-[#ECB629]/25"
                        : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                    }
                  `}
                >
                  <span
                    className={
                      selectedCategory === category.id
                        ? "text-black"
                        : "text-[#ECB629]"
                    }
                  >
                    {category.icon}
                  </span>
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Results count */}
            <motion.p
              key={selectedCategory} // Force re-render on category change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 text-sm"
            >
              {filteredPages.length}{" "}
              {filteredPages.length === 1 ? "кампания" : "кампании"}
              {selectedCategory !== "all" &&
                ` в категория "${categories.find((c) => c.id === selectedCategory)?.name}"`}
            </motion.p>
          </motion.div>

          <motion.div
            key={selectedCategory} // Re-render grid when category changes
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {filteredPages.map((page, index) => (
              <motion.div
                key={`${selectedCategory}-${page.id}`} // Unique key for category + page
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative"
              >
                <GlassCard
                  padding="lg"
                  rounded="lg"
                  hoverBorder={true}
                  borderOpacity="20"
                  hoverShadow={true}
                  className="h-full"
                >
                  {/* Coming Soon Badge */}
                  {page.comingSoon && (
                    <div className="absolute top-4 right-4 bg-[#ECB629] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Скоро
                    </div>
                  )}

                  {/* Category and Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-[#ECB629]/10 rounded-lg border border-[#ECB629]/20">
                      <div className="text-[#ECB629]">{page.icon}</div>
                    </div>
                    <span className="text-[#ECB629] text-sm font-semibold uppercase tracking-wider">
                      {page.categoryDisplay}
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
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state when no results */}
          {filteredPages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Няма кампании в тази категория
              </h3>
              <p className="text-gray-400 mb-6">
                Опитайте друга категория или изберете "Всички кампании"
              </p>
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="outline"
                className="border-[#ECB629]/30 text-[#ECB629] hover:bg-[#ECB629]/10"
              >
                Покажи всички кампании
              </Button>
            </motion.div>
          )}
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
              А ако искам нещо специално?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Никой проблем! Можем да направим страница точно за вашия бизнес.
              Говорим първо какво ви трябва, после я правим.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-4 text-lg font-semibold"
                >
                  Да поговорим
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#ECB629]/30 text-[#ECB629] hover:bg-[#ECB629]/10 px-8 py-4 text-lg"
                >
                  Какво правим?
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}