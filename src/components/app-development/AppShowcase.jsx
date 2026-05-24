import { useNavigate } from 'react-router-dom';

export default function AppShowcase() {
  const navigate = useNavigate();
  return (
    <section className="app-showcase section-padding">
      <div className="container">
        <div className="app-showcase__grid">
          <div className="app-showcase__visual">
            <div className="app-showcase__image">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                alt="App screens mockup"
                loading="lazy"
              />
            </div>
          </div>
          <div className="app-showcase__content">
            <span className="app-showcase__label">USER EXPERIENCE</span>
            <h2>Modern App Experiences Designed To Engage Users</h2>
            <p className="app-showcase__text">
              We craft applications that users love. Every interface is designed with a focus on clean UI/UX, performance optimization, and cross-platform compatibility to ensure maximum engagement and retention.
            </p>
            <ul className="app-showcase__list">
              <li><i className="fas fa-check-circle" /> Clean UI/UX design</li>
              <li><i className="fas fa-check-circle" /> Performance optimization</li>
              <li><i className="fas fa-check-circle" /> Cross-platform compatibility</li>
              <li><i className="fas fa-check-circle" /> Enterprise-grade security</li>
              <li><i className="fas fa-check-circle" /> User retention strategies</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Build Your App Today <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
