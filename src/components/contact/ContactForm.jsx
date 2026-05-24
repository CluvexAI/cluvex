import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const subject = `New Inquiry from ${form.firstName} ${form.lastName}`;
      const body = `Name: ${form.firstName} ${form.lastName}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;
      window.location.href = `mailto:info@cluvex.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' });
    }
  };

  const handleSuccessReset = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="contact-form section-padding">
        <div className="container">
          <div className="contact-form__wrapper">
            <div className="contact-form__success">
              <div className="contact-form__success-icon">
                <i className="fas fa-check-circle" />
              </div>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We will get back to you shortly.</p>
              <p className="contact-form__success-hint">Your email client has been opened. Please click send to deliver your message.</p>
              <button className="gold-btn" onClick={handleSuccessReset}>
                Send Another Message <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form section-padding">
      <div className="container">
        <div className="contact-form__wrapper">
          <div className="section-title">
            <h2>Get In <span>Touch</span></h2>
            <p>Have a project in mind? We'd love to hear from you.</p>
          </div>
          <form className="contact-form__form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              <div className="contact-form__group">
                <label htmlFor="firstName">First Name <span>*</span></label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'input--error' : ''}
                />
                {errors.firstName && <span className="contact-form__error">{errors.firstName}</span>}
              </div>
              <div className="contact-form__group">
                <label htmlFor="lastName">Last Name <span>*</span></label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'input--error' : ''}
                />
                {errors.lastName && <span className="contact-form__error">{errors.lastName}</span>}
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-form__group">
                <label htmlFor="phone">Phone Number <span>*</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 234 567 890"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'input--error' : ''}
                />
                {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
              </div>
              <div className="contact-form__group">
                <label htmlFor="email">Email ID <span>*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'input--error' : ''}
                />
                {errors.email && <span className="contact-form__error">{errors.email}</span>}
              </div>
            </div>
            <div className="contact-form__group contact-form__group--full">
              <label htmlFor="message">Message <span>*</span></label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? 'input--error' : ''}
              />
              {errors.message && <span className="contact-form__error">{errors.message}</span>}
            </div>
            <button type="submit" className="gold-btn contact-form__submit">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
