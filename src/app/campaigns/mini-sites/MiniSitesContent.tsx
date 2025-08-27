"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Store, Coffee, Wrench, Heart, 
  Clock, Phone, MapPin, Menu as MenuIcon, 
  Star, Check, AlertCircle, ChevronRight,
  TrendingUp, Users, Timer, Sparkles,
  Rocket, Award, Target, Eye, BarChart3,
  ShoppingCart, Globe, Shield, Zap, ArrowRight,
  ChefHat, Scissors, Briefcase, Smartphone
} from "lucide-react";
import MiniSitesForm from "./MiniSitesForm";
import Script from "next/script";

// Demo menu data
type MenuItem = { name: string; price: number; note?: string };
type MenuCategory = { name: string; icon: string; items: MenuItem[] };

const demoMenu: MenuCategory[] = [
  { 
    name: "Пици", 
    icon: "🍕",
    items: [
      { name: "Маргарита", price: 8.9, note: "Домат, моцарела, босилек" },
      { name: "Пеперони", price: 10.5, note: "Домат, моцарела, пеперони" },
      { name: "Капричоза", price: 11.9, note: "Домат, моцарела, шунка, гъби" }
    ]
  },
  { 
    name: "Салати",
    icon: "🥗", 
    items: [
      { name: "Шопска", price: 6.5, note: "Домати, краставици, лук, сирене" },
      { name: "Цезар", price: 9.9, note: "Айсберг, пилешко, крутони, пармезан" },
      { name: "Гръцка", price: 7.9, note: "Домати, краставици, маслини, фета" }
    ]
  },
  {
    name: "Напитки",
    icon: "🥤",
    items: [
      { name: "Кока-Кола", price: 2.5, note: "330мл" },
      { name: "Фреш портокал", price: 4.5, note: "300мл" },
      { name: "Кафе еспресо", price: 2.2 }
    ]
  }
];

// Business categories with demo images
const businessCategories = [
  { 
    id: "restaurants", 
    name: "Ресторанти", 
    icon: ChefHat,
    examples: "Пицарии, таверни, барове",
    benefits: "+40% онлайн поръчки",
    color: "from-orange-600 to-red-600"
  },
  { 
    id: "cafes", 
    name: "Кафенета", 
    icon: Coffee,
    examples: "Бургер, дюнер, кафе",
    benefits: "-2 часа дневно на телефона",
    color: "from-amber-600 to-orange-600"
  },
  { 
    id: "services", 
    name: "Услуги", 
    icon: Briefcase,
    examples: "Автосервизи, адвокати",
    benefits: "+35% нови клиенти",
    color: "from-blue-600 to-cyan-600"
  },
  { 
    id: "beauty", 
    name: "Красота", 
    icon: Scissors,
    examples: "Фризьори, козметика",
    benefits: "+50% резервации",
    color: "from-pink-600 to-purple-600"
  }
];

