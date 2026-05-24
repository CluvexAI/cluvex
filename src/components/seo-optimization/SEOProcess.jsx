const steps = [
  { icon: 'fa-search', title: 'SEO & Website Audit', desc: 'We conduct a comprehensive analysis of your website to identify technical issues, opportunities, and current search performance.' },
  { icon: 'fa-lightbulb', title: 'Keyword & Competitor Research', desc: 'In-depth keyword analysis and competitor research to identify high-value opportunities and gaps in your market.' },
  { icon: 'fa-code', title: 'Technical Optimization', desc: 'We fix technical issues, improve site architecture, and implement best practices for crawling, indexing, and performance.' },
  { icon: 'fa-pen-fancy', title: 'Content & AEO Strategy', desc: 'We develop a content strategy optimized for both traditional search and AI-powered discovery platforms.' },
  { icon: 'fa-database', title: 'Crawling & Indexing Improvements', desc: 'We ensure search engines can efficiently crawl and index your most important pages for maximum visibility.' },
  { icon: 'fa-chart-line', title: 'Monitoring & Growth Optimization', desc: 'Continuous monitoring, reporting, and iterative optimization to maintain and improve your search rankings.' },
];

export default function SEOProcess() {
  return (
    <section className="seo-process section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>SEO &amp; AEO Process</span></h2>
          <p>A data-driven, systematic approach to improving your search visibility across Google and AI platforms.</p>
        </div>
        <div className="seo-process__timeline">
          {steps.map((s, i) => (
            <div key={i} className="seo-process__step">
              <div className="seo-process__step-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="seo-process__step-content">
                <div className="seo-process__step-icon">
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
