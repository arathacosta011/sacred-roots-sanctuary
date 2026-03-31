import FadeInSection from "@/components/FadeInSection";
import beefTallowImg from "@/assets/product-beef-tallow.png";

import mushroomImg from "@/assets/product-mushroom-nootropic.png";
import soapImg from "@/assets/product-soap.png";

const categories = [
  {
    name: "Beef Tallow",
    image: beefTallowImg,
    url: "https://sacredrootshh.com/collections/all",
  },
  {
    name: "Mushroom Nootropics",
    image: mushroomImg,
    url: "https://sacredrootshh.com/collections/all",
  },
  {
    name: "Soaps",
    image: soapImg,
    url: "https://sacredrootshh.com/collections/all",
  },
];

const Categories = () => (
  <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <a
          href={cat.url}
          target="_blank"
          rel="noopener noreferrer"
          key={cat.name}
          className="group flex flex-col items-center text-center"
        >
          <div className="aspect-square w-full rounded-sm bg-muted/30 flex items-center justify-center p-8 transition-shadow duration-300 group-hover:shadow-lg border border-border/40">
            <img
              src={cat.image}
              alt={cat.name}
              className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <span className="font-heading text-base md:text-lg text-foreground mt-4">{cat.name}</span>
        </a>
      ))}
    </div>
  </FadeInSection>
);

export default Categories;
