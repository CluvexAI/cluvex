import { useNavigate } from 'react-router-dom';

export default function WebIntro() {
  const navigate = useNavigate();
  return (
    <section className="web-intro section-padding">
      <div className="container">
        <div className="web-intro__grid">
          <div className="web-intro__content">
            <span className="web-intro__label">WHAT WE DO</span>
            <h2>Custom Websites Designed To Generate Leads and Sales</h2>
            <p className="web-intro__text">
              We build business-focused websites that do more than just look good. Every line of code is crafted to drive conversions, engage visitors, and deliver measurable growth for your brand.
            </p>
            <p className="web-intro__text">
              From user experience optimization to performance tuning, our web design solutions combine modern UI/UX standards with mobile responsiveness to create digital experiences that captivate and convert.
            </p>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Talk To Our Experts <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="web-intro__visual">
            <div className="web-intro__image">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80"
                alt="Web design dashboard"
                loading="lazy"
              />
            </div>
            <div className="web-intro__shape web-intro__shape--1" />
            <div className="web-intro__shape web-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
