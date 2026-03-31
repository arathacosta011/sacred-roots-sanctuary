import { Instagram } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const reels = [
  { url: "https://www.instagram.com/reel/DTivbfzEoQK/", id: "DTivbfzEoQK" },
  { url: "https://www.instagram.com/reel/DTV-lFxkvnG/", id: "DTV-lFxkvnG" },
  { url: "https://www.instagram.com/reel/DQzrGPjEjOW/", id: "DQzrGPjEjOW" },
];

const FounderReels = () => {
  return (
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <div key={reel.id} className="rounded-sm overflow-hidden bg-muted">
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                className="w-full border-0"
                style={{ minHeight: 520 }}
                allowTransparency
                allow="encrypted-media"
                loading="lazy"
                title={`Instagram reel ${reel.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default FounderReels;
