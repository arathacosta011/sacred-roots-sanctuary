import { useEffect } from "react";
import { Instagram } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const reelUrls = [
  "https://www.instagram.com/reel/DTivbfzEoQK/",
  "https://www.instagram.com/reel/DTV-lFxkvnG/",
  "https://www.instagram.com/reel/DQzrGPjEjOW/",
];

const FounderReels = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

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
          {reelUrls.map((url) => (
            <blockquote
              key={url}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{ width: "100%", maxWidth: 420, margin: 0, minHeight: 480 }}
            />
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default FounderReels;
