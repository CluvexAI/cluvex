import { useNavigate } from 'react-router-dom';

export default function AISEOHighlight() {
  const navigate = useNavigate();
  return (
    <section className="ai-seo-highlight">
      <div className="ai-seo-highlight__overlay" />
      <div className="ai-seo-highlight__bg" />
      <div className="container ai-seo-highlight__content">
        <h2 className="ai-seo-highlight__heading">Optimize Your Website For Google Search and AI-Powered Discovery</h2>
        <p className="ai-seo-highlight__text">
          As search evolves with AI, your website needs to be optimized for both traditional search engines and AI-driven discovery platforms. We prepare your content for LLMs, answer engines, and voice search while maintaining strong Google rankings.
        </p>
        <ul className="ai-seo-highlight__list">
          <li><i className="fas fa-check-circle" /> AI search evolution readiness</li>
          <li><i className="fas fa-check-circle" /> LLM indexing optimization</li>
          <li><i className="fas fa-check-circle" /> Answer engine optimization</li>
          <li><i className="fas fa-check-circle" /> Structured content & semantic SEO</li>
          <li><i className="fas fa-check-circle" /> AI chatbot visibility</li>
        </ul>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Explore AEO Solutions <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
