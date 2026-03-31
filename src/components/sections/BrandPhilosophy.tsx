import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const BrandPhilosophy = () => (
  <FadeInSection>
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32 text-center">
      <p className="eyebrow mb-5">Our Roots</p>
      <h2 className="heading-section mb-8">
        Healing That Starts<br />From Within
      </h2>
      <p className="body-text max-w-2xl mx-auto mb-5">
        Sacred Roots was born from a belief that nature holds every answer we seek. We source each product with care, choosing pieces that carry real energy, real intention, and real results.
      </p>
      <p className="body-text max-w-2xl mx-auto mb-10">
        From the sun-soaked cliffs of La Jolla to your hands, every crystal and ritual tool is handpicked to support your journey inward.
      </p>
      <Link to="/our-story" className="btn-secondary">
        Meet the Founder <ArrowRight size={14} />
      </Link>
    </section>
  </FadeInSection>
);

export default BrandPhilosophy;
