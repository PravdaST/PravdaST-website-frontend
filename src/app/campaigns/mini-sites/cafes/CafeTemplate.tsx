"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Coffee, Clock, Phone, MapPin, Star, Users, 
  Heart, ShoppingCart, Camera, Wifi,
  Car, CreditCard, Check, Shield,
  Award, Globe, Facebook, Instagram, Laptop
} from "lucide-react";

// Данни за кафето
const cafeData = {
  name: "Кафе Аромат",
  tagline: "Където всяка чаша разказва история",
  description: "Specialty кафе и уютна атмосфера от 2018 година",
  phone: "+359 2 987 6543",
  address: "бул. Витоша 42, София 1000", 
  email: "hello@cafe-aromat.bg",
  hours: {
    weekdays: "07:00 - 22:00",
    weekend: "08:00 - 23:00"
  },
  rating: 4.9,
  reviews: 523
};

// Меню с кафе специалитети
const menuCategories = [
  {
    name: "Кафе",
    icon: "☕",
    items: [
      { name: "Еспресо", price: 2.80, description: "Италиански еспресо с богат вкус" },
      { name: "Капучино", price: 4.20, description: "Класическо капучино с млечна пяна" },
      { name: "Плоско бяло", price: 4.50, description: "Specialty кафе с микропяна" },
      { name: "Кафе лате", price: 4.80, description: "Нежно кафе с парно мляко" },
      { name: "Американо", price: 3.50, description: "Разреден еспресо с топла вода" },
      { name: "Mocha", price: 5.20, description: "Кафе с шоколад и взбита сметана" }
    ]
  },
  {
    name: "Студени напитки",
    icon: "🧊",
    items: [
      { name: "Iced latte", price: 5.50, description: "Студен лате с лед и сладка сметана" },
      { name: "Фрапе", price: 4.80, description: "Гръцко ледено кафе с пяна" },
      { name: "Студен чай", price: 3.90, description: "Освежаващ студен чай с лимон" },
      { name: "Лимонада", price: 4.20, description: "Домашна лимонада с мента" },
      { name: "Смути", price: 6.50, description: "Плодов смути от сезонни плодове" }
    ]
  },
  {
    name: "Закуски",
    icon: "🥐",
    items: [
      { name: "Круасан", price: 3.50, description: "Свеж френски круасан с масло" },
      { name: "Круасан с шунка", price: 5.80, description: "Круасан с качествена шунка и сирене" },
      { name: "Тост", price: 4.20, description: "Препечен хляб с домати и босилек" },
      { name: "Сандвич", price: 7.50, description: "Домашен сандвич с пилешко филе" },
      { name: "Гранола", price: 6.80, description: "Домашна гранола с йогурт и мед" }
    ]
  },
  {
    name: "Десерти",
    icon: "🍰",
    items: [
      { name: "Чийзкейк", price: 6.90, description: "Кремообразен чийзкейк с горски плодове" },
      { name: "Тирамису", price: 7.50, description: "Класически италиански тирамису" },
      { name: "Браунис", price: 5.80, description: "Шоколадов браунис с орехи" },
      { name: "Мъфин", price: 4.20, description: "Домашен мъфин с черешови" },
      { name: "Еклер", price: 3.90, description: "Френски еклер с ванилов крем" }
    ]
  }
];

const features = [
  { icon: Wifi, title: "Безплатен WiFi", desc: "Високоскоростен интернет" },
  { icon: Laptop, title: "Work-friendly", desc: "Контакти за лаптопи" },
  { icon: Car, title: "Паркинг", desc: "Удобно паркиране" },
  { icon: CreditCard, title: "Всички карти", desc: "Visa, Mastercard" },
  { icon: Coffee, title: "Specialty кафе", desc: "Arabica beans" },
  { icon: Camera, title: "Insta-worthy", desc: "Перфектно за снимки" }
];

