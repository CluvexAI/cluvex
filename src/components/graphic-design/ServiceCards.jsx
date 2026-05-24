const services = [
  {
    icon: 'fa-pen-fancy',
    title: 'Logo Design',
    items: ['Custom logo concepts', 'Modern brand identity', 'Minimal & corporate styles'],
  },
  {
    icon: 'fa-paint-brush',
    title: 'Branding Design',
    items: ['Brand guidelines', 'Visual identity systems', 'Business branding kits'],
  },
  {
    icon: 'fa-file-alt',
    title: 'Flyer Design',
    items: ['Promotional flyers', 'Event flyers', 'Corporate flyers'],
  },
  {
    icon: 'fa-images',
    title: 'Banner Design',
    items: ['Social media banners', 'Web banners', 'Advertising creatives'],
  },
  {
    icon: 'fa-book',
    title: 'Catalogue Design',
    items: ['Product catalogues', 'Company brochures', 'Print-ready layouts'],
  },
  {
    icon: 'fa-hashtag',
    title: 'Social Media Creatives',
    items: ['Instagram posts', 'Facebook ads', 'Promotional graphics'],
  },
];

export default function ServiceCards() {
  return (
    <section className="service-cards section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>Graphic Design Services</span></h2>
          <p>Comprehensive design solutions tailored to elevate your brand and captivate your audience.</p>
        </div>
        <div className="service-cards__grid">
          {services.map((s, i) => (
            <div key={i} className="service-cards__card">
              <div className="service-cards__icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="service-cards__title">{s.title}</h3>
              <ul className="service-cards__list">
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
