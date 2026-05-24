export default function SupportBanner() {
  return (
    <section className="support-banner">
      <div className="support-banner__overlay" />
      <div className="container support-banner__content">
        <div className="support-banner__icon">
          <i className="fas fa-headset" />
        </div>
        <h2>24 Hours 7 Days A Week</h2>
        <p>Our dedicated support team is available around the clock to ensure your business never stops growing. We are here when you need us.</p>
        <button className="gold-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Contact Us Now <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
