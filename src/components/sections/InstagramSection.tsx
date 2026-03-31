import { Instagram, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const INSTAGRAM_URL = "https://www.instagram.com/sacredroots.hh/";

const images = [
  { src: "https://sacredrootshh.com/cdn/shop/files/IMG-5744.jpg?v=1757176557&width=640", alt: "Abalone Shell" },
  { src: "https://sacredrootshh.com/cdn/shop/files/IMG-5790.webp?v=1757199570&width=640", alt: "Crystal Bracelets" },
  { src: "https://sacredrootshh.com/cdn/shop/files/IMG-5799.jpg?v=1757201789&width=640", alt: "Goddess Body Opalite" },
  { src: "https://sacredrootshh.com/cdn/shop/files/IMG-5769.webp?v=1757188727&width=640", alt: "Quartz Face Roller" },
  { src: "https://sacredrootshh.com/cdn/shop/files/IMG-5748.webp?v=1757177405&width=640", alt: "White Sage" },
  { src: "https://sacredrootshh.com/cdn/shop/files/FullSizeRender.jpg?v=1757187507&width=640", alt: "Mushroom Crystal Pendant" },
];

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
          className="aspect-square overflow-hidden group relative bg-muted"
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
