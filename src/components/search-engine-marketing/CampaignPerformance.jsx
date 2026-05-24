import { useNavigate } from 'react-router-dom';

export default function CampaignPerformance() {
  const navigate = useNavigate();

  return (
    <section className="campaign-performance section-padding">
      <div className="container">
        <div className="campaign-performance__grid">
          <div className="campaign-performance__visual">
            <img
              src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Google Ads performance analytics"
              loading="lazy"
            />
          </div>
          <div className="campaign-performance__content">
            <span className="campaign-performance__label">DATA-DRIVEN RESULTS</span>
            <h2>We Build SEM Campaigns That Convert Clicks Into Customers</h2>
            <ul className="campaign-performance__list">
              <li><i className="fas fa-check-circle" /> Data-driven ad strategy</li>
              <li><i className="fas fa-check-circle" /> Keyword optimization</li>
              <li><i className="fas fa-check-circle" /> Audience segmentation</li>
              <li><i className="fas fa-check-circle" /> Conversion tracking</li>
              <li><i className="fas fa-check-circle" /> ROI-focused scaling</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Launch Your Campaign <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
