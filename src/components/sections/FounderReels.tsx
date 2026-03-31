import { useState } from "react";
import { Play, Instagram } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const reels = [
  {
    id: "DTivbfzEoQK",
    title: "Behind the Brand",
    desc: "A glimpse into the Sacred Roots journey",
    thumbnail: "https://sacredrootshh.com/cdn/shop/files/holistic-wellness.png?v=1756926464&width=800",
  },
  {
    id: "DTV-lFxkvnG",
    title: "Daily Rituals",
    desc: "How we bring intention into every day",
    thumbnail: "https://sacredrootshh.com/cdn/shop/files/IMG-5744.jpg?v=1757176557&width=800",
  },
  {
    id: "DQzrGPjEjOW",
    title: "Sacred Roots Story",
    desc: "The heart behind what we do",
    thumbnail: "https://sacredrootshh.com/cdn/shop/files/IMG-5746.jpg?v=1757176829&width=800",
  },
];

const ReelCard = ({ reel }: { reel: (typeof reels)[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative aspect-[9/16] overflow-hidden rounded-sm bg-muted cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() =>
        window.open(
          `https://www.instagram.com/reel/${reel.id}/`,
          "_blank"
        )
      }
    >
      {/* Thumbnail — always rendered underneath */}
      <img
        src={reel.thumbnail}
        alt={reel.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        width={800}
        height={1422}
      />

      {/* Instagram embed — loads on hover */}
      {hovered && (
        <iframe
          src={`https://www.instagram.com/reel/${reel.id}/embed/`}
          className="absolute inset-0 w-full h-full z-10 border-0"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={reel.title}
        />
      )}

      {/* Overlay — hidden when iframe is active */}
      {!hovered && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent z-[5]" />

          <div className="absolute inset-0 flex items-center justify-center z-[6]">
            <div className="w-14 h-14 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              <Play size={20} className="text-background ml-0.5" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 z-[6]">
            <p className="text-[13px] font-medium text-background/90 mb-1">{reel.title}</p>
            <p className="text-[11px] text-background/60">{reel.desc}</p>
          </div>
        </>
      )}
    </div>
  );
};

const FounderReels = () => (
  <FadeInSection className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <p className="eyebrow mb-4">Meet the Founder</p>
          <h2 className="heading-section">
            The Heart Behind<br className="hidden md:block" /> Sacred Roots
          </h2>
        </div>
        <a
          href="https://www.instagram.com/sacredroots.hh/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-4 md:mt-0"
        >
          <Instagram size={14} /> Follow Along
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  </FadeInSection>
);

export default FounderReels;
