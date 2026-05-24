const differentiators = [
  'Strategy-driven approach',
  'AI + human creativity combined',
  'Performance-focused execution',
  'Transparent communication',
  'Long-term growth mindset',
];

export default function Comparison() {
  return (
    <section className="comparison section-padding">
      <div className="container">
        <div className="comparison__grid">
          <div className="comparison__content">
            <span className="comparison__label">WHY US</span>
            <h2>What Makes Us Different?</h2>
            <ul className="comparison__list">
              {differentiators.map((d, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="comparison__visual">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              alt="Success dashboard"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
