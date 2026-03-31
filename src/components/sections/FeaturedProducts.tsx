import FadeInSection from "@/components/FadeInSection";
import productRoller from "@/assets/product-roller-premium.jpg";
import productBracelet from "@/assets/product-bracelet-premium.jpg";
import productBottle from "@/assets/product-bottle-premium.jpg";
import productOil from "@/assets/product-oil-premium.jpg";

const products = [
  { name: "Rose Quartz Face Roller", price: "$24", tag: "Bestseller", image: productRoller },
  { name: "Healing Crystal Bracelet", price: "$10", tag: "New", image: productBracelet },
  { name: "Citrine Crystal Water Bottle", price: "$75", tag: "Premium", image: productBottle },
  { name: "Goddess Body Oil", price: "$45", tag: "Ritual", image: productOil },
];

const FeaturedProducts = () => (
  <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
      <div>
        <p className="eyebrow mb-4">Curated for You</p>
        <h2 className="heading-section">What's Calling<br className="hidden md:block" /> to You</h2>
      </div>
      <p className="body-text max-w-sm mt-4 md:mt-0">
        Each piece is chosen for its energy, beauty, and healing properties.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((p) => (
        <div key={p.name} className="product-card group">
          <div className="product-card-image aspect-[4/5] mb-5 rounded-sm overflow-hidden relative">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
            <span className="absolute top-4 left-4 eyebrow text-[9px] bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              {p.tag}
            </span>
          </div>
          <h3 className="heading-card text-lg">{p.name}</h3>
          <p className="text-sm text-muted-foreground mt-1.5">{p.price}</p>
          {/* SHOPIFY_BUTTON_PLACEHOLDER */}
          <button className="btn-outline text-[11px] mt-4 w-full py-2.5 px-4">Add to Cart</button>
        </div>
      ))}
    </div>
  </FadeInSection>
);

export default FeaturedProducts;
