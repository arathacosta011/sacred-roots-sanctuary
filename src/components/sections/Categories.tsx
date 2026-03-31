import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";
import handsCrystals from "@/assets/hands-crystals.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";
import homeSanctuary from "@/assets/home-sanctuary.jpg";

const categories = [
  { name: "Crystals & Gemstones", image: handsCrystals },
  { name: "Body & Ritual", image: ritualFlatlay },
  { name: "Home & Sacred Space", image: homeSanctuary },
];

const Categories = () => (
  <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <Link to="/shop" key={cat.name} className="category-card group h-[350px] md:h-[450px] rounded-sm">
          <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
          <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
            <span className="font-heading text-xl md:text-2xl text-primary-foreground">{cat.name}</span>
          </div>
        </Link>
      ))}
    </div>
  </FadeInSection>
);

export default Categories;
