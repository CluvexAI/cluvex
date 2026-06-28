import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [knowMoreOpen, setKnowMoreOpen] = useState(false);
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
    setKnowMoreOpen(false);
    if (target === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about') {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'why-us') {
      navigate('/why-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'know-more') {
      navigate('/know-more');
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
    setKnowMoreOpen(false);
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services', dropdown: true },
    { label: 'KNOW MORE', target: 'know-more', dropdown: true },
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

  const knowMorePages = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    { label: 'Disclaimer Policy', path: '/disclaimer' },
    { label: 'Refund Policy', path: '/refund-policy' },
  ];

  const isServicePage = location.pathname.startsWith('/services/');
  const isKnowMorePage = location.pathname === '/privacy-policy' || location.pathname === '/terms-and-conditions' || location.pathname === '/disclaimer' || location.pathname === '/refund-policy';

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img className="navbar__logo-icon" src="/cluvex-icon.png" alt="Cluvex" width="36" height="36" />
          <div className="navbar__logo-text-wrapper">
            <span className="navbar__logo-text">CLUVEX</span>
            <span className="navbar__logo-sub">Digital Solutions</span>
          </div>
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
                  : l.target === 'know-more'
                    ? location.pathname === '/know-more'
                    : l.target === 'contact'
                    ? location.pathname === '/contact'
                    : l.dropdown
                      ? (l.target === 'services' ? isServicePage : isKnowMorePage)
                      : false;
                      
            const isOpen = l.target === 'services' ? servicesOpen : l.target === 'know-more' ? knowMoreOpen : false;
            const setOpen = l.target === 'services' ? setServicesOpen : l.target === 'know-more' ? setKnowMoreOpen : () => {};
            const pages = l.target === 'services' ? servicePages : l.target === 'know-more' ? knowMorePages : [];
            const isPageActive = l.target === 'services' ? isServicePage : l.target === 'know-more' ? isKnowMorePage : false;

            return (
              <li
                key={l.target}
                className={l.dropdown ? 'navbar__dropdown' : ''}
                onMouseEnter={() => l.dropdown && setOpen(true)}
                onMouseLeave={() => l.dropdown && setOpen(false)}
              >
                {l.dropdown ? (
                  <>
                    <button
                      className={`navbar__dropdown-btn ${isPageActive ? 'active' : ''}`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      {l.label} <i className="fas fa-chevron-down" />
                    </button>
                    <ul className={`navbar__dropdown-menu ${isOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                      {pages.map((p) => (
                        <li key={p.path}>
                          <Link
                            to={p.path}
                            className={`${location.pathname === p.path ? 'active' : ''} ${l.target === 'know-more' ? 'privacy-policy-link' : ''}`.trim()}
                            onClick={() => { setMenuOpen(false); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          >
                            {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={l.target === 'home' ? '/' : l.target === 'about' ? '/about' : l.target === 'why-us' ? '/why-us' : l.target === 'know-more' ? '/know-more' : l.target === 'contact' ? '/contact' : `/#${l.target}`}
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
