import { useNavigate } from 'react-router-dom';

export default function VideoShowcase() {
  const navigate = useNavigate();
  return (
    <section className="video-showcase section-padding">
      <div className="container">
        <div className="video-showcase__grid">
          <div className="video-showcase__visual">
            <div className="video-showcase__image">
              <img
                src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Video production showcase"
                loading="lazy"
              />
            </div>
          </div>
          <div className="video-showcase__content">
            <span className="video-showcase__label">CREATIVE IMPACT</span>
            <h2>Creative Videos Designed To Increase Reach and Conversions</h2>
            <p className="video-showcase__text">
              Every video we produce is crafted with a strategic focus on engagement, retention, and conversion. Our content is optimized for social platforms, ad campaigns, and brand storytelling to maximize your marketing ROI.
            </p>
            <ul className="video-showcase__list">
              <li><i className="fas fa-check-circle" /> Social engagement & ad performance</li>
              <li><i className="fas fa-check-circle" /> Brand awareness & recognition</li>
              <li><i className="fas fa-check-circle" /> Audience retention strategies</li>
              <li><i className="fas fa-check-circle" /> Compelling visual storytelling</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Create Your Brand Video <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
