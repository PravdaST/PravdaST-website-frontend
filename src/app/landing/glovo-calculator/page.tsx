"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calculator, Phone, Shield, Award, TrendingUp, DollarSign, Users } from "lucide-react";
import { useState } from "react";

export default function GlovoCalculatorLanding() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    monthlyRevenue: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#ECB629]/20 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/15 rounded-full blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-red-500">Спрете да плащате на Glovo 30%</span>
              <br />
              <span className="text-white">- Този ресторант в София спести</span>
              <br />
              <span className="bg-gradient-to-r from-[#ECB629] to-yellow-300 bg-clip-text text-transparent">
                1,400 лв/месец
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <strong className="text-[#ECB629]">Безплатен калкулатор:</strong> Вижте точно колко ви струва Glovo месечно + получете персонализиран план за освобождаване
            </motion.p>

            {/* Hero Visual */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glassmorphism border border-red-500/30 rounded-2xl p-6">
                <h3 className="text-red-400 font-bold text-lg mb-4">Преди - Glovo фактура</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">2,400 лв</div>
                  <div className="text-gray-400">Месечни комисионни (30%)</div>
                </div>
              </div>
              <div className="glassmorphism border border-[#ECB629]/30 rounded-2xl p-6">
                <h3 className="text-[#ECB629] font-bold text-lg mb-4">След - Директни поръчки</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ECB629] mb-2">1,000 лв</div>
                  <div className="text-gray-400">Запазени приходи</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-12 py-6 text-xl font-bold"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="mr-3 w-6 h-6" />
                Изчисли моите Glovo разходи (Безплатно)
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Testimonial */}
            <div className="glassmorphism border border-[#ECB629]/20 rounded-2xl p-8 mb-12">
              <div className="text-center">
                <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6">
                  "Плащахме на Glovo 2,200 лв всеки месец. Сега плащаме 800 лв и клиентите ни поръчват директно от нас. Най-доброто решение, което взехме."
                </blockquote>
                <cite className="text-[#ECB629] font-semibold">
                  - Димитър П., Кебапче София
                </cite>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                className="glassmorphism border border-[#ECB629]/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#ECB629]" />
                </div>
                <div className="text-2xl font-bold text-[#ECB629] mb-2">23</div>
                <div className="text-gray-300">Ресторанта в София освободени от Glovo зависимост</div>
              </motion.div>

              <motion.div
                className="glassmorphism border border-[#ECB629]/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-[#ECB629]" />
                </div>
                <div className="text-2xl font-bold text-[#ECB629] mb-2">1,800 лв</div>
                <div className="text-gray-300">Средно спестени месечно от комисионни</div>
              </motion.div>

              <motion.div
                className="glassmorphism border border-[#ECB629]/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#ECB629]" />
                </div>
                <div className="text-2xl font-bold text-[#ECB629] mb-2">85%</div>
                <div className="text-gray-300">От клиентите сега поръчват директно</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Glovo капанът, който <span className="text-red-500">убива вашите печалби</span>
            </h2>

            <div className="text-left glassmorphism border border-red-500/20 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Всеки месец предавате 30% от приходите си от доставки на Glovo. 
                Това са 1,500 лв, 2,000 лв, дори 3,000+ лв, които отиват директно в джобовете на технологична компания в Испания.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Но ето какво е по-лошо:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">❌</span>
                    Вашите клиенти стават ТЕХНИ клиенти (никога не получавате контактната им информация)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">❌</span>
                    Те контролират вашите цени, промоции и бранд
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">❌</span>
                    Една лоша Glovo рецензия руши рейтинга ви в цялата платформа
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">❌</span>
                    Конкурирате с 50+ ресторанта в същото приложение
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">❌</span>
                    Могат да променят комисионните всеки момент (и го правят)
                  </li>
                </ul>
              </div>

              <div className="text-center bg-[#ECB629]/10 border border-[#ECB629]/30 rounded-xl p-6">
                <p className="text-xl font-bold text-[#ECB629]">
                  Междувременно, вашите български конкуренти, които избягаха от Glovo, 
                  запазват тези 30% като чиста печалба.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Preview Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ето какво ще откриете в безплатния Glovo калкулатор:
            </h2>

            <div className="grid md:grid-cols-1 gap-6 mb-12">
              {[
                {
                  icon: <Calculator className="w-8 h-8" />,
                  title: "Точната сума",
                  description: "която платихте на Glovo миналия месец (повечето собственици подценяват с 40%)"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Вашия персонализиран план за освобождаване",
                  description: "3 стъпки за намаляване на Glovo зависимостта с 60% за 90 дни"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Схема на система за директни поръчки",
                  description: "която се изплаща за 2 месеца със спестените комисионни"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism border border-[#ECB629]/20 rounded-xl p-6 text-left"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#ECB629]/20 p-3 rounded-lg border border-[#ECB629]/30">
                      <div className="text-[#ECB629]">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#ECB629] mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glassmorphism border border-[#ECB629]/30 rounded-xl p-6 mb-8">
              <p className="text-lg text-[#ECB629] font-semibold">
                Плюс: Реални примери от ресторанти в София, които намалиха Glovo разходите си наполовина, 
                като същевременно увеличиха общите поръчки
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glassmorphism border border-[#ECB629]/30 rounded-3xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Получете безплатния си Glovo анализ
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#ECB629] font-semibold mb-2" htmlFor="restaurantName">
                    Име на ресторанта
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    className="w-full px-4 py-3 bg-black/50 border border-[#ECB629]/30 rounded-lg text-white focus:border-[#ECB629] focus:outline-none"
                    placeholder="напр. Пица Маестро"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#ECB629] font-semibold mb-2" htmlFor="monthlyRevenue">
                    Месечни приходи от доставки (лв)
                  </label>
                  <input
                    type="number"
                    id="monthlyRevenue"
                    className="w-full px-4 py-3 bg-black/50 border border-[#ECB629]/30 rounded-lg text-white focus:border-[#ECB629] focus:outline-none"
                    placeholder="напр. 8000"
                    value={formData.monthlyRevenue}
                    onChange={(e) => setFormData({...formData, monthlyRevenue: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#ECB629] font-semibold mb-2" htmlFor="phone">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-black/50 border border-[#ECB629]/30 rounded-lg text-white focus:border-[#ECB629] focus:outline-none"
                    placeholder="0888 123 456"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#ECB629] font-semibold mb-2" htmlFor="email">
                    Имейл
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-[#ECB629]/30 rounded-lg text-white focus:border-[#ECB629] focus:outline-none"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 py-4 text-xl font-bold"
                >
                  Изчисли моите спестявания СЕГА
                </Button>
              </form>

              {/* Trust Signals */}
              <div className="mt-8 space-y-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-[#ECB629]">
                  <Shield className="w-5 h-5" />
                  <span>100% безплатен анализ - не се изисква плащане</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[#ECB629]">
                  <Phone className="w-5 h-5" />
                  <span>Резултатите се доставят на телефона ви за 24 часа</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[#ECB629]">
                  <Award className="w-5 h-5" />
                  <span>🇧🇬 Създадено специално за български ресторанти</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About/Credibility Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Защо помагам на български ресторанти да избягат от Glovo
            </h2>

            <div className="glassmorphism border border-[#ECB629]/20 rounded-2xl p-8 text-left">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Здравейте, аз съм от <strong className="text-[#ECB629]">Pravda Agency</strong>. 
                Помогнах на 47 български ресторанта да намалят разходите си за платформи за доставки, 
                като същевременно увеличих директните им поръчки.
              </p>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Започнах това след като видях твърде много семейни ресторанти да плащат хиляди месечно 
                на чужди технологични компании - пари, които трябва да останат в джобовете на българските семейства.
              </p>

              <div className="bg-[#ECB629]/10 border border-[#ECB629]/30 rounded-xl p-6">
                <p className="text-xl font-bold text-[#ECB629] mb-4">Моята гаранция:</p>
                <p className="text-lg text-gray-300">
                  Ако безплатният ви анализ не ви покаже точно колко ви струва Glovo + ясен план за намаляване, 
                  лично ще ви помогна да оптимизирате текущия ви Glovo профил безплатно.
                </p>
              </div>
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-12 py-6 text-xl font-bold"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получи безплатния ми Glovo анализ СЕГА
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Simple for landing page */}
      <footer className="py-8 border-t border-[#ECB629]/20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-400">
            © 2024 Pravda Agency. Помагаме на български бизнеси да растат.
          </div>
          <div className="mt-2 text-[#ECB629]">
            contact@pravdagency.eu | +359 879 282 299
          </div>
        </div>
      </footer>
    </div>
  );
}