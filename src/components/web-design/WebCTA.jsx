import { useNavigate } from 'react-router-dom';

export default function WebCTA() {
  const navigate = useNavigate();
  return (
    <section className="web-cta">
      <div className="web-cta__overlay" />
      <div className="web-cta__bg" />
      <div className="container web-cta__content">
        <h2>Ready To Build A Website That Converts Visitors Into Customers?</h2>
        <p>Partner with our web experts to create a high-performing website tailored to your business goals.</p>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Get Free Consultation <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
