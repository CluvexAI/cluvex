import { Link } from 'react-router-dom';

export default function SEMHero() {
  return (
    <section className="sem-hero">
      <div className="sem-hero__overlay" />
      <div className="sem-hero__bg" />
      <div className="container sem-hero__content">
        <span className="sem-hero__badge">PERFORMANCE-DRIVEN ADVERTISING</span>
        <h1 className="sem-hero__title">
          Search Engine Marketing That Drives Instant Traffic, Leads & Sales
        </h1>
        <p className="sem-hero__subtitle">
          We create and manage high-performing Google Ads campaigns including Search Ads, Display Ads, and Local Ads to help your business get immediate visibility and measurable ROI.
        </p>
        <div className="sem-hero__actions">
          <Link to="/#contact" className="gold-btn">
            Start SEM Campaign <i className="fas fa-arrow-right" />
          </Link>
          <Link to="/#contact" className="gold-btn gold-btn--outline">
            Get Free Audit <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
