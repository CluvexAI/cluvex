import { useNavigate } from 'react-router-dom';

export default function TechnicalSEO() {
  const navigate = useNavigate();
  return (
    <section className="technical-seo section-padding">
      <div className="container">
        <div className="technical-seo__grid">
          <div className="technical-seo__visual">
            <div className="technical-seo__image">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Website performance analytics"
                loading="lazy"
              />
            </div>
          </div>
          <div className="technical-seo__content">
            <span className="technical-seo__label">PERFORMANCE & TECH</span>
            <h2>Fast, Technically Optimized Websites That Search Engines Prefer</h2>
            <p className="technical-seo__text">
              A technically sound website is the foundation of every successful SEO strategy. We optimize your site's architecture, speed, and technical health to ensure maximum crawlability, indexability, and search engine preference.
            </p>
            <ul className="technical-seo__list">
              <li><i className="fas fa-check-circle" /> Core Web Vitals optimization</li>
              <li><i className="fas fa-check-circle" /> Page speed & performance tuning</li>
              <li><i className="fas fa-check-circle" /> Technical health audits</li>
              <li><i className="fas fa-check-circle" /> Mobile-first indexing readiness</li>
              <li><i className="fas fa-check-circle" /> Clean semantic architecture</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Optimize Your Website <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
