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
import { GlovoStickyCTA } from "@/components/glovo-sticky-cta";
import { Squares } from "@/components/ui/squares";

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

// Solution Preview Section
function SolutionPreviewSection() {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Как изглежда <span className="text-orange-400">вашата собствена система</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ето какво получавате за 48 часа:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Glovo */}
            <div className="relative group">
              <div className="relative bg-black border border-red-400/50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Преди (с Glovo)</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li>• Плащате 30% комисионна</li>
                  <li>• Нямате контакти на клиентите</li>
                  <li>• Зависите от техните правила</li>
                  <li>• Конкурирате с други ресторанти</li>
                  <li>• Нямате контрол над цените</li>
                </ul>
              </div>
            </div>

            {/* After - Own System */}
            <div className="relative group">
              <div className="relative bg-black border border-green-400/50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4">След (собствена система)</h3>
                <ul className="text-left space-y-3 text-gray-300">
                  <li>• Запазвате 100% от приходите</li>
                  <li>• Имате база от верни клиенти</li>
                  <li>• Контролирате всичко</li>
                  <li>• Вашият бранд, не Glovo</li>
                  <li>• Свободни цени и промоции</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Credibility & Guarantee Section
function CredibilityGuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            <span className="text-orange-400">Гарантираме</span> резултата
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black border border-gray-700 rounded-lg p-6">
              <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-orange-400 mb-2">100% Гаранция</h3>
              <p className="text-gray-300 text-sm">Ако не спестите поне 1000 лв за първия месец - връщаме парите</p>
            </div>
            
            <div className="bg-black border border-gray-700 rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-green-400 mb-2">48 часа</h3>
              <p className="text-gray-300 text-sm">Системата е готова за използване до 48 часа</p>
            </div>
            
            <div className="bg-black border border-gray-700 rounded-lg p-6">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-purple-400 mb-2">Пълна поддръжка</h3>
              <p className="text-gray-300 text-sm">Безплатна поддръжка и обновления за 6 месеца</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GlovoCalculatorLandingOptimized() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#333"
          squareSize={60}
          hoverFillColor="#f97316"
          className="opacity-40"
        />
      </div>
      {/* Hero Section */}
      <GlovoHeroSection />

      {/* Social Proof - Bulgarian Restaurant Success Stories */}
      <SocialProofSection />

      {/* Problem Agitation - Glovo капанът */}
      <ProblemAgitationSection />

      {/* Benefits of Own System */}
      <BenefitsOfOwnSystemSection />

      {/* Solution Preview */}
      <SolutionPreviewSection />

      {/* Call to Action - Calculator Section */}
      <section id="calculator-section" className="py-16 md:py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="text-orange-400">Безплатен калкулатор</span> за спестявания
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Разберете точно колко ще спестите всеки месец с наша система
            </p>
            
            <div className="bg-black border border-gray-700 rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">Бързо</div>
                  <div className="text-gray-300">Попълни за 2 минути</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">Безплатно</div>
                  <div className="text-gray-300">Анализът е напълно безплатен</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">Точно</div>
                  <div className="text-gray-300">Реален анализ на спестяванията</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-yellow-400 font-bold text-xl">
                  Обща стойност: 450 лв
                </span>
                <span className="text-green-400 font-bold text-xl ml-4"> - За вас безплатно днес</span>
              </div>
            </div>
          </div>

          {/* Form Container - запазвам оригиналната STEP форма */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
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
      
      {/* Sticky CTA Button */}
      <GlovoStickyCTA />
    </div>
  );
}