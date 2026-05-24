import { Link } from 'react-router-dom';

export default function SocialCTA() {
  return (
    <section className="social-cta">
      <div className="container">
        <div className="social-cta__inner">
          <h2>Ready To Scale Your Business With Social Media Ads?</h2>
          <p>
            Let&rsquo;s create powerful campaigns on Facebook, Instagram, and LinkedIn that bring real results.
          </p>
          <Link to="/#contact" className="gold-btn gold-btn--large">
            Get Free Consultation <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
