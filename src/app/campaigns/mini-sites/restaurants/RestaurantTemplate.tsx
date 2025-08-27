"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChefHat, Clock, Phone, MapPin, Star, Users, 
  Calendar, Heart, ShoppingCart, Camera, Wine,
  Utensils, Car, CreditCard, Check, Shield,
  Award, Globe, Facebook, Instagram
} from "lucide-react";
import Image from "next/image";

// Реални данни за ресторант
const restaurantData = {
  name: "Ресторант Българска Къща",
  tagline: "Автентична българска кухня в сърцето на София",
  description: "Семеен ресторант с традиции от 1995 година",
  phone: "+359 2 123 4567",
  address: "ул. Витоша 15, София 1000",
  email: "info@bulgarska-kushta.bg",
  hours: {
    weekdays: "11:00 - 23:00",
    weekend: "10:00 - 24:00"
  },
  rating: 4.8,
  reviews: 847
};

// Реално меню с български специалитети
const menuCategories = [
  {
    name: "Предястия",
    icon: "🥗",
    items: [
      { name: "Шопска салата", price: 8.50, description: "Домати, краставици, лук, сирене, зехтин" },
      { name: "Овчарска салата", price: 12.90, description: "Смесена салата с овче сирене и орехи" },
      { name: "Таратор", price: 6.00, description: "Студена супа с кисело мляко и краставици" },
      { name: "Луканка", price: 14.50, description: "Домашна суха наденица с хляб и лютеница" }
    ]
  },
  {
    name: "Основни ястия",
    icon: "🍖",
    items: [
      { name: "Мусака", price: 16.90, description: "Картофи, кайма, бешамел - семейна рецепта" },
      { name: "Каварма", price: 18.50, description: "Свинско месо с лук и специи в гювеч" },
      { name: "Пълнени чушки", price: 15.20, description: "С ориз, кайма и билки" },
      { name: "Агнешко печено", price: 22.90, description: "Бавно печено агне с розмарин и чесън" },
      { name: "Пиле по селски", price: 17.80, description: "Цяло пиле с картофи и зеленчуци" }
    ]
  },
  {
    name: "Десерти",
    icon: "🍰",
    items: [
      { name: "Баклава", price: 7.50, description: "Домашна баклава с орехи и мед" },
      { name: "Гарашки сладкиш", price: 6.80, description: "Шоколадов сладкиш с орехи" },
      { name: "Сладолед", price: 4.50, description: "Ванилия, шоколад или ягода" }
    ]
  },
  {
    name: "Напитки",
    icon: "🍷",
    items: [
      { name: "Домашна ракия", price: 4.50, description: "Сливова или гроздова - 50мл" },
      { name: "Българско вино", price: 18.00, description: "Каберне Совиньон - бутилка" },
      { name: "Айрян", price: 3.20, description: "Прясно кисело мляко" },
      { name: "Боза", price: 3.80, description: "Традиционна българска напитка" }
    ]
  }
];

const features = [
  { icon: Clock, title: "Отворени всеки ден", desc: "11:00 - 23:00 ч." },
  { icon: Car, title: "Безплатен паркинг", desc: "За нашите гости" },
  { icon: CreditCard, title: "Всички карти", desc: "Visa, Mastercard, В-pay" },
  { icon: Users, title: "До 80 места", desc: "Семейни маси и салони" },
  { icon: Wine, title: "Винена карта", desc: "100+ български вина" },
  { icon: Camera, title: "Фотосесии", desc: "Идеално за събития" }
];

const reviews = [
  {
    name: "Мария Петрова",
    rating: 5,
    text: "Най-доброто място за българска кухня в София! Мусаката е като при баба ми.",
    date: "преди 3 дни"
  },
  {
    name: "Стоян Димитров", 
    rating: 5,
    text: "Отлична храна, приятна атмосфера. Препоръчвам агнешкото!",
    date: "преди седмица"
  },
  {
    name: "Елена Георгиева",
    rating: 4,
    text: "Много вкусно, обслужването е перфектно. Ще се върнем със сигурност.",
    date: "преди 2 седмици"
  }
];

