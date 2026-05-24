import { useNavigate } from 'react-router-dom';

export default function WebHero() {
  const navigate = useNavigate();
  return (
    <section className="web-hero">
      <div className="web-hero__overlay" />
      <div className="web-hero__bg" />
      <div className="container web-hero__content">
        <span className="web-hero__badge">MODERN WEB SOLUTIONS</span>
        <h1 className="web-hero__title">SEO &amp; AEO Optimized Web Design That Drives Business Growth</h1>
        <p className="web-hero__subtitle">We create fast, responsive, conversion-focused websites designed for search engines, AI-driven search experiences, and paid advertising campaigns.</p>
        <div className="web-hero__actions">
          <button className="gold-btn" onClick={() => navigate('/#contact')}>
            Start Your Project <i className="fas fa-arrow-right" />
          </button>
          <button className="outline-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            View Portfolio <i className="fas fa-eye" />
          </button>
        </div>
      </div>
    </section>
  );
}
