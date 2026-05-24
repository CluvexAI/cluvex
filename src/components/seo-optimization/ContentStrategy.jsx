import { useNavigate } from 'react-router-dom';

export default function ContentStrategy() {
  const navigate = useNavigate();
  return (
    <section className="content-strategy section-padding">
      <div className="container">
        <div className="content-strategy__grid">
          <div className="content-strategy__content">
            <span className="content-strategy__label">CONTENT AUTHORITY</span>
            <h2>Content Strategies That Build Authority and Organic Reach</h2>
            <p className="content-strategy__text">
              Content is the foundation of search visibility. We develop comprehensive content strategies that establish your brand as an authority, target user intent, and optimize for both traditional search engines and AI-driven discovery.
            </p>
            <ul className="content-strategy__list">
              <li><i className="fas fa-check-circle" /> Strategic content marketing</li>
              <li><i className="fas fa-check-circle" /> Topic cluster architecture</li>
              <li><i className="fas fa-check-circle" /> AI-readable content formatting</li>
              <li><i className="fas fa-check-circle" /> User intent optimization</li>
              <li><i className="fas fa-check-circle" /> Educational content strategy</li>
              <li><i className="fas fa-check-circle" /> Search visibility expansion</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Build Your Content Strategy <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="content-strategy__visual">
            <div className="content-strategy__image">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
                alt="Content strategy planning"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
