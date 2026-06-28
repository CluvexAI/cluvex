export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__info">
          <a href="mailto:info@cluvex.com"><i className="fas fa-envelope" /> info@cluvex.com</a>
          <span className="topbar__divider">|</span>
          <span><i className="fas fa-map-marker-alt" /> Dubai, UAE</span>
          <span className="topbar__divider">|</span>
          <a href="tel:+971526750642" className="topbar__phone"><i className="fas fa-phone-alt" /> +971 52 675 0642</a>
        </div>
        <div className="topbar__social">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </div>
  );
}
