import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import Categories from "@/components/sections/Categories";

import FounderReels from "@/components/sections/FounderReels";
import InstagramSection from "@/components/sections/InstagramSection";
import EmailSignup from "@/components/sections/EmailSignup";
import Testimonials from "@/components/sections/Testimonials";

const Index = () => (
  <div>
    <HeroSection />
    <TrustBar />
    <FeaturedProducts />
    <BrandPhilosophy />
    <Categories />
    <Testimonials />
    <FounderReels />
    <ReelsSection />
    <InstagramSection />
    <EmailSignup />
  </div>
);

export default Index;
