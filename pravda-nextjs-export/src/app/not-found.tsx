
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Страницата не е намерена | Pravda Agency',
  description: 'Страницата, която търсите, не съществува. Върнете се в началото или разгледайте нашите услуги.',
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#ECB629] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Страницата не е намерена
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Страницата, която търсите, не съществува или е била преместена.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-[#ECB629] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#ECB629]/90 transition-colors"
          >
            Начало
          </Link>
          <Link 
            href="/services"
            className="border border-[#ECB629] text-[#ECB629] px-8 py-4 rounded-lg font-semibold hover:bg-[#ECB629]/10 transition-colors"
          >
            Нашите услуги
          </Link>
        </div>
      </div>
    </div>
  );
}
