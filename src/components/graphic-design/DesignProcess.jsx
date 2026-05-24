const steps = [
  { icon: 'fa-search', title: 'Research & Strategy', desc: 'We analyze your brand, market, and goals to create a strategic design roadmap.' },
  { icon: 'fa-pencil-ruler', title: 'Concept Development', desc: 'Our designers brainstorm and sketch multiple creative concepts for your review.' },
  { icon: 'fa-palette', title: 'Creative Design', desc: 'We refine the chosen concept into polished, high-quality visual designs.' },
  { icon: 'fa-undo', title: 'Revisions & Feedback', desc: 'Your feedback shapes the final design through collaborative refinement rounds.' },
  { icon: 'fa-check-double', title: 'Final Delivery', desc: 'You receive print-ready and web-optimized files in all required formats.' },
];

export default function DesignProcess() {
  return (
    <section className="design-process section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Design Process</span></h2>
          <p>A proven workflow that ensures every project delivers excellence from concept to completion.</p>
        </div>
        <div className="design-process__timeline">
          {steps.map((s, i) => (
            <div key={i} className="design-process__step">
              <div className="design-process__step-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="design-process__step-content">
                <div className="design-process__step-icon">
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
