const services = [
  {
    icon: 'fa-video',
    title: 'Video Creation',
    items: ['Commercial videos', 'Promotional videos', 'Corporate storytelling', 'Marketing campaigns'],
  },
  {
    icon: 'fa-robot',
    title: 'Video Creation By AI',
    items: ['AI-generated videos', 'Automated scene generation', 'AI-assisted scripting', 'Fast scalable production'],
  },
  {
    icon: 'fa-film',
    title: 'Professional Video Editing',
    items: ['Cinematic editing', 'Motion graphics', 'Color grading', 'Sound enhancement', 'Transitions & effects'],
  },
  {
    icon: 'fa-user-tie',
    title: 'AI Avatar Creation',
    items: ['AI spokesperson videos', 'Virtual presenters', 'Personalized avatar branding', 'AI character animations'],
  },
  {
    icon: 'fa-mobile-alt',
    title: 'UGC Ad Creation',
    items: ['User-generated style ads', 'Social media ad creatives', 'High-converting short videos', 'TikTok/Reels optimized content'],
  },
  {
    icon: 'fa-face-smile',
    title: 'Soul ID Creation & Talking Videos',
    items: ['AI face identity creation', 'Photo-to-video transformation', 'Talking AI character videos', 'Personalized AI speaking avatars'],
  },
  {
    icon: 'fa-language',
    title: 'Multi Language Video Creation',
    items: ['Multilingual voiceovers', 'Regional language content', 'Subtitle integration', 'International audience targeting'],
  },
  {
    icon: 'fa-share-alt',
    title: 'Social Media Video Editing',
    items: ['Instagram Reels', 'YouTube Shorts', 'Facebook Ads', 'TikTok content editing'],
  },
  {
    icon: 'fa-chart-bar',
    title: 'Business Explainer Videos',
    items: ['Product explainers', 'SaaS demonstrations', 'Educational content', 'Animated business videos'],
  },
];

export default function VideoServices() {
  return (
    <section className="video-services section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Video Creation &amp; Editing Services</span></h2>
          <p>End-to-end video production solutions powered by creativity, AI technology, and strategic storytelling.</p>
        </div>
        <div className="video-services__grid">
          {services.map((s, i) => (
            <div key={i} className="video-services__card">
              <div className="video-services__icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="video-services__title">{s.title}</h3>
              <ul className="video-services__list">
                {s.items.map((item, j) => (
                  <li key={j}><i className="fas fa-check-circle" /> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
