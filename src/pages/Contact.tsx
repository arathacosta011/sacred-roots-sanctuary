import { useState } from "react";
import { Instagram, MapPin, Clock } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-[72px]">
      <FadeInSection className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Form */}
          <div>
            <p className="eyebrow mb-4">Get in Touch</p>
            <h1 className="heading-hero mb-5">Let's Connect</h1>
            <p className="body-text mb-12 max-w-md">Have a question about a product, an order, or just want to say hello? We'd love to hear from you.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="eyebrow block mb-2.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border-b border-border outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border-b border-border outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2.5">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent px-0 py-3 text-sm text-foreground border-b border-border outline-none focus:border-primary transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option>General</option>
                  <option>Order question</option>
                  <option>Wholesale inquiry</option>
                </select>
              </div>
              <div>
                <label className="eyebrow block mb-2.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border-b border-border outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button type="submit" className="btn-primary mt-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="md:pt-32">
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">La Jolla, California</p>
                  <p className="text-sm text-muted-foreground">Based along the beautiful San Diego coastline</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground">We typically reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Follow Along</p>
                  <a
                    href="https://www.instagram.com/sacredroots.hh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    @sacredroots.hh on Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-border/40">
              <p className="body-text text-sm">
                Whether you're curious about a product, want to collaborate, or just want to share your healing journey — we're here. Sacred Roots is built on connection, and every message matters to us.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;
