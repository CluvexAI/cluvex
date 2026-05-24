import { useNavigate } from 'react-router-dom';

export default function PerformanceSection() {
  const navigate = useNavigate();
  return (
    <section className="performance-section section-padding">
      <div className="container">
        <div className="performance-section__grid">
          <div className="performance-section__content">
            <span className="performance-section__label">PERFORMANCE & SEO</span>
            <h2>Websites Built For Speed, Visibility, and Growth</h2>
            <p className="performance-section__text">
              A high-performing website is the foundation of your digital success. We engineer every site to meet the highest standards of speed, security, and search visibility.
            </p>
            <ul className="performance-section__list">
              <li><i className="fas fa-check-circle" /> Core Web Vitals optimization</li>
              <li><i className="fas fa-check-circle" /> Technical SEO implementation</li>
              <li><i className="fas fa-check-circle" /> Schema markup integration</li>
              <li><i className="fas fa-check-circle" /> AI search readiness</li>
              <li><i className="fas fa-check-circle" /> Responsive frameworks</li>
              <li><i className="fas fa-check-circle" /> Security optimization</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Get Free Consultation <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="performance-section__visual">
            <div className="performance-section__image">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Performance dashboard"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
