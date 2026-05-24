import { Link } from 'react-router-dom';

export default function AboutIntro() {
  return (
    <section className="about-intro section-padding">
      <div className="container">
        <div className="about-intro__grid">
          <div className="about-intro__content">
            <span className="about-intro__label">WHO WE ARE</span>
            <h2>Want To Grow Your Business? <span>Take Our Hands!</span></h2>
            <p className="about-intro__text">
              At Cluvex Digital Solutions, we are passionate about helping businesses
              thrive in the digital landscape. With years of experience and a team of
              dedicated professionals, we deliver strategies that drive real growth,
              increase visibility, and maximize your return on investment.
            </p>
            <p className="about-intro__text">
              From startups to established enterprises, we tailor our approach to meet
              your unique needs and goals. Let us partner with you on your journey to
              digital success.
            </p>
            <Link to="/#contact" className="gold-btn">
              Contact Us <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="about-intro__visual">
            <div className="about-intro__image">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                alt="Business growth"
                loading="lazy"
              />
            </div>
            <div className="about-intro__shape about-intro__shape--1" />
            <div className="about-intro__shape about-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
