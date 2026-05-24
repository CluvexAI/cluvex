export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />
      <div className="hero__bg" />
      <div className="container hero__content">
        <div className="hero__badge">
          <i className="fas fa-medal" /> Premier Digital Agency
        </div>
        <h1 className="hero__title">
          DIGITAL MARKETING <br />
          SOLUTIONS IN <span>DUBAI</span>
        </h1>
        <p className="hero__subtitle">
          We help businesses grow with cutting-edge digital strategies, creative design,
          and data-driven marketing solutions that deliver real results.
        </p>
        <div className="hero__actions">
          <button className="gold-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started <i className="fas fa-arrow-right" />
          </button>
          <button className="outline-btn" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Our Services <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />
    </section>
  );
}
