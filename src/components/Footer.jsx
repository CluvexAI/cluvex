import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
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
    alert('Subscribed successfully!');
  };

  return (
    <footer className="footer">
      <div className="footer__decor" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">CLUVEX</span>
              <span className="footer__logo-sub">Digital Solutions</span>
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
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Cluvex Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
