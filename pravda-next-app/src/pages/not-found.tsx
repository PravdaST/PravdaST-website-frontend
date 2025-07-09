import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, Target, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="flex items-center justify-center relative overflow-hidden py-20">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Engineering-style 404 with borders */}
            <div className="relative mb-8">
              <div className="text-[#ECB628] text-9xl md:text-[12rem] font-black mb-4 relative">
                404
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-[#ECB628] opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-[#ECB628] opacity-60"></div>
              </div>
            </div>
            
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Страницата не е намерена
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Търсената страница не съществува или е била премествана. 
              <span className="text-[#ECB628] font-semibold"> Но имаме решение</span> - 
              нашите системи за предсказуем растеж са на една клик разстояние.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link href="/">
              <Button 
                size="lg" 
                className="!bg-[#ECB628] !text-black hover:!bg-[#d4a422] hover:!text-black font-bold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Home className="w-5 h-5 mr-2" />
                Начална страница
              </Button>
            </Link>
            
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="!border-2 !border-[#ECB628] !text-[#ECB628] hover:!bg-[#ECB628] hover:!text-black !bg-transparent font-bold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Target className="w-5 h-5 mr-2" />
                Системи за растеж
              </Button>
            </Link>
          </motion.div>

          {/* Engineering-style divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mb-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#ECB628] to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 px-6">
              <Wrench className="w-6 h-6 text-[#ECB628]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-sm"
          >
            <p className="text-white text-lg mb-6 font-semibold">
              Популярни страници:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base">
              <Link href="/services/seo-struktor">
                <div className="group p-4 rounded-xl border border-slate-600 hover:border-[#ECB628] transition-all duration-200 cursor-pointer hover:bg-slate-700">
                  <div className="text-[#ECB628] font-bold group-hover:text-white transition-colors">
                    SEO Struktor™
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    Органичен трафик система
                  </div>
                </div>
              </Link>
              <Link href="/services/clientomat">
                <div className="group p-4 rounded-xl border border-slate-600 hover:border-[#ECB628] transition-all duration-200 cursor-pointer hover:bg-slate-700">
                  <div className="text-[#ECB628] font-bold group-hover:text-white transition-colors">
                    Clientomat™
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    Автоматизация на клиенти
                  </div>
                </div>
              </Link>
              <Link href="/services/sales-engine">
                <div className="group p-4 rounded-xl border border-slate-600 hover:border-[#ECB628] transition-all duration-200 cursor-pointer hover:bg-slate-700">
                  <div className="text-[#ECB628] font-bold group-hover:text-white transition-colors">
                    Sales Engine™
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    Продажбена система
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex justify-center gap-8 mt-8 text-sm">
              <Link href="/case-studies">
                <span className="text-slate-400 hover:text-[#ECB628] cursor-pointer transition-colors font-medium">
                  Казуси за успех
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-slate-400 hover:text-[#ECB628] cursor-pointer transition-colors font-medium">
                  Свързване
                </span>
              </Link>
              <Link href="/about">
                <span className="text-slate-400 hover:text-[#ECB628] cursor-pointer transition-colors font-medium">
                  За нас
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
