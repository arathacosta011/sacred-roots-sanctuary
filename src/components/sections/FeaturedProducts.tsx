import FadeInSection from "@/components/FadeInSection";

const products = [
  {
    name: "Quartz Face Roller",
    price: "$24",
    tag: "Bestseller",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5769.webp?v=1757188727&width=1946",
    url: "https://sacredrootshh.com/products/quartz-face-roller",
  },
  {
    name: "Crystal Bracelet",
    price: "$10",
    tag: "New",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5790.webp?v=1757199570&width=1946",
    url: "https://sacredrootshh.com/products/crystal-bracelet",
  },
  {
    name: "Smudge Kit",
    price: "$28",
    tag: "Ritual",
    image: "https://sacredrootshh.com/cdn/shop/files/white-sage-palo-santo-with-crystal-set-671027_2400x_3cbd7046-72b0-4c7e-be7f-936681fbf242.webp?v=1757178026&width=1946",
    url: "https://sacredrootshh.com/products/palo-santo",
  },
  {
    name: "Selenite Lamp",
    price: "$95",
    tag: "Premium",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5770.webp?v=1757188827&width=1946",
    url: "https://sacredrootshh.com/products/salentine-lamp",
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
          <div className="product-card-image aspect-[4/5] mb-5 rounded-sm overflow-hidden relative bg-muted">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={1200} height={1500} />
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
