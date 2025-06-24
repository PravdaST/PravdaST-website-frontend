import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ECB628] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random()}s`
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/10 backdrop-blur-sm border border-black/20">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span className="text-sm text-black font-semibold">
                  Ограничени места за Q1 2025
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Приемаме до{" "}
                <span className="inline-block relative">
                  <span className="text-6xl md:text-7xl font-black text-black relative z-10">
                    3
                  </span>
                </span>{" "}
                нови партньори за следващото тримесечие.
              </h2>

              <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-black/10">
                <p className="text-lg text-black/80 leading-relaxed">
                  Нашият инженерен подход изисква пълна отдаденост и дълбок анализ на всеки проект. 
                  Затова работим само с ограничен брой клиенти, за да гарантираме изключителни резултати.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <Eye className="h-3 w-3 text-[#ECB628]" />
                  </div>
                  <span className="text-black font-medium">
                    Безплатен анализ на текущото състояние
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <Eye className="h-3 w-3 text-[#ECB628]" />
                  </div>
                  <span className="text-black font-medium">
                    Персонализирана стратегия за растеж
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <Eye className="h-3 w-3 text-[#ECB628]" />
                  </div>
                  <span className="text-black font-medium">
                    Гаранция за резултати в първите 90 дни
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  Започни безплатна консултация
                </Button>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-8 border border-black/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-black mb-2">Q1 2025</div>
                    <div className="text-lg text-black/70">Следващи налични места</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((spot) => (
                      <div key={spot} className="bg-black/5 rounded-2xl p-4 text-center border border-black/10">
                        <div className="text-2xl font-bold text-black mb-1">{spot}</div>
                        <div className="text-xs text-black/60">място</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4">
                    <div className="text-sm text-black/70 mb-2">Следващ набор</div>
                    <div className="text-lg font-bold text-black">Q2 2025</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
                <span className="text-[#ECB628] font-bold text-xl">!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};