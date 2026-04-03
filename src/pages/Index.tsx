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
  { color: "#C9B99A", size: 500, blur: 100, opacity: 0.18, position: "top-[-100px] left-[-100px]" },
  { color: "#D4C4A8", size: 450, blur: 90, opacity: 0.15, position: "bottom-[-80px] right-[-80px]" },
];

const aboutOrbs = [
  { color: "#D4C4A8", size: 450, blur: 90, opacity: 0.15, position: "top-[-80px] left-[-80px]" },
  { color: "#C9B99A", size: 500, blur: 100, opacity: 0.18, position: "bottom-[-100px] right-[-100px]" },
];

const emailOrbs = [
  { color: "#D4A96A", size: 400, blur: 80, opacity: 0.15, position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" },
];

const testimonialOrbs = [
  { color: "#C9B99A", size: 300, blur: 70, opacity: 0.1, position: "top-[-60px] left-[-60px]" },
  { color: "#D4C4A8", size: 300, blur: 70, opacity: 0.1, position: "bottom-[-60px] right-[-60px]" },
];

const Index = () => (
  <div>
    <SectionGlow orbs={heroOrbs}>
      <HeroSection />
    </SectionGlow>
    <SectionGlow orbs={[]}>
      <TrustBar />
    </SectionGlow>
    <SectionGlow orbs={aboutOrbs}>
      <FeaturedProducts />
    </SectionGlow>
    <SectionGlow orbs={aboutOrbs}>
      <BrandPhilosophy />
    </SectionGlow>
    <SectionGlow orbs={[]}>
      <Categories />
    </SectionGlow>
    <SectionGlow orbs={testimonialOrbs}>
      <Testimonials />
    </SectionGlow>
    <SectionGlow orbs={[]}>
      <FounderReels />
    </SectionGlow>
    <SectionGlow orbs={emailOrbs}>
      <EmailSignup />
    </SectionGlow>
  </div>
);

export default Index;
