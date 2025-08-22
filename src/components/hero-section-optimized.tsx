// Optimized Hero - no framer-motion, no particles, pure performance
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const HeroSectionOptimized = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      {/* Static lightweight background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Static gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, rgba(13, 13, 15, 0.6) 100%),
            radial-gradient(circle at 20% 80%, rgba(236, 182, 40, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline - optimized for LCP */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white px-4 sm:px-0">
            Превръщаме хаоса в{" "}
            <span className="text-[#ECB628]">предсказуеми системи</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Бизнес инженеринг за B2B компании, които искат измерим растеж вместо късмет
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Button asChild size="lg" className="bg-[#ECB628] hover:bg-[#d4a024] text-black font-semibold px-8 py-4 text-lg min-w-[200px]">
              <Link href="/contact">
                Започнете сега
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#ECB628] text-[#ECB628] hover:bg-[#ECB628] hover:text-black px-8 py-4 text-lg min-w-[200px]">
              <Link href="/case-studies">
                Разгледайте случаи
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}