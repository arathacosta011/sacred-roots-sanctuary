import { Instagram, Play } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const reels = [
  {
    url: "https://www.instagram.com/reel/DTivbfzEoQK/",
    id: "DTivbfzEoQK",
    label: "Behind the Brand",
  },
  {
    url: "https://www.instagram.com/reel/DTV-lFxkvnG/",
    id: "DTV-lFxkvnG",
    label: "Daily Rituals",
  },
  {
    url: "https://www.instagram.com/reel/DQzrGPjEjOW/",
    id: "DQzrGPjEjOW",
    label: "Sacred Moments",
  },
];

const FounderReels = () => {
  return (
    <FadeInSection className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header — centered, editorial */}
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow mb-5">Meet the Founder</p>
          <h2 className="heading-section mb-6">
            The Heart Behind<br /> Sacred Roots
          </h2>
          <p className="body-text text-muted-foreground/70 max-w-md mx-auto">
            A glimpse into the rituals, roots, and real moments that shape this brand.
          </p>
        </div>

        {/* Reels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-md overflow-hidden bg-muted/40 aspect-[9/16] transition-shadow duration-500 hover:shadow-xl"
            >
              {/* Embedded reel as background */}
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                allowTransparency
                allow="encrypted-media"
                loading="lazy"
                title={`Instagram reel — ${reel.label}`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 z-10 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 shadow-lg">
                  <Play size={20} className="text-foreground ml-0.5" />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs tracking-[0.15em] uppercase text-background/90 font-medium">
                  {reel.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.instagram.com/sacredroots.hh/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Instagram size={14} /> Follow Along
          </a>
        </div>
      </div>
    </FadeInSection>
  );
};

export default FounderReels;
