import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <p className="font-heading text-xl italic text-foreground">Sacred Roots</p>
            <p className="body-text mt-3 text-sm">Heal From the Root Up</p>
            <a
              href="https://www.instagram.com/sacredroots.hh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-3 inline-block"
            >
              @sacredroots.hh
            </a>
          </div>

          {/* Centre */}
          <div>
            <p className="eyebrow mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/shop", label: "Shop" },
                { to: "/our-story", label: "Our Story" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="eyebrow mb-4">Join Us</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-1 focus:ring-primary rounded-full"
              />
              <button className="btn-primary text-xs px-5">Join</button>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Sacred Roots Holistic Healing · All rights reserved
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Apple Pay</span>
            <span>·</span>
            <span>Shop Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
