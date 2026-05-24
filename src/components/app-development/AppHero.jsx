import { useNavigate } from 'react-router-dom';

export default function AppHero() {
  const navigate = useNavigate();
  return (
    <section className="app-hero">
      <div className="app-hero__overlay" />
      <div className="app-hero__bg" />
      <div className="container app-hero__content">
        <span className="app-hero__badge">SMART DIGITAL SOLUTIONS</span>
        <h1 className="app-hero__title">Custom App Development Solutions For Modern Businesses</h1>
        <p className="app-hero__subtitle">We build scalable, feature-rich, AI-powered mobile and web applications designed to automate operations, improve customer engagement, and accelerate business growth.</p>
        <div className="app-hero__actions">
          <button className="gold-btn" onClick={() => navigate('/#contact')}>
            Start Your App Project <i className="fas fa-arrow-right" />
          </button>
          <button className="outline-btn" onClick={() => navigate('/#contact')}>
            Request Consultation <i className="fas fa-phone" />
          </button>
        </div>
      </div>
    </section>
  );
}
