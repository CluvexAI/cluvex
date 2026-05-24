import { useNavigate } from 'react-router-dom';

export default function AIProduction() {
  const navigate = useNavigate();
  return (
    <section className="ai-production">
      <div className="ai-production__overlay" />
      <div className="ai-production__bg" />
      <div className="container ai-production__content">
        <h2 className="ai-production__heading">AI-Powered Video Production For The Future of Digital Marketing</h2>
        <p className="ai-production__text">
          Harness the power of artificial intelligence to produce stunning video content at scale. From AI-generated avatars to automated editing workflows, we help brands create personalized video experiences that drive engagement and conversions.
        </p>
        <ul className="ai-production__list">
          <li><i className="fas fa-check-circle" /> AI automation for faster production</li>
          <li><i className="fas fa-check-circle" /> Personalized video experiences</li>
          <li><i className="fas fa-check-circle" /> Scalable content creation</li>
          <li><i className="fas fa-check-circle" /> Smart audience engagement</li>
        </ul>
        <button className="gold-btn" onClick={() => navigate('/#contact')}>
          Explore AI Video Solutions <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
