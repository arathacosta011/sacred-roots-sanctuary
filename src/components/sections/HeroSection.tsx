import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_VIDEO = "/videos/hero-bg.mp4";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-black">
    {/* Video fills screen, full bottle visible */}
    <div className="h-screen w-full bg-black relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover md:scale-90"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ pointerEvents: "none" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/35" />
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <p className="text-white/70 text-sm tracking-[0.25em] uppercase mb-4 animate-fade-in-slow drop-shadow-md">
          La Jolla, California · Holistic Healing
        </p>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-5 animate-fade-in drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
          Rooted in Nature.
          <span className="italic"> Aligned</span> with You.
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-md mx-auto mb-8 animate-fade-in drop-shadow-md" style={{ animationDelay: "0.4s" }}>
          Ethically sourced crystals, ritual tools, and wellness products — curated for your healing journey.
        </p>
        <div className="flex items-center justify-center gap-5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="https://sacredrootshh.com/collections/all" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Shop the Collection
          </a>
          <Link to="/our-story" className="btn-secondary text-white border-white/40 hover:bg-white/10">
            Our Story <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>


    {/* Scroll indicator */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-foreground/50 z-20">
      <ChevronDown size={24} />
    </div>
  </section>
);

export default HeroSection;