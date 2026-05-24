const features = [
  'Certified Google Ads experts',
  'High ROI campaigns',
  'Advanced keyword targeting',
  'Continuous optimization',
  'Transparent reporting',
  'Budget efficiency',
  'Conversion-focused strategy',
];

export default function WhyChooseSEM() {
  return (
    <section className="why-choose-sem section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Why Businesses Trust Our SEM <span>Experts</span></h2>
        </div>
        <div className="why-choose-sem__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-sem__card">
              <i className="fas fa-check-circle" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
