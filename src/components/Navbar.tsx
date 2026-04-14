import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: "Home" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
        <Link to="/" className="font-heading text-2xl md:text-[26px] italic text-foreground tracking-wide">
          Sacred Roots
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "text-foreground" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://www.instagram.com/sacredroots.hh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-foreground transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://sacredrootshh.com/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[12px] px-6 py-2.5"
          >
            Shop Now
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/[0.98] backdrop-blur-md z-40">
          <div className="flex flex-col items-start px-8 pt-12 gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-heading text-3xl text-foreground tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://sacredrootshh.com/collections/all"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Shop Now
              </a>
              <a
                href="https://www.instagram.com/sacredroots.hh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
