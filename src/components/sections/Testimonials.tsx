import FadeInSection from "@/components/FadeInSection";

const testimonials = [
  { quote: "These crystals have genuinely changed my morning routine. I feel more grounded every single day.", author: "Maya R.", detail: "Verified Customer" },
  { quote: "The packaging was so beautiful I almost didn't want to open it. The rose quartz roller is now my favourite thing I own.", author: "Jordan L.", detail: "La Jolla, CA" },
  { quote: "I've bought from a lot of wellness brands. Sacred Roots feels different — like it was made with actual love.", author: "Camille T.", detail: "Verified Customer" },
];

const Testimonials = () => (
  <FadeInSection className="border-t border-border/40">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
      <p className="eyebrow text-center mb-4">What Our Community Says</p>
      <h2 className="heading-section text-center mb-16">Real Stories, Real Energy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            <span className="font-heading text-6xl text-primary/30 leading-none block mb-2">"</span>
            <p className="body-text italic mb-6 text-foreground/80">{t.quote}</p>
            <p className="text-sm font-medium text-foreground">— {t.author}</p>
            <p className="text-[11px] text-muted-foreground/60 mt-1">{t.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </FadeInSection>
);

export default Testimonials;
