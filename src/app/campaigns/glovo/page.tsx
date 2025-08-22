import { Suspense } from "react";
import { GlovoHeroSection } from "@/components/glovo-hero-section";
import { FooterServer } from "@/components/footer-server";
import { GlovoStepForm } from "@/components/glovo-step-form";
import {
  CheckCircle,
  Phone,
  Shield,
  Award,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react";
import Image from "next/image";

// Loading component for Suspense
function FormLoading() {
  return (
    <div className="glassmorphism border border-yellow-400/30 rounded-2xl p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-6"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

function TestimonialLoading() {
  return (
    <div className="glassmorphism border border-green-400/20 rounded-2xl p-8">
      <div className="animate-pulse grid md:grid-cols-3 gap-6">
        <div className="h-48 bg-gray-700 rounded"></div>
        <div className="md:col-span-2 space-y-4">
          <div className="h-6 bg-gray-700 rounded"></div>
          <div className="h-16 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

// Server Component - Social Proof Section
function SocialProofSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
            <div className="glassmorphism border border-green-400/20 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">23</div>
              <div className="text-gray-300">
                Ресторанта в София освободени от Glovo зависимост
              </div>
            </div>

            <div className="glassmorphism border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">340,000 лв</div>
              <div className="text-gray-300">
                Общо спестени пари от комисионни за 2024 г.
              </div>
            </div>

            <div className="glassmorphism border border-green-400/20 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">87%</div>
              <div className="text-gray-300">
                Средно намаление на разходите за доставка
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Server Component - Problem Section  
function ProblemSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Докато вашите конкуренти запазват тези 30%...
          </h2>

          <div className="glassmorphism border border-red-500/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
              Glovo ви държи в скъпа зависимост:
            </h3>

            <ul className="text-left space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                Вземат 30% от всяка поръчка (БЕЗ ДДС = реално 36%)
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">❌</span>
                Нямате достъп до данните за вашите клиенти
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
      </div>
    </section>
  );
}

// Server Component - Solution Preview Section
function SolutionPreviewSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
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
                icon: <DollarSign className="w-8 h-8" />,
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
              <div
                key={index}
                className={`glassmorphism border border-${item.color}/30 rounded-xl p-6`}
              >
                <div className={`flex items-center justify-center mb-4 text-${item.color}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold text-${item.color} mb-3`}>
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GlovoCalculatorLandingOptimized() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Mobile optimized with CLS prevention */}
      <GlovoHeroSection />

      {/* Social Proof Section - Server rendered */}
      <Suspense fallback={<TestimonialLoading />}>
        <SocialProofSection />
      </Suspense>

      {/* Problem Section - Server rendered */}
      <ProblemSection />

      {/* Solution Preview Section - Server rendered */}
      <SolutionPreviewSection />

      {/* Calculator Form - Streamed after other content */}
      <section id="calculator" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Безплатен Glovo Калкулатор
            </h2>
            <p className="text-xl text-gray-300">
              Получете персонализиран анализ за 90 секунди
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Suspense fallback={<FormLoading />}>
              <GlovoStepForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Footer - Server Component */}
      <FooterServer />
    </div>
  );
}