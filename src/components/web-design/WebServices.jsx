const services = [
  {
    icon: 'fa-search',
    title: 'SEO Optimized Web Design',
    items: ['Search engine friendly structure', 'Fast-loading pages', 'Technical SEO best practices', 'Mobile-first development'],
  },
  {
    icon: 'fa-robot',
    title: 'AEO Optimized Web Development',
    items: ['AI search optimization', 'Structured content architecture', 'Voice search readiness', 'Featured snippet optimization'],
  },
  {
    icon: 'fa-bullhorn',
    title: 'Landing Page Design',
    items: ['High-converting ad landing pages', 'Meta & Google Ads landing pages', 'Lead generation pages', 'Conversion optimization'],
  },
  {
    icon: 'fa-code',
    title: 'Customized Web Development',
    items: ['Tailor-made business websites', 'Custom functionality', 'Scalable development solutions', 'Business-specific features'],
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Responsive Website Design',
    items: ['Mobile optimized layouts', 'Tablet responsiveness', 'Cross-browser compatibility'],
  },
  {
    icon: 'fa-shopping-cart',
    title: 'E-Commerce Website Design',
    items: ['Online store setup', 'Product pages', 'Secure checkout systems', 'Shopping cart integration'],
  },
];

export default function WebServices() {
  return (
    <section className="web-services section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Web Design &amp; Development Services</span></h2>
          <p>End-to-end web solutions designed to grow your business and maximize your online presence.</p>
        </div>
        <div className="web-services__grid">
          {services.map((s, i) => (
            <div key={i} className="web-services__card">
              <div className="web-services__icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="web-services__title">{s.title}</h3>
              <ul className="web-services__list">
                {s.items.map((item, j) => (
                  <li key={j}><i className="fas fa-check-circle" /> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
