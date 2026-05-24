export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Why <span>Cluvex</span> Digital</h2>
          <p>We are a full-service digital marketing agency dedicated to transforming your online presence.</p>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <h3>Your Trusted Digital Growth Partner</h3>
            <p className="about__text">
              At Cluvex, we combine creativity with technology to deliver marketing solutions
              that drive measurable growth. Our team of experts specializes in crafting
              customized strategies that elevate brands and maximize ROI.
            </p>
            <ul className="about__list">
              <li>
                <i className="fas fa-check-circle" />
                <span>Strategic digital marketing tailored to your goals</span>
              </li>
              <li>
                <i className="fas fa-check-circle" />
                <span>Innovative web design &amp; development solutions</span>
              </li>
              <li>
                <i className="fas fa-check-circle" />
                <span>SEO optimization that boosts organic visibility</span>
              </li>
              <li>
                <i className="fas fa-check-circle" />
                <span>Dedicated support &amp; transparent reporting</span>
              </li>
            </ul>
            <button className="gold-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More <i className="fas fa-arrow-right" />
            </button>
          </div>

          <div className="about__visual">
            <div className="about__image-wrapper">
              <div className="about__image">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Business professional"
                  loading="lazy"
                />
              </div>
              <div className="about__feature-card about__feature-card--1">
                <i className="fas fa-chart-pie" />
                <div>
                  <strong>Analytics</strong>
                  <span>Real-time data</span>
                </div>
              </div>
              <div className="about__feature-card about__feature-card--2">
                <i className="fas fa-rocket" />
                <div>
                  <strong>Growth</strong>
                  <span>+245% avg</span>
                </div>
              </div>
              <div className="about__shape about__shape--1" />
              <div className="about__shape about__shape--2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
