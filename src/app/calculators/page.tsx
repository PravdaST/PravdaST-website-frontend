import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "ROI Калкулатори - Pravda Agency | Изчислете печалбата от нашите системи",
  description:
    "Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.",
  keywords:
    "roi калкулатор, seo калкулатор, печалба от маркетинг, бизнес калкулатор, pravda agency, системи за растеж",
  openGraph: {
    title:
      "ROI Калкулатори - Pravda Agency | Изчислете печалбата от нашите системи",
    description:
      "Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.",
    type: "website",
    locale: "bg_BG",
    url: "https://www.pravdagency.eu/calculators",
    siteName: "Pravda Agency",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ROI Калкулатори - Pravda Agency | Изчислете печалбата от нашите системи",
    description:
      "Интерактивни калкулатори за ROI на SEO Struktor™, Trendlab™, Clickstarter™ и Clientomat™. Изчислете точната печалба от нашите бизнес инженеринг системи.",
  },
  alternates: {
    canonical: "https://www.pravdagency.eu/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              ROI Калкулатори
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Изчислете печалбата от нашите бизнес инженеринг системи
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  SEO Struktor™
                </h3>
                <p className="text-gray-400">SEO оптимизация и растеж</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Trendlab™
                </h3>
                <p className="text-gray-400">Съдържание и авторитет</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Clickstarter™
                </h3>
                <p className="text-gray-400">Реклами и конверсии</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Clientomat™
                </h3>
                <p className="text-gray-400">Автоматизация на клиенти</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
