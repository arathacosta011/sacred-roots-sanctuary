import FadeInSection from "@/components/FadeInSection";

const items = ["Ethically Sourced", "Handpicked with Intention", "Secure Checkout", "Ships Nationwide"];

const TrustBar = () => (
  <FadeInSection>
    <div className="border-y border-border/50 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="eyebrow text-[10px] text-muted-foreground/70">
            {i > 0 && <span className="mr-8 text-border">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  </FadeInSection>
);

export default TrustBar;
