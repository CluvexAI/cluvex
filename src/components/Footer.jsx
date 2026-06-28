import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNav = (e, target) => {
    e.preventDefault();
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <footer className="footer">
      <div className="footer__decor" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <img className="footer__logo-icon" src="/cluvex-icon.png" alt="Cluvex" width="40" height="40" />
              <div className="footer__logo-text-wrapper">
                <span className="footer__logo-text">CLUVEX</span>
                <span className="footer__logo-sub">Digital Solutions</span>
              </div>
            </Link>
            <p>
              Cluvex Digital Solutions is a premier digital marketing agency in Dubai,
              dedicated to helping businesses thrive in the digital age with innovative
              strategies and cutting-edge technology.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#services" onClick={(e) => handleNav(e, 'services')}>Services</a></li>
              <li><Link to="/why-us">Why Choose Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/#services" onClick={(e) => handleNav(e, 'services')}>Graphic Design</a></li>
              <li><a href="/#services" onClick={(e) => handleNav(e, 'services')}>Website Design</a></li>
              <li><a href="/#services" onClick={(e) => handleNav(e, 'services')}>App Development</a></li>
              <li><a href="/#services" onClick={(e) => handleNav(e, 'services')}>SEO</a></li>
              <li><a href="/#services" onClick={(e) => handleNav(e, 'services')}>Video Editing</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Newsletter</h4>
            <p>Subscribe to get the latest insights and updates.</p>
            <form className="footer__newsletter" onSubmit={handleNewsletter}>
              <div className="footer__newsletter-input">
                <input type="email" placeholder="Your email" required />
                <button type="submit" aria-label="Subscribe">
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p>&copy; {new Date().getFullYear()} Cluvex Digital Solutions. All rights reserved.</p>
          <div className="footer__bottom-links" style={{ display: 'flex', gap: '15px' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--gray-text)', fontSize: '14px' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseLeave={(e) => e.target.style.color = 'var(--gray-text)'}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" style={{ color: 'var(--gray-text)', fontSize: '14px' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseLeave={(e) => e.target.style.color = 'var(--gray-text)'}>Terms & Conditions</Link>
            <Link to="/disclaimer" style={{ color: 'var(--gray-text)', fontSize: '14px' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseLeave={(e) => e.target.style.color = 'var(--gray-text)'}>Disclaimer</Link>
            <Link to="/refund-policy" style={{ color: 'var(--gray-text)', fontSize: '14px' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseLeave={(e) => e.target.style.color = 'var(--gray-text)'}>Refund Policy</Link>
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
            <h3>Subscribed!</h3>
            <p>You have successfully subscribed to our newsletter.</p>
            <button className="gold-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </footer>
  );
}
