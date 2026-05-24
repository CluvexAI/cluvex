const steps = [
  { icon: 'fa-clipboard-list', title: 'Discovery & Planning', desc: 'We analyze your business goals, target audience, and competitors to create a strategic project roadmap.' },
  { icon: 'fa-drafting-compass', title: 'Wireframe & UI Design', desc: 'We design intuitive wireframes and stunning user interfaces that align with your brand identity.' },
  { icon: 'fa-code', title: 'Development & Optimization', desc: 'Our developers build a fast, secure, and scalable website using modern technologies.' },
  { icon: 'fa-chart-bar', title: 'SEO & AEO Implementation', desc: 'We optimize your site for search engines and AI-driven discovery platforms.' },
  { icon: 'fa-vial', title: 'Testing & Launch', desc: 'Rigorous testing across devices and browsers ensures a flawless launch.' },
  { icon: 'fa-wrench', title: 'Support & Maintenance', desc: 'Ongoing technical support and updates keep your website performing at its best.' },
];

export default function DevelopmentProcess() {
  return (
    <section className="development-process section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Web Development Process</span></h2>
          <p>A structured approach that delivers high-performance websites from concept to launch and beyond.</p>
        </div>
        <div className="development-process__timeline">
          {steps.map((s, i) => (
            <div key={i} className="development-process__step">
              <div className="development-process__step-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="development-process__step-content">
                <div className="development-process__step-icon">
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
