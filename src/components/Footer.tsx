import { Link } from "react-router-dom";
import { Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-heading text-2xl italic text-foreground">Sacred Roots</p>
            <p className="body-text mt-3 text-sm max-w-xs">
              Rooted in nature, aligned with you. Holistic healing from La Jolla, California.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/sacredroots.hh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Instagram size={16} />
                @sacredroots.hh
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/shop", label: "Shop" },
                { to: "/our-story", label: "Our Story" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Shop</p>
            <div className="flex flex-col gap-3">
              <a href="https://sacredrootshh.com/collections/all" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">All Products</a>
              <a href="https://www.instagram.com/sacredroots.hh/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Instagram</a>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Get in Touch</Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Join the Community</p>
            <p className="text-sm text-muted-foreground mb-4">10% off your first order + a free crystal healing guide.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-muted/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground border border-border/60 outline-none focus:ring-1 focus:ring-primary/40 rounded-full transition-all duration-300"
              />
              <button className="btn-primary px-5 py-2.5 text-[12px]">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © 2025 Sacred Roots Holistic Healing · La Jolla, CA
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Apple Pay</span>
            <span>Shop Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
