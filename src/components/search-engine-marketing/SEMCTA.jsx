import { Link } from 'react-router-dom';

export default function SEMCTA() {
  return (
    <section className="sem-cta">
      <div className="container">
        <div className="sem-cta__inner">
          <h2>Ready To Get Instant Leads With Google Ads?</h2>
          <p>
            Let&rsquo;s build high-performing Search Engine Marketing campaigns that drive real customers to your business.
          </p>
          <Link to="/#contact" className="gold-btn gold-btn--large">
            Get Free Consultation <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
