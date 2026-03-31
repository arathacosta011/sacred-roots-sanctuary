import { Play, Instagram } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import instaRitual from "@/assets/insta-ritual.jpg";
import instaBracelets from "@/assets/insta-bracelets.jpg";
import instaMorning from "@/assets/insta-morning.jpg";
import instaAmethyst from "@/assets/insta-amethyst.jpg";

const reels = [
  {
    title: "Crystal Cleansing Ritual",
    desc: "How to cleanse and charge your crystals",
    image: instaRitual,
    url: "https://www.instagram.com/sacredroots.hh/reels/",
  },
  {
    title: "Bracelet Stacking Guide",
    desc: "Our favourite crystal bracelet combos",
    image: instaBracelets,
    url: "https://www.instagram.com/sacredroots.hh/reels/",
  },
  {
    title: "Morning Wellness Ritual",
    desc: "Start your day with intention",
    image: instaMorning,
    url: "https://www.instagram.com/sacredroots.hh/reels/",
  },
  {
    title: "Amethyst Energy Guide",
    desc: "The healing power of amethyst",
    image: instaAmethyst,
    url: "https://www.instagram.com/sacredroots.hh/reels/",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/sacredroots.hh/";

const ReelsSection = () => (
  <FadeInSection className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <p className="eyebrow mb-4">Watch & Learn</p>
          <h2 className="heading-section">See It in Practice</h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-4 md:mt-0"
        >
          <Instagram size={14} /> More on Instagram
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {reels.map((reel, i) => (
          <a
            key={i}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[9/16] overflow-hidden rounded-sm bg-muted"
          >
            <img
              src={reel.image}
              alt={reel.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={640}
              height={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

            {/* Play icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <Play size={18} className="text-background ml-0.5" fill="currentColor" />
              </div>
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[13px] font-medium text-background/90 mb-1">{reel.title}</p>
              <p className="text-[11px] text-background/60">{reel.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </FadeInSection>
);

export default ReelsSection;
