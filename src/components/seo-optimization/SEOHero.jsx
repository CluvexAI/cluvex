import { useNavigate } from 'react-router-dom';

export default function SEOHero() {
  const navigate = useNavigate();
  return (
    <section className="seo-hero">
      <div className="seo-hero__overlay" />
      <div className="seo-hero__bg" />
      <div className="container seo-hero__content">
        <span className="seo-hero__badge">SEARCH GROWTH SOLUTIONS</span>
        <h1 className="seo-hero__title">SEO &amp; AEO Optimization Services That Increase Visibility and Organic Growth</h1>
        <p className="seo-hero__subtitle">We help businesses rank higher on Google, optimize for AI-driven search engines, improve website performance, and generate sustainable organic traffic through advanced SEO and AEO strategies.</p>
        <div className="seo-hero__actions">
          <button className="gold-btn" onClick={() => navigate('/#contact')}>
            Start SEO Growth <i className="fas fa-arrow-right" />
          </button>
          <button className="outline-btn" onClick={() => navigate('/#contact')}>
            Free Website Audit <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </section>
  );
}
