import { useNavigate } from 'react-router-dom';

export default function AboutHero() {
  const navigate = useNavigate();

  return (
    <section className="about-hero">
      <div className="about-hero__overlay" />
      <div className="about-hero__bg" />
      <div className="container about-hero__content">
        <h1 className="about-hero__title">About Us</h1>
        <nav className="about-hero__breadcrumb">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
          <i className="fas fa-chevron-right" />
          <span>About Us</span>
        </nav>
      </div>
    </section>
  );
}
