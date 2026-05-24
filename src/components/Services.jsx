import { Link } from 'react-router-dom';

const servicesList = [
  { icon: 'fa-palette', title: 'Graphic Design', desc: 'Eye-catching visuals that communicate your brand story and captivate your audience across all media platforms.', dark: true, path: '/services/graphic-design' },
  { icon: 'fa-laptop-code', title: 'Website Design', desc: 'Modern, responsive websites built with cutting-edge technology to deliver seamless user experiences.', dark: false, path: '/services/web-design' },
  { icon: 'fa-mobile-alt', title: 'App Development', desc: 'Native and cross-platform mobile applications that engage users and drive business growth.', dark: true, path: '/services/app-development' },
  { icon: 'fa-search', title: 'SEO', desc: 'Data-driven SEO strategies that improve rankings, drive organic traffic, and boost online visibility.', dark: false, path: '/services/seo-optimization' },
  { icon: 'fa-video', title: 'Video Editing', desc: 'Professional video production and editing services that bring your brand stories to life.', dark: true, path: '/services/video-editing' },
  { icon: 'fa-google', title: 'Google My Business', desc: 'Optimize your GMB profile to attract local customers and dominate local search results.', dark: false },
];

export default function Services() {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Services</span></h2>
          <p>Comprehensive digital solutions to elevate your brand and accelerate your growth.</p>
        </div>

        <div className="services__grid">
          {servicesList.map((s, i) => (
            <div key={i} className={`service-card ${s.dark ? 'service-card--dark' : ''}`}>
              <div className="service-card__icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              {s.path ? (
                <Link to={s.path} className="service-card__link">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              ) : (
                <a href="#contact" className="service-card__link" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Read More <i className="fas fa-arrow-right" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
