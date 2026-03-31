import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

const allProducts = [
  {
    name: "Quartz Face Roller",
    price: "$24",
    desc: "Smooth away tension with natural rose quartz.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5769.webp?v=1757188727&width=800",
    url: "https://sacredrootshh.com/products/quartz-face-roller",
    category: "Body & Skincare",
  },
  {
    name: "Crystal Bracelet",
    price: "$10",
    desc: "Rose Quartz, Amethyst, Obsidian, Tigers Eye & more.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5790.webp?v=1757199570&width=800",
    url: "https://sacredrootshh.com/products/crystal-bracelet",
    category: "Crystals",
  },
  {
    name: "Mushroom Crystal Pendant",
    price: "$8",
    desc: "Polished crystal mushroom pendant necklace.",
    image: "https://sacredrootshh.com/cdn/shop/files/FullSizeRender.jpg?v=1757187507&width=800",
    url: "https://sacredrootshh.com/products/mushroom-natural-crystal-polishing-pendant-necklace-1-piece",
    category: "Crystals",
  },
  {
    name: "Citrine Crystal Water Bottle",
    price: "$75",
    desc: "Infuse your water with golden citrine energy.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5741.png?v=1757176214&width=800",
    url: "https://sacredrootshh.com/products/citrine-crystal-water-bottle",
    category: "Crystals",
  },
  {
    name: "Selenite Lamp",
    price: "$95",
    desc: "Warm, calming selenite tower lamp for your space.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5770.webp?v=1757188827&width=800",
    url: "https://sacredrootshh.com/products/salentine-lamp",
    category: "Crystals",
  },
  {
    name: "Goddess Body (Opalite)",
    price: "$45",
    desc: "Opalite goddess body carving, self-standing.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5799.jpg?v=1757201789&width=800",
    url: "https://sacredrootshh.com/products/opal-body",
    category: "Crystals",
  },
  {
    name: "Smudge Kit",
    price: "$28",
    desc: "White sage, palo santo, and crystal cleansing set.",
    image: "https://sacredrootshh.com/cdn/shop/files/white-sage-palo-santo-with-crystal-set-671027_2400x_3cbd7046-72b0-4c7e-be7f-936681fbf242.webp?v=1757178026&width=800",
    url: "https://sacredrootshh.com/products/palo-santo",
    category: "Ritual Tools",
  },
  {
    name: "Palo Santo",
    price: "$5",
    desc: "Sustainably sourced palo santo cleansing sticks.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5746.jpg?v=1757176829&width=800",
    url: "https://sacredrootshh.com/products/palo-santo-1",
    category: "Ritual Tools",
  },
  {
    name: "White Sage",
    price: "$5",
    desc: "Traditional white sage bundle for space clearing.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5748.webp?v=1757177405&width=800",
    url: "https://sacredrootshh.com/products/white-sage",
    category: "Ritual Tools",
  },
  {
    name: "Abalone Shell",
    price: "$15",
    desc: "Natural iridescent shell for your smudging rituals.",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5744.jpg?v=1757176557&width=800",
    url: "https://sacredrootshh.com/products/abalone-shell",
    category: "Ritual Tools",
  },
  {
    name: "Bamboo Bathroom Set",
    price: "$11",
    desc: "Eco-friendly bamboo accessories for your space.",
    image: "https://sacredrootshh.com/cdn/shop/files/C39F7D2E-7788-4FD7-87B9-450567DD2832.jpg?v=1757098385&width=800",
    url: "https://sacredrootshh.com/products/bamboo-bathroom-accessories",
    category: "Home",
  },
];

const filters = ["All", "Crystals", "Body & Skincare", "Ritual Tools", "Home"];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-[72px]">
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
              <div className="product-card-image aspect-[4/5] mb-5 rounded-sm overflow-hidden bg-muted">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
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
    </div>
  );
};

export default Shop;
