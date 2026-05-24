import { useNavigate } from 'react-router-dom';

export default function GraphicHero() {
  const navigate = useNavigate();
  return (
    <section className="graphic-hero">
      <div className="graphic-hero__overlay" />
      <div className="graphic-hero__bg" />
      <div className="container graphic-hero__content">
        <span className="graphic-hero__badge">CREATIVE DESIGN SERVICES</span>
        <h1 className="graphic-hero__title">Graphic Design Solutions That Build Powerful Brands</h1>
        <p className="graphic-hero__subtitle">Creative and impactful graphic design services to help your business stand out, attract customers, and grow faster.</p>
        <div className="graphic-hero__actions">
          <button className="gold-btn" onClick={() => navigate('/#contact')}>
            Get Started <i className="fas fa-arrow-right" />
          </button>
          <button className="outline-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            View Portfolio <i className="fas fa-eye" />
          </button>
        </div>
      </div>
    </section>
  );
}
