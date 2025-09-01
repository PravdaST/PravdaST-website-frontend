import { Metadata } from "next";
import { Suspense } from "react";
import { getCampaignCreativesMetadata } from "./metadata";
import { CreativesHeroSection } from "@/components/creatives-hero-section";
import { CreativesStepForm } from "@/components/creatives-step-form";

export async function generateMetadata(): Promise<Metadata> {
  return await getCampaignCreativesMetadata();
}

// Loading component for Suspense
function FormLoading() {
  return (
    <div className="bg-white border border-yellow-400/30 rounded-2xl p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-6"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function CreativesPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Креативи Калкулатор - Работи</h1>
      
      <div className="text-center mb-8">
        <p className="text-xl text-gray-700 mb-4">
          Тест страница за да проверим дали формулярът работи.
        </p>
      </div>
        
      {/* Hero Section */}
      <CreativesHeroSection />
      
      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Формуляр Тест</h2>
          <Suspense fallback={<FormLoading />}>
            <CreativesStepForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}