interface Orb {
  color: string;
  size: number;
  blur: number;
  opacity: number;
  position: string;
}

interface SectionGlowProps {
  orbs: Orb[];
  children: React.ReactNode;
  className?: string;
}

const SectionGlow = ({ orbs, children, className = "" }: SectionGlowProps) => (
  <div className={`linen-grain relative ${className}`}>
    {orbs.map((orb, i) => (
      <div
        key={i}
        className={`glow-orb ${orb.position} animate-orb-pulse`}
        style={{
          width: orb.size,
          height: orb.size,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          filter: `blur(${orb.blur}px)`,
          opacity: orb.opacity,
          animationDelay: `${i * 2}s`,
        }}
      />
    ))}
    <div className="relative z-[1]">{children}</div>
  </div>
);

export default SectionGlow;
