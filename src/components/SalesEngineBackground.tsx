export const SalesEngineBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ECB628]/2 to-transparent opacity-30"></div>
      
      {/* Rotating gears using CSS animations */}
      <div
        className="absolute top-1/4 left-1/5 w-12 h-12 border border-[#ECB628]/20 rounded-full animate-spin"
        style={{
          background: `conic-gradient(from 0deg, transparent 70deg, #ECB628/10 80deg, transparent 90deg, #ECB628/10 100deg, transparent 110deg)`,
          animationDuration: "20s"
        }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-8 h-8 border border-[#ECB628]/15 rounded-full animate-spin"
        style={{
          background: `conic-gradient(from 0deg, transparent 60deg, #ECB628/8 70deg, transparent 80deg, #ECB628/8 90deg, transparent 100deg)`,
          animationDirection: "reverse",
          animationDuration: "15s"
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-6 h-6 border border-[#ECB628]/10 rounded-full animate-spin"
        style={{
          background: `conic-gradient(from 0deg, transparent 80deg, #ECB628/5 90deg, transparent 100deg)`,
          animationDuration: "25s"
        }}
      />
      
      {/* Sales process flow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center space-x-8 opacity-20">
          {["LEADS", "QUALIFY", "CONVERT", "RETAIN"].map((step, i) => (
            <div key={step} className="flex items-center">
              <div
                className="w-3 h-3 bg-[#ECB628] rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              <span className="ml-2 text-[#ECB628] font-mono text-xs">{step}</span>
              {i < 3 && (
                <div
                  className="ml-4 w-6 h-0.5 bg-[#ECB628] animate-pulse"
                  style={{ animationDelay: `${i * 0.5 + 0.25}s` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Revenue metrics floating */}
      {["REVENUE", "GROWTH", "ROI", "KPI", "METRICS"].map((metric, i) => (
        <div
          key={metric}
          className="absolute text-[#ECB628] font-mono text-xs opacity-15 animate-bounce"
          style={{
            left: `${15 + i * 16}%`,
            top: `${20 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.9}s`
          }}
        >
          {metric}
        </div>
      ))}
    </div>
  );
};