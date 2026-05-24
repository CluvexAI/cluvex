import { useState } from 'react';

const tabData = [
  {
    label: 'Our Vision',
    content: 'To be the leading digital innovation partner in the region, empowering businesses with cutting-edge solutions that redefine success in the digital era.',
  },
  {
    label: 'Our Mission',
    content: 'To deliver exceptional digital experiences and marketing strategies that drive tangible growth, foster innovation, and build lasting client relationships.',
  },
  {
    label: 'Our Motto',
    content: 'Growth through innovation. Success through partnership. We believe in creating value that goes beyond expectations.',
  },
];

const checklist = [
  'Financial Growth',
  'Customer Program',
  'Dedicated Team Member',
  '24/7 Support',
  'Transparent Reporting',
];

export default function AboutValue() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="about-value section-padding">
      <div className="container">
        <div className="about-value__grid">
          <div className="about-value__left">
            <span className="about-value__label">OUR VALUE</span>
            <h2>Get More Traffic, Visibility, and Sales <span>For Your Business</span></h2>
            <p className="about-value__desc">
              We combine creativity with technology to deliver solutions that not only
              look great but also drive measurable business outcomes.
            </p>

            <div className="about-value__tabs">
              {tabData.map((t, i) => (
                <button
                  key={i}
                  className={`about-value__tab ${activeTab === i ? 'about-value__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="about-value__tab-content">
              <p>{tabData[activeTab].content}</p>
            </div>

            <ul className="about-value__checklist">
              {checklist.map((item, i) => (
                <li key={i}>
                  <i className="fas fa-check-circle" /> {item}
                </li>
              ))}
            </ul>

            <div className="about-value__mini-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                alt="Team strategy"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-value__right">
            <div className="about-value__visual">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Analytics dashboard"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
