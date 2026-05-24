export default function OfficeInfo() {
  return (
    <section className="office-info section-padding">
      <div className="container">
        <div className="office-info__grid">
          <div className="office-card">
            <div className="office-card__icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <h3>
              <span className="office-card__flag" aria-hidden="true">🇮🇳</span> India Office
            </h3>
            <ul className="office-card__details">
              <li>
                <i className="fas fa-location-dot" />
                <span>16A, Swami Vivekananda Road, Kolkata - 700137, INDIA</span>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <a href="mailto:support@cluvex.com">support@cluvex.com</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:+919831012129">+91-9831012129</a>
              </li>
            </ul>
            <div className="office-card__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789!2d88.363!3d22.543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzM0LjgiTiA4OMKwMjEnNDYuOCJF!5e0!3m2!1sen!2sin!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="India Office Map"
              />
            </div>
          </div>

          <div className="office-card">
            <div className="office-card__icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <h3>
              <span className="office-card__flag" aria-hidden="true">🇦🇪</span> Dubai Office
            </h3>
            <ul className="office-card__details">
              <li>
                <i className="fas fa-location-dot" />
                <span>Dubai, UAE</span>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <a href="mailto:info@cluvex.com">info@cluvex.com</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:+971526750642">+971 52 675 0642</a>
              </li>
            </ul>
            <div className="office-card__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.301!2d54.947!3d25.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5086fdfc!2sDubai!5e0!3m2!1sen!2sae!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dubai Office Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
