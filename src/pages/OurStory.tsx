import { Instagram, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import storyCoastal from "@/assets/story-coastal.jpg";
import lifestyleFounder from "@/assets/lifestyle-founder.jpg";

const values = [
  {
    title: "Ethically Sourced",
    desc: "Every crystal and ingredient is traced back to responsible suppliers who respect the earth and the communities they work with.",
  },
  {
    title: "Curated with Intention",
    desc: "Nothing arrives by accident. Each product is hand-selected for its energetic properties, quality, and ability to support your practice.",
  },
  {
    title: "Community First",
    desc: "We believe healing is a shared journey. We're building a space where wellness is accessible, inclusive, and rooted in genuine connection.",
  },
];

const OurStory = () => (
  <div className="pt-[72px]">
    {/* Hero image */}
    <div className="w-full h-[45vh] md:h-[55vh] overflow-hidden relative">
      <img
        src={storyCoastal}
        alt="Aerial view of La Jolla Cove coastline with turquoise Pacific water"
        className="w-full h-full object-cover"
        width={1920}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
    </div>

    {/* Headline */}
    <FadeInSection className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-20 text-center -mt-24 relative z-10">
      <p className="eyebrow mb-5">Our Story</p>
      <h1 className="heading-hero mb-6">Sacred from<br />the Start</h1>
      <p className="body-text max-w-xl mx-auto text-lg">
        Sacred Roots wasn't built in a boardroom. It was born from a personal healing journey — and the wild, beautiful coastline of La Jolla, California.
      </p>
    </FadeInSection>

    {/* Founder section */}
    <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <img
            src={lifestyleFounder}
            alt="Founder walking on La Jolla beach with crystals at golden hour"
            className="w-full h-[500px] md:h-[650px] object-cover rounded-sm"
            loading="lazy"
            width={960}
            height={1280}
          />
        </div>
        <div className="md:pt-12">
          <p className="body-text mb-6">
            It started the way most meaningful things do — quietly. A period of burnout, a search for something deeper, and a handful of crystals gifted by a friend who said, <em>"Just try it."</em> That small act of faith changed everything.
          </p>
          <p className="body-text mb-6">
            Sacred Roots grew from late-night research sessions, weekend trips to mineral shows, and the slow realization that the tools for healing had been around for thousands of years — we'd just forgotten how to use them. La Jolla became the backdrop for this awakening: the Pacific's rhythm, the golden light over the cliffs, the way nature here feels both raw and sacred.
          </p>
          <p className="body-text mb-6">
            What began as a personal collection quickly became something bigger. Friends wanted the same crystals, the same oils, the same sense of calm. And so Sacred Roots was born — not as a business plan, but as a way to share what had genuinely worked.
          </p>
          <p className="body-text mb-10">
            Today, every product in our collection is chosen with the same intention that started this journey: to help you reconnect with yourself, with nature, and with the quiet power that lives within you.
          </p>
          <a
            href="https://www.instagram.com/sacredroots.hh/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Instagram size={16} /> Follow the Journey <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </FadeInSection>

    {/* Values */}
    <FadeInSection>
      <section className="border-t border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
          <p className="eyebrow text-center mb-4">What Guides Us</p>
          <h2 className="heading-section text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="heading-section text-2xl mb-5">{v.title}</h3>
                <p className="body-text text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  </div>
);

export default OurStory;
