import { Metadata } from "next";
import { Suspense } from "react";
import { getCampaignGlovoMetadata } from "./metadata";
import { GlovoHeroSection } from "@/components/glovo-hero-section";
import { FooterServer } from "@/components/footer-server";
import { GlovoStepForm } from "@/components/glovo-step-form";
import GlovoMetaPixel from "@/components/glovo-meta-pixel";
import { SocialProofSection } from "@/components/glovo/social-proof-section";
import { FormLoading, TestimonialLoading } from "@/components/glovo/loading-components";
import { ProblemAgitationSection } from "@/components/glovo/problem-agitation-section";
import { BenefitsOfOwnSystemSection } from "@/components/glovo/benefits-of-own-system-section";

export async function generateMetadata(): Promise<Metadata> {
  return await getCampaignGlovoMetadata();
}
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

// Loading components imported from separate file for better DRY

// Social Proof Section imported from separate component for better DRY

// Problem Agitation Section imported from separate component for better DRY

// Benefits of Own System Section imported from separate component for better DRY

// Legacy inline function (now replaced by imported component)
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-green-900/10 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              🏆 Защо собствената система е{" "}
              <span className="text-green-400">по-добра от Glovo</span>
            </h2>
            <p className="text-xl text-gray-300">
              Когато имате собствена система за поръчки:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Benefit 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-green-400/30 rounded-3xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">👑</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    ВАШИТЕ КЛИЕНТИ ОСТАВАТ ВАШИ
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Получавате техните телефони и имейли
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Можете да ги канете за специални събития
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Изграждате лични връзки с редовни клиенти
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Glovo НИКОГА не ви дава контактите им
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">
                    КОНТРОЛИРАТЕ ВСИЧКО
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Промоции когато ВИЕ решите
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Цени които ВИЕ определяте
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Брандът ви, не Glovo брандът
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Никой не може да ви "изключи"
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    ДЪЛГОСРОЧНИ ПРИХОДИ
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    База от клиенти която расте всеки месец
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    Редовни поръчки от същите хора години наред
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    Независимост от външни платформи
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    100% от печалбата остава при вас
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900/70 backdrop-blur-xl border border-green-400/20 rounded-3xl p-8">
              <div className="flex items-start">
                <span className="text-green-400 text-3xl mr-4">💬</span>
                <div>
                  <p className="text-white text-lg italic leading-relaxed mb-4">
                    "Сега нашите 280 клиента поръчват директно от нас. Знаем ги
                    по име, знаем какво обичат. Това е НАШИЯТ бизнес, не на
                    Glovo."
                  </p>
                  <div className="text-green-400 font-bold">
                    — Мария Д., пицария, Пловдив
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Testimonials Carousel */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            {
              text: "Имаме списък от 450 клиента. Когато имаме промоция, изпращаме SMS и веднага имаме поръчки.",
              author: "Васил Г., обект за бързо хранене, София",
            },
            {
              text: "Клиентите ни казват 'харесваме да поръчваме директно от вас'. Чувстваме се като истински бизнес сега.",
              author: "Росица М., семеен ресторант, Пловдив",
            },
            {
              text: "Можем да правим специални оферти за редовни клиенти. На Glovo това беше невъзможно.",
              author: "Николай С., пицария, Варна",
            },
            {
              text: "Нашата клиентска база расте с 40-50 нови хора всеки месец. Това е активът на бизнеса ни.",
              author: "Ивайло Д., механа, Бургас",
            },
            {
              text: "Сега когато клиентите имат проблем, се обаждат директно на нас. Преди - само лоши отзиви в Glovo.",
              author: "Светлана К., азиатски ресторант, Стара Загора",
            },
            {
              text: "Вече не плащаме големи комисионни на платформи. Тези пари остават при нас и ги влагаме в по-добра храна.",
              author: "Димитър Л., грил бар, Русе",
            },
          ].map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-gray-900/70 backdrop-blur-xl border border-green-400/20 rounded-2xl p-6">
                <div className="flex items-start mb-4">
                  <span className="text-green-400 text-2xl mr-3">💬</span>
                  <p className="text-white text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="text-green-400 text-xs font-medium">
                  — {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solution Preview Section
function SolutionPreviewSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ето какво ще откриете в{" "}
              <span className="text-blue-400">
                безплатния ни калкулатор за Glovo
              </span>
              :
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Точната сума която платихте на Glovo миналия месец",
                description: "(повечето собственици подценяват с 40%)",
              },
              {
                title: "Вашия персонализиран план за освобождаване",
                description:
                  "3 стъпки за намаляване на Glovo зависимостта с 60% за 90 дни",
              },
              {
                title: "Система за директни поръчки",
                description:
                  "която се изплаща за 2 месеца със спестените комисионни",
              },
              {
                title: "План за изграждане на клиентска база",
                description: "от хора които ще поръчват директно от вас",
              },
              {
                title: "Реални примери за ресторанти",
                description: "как да удвоите директните си поръчки",
              },
              {
                title: "Формула за връщане на клиенти",
                description: "превърнете еднократните Glovo поръчки в лоялни директни клиенти",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div>
                      <h4 className="text-blue-400 font-bold text-lg mb-2">
                        ✅ {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Credibility & Guarantee Section
function CredibilityGuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-900/10 via-black to-indigo-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Защо помагаме на български ресторанти да се освободят от Glovo
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Помогнахме на{" "}
              <span className="text-green-400 font-bold">
                47 български ресторанта
              </span>{" "}
              да намалят разходите си за доставка докато увеличават
              директните си поръчки.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-600/30 rounded-3xl p-8 mb-8">
            <p className="text-xl text-white leading-relaxed mb-6">
              Започнахме това след като видях твърде много ресторанти да
              плащат хиляди левове месечно на чужди компании -
              пари, които трябва да остават в България.
            </p>
          </div>

          {/* Guarantee */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-green-400/30 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                ГАРАНЦИЯ:
              </h3>
              <p className="text-xl text-white leading-relaxed">
                Ако не изградите собствена клиентска база от поне 100 директни
                клиента за 3 месеца, ще работим с вас безплатно докато го
                постигнете.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GlovoCalculatorLandingOptimized() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Enhanced with new copy */}
      <GlovoHeroSection />

      {/* Enhanced Social Proof with Bulgarian testimonials */}
      <Suspense fallback={<TestimonialLoading />}>
        <SocialProofSection />
      </Suspense>

      {/* Problem Agitation - Glovo капанът */}
      <ProblemAgitationSection />

      {/* Benefits of Own System */}
      <BenefitsOfOwnSystemSection />

      {/* Solution Preview */}
      <SolutionPreviewSection />

      {/* Enhanced Calculator CTA with Value Stack */}
      <section
        id="calculator"
        className="py-16 bg-gradient-to-br from-yellow-900/10 via-black to-green-900/10"
      >
        <div className="container mx-auto px-4">
          {/* Value Stack Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-green-400/30 rounded-3xl blur-2xl"></div>
              <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-6 px-4 py-4">
                🎁 Получете{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                  БЕЗПЛАТНИЯ си Комплект
                </span>
                <br />
                за Независимост на Ресторанта
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Вместо да се чудите колко ви струва Glovo, получете точни числа +
              пълен план за намаляване на зависимостта с 60% за 90 дни.
            </p>

            {/* Value Stack */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-400/30 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                Какво ще получите:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "✅ Персонализиран Glovo доклад за разходи - точни числа за вашия ресторант",
                  "✅ 3-стъпков план за освобождаване за вашия тип заведение",
                  "✅ Системна за директни поръчки - готова за използване",
                  "✅ Ръководство за изграждане на клиентска база - стъпка по стъпка",
                  "✅ БЕЗПЛАТНА 15-минутна стратегическа консултация - персонализирани съвети",
                  "✅ Калкулатор: колко печалба ще запазите, когато клиентите поръчват директно от вас",
                ].map((item, index) => (
                  <div key={index} className="text-white text-sm">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-yellow-400 font-bold text-xl">
                  Обща стойност: 450 лв
                </span>
                <span className="text-green-400 font-bold text-xl ml-4"> - За вас безплатно днес
                </span>
              </div>
            </div>
          </div>

          {/* Form Container - запазвам оригиналната STEP форма */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                <Suspense fallback={<FormLoading />}>
                  <GlovoStepForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility & Guarantee */}
      <CredibilityGuaranteeSection />

      {/* Footer - Server Component */}
      <FooterServer />
      
      {/* Glovo-specific Meta Pixel */}
      <GlovoMetaPixel />
    </div>
  );
}
