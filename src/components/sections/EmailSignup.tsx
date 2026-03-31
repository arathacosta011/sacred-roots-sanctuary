import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  return (
    <FadeInSection>
      <section className="bg-muted/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Stay Connected</p>
            <h2 className="heading-section mb-5">Join the Sacred<br />Community</h2>
            <p className="body-text max-w-md">
              Get 10% off your first order, early access to new arrivals, and a free crystal healing guide.
            </p>
          </div>
          <div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground border border-border/60 outline-none focus:ring-1 focus:ring-primary/40 rounded-full transition-all duration-300"
              />
              <button className="btn-primary">Join Us</button>
            </div>
            <p className="text-[11px] text-muted-foreground/60 mt-4 ml-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default EmailSignup;
