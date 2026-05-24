import { Link } from 'react-router-dom';

export default function WhyHero() {
  return (
    <section className="why-hero">
      <div className="why-hero__overlay" />
      <div className="why-hero__bg" />
      <div className="container why-hero__content">
        <span className="why-hero__badge">WHY CHOOSE US</span>
        <h1 className="why-hero__title">
          We Deliver Results That Grow Your Business Online
        </h1>
        <p className="why-hero__subtitle">
          From web development to digital marketing, we help businesses achieve
          real growth through SEO, AI optimization, high-performance websites,
          and powerful ad campaigns.
        </p>
        <div className="why-hero__actions">
          <Link to="/#contact" className="gold-btn">
            Get Started <i className="fas fa-arrow-right" />
          </Link>
          <Link to="/about" className="gold-btn gold-btn--outline">
            Contact Us <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
