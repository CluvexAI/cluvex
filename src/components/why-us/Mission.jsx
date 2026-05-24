export default function Mission() {
  return (
    <section className="mission section-padding">
      <div className="container">
        <div className="mission__grid">
          <div className="mission__content">
            <span className="mission__label">OUR MISSION</span>
            <h2>Our Mission</h2>
            <ul className="mission__list">
              <li><i className="fas fa-check-circle" /> Help businesses grow digitally</li>
              <li><i className="fas fa-check-circle" /> Deliver high-quality web & app solutions</li>
              <li><i className="fas fa-check-circle" /> Provide AI-powered marketing systems</li>
              <li><i className="fas fa-check-circle" /> Improve online visibility and conversions</li>
              <li><i className="fas fa-check-circle" /> Build long-term client success</li>
            </ul>
          </div>
          <div className="mission__visual">
            <div className="mission__image">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                alt="Our mission"
                loading="lazy"
              />
            </div>
            <div className="mission__shape mission__shape--1" />
            <div className="mission__shape mission__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
