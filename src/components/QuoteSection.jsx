import { useState } from 'react';

export default function QuoteSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section id="contact" className="quote-section">
      <div className="quote-section__bg">
        <div className="quote-section__overlay" />
      </div>
      <div className="container">
        <div className="section-title">
          <h2>Get A <span>Quote</span></h2>
          <p>Ready to take your business to the next level? Let us know your requirements.</p>
        </div>

        <div className="quote-section__grid">
          <div className="quote-section__form-wrapper">
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="quote-form__row">
                <div className="quote-form__group">
                  <input type="text" placeholder="Your Name" required />
                  <i className="fas fa-user" />
                </div>
                <div className="quote-form__group">
                  <input type="email" placeholder="Email Address" required />
                  <i className="fas fa-envelope" />
                </div>
              </div>
              <div className="quote-form__row">
                <div className="quote-form__group">
                  <input type="tel" placeholder="Phone Number" required />
                  <i className="fas fa-phone" />
                </div>
                <div className="quote-form__group">
                  <select required defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option value="graphic">Graphic Design</option>
                    <option value="web">Website Design</option>
                    <option value="app">App Development</option>
                    <option value="seo">SEO</option>
                    <option value="video">Video Editing</option>
                    <option value="gmb">Google My Business</option>
                  </select>
                  <i className="fas fa-chevron-down" />
                </div>
              </div>
              <div className="quote-form__group quote-form__group--full">
                <textarea placeholder="Tell us about your project..." rows={4} required />
                <i className="fas fa-comment" />
              </div>
              <button type="submit" className="gold-btn quote-form__submit">
                Send Message <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>

          <div className="quote-section__visual">
            <div className="quote-section__image">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80"
                alt="Consultation"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="quote-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="quote-popup" onClick={(e) => e.stopPropagation()}>
            <button className="quote-popup__close" onClick={() => setShowPopup(false)}>&times;</button>
            <div className="quote-popup__icon">
              <i className="fas fa-check-circle" />
            </div>
            <h3>Thank You!</h3>
            <p>We will get back to you shortly.</p>
            <button className="gold-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
}
