const features = [
  { icon: 'fa-robot', title: 'SEO + AI Search Optimization', desc: 'Dual expertise in traditional SEO and emerging AI search platforms.' },
  { icon: 'fa-code', title: 'Technical SEO Experts', desc: 'Deep technical knowledge to fix, optimize, and future-proof your website.' },
  { icon: 'fa-pen-fancy', title: 'High-Quality Content Creation', desc: 'Authority-driven content that ranks and engages your target audience.' },
  { icon: 'fa-chart-line', title: 'Organic Traffic Growth', desc: 'Proven strategies that deliver sustainable, long-term organic traffic increases.' },
  { icon: 'fa-globe', title: 'Google & LLM Visibility', desc: 'Optimized for both Google Search and AI language model discovery.' },
  { icon: 'fa-tachometer-alt', title: 'Core Web Vitals Optimization', desc: 'Performance tuning that meets Google standards and enhances user experience.' },
  { icon: 'fa-file-alt', title: 'Transparent Reporting', desc: 'Clear, data-driven reports showing ranking improvements and traffic growth.' },
  { icon: 'fa-bullseye', title: 'Long-Term Ranking Strategies', desc: 'Sustainable SEO approaches that build lasting search authority.' },
];

export default function WhyChooseSEO() {
  return (
    <section className="why-choose-seo">
      <div className="why-choose-seo__overlay" />
      <div className="why-choose-seo__bg" />
      <div className="container why-choose-seo__content">
        <h2 className="why-choose-seo__heading">Why Businesses Trust Our SEO &amp; AEO Expertise</h2>
        <div className="why-choose-seo__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-seo__card">
              <div className="why-choose-seo__card-icon">
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
