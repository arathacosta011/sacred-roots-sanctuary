import FadeInSection from "@/components/FadeInSection";
import beefTallowImg from "@/assets/product-beef-tallow.png";

import mushroomImg from "@/assets/product-mushroom-nootropic.png";
import soapImg from "@/assets/product-soap.png";

const products = [
  {
    name: "Raw Beef Tallow",
    price: "$32",
    tag: "Bestseller",
    image: beefTallowImg,
    url: "https://sacredrootshh.com/collections/all",
  },
  {
    name: "Sacred Mycelium",
    price: "$45",
    tag: "Nootropic",
    image: mushroomImg,
    url: "https://sacredrootshh.com/collections/all",
  },
  {
    name: "Botanical Soap",
    price: "$14",
    tag: "Handmade",
    image: soapImg,
    url: "https://sacredrootshh.com/collections/all",
  },
];

const FeaturedProducts = () => (
  <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
      <div>
        <p className="eyebrow mb-4">Curated for You</p>
        <h2 className="heading-section">What's Calling<br className="hidden md:block" /> to You</h2>
      </div>
      <a
        href="https://sacredrootshh.com/collections/all"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-4 md:mt-0"
      >
        View All Products <span className="text-xs">→</span>
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card group block"
        >
          <div className="product-card-image aspect-square mb-5 rounded-sm overflow-hidden relative bg-muted/30 flex items-center justify-center p-6">
            <img
              src={p.image}
              alt={p.name}
              className="max-w-full max-h-full object-contain drop-shadow-md"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <span className="absolute top-4 left-4 eyebrow text-[9px] bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              {p.tag}
            </span>
          </div>
          <h3 className="heading-card text-lg">{p.name}</h3>
          <p className="text-sm text-muted-foreground mt-1.5">{p.price}</p>
          <span className="btn-outline text-[11px] mt-4 w-full py-2.5 px-4 block text-center">Shop Now</span>
        </a>
      ))}
    </div>
  </FadeInSection>
);

export default FeaturedProducts;
