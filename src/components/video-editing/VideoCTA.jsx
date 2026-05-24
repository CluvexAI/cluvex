import { useNavigate } from 'react-router-dom';

export default function VideoCTA() {
  const navigate = useNavigate();
  return (
    <section className="video-cta">
      <div className="video-cta__overlay" />
      <div className="video-cta__bg" />
      <div className="container video-cta__content">
        <h2>Ready To Grow Your Brand With Professional Video Content?</h2>
        <p>Transform your marketing with creative video production, AI avatars, and high-converting social media content.</p>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Get Free Consultation <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
