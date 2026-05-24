import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    setServicesOpen(false);
    if (target === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'why-us') {
      navigate('/why-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'contact') {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (!isHome) {
      navigate('/#' + target);
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services', dropdown: true },
    { label: 'Why Us', target: 'why-us' },
    { label: 'Contact', target: 'contact' },
  ];

  const servicePages = [
    { label: 'Graphic Design', path: '/services/graphic-design' },
    { label: 'Web Design', path: '/services/web-design' },
    { label: 'App Development', path: '/services/app-development' },
    { label: 'Video Editing', path: '/services/video-editing' },
    { label: 'SEO Optimization', path: '/services/seo-optimization' },
    { label: 'Social Media Marketing', path: '/services/social-media-marketing' },
    { label: 'Search Engine Marketing', path: '/services/search-engine-marketing' },
  ];

  const isServicePage = location.pathname.startsWith('/services/');

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="navbar__logo-text">CLUVEX</span>
          <span className="navbar__logo-sub">Digital Solutions</span>
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((l) => {
            const isActive = l.target === 'home'
              ? location.pathname === '/'
              : l.target === 'about'
                ? location.pathname === '/about'
                : l.target === 'why-us'
                  ? location.pathname === '/why-us'
                  : l.target === 'contact'
                    ? location.pathname === '/contact'
                    : l.dropdown
                      ? isServicePage
                      : false;
            return (
              <li
                key={l.target}
                className={l.dropdown ? 'navbar__dropdown' : ''}
                onMouseEnter={() => l.dropdown && setServicesOpen(true)}
                onMouseLeave={() => l.dropdown && setServicesOpen(false)}
              >
                {l.dropdown ? (
                  <>
                    <button
                      className={`navbar__dropdown-btn ${isServicePage ? 'active' : ''}`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {l.label} <i className="fas fa-chevron-down" />
                    </button>
                    <ul className={`navbar__dropdown-menu ${servicesOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                      {servicePages.map((sp) => (
                        <li key={sp.path}>
                          <Link
                            to={sp.path}
                            className={location.pathname === sp.path ? 'active' : ''}
                            onClick={() => { setMenuOpen(false); setServicesOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          >
                            {sp.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={l.target === 'home' ? '/' : l.target === 'about' ? '/about' : l.target === 'why-us' ? '/why-us' : l.target === 'contact' ? '/contact' : `/#${l.target}`}
                    className={isActive ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, l.target)}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <button className="navbar__cta gold-btn" onClick={handleCtaClick}>
          Get A Quote <i className="fas fa-arrow-right" />
        </button>
      </div>
    </nav>
  );
}
