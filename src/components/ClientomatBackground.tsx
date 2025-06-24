export const ClientomatBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-800/30 to-transparent"></div>
      
      {/* Data stream lines using CSS animations */}
      <div
        className="absolute top-1/4 left-0 w-96 h-0.5 bg-gradient-to-r from-transparent via-[#ECB628]/25 to-transparent animate-pulse"
        style={{
          clipPath: "ellipse(200px 10px at 50% 50%)",
          animationDuration: "3s"
        }}
      />
      <div
        className="absolute top-1/2 left-0 w-80 h-0.5 bg-gradient-to-r from-transparent via-[#ECB628]/20 to-transparent animate-pulse"
        style={{
          clipPath: "ellipse(160px 8px at 50% 50%)",
          animationDelay: "1s",
          animationDuration: "4s"
        }}
      />
      <div
        className="absolute top-3/4 left-0 w-72 h-0.5 bg-gradient-to-r from-transparent via-[#ECB628]/15 to-transparent animate-pulse"
        style={{
          clipPath: "ellipse(140px 6px at 50% 50%)",
          animationDelay: "2s",
          animationDuration: "5s"
        }}
      />
      
      {/* Client automation keywords */}
      {["AUTOMATION", "CLIENTS", "CRM", "LEADS", "CONVERSION"].map((keyword, i) => (
        <div
          key={keyword}
          className="absolute text-[#ECB628] font-mono text-xs opacity-20 animate-bounce"
          style={{
            left: `${10 + i * 18}%`,
            top: `${25 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`
          }}
        >
          {keyword}
        </div>
      ))}
      
      {/* Connection nodes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#ECB628] rounded-full animate-ping"
          style={{
            left: `${20 + i * 12}%`,
            top: `${35 + (i % 2) * 30}%`,
            animationDelay: `${i * 0.6}s`
          }}
        />
      ))}
    </div>
  );
};