import { useNavigate } from 'react-router-dom';

export default function GraphicCTA() {
  const navigate = useNavigate();
  return (
    <section className="graphic-cta">
      <div className="graphic-cta__overlay" />
      <div className="graphic-cta__bg" />
      <div className="container graphic-cta__content">
        <h2>Ready To Transform Your Brand With Stunning Design?</h2>
        <p>Let our creative experts design visuals that leave lasting impressions.</p>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Get Free Consultation <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
