import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export const SeoHeroServer = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Static Background - No animations for server component */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#ECB629]/10 rounded-full border border-[#ECB629]/20 mb-6">
            <span className="text-[#ECB629] text-sm font-semibold">SEO STRUKTOR™</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            Инженерен подход към SEO
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Вместо да залагаме на късмета, ние подхождаме към вашия сайт като архитекти. 
            Преди да поставим и една "тухла", създаваме цялостния инженерен план за доминация в Google.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:opacity-90 px-8 py-4 text-lg font-bold"
            >
              <ArrowRight className="mr-2 w-5 h-5" />
              Започни безплатна консултация
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Обади се сега
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">0-6</div>
              <div className="text-sm text-gray-400">месеца до резултат</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">250%+</div>
              <div className="text-sm text-gray-400">средно подобрение</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">гаранция за резултат</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">47+</div>
              <div className="text-sm text-gray-400">успешни проекта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};