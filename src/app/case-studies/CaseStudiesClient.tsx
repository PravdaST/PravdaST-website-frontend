'use client'

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
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
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { caseStudies, type CaseStudy } from "./data";

export default function CaseStudiesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Всички");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  // URL normalization effect - runs on mount and when filter changes
  useEffect(() => {
    setMounted(true);
    
    // Calculate total pages for current filter
    const currentFilteredStudies = activeFilter === "Всички" 
      ? caseStudies 
      : caseStudies.filter(study => mapIndustryToCategory(study.industry) === activeFilter);
    const currentTotalPages = Math.ceil(currentFilteredStudies.length / ITEMS_PER_PAGE) || 1;
    
    // Parse page from URL params
    const pageParam = searchParams.get('page');
    let targetPage = 1; // Default to page 1
    
    if (pageParam) {
      const parsed = parseInt(pageParam, 10);
      if (!isNaN(parsed) && parsed > 0) {
        targetPage = parsed;
      }
    }
    
    // Clamp to valid range for current filter
    targetPage = Math.min(Math.max(1, targetPage), currentTotalPages);
    
    // Update state
    setCurrentPage(targetPage);
    
    // Determine if URL normalization is needed
    const currentParam = searchParams.get('page');
    const needsNormalization = 
      !currentParam ||                                    // No page param
      currentParam !== targetPage.toString() ||           // Wrong page number
      isNaN(parseInt(currentParam, 10)) ||                // Invalid number
      parseInt(currentParam, 10) <= 0 ||                  // Zero or negative
      parseInt(currentParam, 10) > currentTotalPages;     // Beyond max pages
    
    if (needsNormalization && mounted) {
      const url = new URL(window.location.href);
      url.searchParams.set('page', targetPage.toString());
      router.replace(url.pathname + url.search);
    }
  }, [searchParams, activeFilter, mounted]);

  // Update URL when page changes - always include page parameter
  const updateURL = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', page.toString());
    router.push(url.pathname + url.search);
  };

  // Define canonical categories in fixed order
  const CATEGORIES = ["Всички", "Хранителни добавки", "Ресторантьорство", "Фитнес", "Млечна индустрия", "Козметични услуги"];
  
  // Map industry variants to canonical categories
  const mapIndustryToCategory = (industry: string) => {
    if (industry === "Фитнес оборудване") return "Фитнес";
    // Map food supplements variants to canonical category
    if (["Добавки", "Спортни добавки", "Food Supplements", "Нутрицевтици", "Онлайн магазин за добавки", "Здравословно хранене", "Витамини и минерали"].includes(industry)) {
      return "Хранителни добавки";
    }
    return industry;
  };
  
  // Filter case studies based on active filter
  const filteredCaseStudies = activeFilter === "Всички" 
    ? caseStudies 
    : caseStudies.filter(study => mapIndustryToCategory(study.industry) === activeFilter);

  // Pagination calculations with validation
  const totalPages = Math.ceil(filteredCaseStudies.length / ITEMS_PER_PAGE) || 1;
  
  // Current page is already validated in the main effect
  const validatedCurrentPage = currentPage;
  
  const startIndex = (validatedCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  // Handle page change with validation
  const handlePageChange = (page: number) => {
    // Validate page number
    const validPage = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(validPage);
    updateURL(validPage);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    
  // Calculate category counts
  const getCategoryCount = (category: string) => {
    if (category === "Всички") return caseStudies.length;
    return caseStudies.filter(study => mapIndustryToCategory(study.industry) === category).length;
  };

  return (
    <div className="min-h-screen">

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

          <div className="container mx-auto px-6 relative z-1">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism"
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
                  { label: "Успешни проекта", value: `${caseStudies.length}+` },
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

        {/* Filter Pills */}
        <section className="py-10 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {CATEGORIES.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-[#ECB629] text-black shadow-lg shadow-[#ECB629]/25"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  <span className="ml-2 text-xs opacity-70">
                    ({getCategoryCount(category)})
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Results count */}
            <motion.div
              className="text-center mb-8"
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-400 text-sm">
                {filteredCaseStudies.length === 0 ? (
                  <>Показани 0-0 от 0 резултата</>
                ) : (
                  <>Показани {startIndex + 1}-{Math.min(endIndex, filteredCaseStudies.length)} от {filteredCaseStudies.length} резултата</>
                )}
                {activeFilter !== "Всички" && (
                  <span className="text-[#ECB629] ml-1">в "{activeFilter}"</span>
                )}
              </p>
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

          <div className="container mx-auto px-6 relative z-1">
            <div className="space-y-16">
              {currentCaseStudies.map((study, index) => (
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

                    <CardContent className="p-0 relative z-1">
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

                          <div className="w-full relative z-1">
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

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center gap-2 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(validatedCurrentPage - 1)}
                  disabled={validatedCurrentPage === 1}
                  className="border-slate-600 text-gray-300 hover:bg-[#ECB629] hover:text-black hover:border-[#ECB629] disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Назад
                </Button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // Show first, last, current and adjacent pages
                    const showPage =
                      page === 1 ||
                      page === totalPages ||
                      (page >= validatedCurrentPage - 1 && page <= validatedCurrentPage + 1);

                    if (!showPage) {
                      // Show ellipsis for gaps
                      if (
                        (page === validatedCurrentPage - 2 && validatedCurrentPage > 3) ||
                        (page === validatedCurrentPage + 2 && validatedCurrentPage < totalPages - 2)
                      ) {
                        return (
                          <span key={page} className="px-2 text-gray-500">
                            ...
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <Button
                        key={page}
                        variant={validatedCurrentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className={
                          validatedCurrentPage === page
                            ? "bg-[#ECB629] text-black hover:bg-[#ECB629]/80"
                            : "border-slate-600 text-gray-300 hover:bg-[#ECB629] hover:text-black hover:border-[#ECB629]"
                        }
                      >
                        {page}
                      </Button>
                    );
                  }
                )}

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(validatedCurrentPage + 1)}
                  disabled={validatedCurrentPage === totalPages}
                  className="border-slate-600 text-gray-300 hover:bg-[#ECB629] hover:text-black hover:border-[#ECB629] disabled:opacity-50"
                >
                  Напред
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629] relative overflow-hidden">
          {/* Animated Background Elements */}
          {mounted && (
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
          )}

          <div className="container mx-auto px-6 text-center relative z-1">
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
                    Остават 3 места за 2025
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
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdast.agency"
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
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  );
}