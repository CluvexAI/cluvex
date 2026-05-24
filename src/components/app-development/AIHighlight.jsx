import { useNavigate } from 'react-router-dom';

export default function AIHighlight() {
  const navigate = useNavigate();
  return (
    <section className="ai-highlight">
      <div className="ai-highlight__overlay" />
      <div className="ai-highlight__bg" />
      <div className="container ai-highlight__content">
        <h2 className="ai-highlight__heading">AI-Powered Applications That Automate Your Business Operations</h2>
        <p className="ai-highlight__text">
          Leverage cutting-edge artificial intelligence to transform your business processes. From intelligent automation to smart customer communication, our AI-powered applications help you work smarter, reduce costs, and scale effortlessly.
        </p>
        <ul className="ai-highlight__list">
          <li><i className="fas fa-check-circle" /> AI integrations & smart workflows</li>
          <li><i className="fas fa-check-circle" /> Workflow automation systems</li>
          <li><i className="fas fa-check-circle" /> Smart business intelligence</li>
          <li><i className="fas fa-check-circle" /> Customer communication automation</li>
          <li><i className="fas fa-check-circle" /> AI-powered analytics dashboards</li>
        </ul>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Explore AI Solutions <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
