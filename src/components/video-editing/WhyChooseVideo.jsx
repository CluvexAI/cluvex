const features = [
  { icon: 'fa-robot', title: 'AI-Powered Production', desc: 'Leverage cutting-edge AI tools for faster, smarter video creation.' },
  { icon: 'fa-pen-fancy', title: 'Creative Storytelling', desc: 'Compelling narratives that capture attention and drive emotional connection.' },
  { icon: 'fa-chart-line', title: 'High-Converting Ad Videos', desc: 'Videos optimized for ad platforms to maximize ROI and conversion rates.' },
  { icon: 'fa-clock', title: 'Fast Turnaround', desc: 'Efficient production workflows that deliver quality videos on schedule.' },
  { icon: 'fa-language', title: 'Multi-Language Support', desc: 'Create content for global audiences with professional multilingual production.' },
  { icon: 'fa-film', title: 'Cinematic Editing Quality', desc: 'Hollywood-grade editing, color grading, and visual effects for every project.' },
  { icon: 'fa-share-alt', title: 'Social Media Optimization', desc: 'Content tailored for Instagram, TikTok, YouTube, Facebook, and more.' },
  { icon: 'fa-cubes', title: 'Professional Motion Graphics', desc: 'Stunning animations and visual effects that elevate your brand story.' },
];

export default function WhyChooseVideo() {
  return (
    <section className="why-choose-video">
      <div className="why-choose-video__overlay" />
      <div className="why-choose-video__bg" />
      <div className="container why-choose-video__content">
        <h2 className="why-choose-video__heading">Why Brands Choose Our Video Editing Expertise</h2>
        <div className="why-choose-video__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-video__card">
              <div className="why-choose-video__card-icon">
                <i className={`fas ${f.icon}`} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
