const points = [
  'Immediate traffic generation',
  'High purchase intent users',
  'Scalable ad budgets',
  'Measurable ROI',
  'Precise targeting',
  'Faster business growth',
];

export default function WhySEMWorks() {
  return (
    <section className="why-sem-works">
      <div className="why-sem-works__overlay" />
      <div className="why-sem-works__bg" />
      <div className="container why-sem-works__content">
        <h2>Get Instant Visibility On Google With High-Intent Advertising</h2>
        <div className="why-sem-works__grid">
          {points.map((p, i) => (
            <div key={i} className="why-sem-works__item">
              <i className="fas fa-check-circle" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
