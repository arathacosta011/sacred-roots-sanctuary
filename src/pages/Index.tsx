import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import FounderReels from "@/components/sections/FounderReels";
import SectionGlow from "@/components/SectionGlow";

const aboutOrbs = [
  { color: "#D4C4A8", size: 450, blur: 90, opacity: 0.15, position: "top-[-80px] left-[-80px]" },
  { color: "#C9B99A", size: 500, blur: 100, opacity: 0.18, position: "bottom-[-100px] right-[-100px]" },
];

const Index = () => (
  <div>
    <HeroSection />
    <SectionGlow orbs={aboutOrbs}>
      <FeaturedProducts />
    </SectionGlow>
    <SectionGlow orbs={[]}>
      <FounderReels />
    </SectionGlow>
  </div>
);

export default Index;
