import { useNavigate } from 'react-router-dom';

export default function DesignIntro() {
  const navigate = useNavigate();
  return (
    <section className="design-intro section-padding">
      <div className="container">
        <div className="design-intro__grid">
          <div className="design-intro__content">
            <span className="design-intro__label">WHO WE ARE</span>
            <h2>Designs That Communicate, Engage, and Convert</h2>
            <p className="design-intro__text">
              We craft brand identities that speak volumes. From logo design to full visual identity systems, our creative team blends strategic thinking with artistic excellence to deliver designs that leave lasting impressions.
            </p>
            <p className="design-intro__text">
              Whether you need a complete brand overhaul or targeted marketing creatives, we bring your vision to life with precision, passion, and purpose-driven design that drives real business results.
            </p>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Talk To Our Designers <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="design-intro__visual">
            <div className="design-intro__image">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
                alt="Branding mockup"
                loading="lazy"
              />
            </div>
            <div className="design-intro__shape design-intro__shape--1" />
            <div className="design-intro__shape design-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
