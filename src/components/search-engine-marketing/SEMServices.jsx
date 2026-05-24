const services = [
  {
    icon: 'fab fa-google',
    title: 'Google Paid Ads',
    items: [
      'High-intent keyword targeting',
      'Conversion-focused campaigns',
      'Budget optimization',
      'ROI tracking',
    ],
  },
  {
    icon: 'fas fa-search',
    title: 'Search Ads',
    items: [
      'Text-based Google search ads',
      'Keyword bidding strategy',
      'Lead generation ads',
      'Click optimization',
    ],
  },
  {
    icon: 'fas fa-images',
    title: 'Display Ads',
    items: [
      'Banner advertising across Google network',
      'Brand awareness campaigns',
      'Retargeting strategies',
      'Visual ad creatives',
    ],
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Local Ads',
    items: [
      'Google Maps advertising',
      'Location-based targeting',
      'Local business promotion',
      'Foot traffic generation',
    ],
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Campaign Creation',
    items: [
      'Strategy planning',
      'Keyword research',
      'Audience targeting',
      'Ad structure setup',
    ],
  },
  {
    icon: 'fas fa-sliders-h',
    title: 'Campaign Management',
    items: [
      'Continuous optimization',
      'A/B testing',
      'Performance tracking',
      'Budget management',
    ],
  },
  {
    icon: 'fas fa-sync-alt',
    title: 'Remarketing Campaigns',
    items: [
      'Re-target website visitors',
      'Conversion recovery',
      'Dynamic ad personalization',
    ],
  },
  {
    icon: 'fas fa-chart-simple',
    title: 'Conversion Optimization',
    items: [
      'Landing page alignment',
      'Funnel optimization',
      'CTR improvement strategies',
    ],
  },
];

export default function SEMServices() {
  return (
    <section className="sem-services section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our Search Engine Marketing <span>Services</span></h2>
        </div>
        <div className="sem-services__grid">
          {services.map((s, i) => (
            <div key={i} className="sem-service-card">
              <div className="sem-service-card__icon">
                <i className={s.icon} />
              </div>
              <h3 className="sem-service-card__title">{s.title}</h3>
              <ul className="sem-service-card__list">
                {s.items.map((item, j) => (
                  <li key={j}><i className="fas fa-check" /> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
