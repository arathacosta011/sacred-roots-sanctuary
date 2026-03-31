import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

import productRoller from "@/assets/product-rose-quartz-roller.jpg";
import productBracelet from "@/assets/product-crystal-bracelet.jpg";
import productPendant from "@/assets/product-mushroom-pendant.jpg";
import productBottle from "@/assets/product-crystal-water-bottle.jpg";
import productOil from "@/assets/product-body-oil.jpg";
import productPalo from "@/assets/product-palo-santo.jpg";
import productShell from "@/assets/product-abalone-shell.jpg";
import productBamboo from "@/assets/product-bamboo-set.jpg";

const allProducts = [
  { name: "Rose Quartz Face Roller", price: "$24", desc: "Smooth away tension with natural rose quartz.", image: productRoller, category: "Body & Skincare" },
  { name: "Healing Crystal Bracelet", price: "$10", desc: "A blend of calming stones for daily wear.", image: productBracelet, category: "Crystals" },
  { name: "Mushroom Crystal Pendant", price: "$8", desc: "Delicate crystal mushroom on a gold chain.", image: productPendant, category: "Crystals" },
  { name: "Citrine Crystal Water Bottle", price: "$75", desc: "Infuse your water with golden citrine energy.", image: productBottle, category: "Crystals" },
  { name: "Goddess Body Oil", price: "$45", desc: "Nourishing botanical blend for radiant skin.", image: productOil, category: "Body & Skincare" },
  { name: "Palo Santo Cleansing Sticks", price: "$5", desc: "Sustainably sourced palo santo for cleansing.", image: productPalo, category: "Ritual Tools" },
  { name: "Abalone Smudging Shell", price: "$15", desc: "Natural iridescent shell for your rituals.", image: productShell, category: "Ritual Tools" },
  { name: "Bamboo Bathroom Set", price: "$11", desc: "Eco-friendly bamboo accessories for your space.", image: productBamboo, category: "Bamboo" },
];

const filters = ["All", "Crystals", "Body & Skincare", "Ritual Tools", "Bamboo"];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <h1 className="heading-hero text-center">The Collection</h1>
        <div className="section-divider max-w-[60px] mx-auto mt-6 mb-4" />
        <p className="body-text text-center">Everything curated. Nothing random.</p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-12">
        <div className="flex flex-wrap justify-center gap-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-sm tracking-wide transition-all pb-1 border-b ${
                activeFilter === f
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <FadeInSection className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.name} className="product-card group">
              <div className="product-card-image aspect-square mb-4 rounded-sm overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
              </div>
              <h3 className="heading-card">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-foreground">{p.price}</span>
                {/* SHOPIFY_BUTTON_PLACEHOLDER */}
                <button className="btn-primary text-xs px-4 py-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Shop;
