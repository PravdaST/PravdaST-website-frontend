import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./animated-background";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Hero Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Tech Lines */}
          <AnimatedBackground />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Pravdast
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Business Engineering Platform
          </p>
          <div className="bg-[#ECB628] text-black px-8 py-4 rounded-lg inline-block font-semibold text-lg mb-8">
            Системни решения за предсказуем растеж
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black">
              Започни сега
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Научи повече
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};