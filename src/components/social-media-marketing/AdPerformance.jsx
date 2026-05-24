import { useNavigate } from 'react-router-dom';

export default function AdPerformance() {
  const navigate = useNavigate();

  return (
    <section className="ad-performance section-padding">
      <div className="container">
        <div className="ad-performance__grid">
          <div className="ad-performance__visual">
            <img
              src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Ad performance analytics"
              loading="lazy"
            />
          </div>
          <div className="ad-performance__content">
            <span className="ad-performance__label">PERFORMANCE PROOF</span>
            <h2>We Create Ads That Convert Views Into Customers</h2>
            <ul className="ad-performance__list">
              <li><i className="fas fa-check-circle" /> Conversion-focused ad creatives</li>
              <li><i className="fas fa-check-circle" /> Funnel-based marketing</li>
              <li><i className="fas fa-check-circle" /> Retargeting strategies</li>
              <li><i className="fas fa-check-circle" /> High CTR optimization</li>
              <li><i className="fas fa-check-circle" /> Landing page integration</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Launch Your Ad Campaign <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
