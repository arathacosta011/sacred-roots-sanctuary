interface Orb {
  color: string;
  size: number;
  blur: number;
  opacity: number;
  position: string; // Tailwind position classes e.g. "top-0 left-0"
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
        className={`glow-orb ${orb.position}`}
        style={{
          width: orb.size,
          height: orb.size,
          background: orb.color,
          filter: `blur(${orb.blur}px)`,
          opacity: orb.opacity,
        }}
      />
    ))}
    <div className="relative z-[1]">{children}</div>
  </div>
);

export default SectionGlow;
