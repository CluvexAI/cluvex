const features = [
  { icon: 'fa-user-tie', title: 'Creative Expert Designers', desc: 'Skilled professionals with years of industry experience.' },
  { icon: 'fa-lightbulb', title: 'Unique Modern Concepts', desc: 'Fresh, innovative ideas tailored to your brand vision.' },
  { icon: 'fa-rocket', title: 'Fast Delivery', desc: 'Quick turnaround times without compromising on quality.' },
  { icon: 'fa-sync-alt', title: 'Unlimited Revisions', desc: 'We refine until you are completely satisfied.' },
  { icon: 'fa-bullseye', title: 'Brand-Focused Strategy', desc: 'Every design decision aligned with your brand goals.' },
  { icon: 'fa-trophy', title: 'High Quality Output', desc: 'Premium, print-ready and web-optimized deliverables.' },
];

export default function WhyChooseDesign() {
  return (
    <section className="why-choose-design">
      <div className="why-choose-design__overlay" />
      <div className="why-choose-design__bg" />
      <div className="container why-choose-design__content">
        <h2 className="why-choose-design__heading">Why Businesses Choose Our Graphic Design Services</h2>
        <div className="why-choose-design__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-design__card">
              <div className="why-choose-design__card-icon">
                <i className={`fas ${f.icon}`} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
