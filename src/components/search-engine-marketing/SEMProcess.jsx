const steps = [
  { number: '01', label: 'Business Analysis & Goals' },
  { number: '02', label: 'Keyword & Market Research' },
  { number: '03', label: 'Campaign Structure Setup' },
  { number: '04', label: 'Ad Creative Development' },
  { number: '05', label: 'Launch & Optimization' },
  { number: '06', label: 'Performance Scaling' },
];

export default function SEMProcess() {
  return (
    <section className="sem-process section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our SEM <span>Process</span></h2>
        </div>
        <div className="sem-process__grid">
          {steps.map((s, i) => (
            <div key={i} className="sem-process-step">
              <span className="sem-process-step__number">{s.number}</span>
              <h3 className="sem-process-step__label">{s.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
