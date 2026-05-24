const steps = [
  { number: '01', label: 'Business Analysis' },
  { number: '02', label: 'Audience Research' },
  { number: '03', label: 'Creative Development' },
  { number: '04', label: 'Campaign Setup' },
  { number: '05', label: 'Optimization & Testing' },
  { number: '06', label: 'Scaling & Reporting' },
];

export default function MarketingProcess() {
  return (
    <section className="marketing-process section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our Marketing <span>Process</span></h2>
        </div>
        <div className="marketing-process__grid">
          {steps.map((s, i) => (
            <div key={i} className="process-step">
              <span className="process-step__number">{s.number}</span>
              <h3 className="process-step__label">{s.label}</h3>
              {i < steps.length - 1 && <div className="process-step__line" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
