import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "General", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      <FadeInSection className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — Form */}
          <div>
            <h1 className="heading-hero mb-4">Let's Connect</h1>
            <p className="body-text mb-10">Have a question? We'd love to hear from you.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="eyebrow block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-1 focus:ring-primary rounded-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-1 focus:ring-primary rounded-sm"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-muted px-4 py-3 text-sm text-foreground border-none outline-none focus:ring-1 focus:ring-primary rounded-sm appearance-none"
                >
                  <option>General</option>
                  <option>Order question</option>
                  <option>Wholesale inquiry</option>
                </select>
              </div>
              <div>
                <label className="eyebrow block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-1 focus:ring-primary rounded-sm resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Right — Info */}
          <div className="pt-0 md:pt-20">
            <div className="mb-10">
              <p className="eyebrow mb-3">Follow Us</p>
              <a
                href="https://www.instagram.com/sacredroots.hh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                @sacredroots.hh on Instagram
              </a>
            </div>

            <div className="mb-10">
              <p className="eyebrow mb-3">Response Time</p>
              <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
            </div>

            <div>
              <p className="body-text text-sm">
                Whether you're curious about a product, want to collaborate on a wholesale order, or just want to say hello — we're here. Sacred Roots is built on connection, and every message matters to us.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;
