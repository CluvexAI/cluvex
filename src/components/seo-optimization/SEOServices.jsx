const services = [
  {
    icon: 'fa-pen-fancy',
    title: 'Content Creation',
    items: ['SEO-friendly content writing', 'AI-search optimized content', 'Blog creation & strategy', 'Authority-building articles', 'Keyword-focused content strategy'],
  },
  {
    icon: 'fa-search',
    title: 'SEO Services',
    items: ['On-page SEO optimization', 'Off-page SEO strategies', 'Keyword research & targeting', 'Meta tag optimization', 'Search ranking improvements'],
  },
  {
    icon: 'fa-robot',
    title: 'AEO Services',
    items: ['AI Engine Optimization', 'Voice search optimization', 'Featured snippet optimization', 'AI-search structured content', 'LLM-friendly formatting'],
  },
  {
    icon: 'fa-chart-line',
    title: 'Organic Traffic Generation',
    items: ['Long-term traffic growth', 'Audience targeting strategies', 'Conversion-focused SEO', 'Search visibility expansion', 'Competitor analysis'],
  },
  {
    icon: 'fa-tachometer-alt',
    title: 'Page Speed Optimization',
    items: ['Core Web Vitals optimization', 'Faster page loading', 'Image optimization', 'Code minification', 'Mobile performance improvements'],
  },
  {
    icon: 'fa-code',
    title: 'Technical SEO',
    items: ['Schema markup implementation', 'Structured data optimization', 'XML sitemap optimization', 'Canonical URL implementation', 'HTTPS & security optimization'],
  },
  {
    icon: 'fa-database',
    title: 'Crawling & Indexing Optimization',
    items: ['Google indexing optimization', 'Crawl budget optimization', 'Robots.txt management', 'Search Console integration', 'LLM bot accessibility'],
  },
  {
    icon: 'fa-globe',
    title: 'Google & AI Visibility Optimization',
    items: ['Google Search optimization', 'AI assistant visibility', 'Search intent mapping', 'Semantic content structure', 'AI-ready website architecture'],
  },
  {
    icon: 'fa-map-marker-alt',
    title: 'Local SEO Optimization',
    items: ['Google Business Profile optimization', 'Local keyword ranking', 'Google Maps visibility', 'Location-based search growth', 'Local citation building'],
  },
];

export default function SEOServices() {
  return (
    <section className="seo-services section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Our <span>SEO &amp; AEO Optimization Services</span></h2>
          <p>Comprehensive search optimization solutions designed to improve visibility, drive traffic, and future-proof your online presence.</p>
        </div>
        <div className="seo-services__grid">
          {services.map((s, i) => (
            <div key={i} className="seo-services__card">
              <div className="seo-services__icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="seo-services__title">{s.title}</h3>
              <ul className="seo-services__list">
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
