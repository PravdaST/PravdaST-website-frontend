import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { ProcessSection } from "@/components/process-section";
import { SystemsSection } from "@/components/systems-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead seo={pageSEOData.home} pageSlug="" />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
