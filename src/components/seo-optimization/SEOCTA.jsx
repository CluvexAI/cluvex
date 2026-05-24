import { useNavigate } from 'react-router-dom';

export default function SEOCTA() {
  const navigate = useNavigate();
  return (
    <section className="seo-cta">
      <div className="seo-cta__overlay" />
      <div className="seo-cta__bg" />
      <div className="container seo-cta__content">
        <h2>Ready To Grow Your Organic Traffic and AI Search Visibility?</h2>
        <p>Partner with our SEO and AEO specialists to improve rankings, drive organic traffic, and future-proof your online visibility.</p>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Get Free SEO Audit <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