export default function RestaurantTemplate() {
  const [activeCategory, setActiveCategory] = useState("Предястия");
  const [showReservation, setShowReservation] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("2");

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const filteredMenu = menuCategories.find(cat => cat.name === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-red-900 to-orange-900">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Restaurant Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 backdrop-blur-sm rounded-full border border-amber-400/30 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <ChefHat className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">ОТ 1995 ГОДИНА</span>
              <Star className="w-4 h-4 text-amber-400" />
            </motion.div>

            {/* Restaurant Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                БЪЛГАРСКА КЪЩА
              </motion.span>
            </h1>

            {/* Tagline */}
            <motion.p 
              className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {restaurantData.tagline}
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
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">{restaurantData.rating}</span>
              <span className="text-amber-200">({restaurantData.reviews} отзива)</span>
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
                onClick={() => setShowReservation(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-bold rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                РЕЗЕРВАЦИЯ
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Utensils className="w-5 h-5 mr-2" />
                ВИЖДАНЕ НА МЕНЮТО
              </Button>
            </motion.div>

            {/* Quick Info */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex items-center gap-2 text-amber-200">
                <Clock className="w-4 h-4" />
                <span>Отворени до 23:00ч</span>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Phone className="w-4 h-4" />
                <span>{restaurantData.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <MapPin className="w-4 h-4" />
                <span>София център</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50">
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
                <feature.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
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
            <div className="inline-block mb-4 px-4 py-2 bg-amber-600/10 rounded-full">
              <span className="text-sm font-semibold text-amber-700">НАШЕТО МЕНЮ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Традиционни български вкусове
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Всички ястия се приготвят по традиционни рецепти с пресни, качествени продукти
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
                    ? "bg-amber-600 text-white shadow-lg" 
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
                    className="group flex justify-between items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-amber-300"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-black text-amber-600">
                        {item.price.toFixed(2)} лв
                      </div>
                      <motion.div
                        className="mt-2 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ShoppingCart className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-bold text-gray-900">Поръчки по телефон</p>
                      <p className="text-gray-600">{restaurantData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-bold text-gray-900">Безплатна доставка</p>
                      <p className="text-gray-600">над 25 лв в София</p>
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
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="text-gray-600">{restaurantData.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">{restaurantData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Работно време</p>
                    <p className="text-gray-600">Пон-Пет: {restaurantData.hours.weekdays}</p>
                    <p className="text-gray-600">Сб-Нд: {restaurantData.hours.weekend}</p>
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
              
              <Card className="bg-gradient-to-br from-amber-100 to-orange-100 h-80 flex items-center justify-center border-amber-200">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-900 mb-2">Интерактивна карта</p>
                  <p className="text-gray-600">GPS координати и маршрути</p>
                  <Button className="mt-4 bg-amber-600 hover:bg-amber-700">
                    <Globe className="w-4 h-4 mr-2" />
                    Отвори в Google Maps
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <AnimatePresence>
        {showReservation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowReservation(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Направете резервация</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Дата</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Час</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Изберете час</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Гости</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1">1 гост</option>
                    <option value="2">2 гости</option>
                    <option value="3">3 гости</option>
                    <option value="4">4 гости</option>
                    <option value="5">5 гости</option>
                    <option value="6+">6+ гости</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button 
                  onClick={() => setShowReservation(false)}
                  variant="outline" 
                  className="flex-1"
                >
                  Отказ
                </Button>
                <Button 
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                  disabled={!selectedDate || !selectedTime}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Резервирай
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готови за незабравимо изживяване?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Резервирайте вашата маса сега или поръчайте за вкъщи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowReservation(true)}
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            >
              РЕЗЕРВАЦИЯ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
            >
              <Phone className="w-5 h-5 mr-2" />
              ОБАДИ СЕ СЕГА
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}