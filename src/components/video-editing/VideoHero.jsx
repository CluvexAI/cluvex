import { useNavigate } from 'react-router-dom';

export default function VideoHero() {
  const navigate = useNavigate();
  return (
    <section className="video-hero">
      <div className="video-hero__overlay" />
      <div className="video-hero__bg" />
      <div className="container video-hero__content">
        <span className="video-hero__badge">CREATIVE VIDEO SOLUTIONS</span>
        <h1 className="video-hero__title">Professional Video Creation &amp; AI-Powered Editing Solutions</h1>
        <p className="video-hero__subtitle">We create engaging, high-converting videos using professional editing, AI-powered production, avatar technology, and multilingual content strategies for modern brands.</p>
        <div className="video-hero__actions">
          <button className="gold-btn" onClick={() => navigate('/#contact')}>
            Start Your Video Project <i className="fas fa-arrow-right" />
          </button>
          <button className="outline-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            View Portfolio <i className="fas fa-eye" />
          </button>
        </div>
      </div>
    </section>
  );
}
