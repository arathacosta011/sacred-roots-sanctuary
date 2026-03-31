import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import SectionGlow from "@/components/SectionGlow";
import beefTallowImg from "@/assets/product-beef-tallow.png";
import mushroomImg from "@/assets/product-mushroom-nootropic.png";
import soapImg from "@/assets/product-soap.png";
import lipBalmImg from "@/assets/product-tallow-lip-balm.png";

const allProducts = [
  { name: "Raw Beef Tallow", price: "$32", desc: "Pure grass-fed beef tallow for deep hydration.", image: beefTallowImg, url: "https://sacredrootshh.com/collections/all", category: "Beef Tallow" },
  { name: "Tallow Lip Balm", price: "$12", desc: "Organic tallow lip balm in bamboo packaging.", image: lipBalmImg, url: "https://sacredrootshh.com/collections/all", category: "Beef Tallow" },
  { name: "Sacred Mycelium Tincture", price: "$45", desc: "Mushroom nootropic blend for focus and clarity.", image: mushroomImg, url: "https://sacredrootshh.com/collections/all", category: "Mushroom Nootropics" },
  { name: "Botanical Soap", price: "$14", desc: "Handmade organic soap with botanicals and herbs.", image: soapImg, url: "https://sacredrootshh.com/collections/all", category: "Soaps" },
];

const filters = ["All", "Beef Tallow", "Mushroom Nootropics", "Soaps"];

const headerOrbs = [
  { color: "#C4886A", size: 400, blur: 90, opacity: 0.15, position: "top-[-80px] right-[-80px]" },
  { color: "#7D9B7A", size: 350, blur: 80, opacity: 0.12, position: "bottom-[-60px] left-[-60px]" },
];

const gridOrbs = [
  { color: "#7D9B7A", size: 450, blur: 90, opacity: 0.15, position: "top-[-80px] left-[-80px]" },
  { color: "#D4A96A", size: 350, blur: 80, opacity: 0.12, position: "bottom-[-60px] right-[-60px]" },
];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-[72px]">
      <SectionGlow orbs={headerOrbs}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
          <p className="eyebrow mb-4">Sacred Roots Collection</p>
          <h1 className="heading-hero">The Collection</h1>
          <p className="body-text mt-4 max-w-md">Everything curated. Nothing random.</p>
        </div>

        <div className="section-divider max-w-7xl mx-auto" />

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
      </SectionGlow>

      <SectionGlow orbs={gridOrbs}>
        <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card group block"
              >
                <div className="product-card-image aspect-square mb-5 rounded-sm overflow-hidden bg-muted/30 flex items-center justify-center p-8">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-w-full max-h-full object-contain drop-shadow-md"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="heading-card">{p.name}</h3>
                    <p className="text-[13px] text-muted-foreground mt-1.5">{p.desc}</p>
                  </div>
                  <span className="text-sm text-foreground font-medium whitespace-nowrap mt-1">{p.price}</span>
                </div>
                <span className="btn-outline text-[11px] mt-5 w-full py-2.5 block text-center">Shop Now</span>
              </a>
            ))}
          </div>
        </FadeInSection>
      </SectionGlow>
    </div>
  );
};

export default Shop;
