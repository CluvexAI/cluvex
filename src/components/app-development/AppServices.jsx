const services = [
  {
    icon: 'fa-globe',
    title: 'Web App Development',
    items: ['Secure web applications', 'Cloud-based platforms', 'Business management systems', 'Custom dashboards'],
  },
  {
    icon: 'fa-android',
    title: 'Android App Development',
    items: ['Native Android applications', 'Fast & scalable mobile apps', 'Play Store ready solutions', 'User-friendly experiences'],
  },
  {
    icon: 'fa-apple',
    title: 'iOS App Development',
    items: ['High-performance iOS apps', 'iPhone & iPad compatibility', 'App Store optimized deployment', 'Premium user interface design'],
  },
  {
    icon: 'fa-cogs',
    title: 'Specific Functional App Development',
    items: ['Business-specific applications', 'CRM systems', 'ERP solutions', 'Workflow automation tools'],
  },
  {
    icon: 'fa-layer-group',
    title: 'Full Feature Loaded App Development',
    items: ['Advanced admin panels', 'User authentication', 'Payment integration', 'Push notifications', 'Analytics dashboards'],
  },
  {
    icon: 'fa-calendar-check',
    title: 'Booking App Development',
    items: ['Appointment booking systems', 'Hotel & travel booking apps', 'Salon & healthcare booking platforms', 'Calendar integrations'],
  },
  {
    icon: 'fa-shopping-bag',
    title: 'Shopping App Development',
    items: ['E-commerce mobile apps', 'Product catalog systems', 'Shopping cart integration', 'Secure payment gateways'],
  },
  {
    icon: 'fa-robot',
    title: 'AI Calling App Development',
    items: ['AI voice calling systems', 'Automated customer communication', 'Smart voice assistant integration', 'AI-driven call workflows'],
  },
  {
    icon: 'fa-whatsapp',
    title: 'WhatsApp Automation App Development',
    items: ['WhatsApp business automation', 'Auto-reply systems', 'Customer support automation', 'Lead nurturing workflows'],
  },
  {
    icon: 'fa-share-alt',
    title: 'Social Media AI Auto Posting App Development',
    items: ['Automated social posting', 'AI-generated captions', 'Multi-platform scheduling', 'Engagement tracking systems'],
  },
];

export default function AppServices() {
  return (
    <section className="app-services section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>App Development Services</span></h2>
          <p>Comprehensive mobile and web application development solutions tailored to your business needs.</p>
        </div>
        <div className="app-services__grid">
          {services.map((s, i) => (
            <div key={i} className="app-services__card">
              <div className="app-services__icon">
                <i className={`fab ${s.icon === 'fa-android' || s.icon === 'fa-apple' || s.icon === 'fa-whatsapp' ? s.icon : `fas ${s.icon}`}`} />
              </div>
              <h3 className="app-services__title">{s.title}</h3>
              <ul className="app-services__list">
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
