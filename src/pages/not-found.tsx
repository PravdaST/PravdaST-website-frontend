import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--pravdast-yellow) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, var(--pravdast-yellow) 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-[var(--pravdast-yellow)] text-8xl md:text-9xl font-bold mb-4">
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Страницата не е намерена
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Търсената от вас страница не съществува или е била премествана. 
              Но не се притеснявайте - можете да се върнете обратно към нашите системи за растеж.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg" className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[var(--pravdast-yellow)]/90 font-semibold">
                <Home className="w-5 h-5 mr-2" />
                Начална страница
              </Button>
            </Link>
            
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)] hover:text-[var(--pravdast-dark)] font-semibold">
                <Search className="w-5 h-5 mr-2" />
                Нашите услуги
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <p className="text-gray-400 text-sm mb-4">
              Често търсени страници:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services/seo-struktor">
                <span className="text-[var(--pravdast-yellow)] hover:underline cursor-pointer">
                  SEO Struktor™
                </span>
              </Link>
              <Link href="/services/clientomat">
                <span className="text-[var(--pravdast-yellow)] hover:underline cursor-pointer">
                  Clientomat™
                </span>
              </Link>
              <Link href="/services/sales-engine">
                <span className="text-[var(--pravdast-yellow)] hover:underline cursor-pointer">
                  Sales Engine™
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="text-[var(--pravdast-yellow)] hover:underline cursor-pointer">
                  Казуси
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-[var(--pravdast-yellow)] hover:underline cursor-pointer">
                  Контакти
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
