import { Link } from 'react-router-dom';

export default function SocialHero() {
  return (
    <section className="social-hero">
      <div className="social-hero__overlay" />
      <div className="social-hero__bg" />
      <div className="container social-hero__content">
        <span className="social-hero__badge">SOCIAL MEDIA GROWTH SOLUTIONS</span>
        <h1 className="social-hero__title">
          High-Performance Social Media Marketing That Builds Brands & Generates Leads
        </h1>
        <p className="social-hero__subtitle">
          We create powerful social media campaigns across Facebook, Instagram, LinkedIn, and more to increase engagement, drive traffic, and convert audiences into customers.
        </p>
        <div className="social-hero__actions">
          <Link to="/#contact" className="gold-btn">
            Start Campaign <i className="fas fa-arrow-right" />
          </Link>
          <Link to="/#contact" className="gold-btn gold-btn--outline">
            Get Free Strategy <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
