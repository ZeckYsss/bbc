const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 grid-bg" />
    {/* Glowing dots */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary animate-pulse-glow"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
    {/* Gradient orbs */}
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />
  </div>
);

export default GridBackground;
