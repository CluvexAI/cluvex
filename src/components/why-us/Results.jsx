const metrics = [
  'Higher Google Rankings',
  'Increased Organic Traffic',
  'Better Conversion Rates',
  'Improved Ad ROI',
  'Faster Website Performance',
  'Strong Brand Visibility',
];

export default function Results() {
  return (
    <section className="results">
      <div className="results__overlay" />
      <div className="results__bg" />
      <div className="container results__content">
        <h2>Proven Results That Drive Real Business Growth</h2>
        <div className="results__grid">
          {metrics.map((m, i) => (
            <div key={i} className="result-card">
              <i className="fas fa-check-circle" />
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
