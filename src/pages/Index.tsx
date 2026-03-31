import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

import heroImage from "@/assets/hero-image.jpg";
import productRoller from "@/assets/product-rose-quartz-roller.jpg";
import productBracelet from "@/assets/product-crystal-bracelet.jpg";
import productBottle from "@/assets/product-crystal-water-bottle.jpg";
import productOil from "@/assets/product-body-oil.jpg";
import philosophyImg from "@/assets/philosophy-image.jpg";
import catCrystals from "@/assets/category-crystals.jpg";
import catBody from "@/assets/category-body-ritual.jpg";
import catHome from "@/assets/category-home-sacred.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";
import { useState } from "react";

const featuredProducts = [
  { name: "Rose Quartz Face Roller", price: "$24", image: productRoller },
  { name: "Healing Crystal Bracelet", price: "$10", image: productBracelet },
  { name: "Citrine Crystal Water Bottle", price: "$75", image: productBottle },
  { name: "Goddess Body Oil", price: "$45", image: productOil },
];

const testimonials = [
  { quote: "These crystals have genuinely changed my morning routine. I feel more grounded every single day.", author: "Maya R." },
  { quote: "The packaging was so beautiful I almost didn't want to open it. The rose quartz roller is now my favourite thing I own.", author: "Jordan L." },
  { quote: "I've bought from a lot of wellness brands. Sacred Roots feels different — like it was made with actual love.", author: "Camille T." },
];

const instagramImages = [insta1, insta2, insta3, insta4, insta5, insta6];

const categories = [
  { name: "Crystals & Gemstones", image: catCrystals },
  { name: "Body & Ritual", image: catBody },
  { name: "Home & Sacred Space", image: catHome },
];

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-20">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-6">holistic healing — la jolla, ca</p>
            <h1 className="heading-hero mb-6">
              Rooted in Nature.<br />Aligned with You.
            </h1>
            <p className="body-text max-w-md mb-8">
              Crystals, ritual tools, and wellness products curated for your healing journey.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
              <Link to="/our-story" className="btn-secondary">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={heroImage}
              alt="Healing crystals arranged on sun-bleached sand with coastal ocean in background"
              className="w-full h-[50vh] md:h-[75vh] object-cover rounded-sm"
              width={1280}
              height={1280}
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* TRUST BAR */}
      <FadeInSection>
        <div className="border-y border-border py-5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Ethically Sourced", "Handpicked with Intention", "Secure Shopify Checkout", "Ships Nationwide"].map((item, i) => (
              <span key={i} className="eyebrow text-[11px]">
                {i > 0 && <span className="mr-6">·</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* FEATURED PRODUCTS */}
      <FadeInSection className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="heading-section mb-3">What's Calling to You</h2>
          <p className="body-text">Each piece is chosen for its energy, beauty, and healing properties.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <div key={p.name} className="product-card group">
              <div className="product-card-image aspect-square mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
              </div>
              <h3 className="heading-card">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.price}</p>
              {/* SHOPIFY_BUTTON_PLACEHOLDER */}
              <button className="btn-primary text-xs mt-3 w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* BRAND PHILOSOPHY */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={philosophyImg} alt="Hands holding healing crystals near the ocean" className="w-full h-[400px] md:h-[500px] object-cover rounded-sm" loading="lazy" width={960} height={1200} />
            </div>
            <div>
              <p className="eyebrow mb-4">our roots</p>
              <h2 className="heading-section mb-6">Healing That Starts From Within</h2>
              <p className="body-text mb-4">
                Sacred Roots was born from a belief that nature holds every answer we seek. We source each product with care, choosing pieces that carry real energy, real intention, and real results.
              </p>
              <p className="body-text mb-8">
                From the sun-soaked cliffs of La Jolla to your hands, every crystal and ritual tool is handpicked to support your journey inward.
              </p>
              <Link to="/our-story" className="btn-secondary">
                Meet the founder <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CATEGORIES */}
      <FadeInSection className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link to="/shop" key={cat.name} className="category-card group h-[300px] md:h-[400px] rounded-sm">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" loading="lazy" width={800} height={640} />
              <span className="absolute bottom-6 left-6 z-10 font-heading text-xl md:text-2xl text-primary-foreground">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </FadeInSection>

      {/* INSTAGRAM */}
      <FadeInSection className="py-16 md:py-24 text-center">
        <h2 className="heading-section mb-2">Follow the Journey</h2>
        <a
          href="https://www.instagram.com/sacredroots.hh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          @sacredroots.hh
        </a>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1 mt-10 max-w-6xl mx-auto px-6">
          {instagramImages.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/sacredroots.hh/"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group"
            >
              <img src={img} alt={`Sacred Roots Instagram ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={640} height={640} />
            </a>
          ))}
        </div>
        <a
          href="https://www.instagram.com/sacredroots.hh/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-8 inline-flex"
        >
          Follow on Instagram <ArrowRight size={16} />
        </a>
      </FadeInSection>

      {/* EMAIL SIGNUP */}
      <FadeInSection>
        <section className="bg-muted">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="heading-section mb-4">Join the Sacred Community</h2>
              <p className="body-text">
                Get 10% off your first order, early access to new arrivals, and a free crystal healing guide.
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-1 focus:ring-primary rounded-full"
                />
                <button className="btn-primary">Join Us</button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 ml-2">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* TESTIMONIALS */}
      <FadeInSection className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center md:text-left">
              <span className="font-heading text-5xl text-primary leading-none">"</span>
              <p className="body-text mt-2 mb-4 italic">{t.quote}</p>
              <p className="text-sm text-foreground font-medium">— {t.author}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Index;
