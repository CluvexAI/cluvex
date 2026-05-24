const features = [
  'Proven ROI campaigns',
  'Expert ad strategists',
  'High-converting creatives',
  'Advanced targeting techniques',
  'Data-driven decisions',
  'Continuous optimization',
  'Multi-platform expertise',
];

export default function WhyChooseSocial() {
  return (
    <section className="why-choose-social section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Why Businesses Trust Our Social Media Marketing <span>Experts</span></h2>
        </div>
        <div className="why-choose-social__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-social__card">
              <i className="fas fa-check-circle" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
