export default function Vision() {
  return (
    <section className="vision section-padding">
      <div className="container">
        <div className="vision__grid">
          <div className="vision__visual">
            <div className="vision__image">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Our vision"
                loading="lazy"
              />
            </div>
            <div className="vision__shape vision__shape--1" />
            <div className="vision__shape vision__shape--2" />
          </div>
          <div className="vision__content">
            <span className="vision__label">OUR VISION</span>
            <h2>Our Vision</h2>
            <ul className="vision__list">
              <li><i className="fas fa-check-circle" /> Become a global digital solutions provider</li>
              <li><i className="fas fa-check-circle" /> Lead in AI-powered marketing systems</li>
              <li><i className="fas fa-check-circle" /> Deliver world-class web & app development</li>
              <li><i className="fas fa-check-circle" /> Empower businesses with automation</li>
              <li><i className="fas fa-check-circle" /> Build future-ready digital ecosystems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
