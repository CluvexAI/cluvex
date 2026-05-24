const features = [
  { icon: 'fa-cubes', title: 'Scalable Architecture', desc: 'Applications built to grow seamlessly with your business demands.' },
  { icon: 'fa-robot', title: 'AI-Powered Features', desc: 'Integrate intelligent automation and smart analytics into your apps.' },
  { icon: 'fa-paint-brush', title: 'Modern UI/UX Design', desc: 'Sleek, intuitive interfaces that deliver exceptional user experiences.' },
  { icon: 'fa-mobile-alt', title: 'Cross-Platform Compatibility', desc: 'Seamless experiences across iOS, Android, and web platforms.' },
  { icon: 'fa-shield-alt', title: 'Secure Development', desc: 'Enterprise-grade security protocols protecting your data and users.' },
  { icon: 'fa-tachometer-alt', title: 'Fast Performance', desc: 'Optimized code and infrastructure for lightning-fast app performance.' },
  { icon: 'fa-cloud', title: 'Cloud Integration', desc: 'Robust cloud backend services for reliable, scalable application hosting.' },
  { icon: 'fa-headset', title: 'Dedicated Support', desc: 'Round-the-clock technical support to keep your apps running smoothly.' },
];

export default function WhyChooseApps() {
  return (
    <section className="why-choose-apps">
      <div className="why-choose-apps__overlay" />
      <div className="why-choose-apps__bg" />
      <div className="container why-choose-apps__content">
        <h2 className="why-choose-apps__heading">Why Businesses Trust Our App Development Expertise</h2>
        <div className="why-choose-apps__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-apps__card">
              <div className="why-choose-apps__card-icon">
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
