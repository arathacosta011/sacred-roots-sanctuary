import FadeInSection from "@/components/FadeInSection";
import storyHero from "@/assets/story-hero.jpg";
import founderPhoto from "@/assets/founder-photo.jpg";

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

const OurStory = () => {
  return (
    <div className="pt-20">
      {/* Hero image */}
      <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={storyHero}
          alt="La Jolla coastline at sunrise with crystals on rocks"
          className="w-full h-full object-cover"
          width={1600}
          height={800}
        />
      </div>

      {/* Headline */}
      <FadeInSection className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
        <h1 className="heading-hero mb-4">Sacred from the Start</h1>
        <p className="body-text max-w-2xl mx-auto">
          Sacred Roots wasn't built in a boardroom. It was born from a personal healing journey.
        </p>
      </FadeInSection>

      {/* Founder section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src={founderPhoto}
              alt="Founder of Sacred Roots holding crystal by the ocean"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-sm"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
          <div className="pt-0 md:pt-8">
            <p className="body-text mb-6">
              It started the way most meaningful things do — quietly. A period of burnout, a search for something deeper, and a handful of crystals gifted by a friend who said, "Just try it." That small act of faith changed everything.
            </p>
            <p className="body-text mb-6">
              Sacred Roots grew from late-night research sessions, weekend trips to mineral shows, and the slow realization that the tools for healing had been around for thousands of years — we'd just forgotten how to use them. La Jolla became the backdrop for this awakening: the Pacific's rhythm, the golden light over the cliffs, the way nature here feels both raw and sacred.
            </p>
            <p className="body-text mb-6">
              What began as a personal collection quickly became something bigger. Friends wanted the same crystals, the same oils, the same sense of calm. And so Sacred Roots was born — not as a business plan, but as a way to share what had genuinely worked.
            </p>
            <p className="body-text">
              Today, every product in our collection is chosen with the same intention that started this journey: to help you reconnect with yourself, with nature, and with the quiet power that lives within you. This isn't just a brand. It's a belief that healing should be beautiful, accessible, and real.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Values */}
      <FadeInSection>
        <section className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((v) => (
                <div key={v.title}>
                  <h3 className="heading-section text-2xl mb-4">{v.title}</h3>
                  <p className="body-text text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default OurStory;
