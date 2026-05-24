import { useNavigate } from 'react-router-dom';

export default function ContactHero() {
  const navigate = useNavigate();

  return (
    <section className="contact-hero">
      <div className="contact-hero__overlay" />
      <div className="contact-hero__bg" />
      <div className="container contact-hero__content">
        <h1 className="contact-hero__title">Contact Us</h1>
        <nav className="contact-hero__breadcrumb">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
          <i className="fas fa-chevron-right" />
          <span>Contact Us</span>
        </nav>
      </div>
    </section>
  );
}
