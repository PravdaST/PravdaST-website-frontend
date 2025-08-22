"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Calculator,
  Phone,
  Shield,
  Award,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react";
import Image from "next/image";
import { GlovoStepForm } from "@/components/glovo-step-form";
// import { CampaignSEO } from "@/components/campaign-seo";

export default function GlovoCalculatorLandingOld() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background - GLOVO colors */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"
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
              <span className="text-red-500">
                Спрете да плащате на Glovo 30%
              </span>
              <br />
              <span className="text-white">
                - Този ресторант в София спести
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                1,400 лв/месец
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <strong className="text-green-400">Безплатен калкулатор:</strong>{" "}
              Вижте точно колко ви струва Glovo месечно + получете
              персонализиран план за освобождаване
            </motion.p>

            {/* Hero Visual with Generated Image */}
            <motion.div
              className="mb-12 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glassmorphism border border-yellow-400/30 rounded-2xl p-6 mb-8">
                <Image
                  src="/images/glovo/Glovo_commission_comparison_visual_16961ca4.png"
                  alt="GLOVO комисионни срещу спестени пари - визуално сравнение"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                  quality={90}
                  priority
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="glassmorphism border border-red-500/30 rounded-2xl p-6">
                  <h3 className="text-red-400 font-bold text-lg mb-4">
                    Преди - Glovo фактура
                  </h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">
                      2,400 лв
                    </div>
                    <div className="text-gray-400">
                      Месечни комисионни (30%)
                    </div>
                  </div>
                </div>
                <div className="glassmorphism border border-green-400/30 rounded-2xl p-6">
                  <h3 className="text-green-400 font-bold text-lg mb-4">
                    След - Директни поръчки
                  </h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      1,000 лв
                    </div>
                    <div className="text-gray-400">Запазени приходи</div>
                  </div>
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
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 px-12 py-6 text-xl font-bold shadow-2xl shadow-yellow-400/25"
                onClick={() =>
                  document
                    .getElementById("calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
            {/* Testimonial with Image */}
            <div className="glassmorphism border border-green-400/20 rounded-2xl p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1">
                  <Image
                    src="/images/glovo/Happy_restaurant_owner_success_story_32c22d04.png"
                    alt="Щастлив собственик на ресторант - история на успех"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 768px) 100vw, 300px"
                    quality={85}
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                  <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6">
                    "Плащахме на Glovo 2,200 лв всеки месец. Сега плащаме 800 лв
                    и клиентите ни поръчват директно от нас. Най-доброто
                    решение, което взехме."
                  </blockquote>
                  <cite className="text-green-400 font-semibold">
                    - Димитър П., Кебапче София
                  </cite>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                className="glassmorphism border border-green-400/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">23</div>
                <div className="text-gray-300">
                  Ресторанта в София освободени от Glovo зависимост
                </div>
              </motion.div>

              <motion.div
                className="glassmorphism border border-yellow-400/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  1,800 лв
                </div>
                <div className="text-gray-300">
                  Средно спестени месечно от комисионни
                </div>
              </motion.div>

              <motion.div
                className="glassmorphism border border-green-400/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  85%
                </div>
                <div className="text-gray-300">
                  От клиентите сега поръчват директно
                </div>
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
              Glovo капанът, който{" "}
              <span className="text-red-500">убива вашите печалби</span>
            </h2>

            <div className="text-left glassmorphism border border-red-500/20 rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Всеки месец предавате 30% от приходите си от доставки на Glovo.
                Това са 1,500 лв, 2,000 лв, дори 3,000+ лв, които отиват
                директно в джобовете на технологична компания в Испания.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-red-400 mb-4">
                  Но ето какво е по-лошо:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">❌</span>
                    Вашите клиенти стават ТЕХНИ клиенти (никога не получавате
                    контактната им информация)
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

              <div className="text-center bg-green-400/10 border border-green-400/30 rounded-xl p-6">
                <p className="text-xl font-bold text-green-400">
                  Междувременно, вашите български конкуренти, които избягаха от
                  Glovo, запазват тези 30% като чиста печалба.
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

            {/* Solution Preview with Image */}
            <div className="mb-12">
              <div className="glassmorphism border border-green-400/30 rounded-2xl p-6 mb-8">
                <Image
                  src="/images/glovo/Direct_ordering_system_restaurant_a73620c0.png"
                  alt="Система за директни поръчки в ресторант"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mb-12">
              {[
                {
                  icon: <Calculator className="w-8 h-8" />,
                  title: "Точната сума",
                  description:
                    "която платихте на Glovo миналия месец (повечето собственици подценяват с 40%)",
                  color: "yellow-400",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Вашия персонализиран план за освобождаване",
                  description:
                    "3 стъпки за намаляване на Glovo зависимостта с 60% за 90 дни",
                  color: "green-400",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Схема на система за директни поръчки",
                  description:
                    "която се изплаща за 2 месеца със спестените комисионни",
                  color: "yellow-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`glassmorphism border border-${item.color}/20 rounded-xl p-6 text-left`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`bg-${item.color}/20 p-3 rounded-lg border border-${item.color}/30`}
                    >
                      <div className={`text-${item.color}`}>{item.icon}</div>
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold text-${item.color} mb-2`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glassmorphism border border-green-400/30 rounded-xl p-6 mb-8">
              <p className="text-lg text-green-400 font-semibold">
                Плюс: Реални примери от ресторанти в София, които намалиха Glovo
                разходите си наполовина, като същевременно увеличиха общите
                поръчки
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step Form Section */}
      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glassmorphism border border-yellow-400/30 rounded-3xl p-8">
              <GlovoStepForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Често задавани въпроси
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Ако вече съм в Glovo, мога ли да се откажа?",
                  answer:
                    "Да, повечето договори с Glovo позволяват прекратяване с 30-дневно предизвестие. Ще ви покажем как да направите преходи постепенно, без да загубите клиенти.",
                },
                {
                  question: "Колко време отнема да видя резултати?",
                  answer:
                    "Първите резултати се виждат за 2-4 седмици. Пълното освобождаване от Glovo отнема 60-90 дни, но спестяванията започват веднага.",
                },
                {
                  question: "Има ли скрити такси за калкулатора?",
                  answer:
                    "Не, калкулаторът е напълно безплатен и без ангажименти. Ще получите пълния анализ и препоръки, без да плащате нищо.",
                },
                {
                  question: "Как ще привлича клиенти без Glovo?",
                  answer:
                    "Показваме ви точната система за директни поръчки - собствен сайт, социални мрежи, SMS/WhatsApp маркетинг. Клиентите ви ще поръчват директно.",
                },
                {
                  question: "Работи ли това за малки ресторанти?",
                  answer:
                    "Особено добре работи за малки ресторанти! Малкият бизнес печели най-много от освобождаването, защото всеки лев е важен.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism border border-green-400/20 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-green-400 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
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

            <div className="glassmorphism border border-green-400/20 rounded-2xl p-8 text-left">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Здравейте, аз съм от{" "}
                <strong className="text-green-400">Pravda Agency</strong>.
                Помогнах на 47 български ресторанта да намалят разходите си за
                платформи за доставки, като същевременно увеличих директните им
                поръчки.
              </p>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Започнах това след като видях твърде много семейни ресторанти да
                плащат хиляди месечно на чужди технологични компании - пари,
                които трябва да останат в джобовете на българските семейства.
              </p>

              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
                <p className="text-xl font-bold text-yellow-400 mb-4">
                  Моята гаранция:
                </p>
                <p className="text-lg text-gray-300">
                  Ако безплатният ви анализ не ви покаже точно колко ви струва
                  Glovo + ясен план за намаляване, лично ще ви помогна да
                  оптимизирате текущия ви Glovo профил безплатно.
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
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 px-12 py-6 text-xl font-bold shadow-2xl shadow-green-400/25"
                onClick={() =>
                  document
                    .getElementById("calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Получи безплатния ми Glovo анализ СЕГА
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Simple for landing page */}
      <footer className="py-8 border-t border-green-400/20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-400 ">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://pravdast.agency/"
              className="font-bold text-yellow-400 hover:underline"
            >
              Pravda Agency
            </a>
            . Помагаме на български бизнеси да растат.
          </div>

          <div className="mt-2 text-green-400">
            contact@pravdast.agency | +359 879 282 299
          </div>
        </div>
      </footer>
    </div>
  );
}
