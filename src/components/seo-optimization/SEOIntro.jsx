import { useNavigate } from 'react-router-dom';

export default function SEOIntro() {
  const navigate = useNavigate();
  return (
    <section className="seo-intro section-padding">
      <div className="container">
        <div className="seo-intro__grid">
          <div className="seo-intro__content">
            <span className="seo-intro__label">WHO WE ARE</span>
            <h2>Smart SEO Strategies Designed For Search Engines and AI Search Platforms</h2>
            <p className="seo-intro__text">
              We develop comprehensive SEO and AEO strategies that drive organic growth, improve search visibility, and future-proof your online presence. Our approach combines traditional search optimization with cutting-edge AI search readiness.
            </p>
            <p className="seo-intro__text">
              From technical audits to content authority building, we optimize every aspect of your digital footprint to ensure maximum visibility across Google, AI assistants, and emerging search platforms.
            </p>
            <ul className="seo-intro__list">
              <li><i className="fas fa-check-circle" /> Organic search growth</li>
              <li><i className="fas fa-check-circle" /> AI search optimization</li>
              <li><i className="fas fa-check-circle" /> User intent targeting</li>
              <li><i className="fas fa-check-circle" /> Content authority building</li>
              <li><i className="fas fa-check-circle" /> Website performance optimization</li>
              <li><i className="fas fa-check-circle" /> Long-term ranking strategies</li>
              <li><i className="fas fa-check-circle" /> Future-ready optimization</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Talk To SEO Experts <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="seo-intro__visual">
            <div className="seo-intro__image">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80"
                alt="SEO analytics dashboard"
                loading="lazy"
              />
            </div>
            <div className="seo-intro__shape seo-intro__shape--1" />
            <div className="seo-intro__shape seo-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
