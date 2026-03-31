import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://sacredrootshh.com/cdn/shop/files/holistic-wellness.png?v=1756926464&width=3840";
const HERO_VIDEO = "/videos/hero-bg.mp4";

const HeroSection = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden">
    {/* Video background */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={HERO_VIDEO}
      poster={HERO_IMAGE}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      style={{ pointerEvents: "none" }}
    />

    {/* Warm white overlay — 60% opacity */}
    <div className="absolute inset-0 bg-white/45" />

    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 pt-20">
      <div className="max-w-2xl">
        <p className="eyebrow mb-8 animate-fade-in-slow text-foreground/70">La Jolla, California · Holistic Healing</p>
        <h1 className="heading-hero mb-8 animate-fade-in text-foreground" style={{ animationDelay: "0.2s" }}>
          Rooted in<br />Nature.
          <span className="italic"> Aligned</span><br />
          with You.
        </h1>
        <p className="body-text max-w-md mb-10 animate-fade-in text-foreground/80" style={{ animationDelay: "0.4s" }}>
          Ethically sourced crystals, ritual tools, and wellness products — curated for your healing journey.
        </p>
        <div className="flex items-center gap-5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="https://sacredrootshh.com/collections/all" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Shop the Collection
          </a>
          <Link to="/our-story" className="btn-secondary">
            Our Story <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-foreground/30">
      <ChevronDown size={20} />
    </div>
  </section>
);

export default HeroSection;
