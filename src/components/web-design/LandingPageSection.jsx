import { useNavigate } from 'react-router-dom';

export default function LandingPageSection() {
  const navigate = useNavigate();
  return (
    <section className="landing-page-section section-padding">
      <div className="container">
        <div className="landing-page-section__grid">
          <div className="landing-page-section__visual">
            <div className="landing-page-section__image">
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&q=80"
                alt="Landing page design"
                loading="lazy"
              />
            </div>
          </div>
          <div className="landing-page-section__content">
            <span className="landing-page-section__label">AD CAMPAIGNS</span>
            <h2>High-Converting Landing Pages Built For Paid Ads</h2>
            <p className="landing-page-section__text">
              Maximize your ad spend with landing pages designed specifically for Google Ads, Meta/Facebook campaigns, and other paid channels. Every element is optimized to turn clicks into customers.
            </p>
            <ul className="landing-page-section__list">
              <li><i className="fas fa-check-circle" /> Google Ads landing pages</li>
              <li><i className="fas fa-check-circle" /> Meta/Facebook ad pages</li>
              <li><i className="fas fa-check-circle" /> CTA optimization</li>
              <li><i className="fas fa-check-circle" /> Funnel-focused layouts</li>
              <li><i className="fas fa-check-circle" /> Lead capture forms</li>
              <li><i className="fas fa-check-circle" /> Conversion tracking integration</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Launch Your Campaign <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
