export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">
            Pravdast
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Business Engineering Platform
          </p>
          <div className="bg-[#ECB628] text-black px-8 py-4 rounded-lg inline-block font-semibold">
            Системни решения за предсказуем растеж
          </div>
          <div className="mt-8">
            <a 
              href="/test" 
              className="inline-block bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
            >
              Тестова страница
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}