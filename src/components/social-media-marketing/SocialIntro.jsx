import { useNavigate } from 'react-router-dom';

export default function SocialIntro() {
  const navigate = useNavigate();

  return (
    <section className="social-intro section-padding">
      <div className="container">
        <div className="social-intro__grid">
          <div className="social-intro__content">
            <span className="social-intro__label">STRATEGY FIRST</span>
            <h2>Grow Your Business With Data-Driven Social Media Marketing</h2>
            <ul className="social-intro__list">
              <li><i className="fas fa-check-circle" /> Brand awareness growth</li>
              <li><i className="fas fa-check-circle" /> Lead generation strategies</li>
              <li><i className="fas fa-check-circle" /> Audience targeting</li>
              <li><i className="fas fa-check-circle" /> Paid ad optimization</li>
              <li><i className="fas fa-check-circle" /> Content strategy</li>
              <li><i className="fas fa-check-circle" /> Conversion-focused marketing</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Talk To Our Marketing Experts <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="social-intro__visual">
            <div className="social-intro__image">
              <img
                src="https://images.pexels.com/photos/6077814/pexels-photo-6077814.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Social media marketing analytics"
                loading="lazy"
              />
            </div>
            <div className="social-intro__shape social-intro__shape--1" />
            <div className="social-intro__shape social-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
