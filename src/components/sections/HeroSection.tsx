import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_VIDEO = "/videos/hero-bg.mp4";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#FDFBF7]">
    {/* Video fills screen, full bottle visible */}
    <div className="h-screen w-full">
      <video
        className="w-full h-full object-cover md:object-contain"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ pointerEvents: "none" }}
      />
    </div>

    {/* Text content below the video */}
    <div className="bg-[#FDFBF7] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="eyebrow mb-6 animate-fade-in-slow text-foreground/70">La Jolla, California · Holistic Healing</p>
        <h1 className="heading-hero mb-6 animate-fade-in text-foreground" style={{ animationDelay: "0.2s" }}>
          Rooted in Nature.
          <span className="italic"> Aligned</span> with You.
        </h1>
        <p className="body-text max-w-md mx-auto mb-8 animate-fade-in text-foreground/80" style={{ animationDelay: "0.4s" }}>
          Ethically sourced crystals, ritual tools, and wellness products — curated for your healing journey.
        </p>
        <div className="flex items-center justify-center gap-5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="https://sacredrootshh.com/collections/all" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Shop the Collection
          </a>
          <Link to="/our-story" className="btn-secondary">
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