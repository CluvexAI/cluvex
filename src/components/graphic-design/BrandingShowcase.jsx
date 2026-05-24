import { useNavigate } from 'react-router-dom';

export default function BrandingShowcase() {
  const navigate = useNavigate();
  return (
    <section className="branding-showcase section-padding">
      <div className="container">
        <div className="branding-showcase__grid">
          <div className="branding-showcase__gallery">
            <div className="branding-showcase__image branding-showcase__image--main">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80"
                alt="Brand identity"
                loading="lazy"
              />
            </div>
            <div className="branding-showcase__image branding-showcase__image--side">
              <img
                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80"
                alt="Design mockup"
                loading="lazy"
              />
            </div>
          </div>
          <div className="branding-showcase__content">
            <span className="branding-showcase__label">BRANDING SHOWCASE</span>
            <h2>We Create Visual Identities That Customers Remember</h2>
            <p className="branding-showcase__text">
              Great branding is more than just a logo — it is the emotional connection customers feel with your business. We build cohesive visual systems that communicate your story, values, and personality across every touchpoint.
            </p>
            <ul className="branding-showcase__list">
              <li><i className="fas fa-check-circle" /> Emotional branding that resonates</li>
              <li><i className="fas fa-check-circle" /> Professional identity that commands trust</li>
              <li><i className="fas fa-check-circle" /> Market positioning that sets you apart</li>
              <li><i className="fas fa-check-circle" /> Consistent visuals across all platforms</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Start Your Brand Journey <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
