import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container">
        <div className="about-cta__inner">
          <div className="about-cta__text">
            <h2>Grow Your Business With Cluvex</h2>
            <p>Providing brilliant ideas for your business.</p>
          </div>
          <Link to="/#contact" className="gold-btn">
            Get An Appointment <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
