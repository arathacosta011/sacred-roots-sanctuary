import FadeInSection from "@/components/FadeInSection";

const categories = [
  {
    name: "Crystals & Gemstones",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5797.webp?v=1757200231&width=800",
    url: "https://sacredrootshh.com/collections/all",
  },
  {
    name: "Body & Ritual",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5799.jpg?v=1757201789&width=800",
    url: "https://sacredrootshh.com/collections/all",
  },
  {
    name: "Home & Sacred Space",
    image: "https://sacredrootshh.com/cdn/shop/files/IMG-5770.webp?v=1757188827&width=800",
    url: "https://sacredrootshh.com/collections/all",
  },
];

const Categories = () => (
  <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <a
          href={cat.url}
          target="_blank"
          rel="noopener noreferrer"
          key={cat.name}
          className="category-card group h-[350px] md:h-[450px] rounded-sm"
        >
          <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
          <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
            <span className="font-heading text-xl md:text-2xl text-background">{cat.name}</span>
          </div>
        </a>
      ))}
    </div>
  </FadeInSection>
);

export default Categories;