const reviews = [
  {
    name: "Анна Василева",
    rating: 5,
    text: "Най-доброто кафе в София! Атмосферата е невероятна, а еспресото - перфектно.",
    date: "преди 2 дни"
  },
  {
    name: "Петър Христов", 
    rating: 5,
    text: "Работя тук всяка седмица. Отлично WiFi, вкусно кафе и тихо място.",
    date: "преди седмица"
  },
  {
    name: "Мила Георгиева",
    rating: 5,
    text: "Капучиното им е изкуство! Десертите са прекрасни. Препоръчвам топло!",
    date: "преди 2 седмици"
  }
];

export default function CafeTemplate() {
  const [activeCategory, setActiveCategory] = useState("Кафе");
  const [showReservation, setShowReservation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMenu = menuCategories.find(cat => cat.name === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-yellow-800 to-orange-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Coffee Bean Pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cafe Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Coffee className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">SPECIALTY COFFEE</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Cafe Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <motion.span 
                className="block text-yellow-100"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                КАФЕ АРОМАТ
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.p 
              className="text-xl md:text-2xl text-yellow-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {cafeData.tagline}
            </motion.p>

            {/* Rating */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">{cafeData.rating}</span>
              <span className="text-yellow-200">({cafeData.reviews} отзива)</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 text-lg font-bold rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                <Coffee className="w-5 h-5 mr-2" />
                РАЗГЛЕДАЙ МЕНЮТО
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300"
                onClick={() => setShowReservation(true)}
              >
                <Heart className="w-5 h-5 mr-2" />
                РЕЗЕРВИРАЙ МАСА
              </Button>
            </motion.div>

            {/* Quick Info */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex items-center gap-2 text-yellow-200">
                <Clock className="w-4 h-4" />
                <span>Отворени до 22:00ч</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-200">
                <Wifi className="w-4 h-4" />
                <span>Безплатен WiFi</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-200">
                <MapPin className="w-4 h-4" />
                <span>Витоша център</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-600/10 rounded-full">
              <span className="text-sm font-semibold text-yellow-700">НАШЕТО МЕНЮ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Кафе, създадено с любов
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Всяко кафе е прясно смляно и приготвено от опитни бариста
            </p>
          </motion.div>

          {/* Menu Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {menuCategories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.name 
                    ? "bg-yellow-600 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white border-gray-200 shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
                <span className="text-3xl">{filteredMenu?.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{activeCategory}</h3>
              </div>

              <div className="space-y-4">
                {filteredMenu?.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group flex justify-between items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-yellow-300"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-yellow-600 transition-colors mb-2">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-black text-yellow-600">
                        {item.price.toFixed(2)} лв
                      </div>
                      <motion.div
                        className="mt-2 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ShoppingCart className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-yellow-600" />
                    <div>
                      <p className="font-bold text-gray-900">Поръчки по телефон</p>
                      <p className="text-gray-600">{cafeData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-bold text-gray-900">Безплатен WiFi</p>
                      <p className="text-gray-600">Високоскоростен интернет</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Какво казват нашите гости
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Контакти и информация</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="text-gray-600">{cafeData.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">{cafeData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Работно време</p>
                    <p className="text-gray-600">Пон-Пет: {cafeData.hours.weekdays}</p>
                    <p className="text-gray-600">Сб-Нд: {cafeData.hours.weekend}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="font-semibold text-gray-900 mb-4">Последвайте ни</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="p-3">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="p-3">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Как да ни намерите</h2>
              
              <Card className="bg-gradient-to-br from-yellow-100 to-amber-100 h-80 flex items-center justify-center border-yellow-200">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-900 mb-2">Интерактивна карта</p>
                  <p className="text-gray-600 mb-4">GPS координати и маршрути</p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700">
                    <Globe className="w-4 h-4 mr-2" />
                    Отвори в Google Maps
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готови за перфектното кафе?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Заповядайте на кафе или си поръчайте за вкъщи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            >
              <Coffee className="w-5 h-5 mr-2" />
              ПОРЪЧАЙ СЕГА
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
            >
              <Phone className="w-5 h-5 mr-2" />
              ОБАДИ СЕ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}