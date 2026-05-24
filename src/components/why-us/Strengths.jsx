const strengths = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Best Web & App Development',
    items: [
      'High-performance websites',
      'Scalable mobile applications',
      'Modern UI/UX design',
      'Secure architecture',
    ],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Best SEO & Google Ranking Results',
    items: [
      'Top Google rankings',
      'Organic traffic growth',
      'Technical SEO excellence',
      'AEO optimization for AI search',
    ],
  },
  {
    icon: 'fas fa-ad',
    title: 'Best Facebook & Ads Performance',
    items: [
      'High-converting ad campaigns',
      'ROI-focused marketing',
      'Targeted audience strategy',
      'Lead generation systems',
    ],
  },
  {
    icon: 'fas fa-robot',
    title: 'AI & Automation Solutions',
    items: [
      'AI calling systems',
      'WhatsApp automation',
      'AI video & content creation',
      'Smart business automation',
    ],
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Business Experience',
    items: [
      'UAE business clients',
      'International project delivery',
      'Multi-industry experience',
      'Scalable solutions',
    ],
  },
];

export default function Strengths() {
  return (
    <section className="strengths section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Why Businesses Trust <span>Us</span></h2>
        </div>
        <div className="strengths__grid">
          {strengths.map((s, i) => (
            <div key={i} className="strength-card">
              <div className="strength-card__icon">
                <i className={s.icon} />
              </div>
              <h3 className="strength-card__title">{s.title}</h3>
              <ul className="strength-card__list">
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
