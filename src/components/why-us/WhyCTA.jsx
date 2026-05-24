import { Link } from 'react-router-dom';

export default function WhyCTA() {
  return (
    <section className="why-cta">
      <div className="container">
        <div className="why-cta__inner">
          <h2>Ready To Grow Your Business With Us?</h2>
          <p>
            Let&rsquo;s build your digital success together with powerful websites,
            apps, SEO, and AI-driven marketing solutions.
          </p>
          <Link to="/#contact" className="gold-btn gold-btn--large">
            Get Free Consultation <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
