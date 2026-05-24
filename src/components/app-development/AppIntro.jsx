import { useNavigate } from 'react-router-dom';

export default function AppIntro() {
  const navigate = useNavigate();
  return (
    <section className="app-intro section-padding">
      <div className="container">
        <div className="app-intro__grid">
          <div className="app-intro__content">
            <span className="app-intro__label">WHO WE ARE</span>
            <h2>Powerful Applications Built For Performance, Automation, and Growth</h2>
            <p className="app-intro__text">
              We build business-focused applications designed to automate operations, enhance customer engagement, and accelerate growth. Every solution is engineered for performance, scalability, and seamless user experiences.
            </p>
            <p className="app-intro__text">
              From cross-platform mobile apps to AI-powered automation systems, our development expertise spans the full spectrum of modern application needs. We combine enterprise-grade architecture with intuitive interfaces to deliver digital products that drive real business outcomes.
            </p>
            <ul className="app-intro__list">
              <li><i className="fas fa-check-circle" /> Business-focused app development</li>
              <li><i className="fas fa-check-circle" /> Cross-platform solutions</li>
              <li><i className="fas fa-check-circle" /> User-friendly interfaces</li>
              <li><i className="fas fa-check-circle" /> Automation systems</li>
              <li><i className="fas fa-check-circle" /> AI-powered applications</li>
              <li><i className="fas fa-check-circle" /> Scalable architecture</li>
              <li><i className="fas fa-check-circle" /> Enterprise-grade performance</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Talk To Our Developers <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="app-intro__visual">
            <div className="app-intro__image">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
                alt="App development dashboard"
                loading="lazy"
              />
            </div>
            <div className="app-intro__shape app-intro__shape--1" />
            <div className="app-intro__shape app-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
