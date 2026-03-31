import { Play, Instagram } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const INSTAGRAM_URL = "https://www.instagram.com/sacredroots.hh/";

const reels = [
  {
    title: "Crystal Cleansing Ritual",
    desc: "How to cleanse and charge your crystals",
    image: "https://sacredrootshh.com/cdn/shop/files/white-sage-palo-santo-with-crystal-set-671027_2400x_3cbd7046-72b0-4c7e-be7f-936681fbf242.webp?v=1757178026&width=1200",
    url: INSTAGRAM_URL + "reels/",
  },
  {
    title: "Bracelet Stacking Guide",
    desc: "Our favourite crystal bracelet combos",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5794.webp?v=1757200232&width=1200",
    url: INSTAGRAM_URL + "reels/",
  },
  {
    title: "Palo Santo Ritual",
    desc: "How to smudge your space with palo santo",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5746.jpg?v=1757176829&width=1200",
    url: INSTAGRAM_URL + "reels/",
  },
  {
    title: "Selenite Energy Guide",
    desc: "The healing power of selenite",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5770.webp?v=1757188827&width=1200",
    url: INSTAGRAM_URL + "reels/",
  },
];

const ReelsSection = () => (
  <FadeInSection className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <p className="eyebrow mb-4">Watch & Learn</p>
          <h2 className="heading-section">Rituals, Remedies<br className="hidden md:block" /> & Real Moments</h2>
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
              width={1200}
              height={1500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <Play size={18} className="text-background ml-0.5" fill="currentColor" />
              </div>
            </div>

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
