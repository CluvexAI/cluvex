const points = [
  'Highly targeted audience reach',
  'Fast brand visibility',
  'Cost-effective lead generation',
  'Measurable ROI',
  'Scalable growth campaigns',
  'Real-time performance tracking',
];

export default function WhySocialWorks() {
  return (
    <section className="why-social-works">
      <div className="why-social-works__overlay" />
      <div className="why-social-works__bg" />
      <div className="container why-social-works__content">
        <h2>Turn Social Media Into A Powerful Revenue Engine</h2>
        <div className="why-social-works__grid">
          {points.map((p, i) => (
            <div key={i} className="why-social-works__item">
              <i className="fas fa-check-circle" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
