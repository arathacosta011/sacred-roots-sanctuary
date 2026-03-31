import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import Categories from "@/components/sections/Categories";
import FounderReels from "@/components/sections/FounderReels";
import EmailSignup from "@/components/sections/EmailSignup";
import Testimonials from "@/components/sections/Testimonials";
import SectionGlow from "@/components/SectionGlow";

const heroOrbs = [
  { color: "#C4886A", size: 350, blur: 70, opacity: 0.11, position: "top-0 left-0" },
  { color: "#7D9B7A", size: 300, blur: 60, opacity: 0.09, position: "bottom-0 right-0" },
];

const aboutOrbs = [
  { color: "#7D9B7A", size: 300, blur: 60, opacity: 0.09, position: "top-0 left-0" },
  { color: "#C4886A", size: 350, blur: 70, opacity: 0.11, position: "bottom-0 right-0" },
];

const emailOrbs = [
  { color: "#D4A96A", size: 250, blur: 50, opacity: 0.09, position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" },
];

const testimonialOrbs = [
  { color: "#C4886A", size: 200, blur: 50, opacity: 0.06, position: "top-0 left-0" },
  { color: "#7D9B7A", size: 200, blur: 50, opacity: 0.06, position: "bottom-0 right-0" },
];

const Index = () => (
  <div>
    <SectionGlow orbs={heroOrbs} className="overflow-hidden">
      <HeroSection />
    </SectionGlow>
    <SectionGlow orbs={[]} className="overflow-hidden">
      <TrustBar />
    </SectionGlow>
    <SectionGlow orbs={aboutOrbs} className="overflow-hidden">
      <FeaturedProducts />
    </SectionGlow>
    <SectionGlow orbs={aboutOrbs} className="overflow-hidden">
      <BrandPhilosophy />
    </SectionGlow>
    <SectionGlow orbs={[]} className="overflow-hidden">
      <Categories />
    </SectionGlow>
    <SectionGlow orbs={testimonialOrbs} className="overflow-hidden">
      <Testimonials />
    </SectionGlow>
    <SectionGlow orbs={[]} className="overflow-hidden">
      <FounderReels />
    </SectionGlow>
    <SectionGlow orbs={emailOrbs} className="overflow-hidden">
      <EmailSignup />
    </SectionGlow>
  </div>
);

export default Index;
