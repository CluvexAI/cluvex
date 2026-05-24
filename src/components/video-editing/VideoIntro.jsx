import { useNavigate } from 'react-router-dom';

export default function VideoIntro() {
  const navigate = useNavigate();
  return (
    <section className="video-intro section-padding">
      <div className="container">
        <div className="video-intro__grid">
          <div className="video-intro__content">
            <span className="video-intro__label">WHO WE ARE</span>
            <h2>Videos That Capture Attention, Build Trust, and Drive Engagement</h2>
            <p className="video-intro__text">
              We craft compelling video content that tells your brand story, connects with audiences, and delivers measurable results. Every frame is designed to engage, inspire, and convert.
            </p>
            <p className="video-intro__text">
              From AI-enhanced production to cinematic commercial editing, our video solutions combine creative storytelling with cutting-edge technology to produce content that stands out across every platform.
            </p>
            <ul className="video-intro__list">
              <li><i className="fas fa-check-circle" /> Video storytelling & brand engagement</li>
              <li><i className="fas fa-check-circle" /> Social media video marketing</li>
              <li><i className="fas fa-check-circle" /> AI-enhanced production</li>
              <li><i className="fas fa-check-circle" /> Commercial video editing</li>
              <li><i className="fas fa-check-circle" /> High-converting ad creatives</li>
              <li><i className="fas fa-check-circle" /> Multi-platform video optimization</li>
            </ul>
            <button className="gold-btn" onClick={() => navigate('/#contact')}>
              Talk To Our Creative Team <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="video-intro__visual">
            <div className="video-intro__image">
              <img
                src="https://images.pexels.com/photos/8382725/pexels-photo-8382725.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Video editing workspace"
                loading="lazy"
              />
            </div>
            <div className="video-intro__shape video-intro__shape--1" />
            <div className="video-intro__shape video-intro__shape--2" />
          </div>
        </div>
      </div>
    </section>
  );
}
