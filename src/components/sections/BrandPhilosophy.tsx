import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import lifestyleFounder from "@/assets/lifestyle-founder.jpg";

const BrandPhilosophy = () => (
  <FadeInSection>
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={lifestyleFounder}
            alt="Founder with crystals at golden hour on the La Jolla coastline"
            className="w-full h-[500px] md:h-[650px] object-cover rounded-sm"
            loading="lazy"
            width={960}
            height={1280}
          />
        </div>
        <div className="md:pl-6">
          <p className="eyebrow mb-5">Our Roots</p>
          <h2 className="heading-section mb-8">
            Healing That Starts<br />From Within
          </h2>
          <p className="body-text mb-5">
            Sacred Roots was born from a belief that nature holds every answer we seek. We source each product with care, choosing pieces that carry real energy, real intention, and real results.
          </p>
          <p className="body-text mb-10">
            From the sun-soaked cliffs of La Jolla to your hands, every crystal and ritual tool is handpicked to support your journey inward.
          </p>
          <Link to="/our-story" className="btn-secondary">
            Meet the Founder <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default BrandPhilosophy;