export default function MiniSitesContent() {
  const [selectedCategory, setSelectedCategory] = useState("restaurants");
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeMenuFilter, setActiveMenuFilter] = useState("all");
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: '/campaigns/mini-sites',
        page_title: 'Mini-Sites Campaign'
      });
    }

    // Meta Pixel PageView
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
    
    // Mouse follow effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTAClick = (type: 'primary' | 'secondary') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mini_hero_cta_click', {
        cta: type
      });
    }

    if (type === 'primary') {
      setShowForm(true);
      setTimeout(() => {
        document.getElementById('mini-sites-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuInteraction = (category: string, item?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'mini_menu_interaction', {
        category,
        item: item || 'category_expand'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Modern Hero Section with Video Background Effect */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                              linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-blue-600/20 rounded-full border border-white/10 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">BUSINESS ENGINEERING</span>
              <Sparkles className="w-4 h-4 text-blue-500" />
            </motion.div>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                MINI-SITES
              </motion.span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-blue-500"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                ЗА ТВОЯ БИЗНЕС
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Професионален one-page сайт за 24 часа.
              <span className="block mt-2 text-white font-semibold">
                Меню, контакти, Google карта — всичко готово.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                size="lg"
                onClick={() => handleCTAClick('primary')}
                className="group relative px-8 py-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ЗАПОЧНИ СЕГА
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleCTAClick('secondary')}
                className="px-8 py-6 bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                ВИЖ ДЕМО
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex items-center justify-center gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Гарантирано за 24ч</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Светкавично бързо</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Premium качество</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: "500+", label: "Доволни клиенти", icon: Users },
              { value: "24ч", label: "Време за изработка", icon: Clock },
              { value: "40%", label: "Ръст на продажбите", icon: TrendingUp },
              { value: "4.9⭐", label: "Рейтинг", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-orange-500" />
                <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section with Modern Design */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-red-950/50 to-red-900/20 border-red-500/20 p-8 backdrop-blur-sm">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-red-400">БЕЗ САЙТ = БЕЗ КЛИЕНТИ</h2>
                <ul className="space-y-4">
                  {[
                    "85% търсят в Google преди да дойдат",
                    "Губите по 20+ клиента на седмица",
                    "Конкуренцията ви изпреварва онлайн",
                    "Клиентите не ви намират в мрежата"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-green-950/50 to-green-900/20 border-green-500/20 p-8 backdrop-blur-sm">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-green-400">MINI-SITE = УСПЕХ</h2>
                <ul className="space-y-4">
                  {[
                    "Професионален вид за 299лв",
                    "Готов за 24 часа гарантирано",
                    "#1 в Google за вашия квартал",
                    "Автоматични резервации 24/7"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Categories with 3D Cards */}
      <section id="categories" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
                ИЗБЕРИ ТВОЯ БИЗНЕС
              </span>
            </h2>
            <p className="text-xl text-gray-400">Специализирани решения за всяка индустрия</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`relative group cursor-pointer overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 ${
                    selectedCategory === category.id ? 'ring-2 ring-orange-500' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="p-8 relative z-10">
                    <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{category.examples}</p>
                    
                    <div className="flex items-center gap-2 text-green-400 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">{category.benefits}</span>
                    </div>
                  </div>
                  
                  {selectedCategory === category.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-blue-500"
                      layoutId="categorySelector"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Modern Menu Section - 2025 Design */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 rounded-full">
              <span className="text-sm font-semibold text-orange-400">ИНТЕРАКТИВНО МЕНЮ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Лесно и бързо поръчване
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Клиентите виждат менюто, избират и поръчват директно от сайта
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { id: "all", name: "Всички", icon: MenuIcon },
              { id: "Пици", name: "Пици", icon: ChefHat },
              { id: "Салати", name: "Салати", icon: Heart },
              { id: "Напитки", name: "Напитки", icon: Coffee }
            ].map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeMenuFilter === filter.id 
                    ? "bg-orange-500 text-white shadow-lg" 
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
                }`}
                onClick={() => {
                  setActiveMenuFilter(filter.id);
                  handleMenuInteraction(filter.name);
                }}
              >
                <filter.icon className="w-4 h-4" />
                <span className="font-medium">{filter.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items - Simple Clean Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              {demoMenu
                .filter(category => activeMenuFilter === "all" || category.name === activeMenuFilter)
                .map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50"
                >
                  {/* Category Header - Simple */}
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800/50">
                    {category.name === "Пици" && <ChefHat className="w-6 h-6 text-orange-500" />}
                    {category.name === "Салати" && <Heart className="w-6 h-6 text-green-500" />}
                    {category.name === "Напитки" && <Coffee className="w-6 h-6 text-blue-500" />}
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>

                  {/* Menu Items - Clean Cards */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="group bg-gray-800/30 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg border border-gray-800/30 hover:border-gray-700"
                        onClick={() => handleMenuInteraction(category.name, item.name)}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                              {item.name}
                            </h4>
                            {item.note && (
                              <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-orange-500">
                              {item.price.toFixed(2)} лв
                            </span>
                            <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Check className="w-4 h-4 text-orange-500" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simple Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { icon: ShoppingCart, label: "Онлайн поръчки 24/7", color: "text-green-500" },
                { icon: Clock, label: "Доставка за 30 мин", color: "text-blue-500" },
                { icon: Star, label: "Рейтинг 4.9/5", color: "text-yellow-500" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/30 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    <span className="text-white font-medium">{feature.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid with Glassmorphism */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                КАКВО ПОЛУЧАВАТЕ
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "SEO оптимизация", desc: "#1 в Google за квартала" },
              { icon: Smartphone, title: "Mobile First", desc: "Перфектен на всички устройства" },
              { icon: Clock, title: "24 часа", desc: "Гарантирано бързо изпълнение" },
              { icon: MapPin, title: "Google карта", desc: "Лесно намиране на локацията" },
              { icon: Phone, title: "Click-to-call", desc: "Директни обаждания с 1 клик" },
              { icon: BarChart3, title: "Анализи", desc: "Следете посещенията и поръчките" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 p-6">
                  <feature.icon className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Premium Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                ИНВЕСТИЦИЯ В УСПЕХА
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Pack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="text-orange-500 font-semibold mb-2">STARTER PACK</div>
                  <div className="text-5xl font-black mb-4">299<span className="text-2xl">лв</span></div>
                  <div className="text-gray-400 mb-8">Еднократно плащане</div>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      "Професионален дизайн",
                      "Интерактивно меню",
                      "Google карта интеграция",
                      "Mobile оптимизация",
                      "SEO настройки",
                      "SSL сертификат"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 font-bold py-6"
                    onClick={() => handleCTAClick('primary')}
                  >
                    Започни сега
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Maintenance */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="text-blue-500 font-semibold mb-2">MAINTENANCE</div>
                  <div className="text-5xl font-black mb-4">49<span className="text-2xl">лв/мес</span></div>
                  <div className="text-gray-400 mb-8">Опционална поддръжка</div>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      "Промени в менюто",
                      "Актуализации на цени",
                      "Сезонни оферти",
                      "Backup на данните",
                      "Техническа поддръжка",
                      "Месечни отчети"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-blue-500/30 hover:bg-blue-500/10 font-bold py-6"
                    onClick={() => handleCTAClick('primary')}
                  >
                    Добави поддръжка
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/20 p-8">
              <Rocket className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">ROI калкулатор</h3>
              <p className="text-gray-400 mb-6">
                При средно 3 нови клиента на ден от сайта и средна поръчка 15лв:
              </p>
              <div className="text-4xl font-black text-green-400">
                1350лв/месец
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Възвръщаемост на инвестицията за под 7 дни
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with Modern Accordion */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ЧЕСТИ ВЪПРОСИ
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Колко време отнема изработката?",
                  a: "Гарантираме готов сайт за 24 часа след одобрение на информацията."
                },
                {
                  q: "Какво включва цената от 299лв?",
                  a: "Пълна изработка на сайта, дизайн, програмиране, SEO оптимизация, SSL сертификат и първоначална настройка."
                },
                {
                  q: "Мога ли сам да променям менюто?",
                  a: "Да, получавате лесна админ система. Или можете да ползвате нашата поддръжка за 49лв/месец."
                },
                {
                  q: "Ще излизам ли #1 в Google?",
                  a: "Оптимизираме сайта за локално SEO. В рамките на 2-4 седмици ще сте в топ 3 за вашия квартал."
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-white/5 transition-colors">
                    <span className="text-left font-semibold">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      {showForm && (
        <section id="mini-sites-form" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MiniSitesForm />
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA with Urgency */}
      <section className="py-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-xl border-orange-500/30 p-12 text-center overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Не чакай конкуренцията да те изпревари
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Всеки ден без сайт = загубени клиенти. 
                Започни сега и виж резултати още утре!
              </p>
              
              <Button
                size="lg"
                onClick={() => handleCTAClick('primary')}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-xl font-bold px-12 py-8 rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="w-6 h-6 mr-3" />
                СТАРТИРАЙ СЕГА — 299лв
              </Button>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-orange-500" />
                  <span>Готово за 24ч</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% гаранция</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>Premium качество</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Колко време отнема изработката на Mini-Site?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Гарантираме готов сайт за 24 часа след одобрение на информацията."
              }
            },
            {
              "@type": "Question", 
              "name": "Какво включва цената от 299лв?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Пълна изработка на сайта, дизайн, програмиране, SEO оптимизация, SSL сертификат и първоначална настройка."
              }
            },
            {
              "@type": "Question",
              "name": "Мога ли сам да променям менюто?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да, получавате лесна админ система. Или можете да ползвате нашата поддръжка за 49лв/месец."
              }
            }
          ]
        })}
      </Script>
    </div>
  );
}