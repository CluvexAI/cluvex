import { useNavigate } from 'react-router-dom';

export default function AppCTA() {
  const navigate = useNavigate();
  return (
    <section className="app-cta">
      <div className="app-cta__overlay" />
      <div className="app-cta__bg" />
      <div className="container app-cta__content">
        <h2>Ready To Launch Your Next App Project?</h2>
        <p>Transform your ideas into high-performing digital applications with our expert app development solutions.</p>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Get Free Consultation <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
