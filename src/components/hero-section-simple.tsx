import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
      {/* Simple Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-slate-800/50 border border-[#ECB629]/30">
            <div className="relative">
              <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full opacity-20 animate-ping"></div>
            </div>
            <span className="text-sm text-gray-300 font-medium">
              <span className="text-[#ECB629] font-bold">Ново</span> - Приемаме проекти
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Pravdast
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Спрете да залагате на късмет, започнете да строите системи
          </p>
          <div className="bg-[#ECB628] text-black px-8 py-4 rounded-lg inline-block font-semibold text-lg mb-8">
            Бизнес инженерни системи за предсказуем растеж
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ECB628] via-white to-[#ECB628] opacity-0 group-hover:opacity-20"></div>
              <span className="relative z-10">ЗАПОЧНЕТЕ СЕГА</span>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Научете повече
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};