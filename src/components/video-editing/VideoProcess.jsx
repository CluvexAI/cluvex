const steps = [
  { icon: 'fa-clipboard-list', title: 'Strategy & Script Planning', desc: 'We define your video goals, target audience, and craft a compelling script that delivers your message.' },
  { icon: 'fa-lightbulb', title: 'Concept Development', desc: 'Our creative team develops visual concepts, storyboards, and creative direction for your video project.' },
  { icon: 'fa-camera', title: 'Video Production', desc: 'Professional filming, animation, and asset creation using industry-standard equipment and techniques.' },
  { icon: 'fa-magic', title: 'Editing & AI Enhancement', desc: 'Cinematic editing, motion graphics, color grading, and AI-powered enhancements for a polished final product.' },
  { icon: 'fa-search', title: 'Review & Optimization', desc: 'We refine the video based on feedback and optimize it for maximum engagement on target platforms.' },
  { icon: 'fa-rocket', title: 'Final Delivery & Publishing', desc: 'We deliver the final video in all required formats and assist with publishing across your chosen channels.' },
];

export default function VideoProcess() {
  return (
    <section className="video-process section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Video Production Process</span></h2>
          <p>A proven workflow that takes your video project from concept to publication with precision and creativity.</p>
        </div>
        <div className="video-process__timeline">
          {steps.map((s, i) => (
            <div key={i} className="video-process__step">
              <div className="video-process__step-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="video-process__step-content">
                <div className="video-process__step-icon">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
