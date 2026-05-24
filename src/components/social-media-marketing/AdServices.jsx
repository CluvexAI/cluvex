const services = [
  {
    icon: 'fab fa-facebook',
    title: 'Facebook Ads',
    items: [
      'Lead generation campaigns',
      'Retargeting ads',
      'Conversion optimization',
      'Pixel tracking setup',
    ],
  },
  {
    icon: 'fab fa-instagram',
    title: 'Instagram Ads',
    items: [
      'Story ads',
      'Reel promotions',
      'Influencer-style ads',
      'Brand awareness campaigns',
    ],
  },
  {
    icon: 'fab fa-linkedin',
    title: 'LinkedIn Ads',
    items: [
      'B2B lead generation',
      'Professional targeting',
      'Corporate branding campaigns',
      'Decision-maker outreach',
    ],
  },
  {
    icon: 'fas fa-pen-fancy',
    title: 'Content Creation for Social Media',
    items: [
      'Post designs',
      'Carousel ads',
      'Video creatives',
      'Engagement-focused content',
    ],
  },
  {
    icon: 'fas fa-bullseye',
    title: 'Paid Campaign Strategy',
    items: [
      'Ad funnel planning',
      'Budget optimization',
      'ROI-focused campaigns',
      'A/B testing strategies',
    ],
  },
  {
    icon: 'fas fa-users',
    title: 'Social Media Management',
    items: [
      'Account handling',
      'Posting schedules',
      'Community engagement',
      'Growth optimization',
    ],
  },
];

export default function AdServices() {
  return (
    <section className="ad-services section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our Social Media Advertising <span>Services</span></h2>
        </div>
        <div className="ad-services__grid">
          {services.map((s, i) => (
            <div key={i} className="ad-service-card">
              <div className="ad-service-card__icon">
                <i className={s.icon} />
              </div>
              <h3 className="ad-service-card__title">{s.title}</h3>
              <ul className="ad-service-card__list">
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
