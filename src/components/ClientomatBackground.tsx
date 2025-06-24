export const ClientomatBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-800/30 to-transparent"></div>
      
      {/* Data stream lines using CSS animations */}
      <div
        style={{
          clipPath: "ellipse(200px 10px at 50% 50%)",
          animationDuration: "3s"
      />
      <div
        style={{
          clipPath: "ellipse(160px 8px at 50% 50%)",
          animationDelay: "1s",
          animationDuration: "4s"
      />
      <div
        style={{
          clipPath: "ellipse(140px 6px at 50% 50%)",
          animationDelay: "2s",
          animationDuration: "5s"
      />
      
      {/* Client automation keywords */}
      {["AUTOMATION", "CLIENTS", "CRM", "LEADS", "CONVERSION"].map((keyword, i) => (
        <div
          key={keyword}
          style={{
            left: `${10 + i * 18}%`,
            top: `${25 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`
          {keyword}
        </div>
      ))}
      
      {/* Connection nodes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            left: `${20 + i * 12}%`,
            top: `${35 + (i % 2) * 30}%`,
            animationDelay: `${i * 0.6}s`
        />
      ))}
    </div>
  );
};