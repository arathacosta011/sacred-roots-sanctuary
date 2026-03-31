import { Instagram, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import instaRitual from "@/assets/insta-ritual.jpg";
import instaBracelets from "@/assets/insta-bracelets.jpg";
import instaMorning from "@/assets/insta-morning.jpg";
import instaAmethyst from "@/assets/insta-amethyst.jpg";
import handsCrystals from "@/assets/hands-crystals.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";

const images = [
  { src: instaRitual, alt: "Beach sunset crystal ritual" },
  { src: instaBracelets, alt: "Crystal bracelets at the ocean" },
  { src: instaMorning, alt: "Morning wellness ritual flatlay" },
  { src: instaAmethyst, alt: "Amethyst geode on wooden shelf" },
  { src: handsCrystals, alt: "Hands holding healing crystals on beach" },
  { src: ritualFlatlay, alt: "Crystal healing ritual setup" },
];

const INSTAGRAM_URL = "https://www.instagram.com/sacredroots.hh/";

const InstagramSection = () => (
  <FadeInSection className="py-20 md:py-28 border-t border-border/40">
    <div className="text-center mb-12">
      <p className="eyebrow mb-4">Follow the Journey</p>
      <h2 className="heading-section mb-4">@sacredroots.hh</h2>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        <Instagram size={16} />
        Follow on Instagram
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 max-w-7xl mx-auto px-6 lg:px-12">
      {images.map((img, i) => (
        <a
          key={i}
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square overflow-hidden group relative"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            loading="lazy"
            width={640}
            height={640}
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-center justify-center">
            <Instagram size={20} className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </a>
      ))}
    </div>
    <div className="text-center mt-10">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        Follow on Instagram <ArrowRight size={14} />
      </a>
    </div>
  </FadeInSection>
);

export default InstagramSection;
