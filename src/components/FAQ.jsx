import { useState } from 'react';

const faqs = [
  {
    q: 'What services does Cluvex offer?',
    a: 'We offer a comprehensive range of digital services including graphic design, web design, app development, SEO, video editing, and Google My Business optimization.',
  },
  {
    q: 'How long does a typical website project take?',
    a: 'Timelines vary based on complexity, but most website projects are completed within 4-8 weeks from concept to launch.',
  },
  {
    q: 'Do you provide SEO services for local businesses?',
    a: 'Yes, we specialize in local SEO strategies that help businesses rank higher in local search results and attract nearby customers.',
  },
  {
    q: 'Can you work with our existing marketing team?',
    a: 'Absolutely. We collaborate seamlessly with in-house teams to complement and enhance your existing marketing efforts.',
  },
  {
    q: 'What makes Cluvex different from other agencies?',
    a: 'Our data-driven approach, transparent reporting, dedicated project managers, and commitment to delivering measurable results set us apart.',
  },
  {
    q: 'How do I get a quote for my project?',
    a: 'Simply fill out the contact form on our website, and one of our consultants will reach out within 24 hours with a tailored proposal.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked <span>Questions</span></h2>
          <p>Have questions? We have answers to help you get started.</p>
        </div>

        <div className="faq__grid">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="faq__question">
                <span>{faq.q}</span>
                <i className={`fas fa-chevron-down ${openIndex === i ? 'rotated' : ''}`} />
              </div>
              <div className="faq__answer" style={{ maxHeight: openIndex === i ? '200px' : '0' }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
