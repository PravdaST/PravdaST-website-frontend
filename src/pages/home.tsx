import { HeroSection } from "@/components/hero-section";
import { PartnersCarousel } from "@/components/partners-carousel";
import ProblemSection from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import ProcessSection from "@/components/process-section";
import { SystemsSection } from "@/components/systems-section";
import { CaseStudiesSlider } from "@/components/case-studies-slider";
import { CTASection } from "@/components/cta-section";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead seo={pageSEOData.home} pageSlug="" />
      <HeroSection />
      <PartnersCarousel />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <CTASection />
    </div>
  );
}
