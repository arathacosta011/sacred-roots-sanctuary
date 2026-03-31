import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import productRoller from "@/assets/product-roller-premium.jpg";
import productBracelet from "@/assets/product-bracelet-premium.jpg";
import productPendant from "@/assets/product-pendant-premium.jpg";
import productBottle from "@/assets/product-bottle-premium.jpg";
import productOil from "@/assets/product-oil-premium.jpg";
import productPalo from "@/assets/product-palo-premium.jpg";
import productShell from "@/assets/product-shell-premium.jpg";
import productBamboo from "@/assets/product-bamboo-premium.jpg";

const allProducts = [
  { name: "Rose Quartz Face Roller", price: "$24", desc: "Smooth away tension with natural rose quartz.", image: productRoller, category: "Body & Skincare" },
  { name: "Healing Crystal Bracelet", price: "$10", desc: "A blend of calming stones for daily wear.", image: productBracelet, category: "Crystals" },
  { name: "Crystal Pendant Necklace", price: "$8", desc: "Delicate crystal on a gold-filled chain.", image: productPendant, category: "Crystals" },
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
    <div className="pt-[72px]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <p className="eyebrow mb-4">Sacred Roots Collection</p>
        <h1 className="heading-hero">The Collection</h1>
        <p className="body-text mt-4 max-w-md">Everything curated. Nothing random.</p>
      </div>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-wrap gap-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[13px] tracking-[0.05em] transition-all duration-300 pb-1 border-b ${
                activeFilter === f
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground/60 border-transparent hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((p) => (
            <div key={p.name} className="product-card group">
              <div className="product-card-image aspect-[4/5] mb-5 rounded-sm overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="heading-card">{p.name}</h3>
                  <p className="text-[13px] text-muted-foreground mt-1.5">{p.desc}</p>
                </div>
                <span className="text-sm text-foreground font-medium whitespace-nowrap mt-1">{p.price}</span>
              </div>
              {/* SHOPIFY_BUTTON_PLACEHOLDER */}
              <button className="btn-outline text-[11px] mt-5 w-full py-2.5">Add to Cart</button>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Shop;
