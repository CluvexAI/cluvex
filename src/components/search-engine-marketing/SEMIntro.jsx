import { useNavigate } from 'react-router-dom';

export default function SEMIntro() {
  const navigate = useNavigate();

  return (
    <section className="sem-intro section-padding">
      <div className="container">
        <div className="sem-intro__grid">
          <div className="sem-intro__content">
            <span className="sem-intro__label">PAID SEARCH EXPERTS</span>
            <h2>Accelerate Your Business Growth With Paid Search Advertising</h2>
            <ul className="sem-intro__list">
              <li><i className="fas fa-check-circle" /> Instant Google visibility</li>
              <li><i className="fas fa-check-circle" /> Targeted traffic generation</li>
              <li><i className="fas fa-check-circle" /> High-conversion campaigns</li>
              <li><i className="fas fa-check-circle" /> ROI-focused advertising</li>
              <li><i className="fas fa-check-circle" /> Scalable paid marketing</li>
              <li><i className="fas fa-check-circle" /> Real-time performance tracking</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Talk To SEM Experts <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="sem-intro__visual">
            <div className="sem-intro__image">
              <img
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Google Ads dashboard"
                loading="lazy"
              />
            </div>
            <div className="sem-intro__shape sem-intro__shape--1" />
            <div className="sem-intro__shape sem-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
