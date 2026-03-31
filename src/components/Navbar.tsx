import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/our-story", label: "Our Story" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-heading text-xl md:text-2xl italic text-foreground">
          Sacred Roots
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "text-foreground" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/shop" className="btn-primary text-xs">
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm z-40 animate-fade-in">
          <div className="flex flex-col items-start px-8 pt-10 gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-heading text-2xl text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/shop" className="btn-primary mt-4">
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
