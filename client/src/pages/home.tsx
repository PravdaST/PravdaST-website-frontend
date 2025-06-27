import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PartnersCarousel } from "@/components/partners-carousel";
import ProblemSection from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import ProcessSection from "@/components/process-section";
import { SystemsSection } from "@/components/systems-section";
import { CaseStudiesSlider } from "@/components/case-studies-slider";
import { UnifiedCTASection } from "@/components/unified-cta-section";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";
import { useEffect } from "react";
import { localBusinessSchema, injectStructuredData } from "@/lib/seo-schemas";
import { tracking, ConversionStage } from "@/lib/tracking";

export default function Home() {
  useEffect(() => {
    // Inject Local Business Schema for SEO
    injectStructuredData(localBusinessSchema, 'local-business-schema');
    
    // Track page view
    tracking.trackFunnelStage(ConversionStage.LANDING);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData.home} pageSlug="" />
      <Navigation />
      <HeroSection />
      <PartnersCarousel />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <UnifiedCTASection 
        buttonText="Започнете трансформацията"
        headline="Готови ли сте да спрете да залагате на късмет?"
        description="Превърнете хаоса в предсказуем растеж с нашите проверени инженерни системи."
      />
      <Footer />
    </div>
  );
}
