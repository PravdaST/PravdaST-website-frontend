// Clean 404 page without external dependencies

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-gray-300">Страницата не е намерена</p>
        <a 
          href="/" 
          className="inline-block mt-4 bg-[#ECB628] text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Начална страница
        </a>
      </div>
    </div>
  );
}
