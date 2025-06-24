export const SalesEngineBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ECB628]/2 to-transparent opacity-30"></div>
      
      {/* Rotating gears using CSS animations */}
      <div
        style={{
          background: `conic-gradient(from 0deg, transparent 70deg, #ECB628/10 80deg, transparent 90deg, #ECB628/10 100deg, transparent 110deg)`,
          animationDuration: "20s"
      />
      <div
        style={{
          background: `conic-gradient(from 0deg, transparent 60deg, #ECB628/8 70deg, transparent 80deg, #ECB628/8 90deg, transparent 100deg)`,
          animationDirection: "reverse",
          animationDuration: "15s"
      />
      <div
        style={{
          background: `conic-gradient(from 0deg, transparent 80deg, #ECB628/5 90deg, transparent 100deg)`,
          animationDuration: "25s"
      />
      
      {/* Sales process flow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center space-x-8 opacity-20">
          {["LEADS", "QUALIFY", "CONVERT", "RETAIN"].map((step, i) => (
            <div key={step} className="flex items-center">
              <div
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              <span className="ml-2 text-[#ECB628] font-mono text-xs">{step}</span>
              {i < 3 && (
                <div
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
          style={{
            left: `${15 + i * 16}%`,
            top: `${20 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.9}s`
          {metric}
        </div>
      ))}
    </div>
  );
};