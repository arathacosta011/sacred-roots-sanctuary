import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-coastal.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Rose quartz crystals and white sage on sun-bleached driftwood"
        className="w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 pt-20">
      <div className="max-w-2xl">
        <p className="eyebrow mb-8 animate-fade-in-slow">La Jolla, California · Holistic Healing</p>
        <h1 className="heading-hero mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Rooted in<br />Nature.
          <span className="italic"> Aligned</span><br />
          with You.
        </h1>
        <p className="body-text max-w-md mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Ethically sourced crystals, ritual tools, and wellness products — curated for your healing journey.
        </p>
        <div className="flex items-center gap-5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
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
