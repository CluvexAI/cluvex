const steps = [
  { icon: 'fa-search', title: 'Business Analysis', desc: 'We analyze your business goals, target audience, and market to define a clear app strategy.' },
  { icon: 'fa-paint-brush', title: 'UI/UX Design', desc: 'We design intuitive wireframes and stunning interfaces that align with your brand and vision.' },
  { icon: 'fa-sitemap', title: 'App Architecture Planning', desc: 'We architect scalable, secure, and high-performance app infrastructure tailored to your needs.' },
  { icon: 'fa-code', title: 'Development & Integration', desc: 'Our experts build your app with modern technologies and integrate essential business tools.' },
  { icon: 'fa-vial', title: 'Testing & Optimization', desc: 'Rigorous quality assurance ensures a bug-free, optimized experience across all devices.' },
  { icon: 'fa-rocket', title: 'Deployment & Support', desc: 'We launch your app to the stores and provide ongoing support to ensure long-term success.' },
];

export default function DevelopmentProcess() {
  return (
    <section className="app-dev-process section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>App Development Process</span></h2>
          <p>A structured, end-to-end approach to delivering high-quality applications from concept to launch.</p>
        </div>
        <div className="app-dev-process__timeline">
          {steps.map((s, i) => (
            <div key={i} className="app-dev-process__step">
              <div className="app-dev-process__step-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="app-dev-process__step-content">
                <div className="app-dev-process__step-icon">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
