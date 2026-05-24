import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="contact-cta__inner">
          <h2>Let&rsquo;s Build Something Great Together</h2>
          <p>
            Get in touch with our team for web, app, SEO, and AI-powered digital solutions.
          </p>
          <Link to="/#contact" className="gold-btn gold-btn--large">
            Get Free Consultation <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
