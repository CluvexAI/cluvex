import { Link } from 'react-router-dom';

export default function AboutGrowth() {
  return (
    <section className="about-growth">
      <div className="about-growth__overlay" />
      <div className="about-growth__bg" />
      <div className="container about-growth__content">
        <h2>
          We Create Sales, Leads, and New Business Opportunities for Our Clients.
        </h2>
        <p>
          Our proven strategies combine creative marketing with data-driven insights
          to deliver measurable results that transform your business.
        </p>
        <Link to="/#services" className="gold-btn">
          Discover More <i className="fas fa-arrow-right" />
        </Link>
      </div>
    </section>
  );
}
