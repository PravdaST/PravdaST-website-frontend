export const SeoStruktorBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Engineering blueprint grid */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="border-l border-[#ECB628]"></div>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="grid grid-rows-8 gap-4 h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-t border-[#ECB628]"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating nodes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#ECB628] rounded-full animate-pulse"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
      
      {/* SEO Keywords floating */}
      {["SEO", "ORGANIC", "RANKING", "KEYWORDS", "TRAFFIC"].map((keyword, i) => (
        <div
          key={keyword}
          className="absolute text-[#ECB628] font-mono text-xs opacity-30 animate-bounce"
          style={{
            left: `${15 + i * 15}%`,
            top: `${40 + (i % 2) * 20}%`,
            animationDelay: `${i * 0.7}s`
          }}
        >
          {keyword}
        </div>
      ))}
    </div>
  );
};