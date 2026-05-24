import { useState } from 'react';

const tabs = [
  {
    label: 'Our Mission',
    content: 'To empower businesses with innovative digital solutions that drive sustainable growth and measurable results in an ever-evolving digital landscape.',
  },
  {
    label: 'Our Vision',
    content: 'To be the region\'s most trusted digital partner, setting benchmarks for creativity, technology, and client success across the Middle East.',
  },
  {
    label: 'Our Values',
    content: 'Integrity, innovation, transparency, and excellence — these core values guide every project we deliver and every relationship we build.',
  },
];

const checklist = [
  '100% Client Satisfaction Guarantee',
  'Dedicated Project Manager',
  'Transparent Reporting & Analytics',
  'Timely Delivery Every Time',
  'Customized Strategy for Your Brand',
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="why-us" className="why-us section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose <span>Us</span></h2>
          <p>What sets Cluvex apart from the competition.</p>
        </div>

        <div className="why-us__grid">
          <div className="why-us__left">
            <div className="why-us__tabs">
              {tabs.map((t, i) => (
                <button
                  key={i}
                  className={`why-us__tab ${activeTab === i ? 'why-us__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="why-us__tab-content">
              <p>{tabs[activeTab].content}</p>
            </div>

            <ul className="why-us__checklist">
              {checklist.map((item, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="why-us__right">
            <div className="why-us__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team collaboration"
                loading="lazy"
              />
              <div className="why-us__circle why-us__circle--1" />
              <div className="why-us__circle why-us__circle--2" />
              <div className="why-us__circle why-us__circle--3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
