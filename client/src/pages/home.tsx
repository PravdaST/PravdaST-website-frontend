import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PartnersCarousel } from "@/components/partners-carousel";
import ProblemSection from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import ProcessSection from "@/components/process-section";
import { SystemsSection } from "@/components/systems-section";
import { CaseStudiesSlider } from "@/components/case-studies-slider";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HelmetSEO } from "@/components/seo/helmet-seo";
import { pageSEOData } from "@/data/seo-pages";
import { useEffect } from "react";
import { tracking, ConversionStage } from "@/lib/tracking";

export default function Home() {
  useEffect(() => {
    console.log('HOME PAGE LOADED - REACT IS WORKING');
    // Track page view
    tracking.trackFunnelStage(ConversionStage.LANDING);
  }, []);

  const seoData = pageSEOData.home;

  return (
    <div className="min-h-screen bg-slate-900">
      <HelmetSEO seo={seoData} pageSlug="" />
      <Navigation />
      <HeroSection />
      <PartnersCarousel />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <CTASection />
      <Footer />
    </div>
  );
}
