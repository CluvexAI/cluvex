const features = [
  { icon: 'fa-bullseye', title: 'SEO & AEO Focused Strategy', desc: 'Built for search engines and AI-powered discovery from day one.' },
  { icon: 'fa-tachometer-alt', title: 'Fast Loading Speed', desc: 'Optimized performance that keeps visitors engaged and reduces bounce rates.' },
  { icon: 'fa-paint-brush', title: 'Modern UI/UX Design', desc: 'Sleek, intuitive interfaces that deliver exceptional user experiences.' },
  { icon: 'fa-mobile-alt', title: 'Mobile Responsive', desc: 'Seamless experiences across every device and screen size.' },
  { icon: 'fa-shield-alt', title: 'Secure & Scalable', desc: 'Enterprise-grade security with architecture that grows with your business.' },
  { icon: 'fa-chart-line', title: 'Conversion-Focused', desc: 'Every element optimized to turn visitors into loyal customers.' },
  { icon: 'fa-cubes', title: 'CMS Integration', desc: 'Easy content management so you stay in control of your site.' },
  { icon: 'fa-headset', title: 'Ongoing Support', desc: 'Reliable technical support to keep your website running smoothly.' },
];

export default function WhyChooseWeb() {
  return (
    <section className="why-choose-web">
      <div className="why-choose-web__overlay" />
      <div className="why-choose-web__bg" />
      <div className="container why-choose-web__content">
        <h2 className="why-choose-web__heading">Why Businesses Trust Our Web Design Expertise</h2>
        <div className="why-choose-web__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-web__card">
              <div className="why-choose-web__card-icon">
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
