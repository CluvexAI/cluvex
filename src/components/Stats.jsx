import { useState, useEffect, useRef } from 'react';

function Counter({ end, suffix, label, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-item__icon"><i className={`fas ${icon}`} /></div>
      <div className="stat-item__number">{count}{suffix}</div>
      <div className="stat-item__label">{label}</div>
    </div>
  );
}

const stats = [
  { end: 850, suffix: '+', label: 'Happy Clients', icon: 'fa-smile' },
  { end: 1200, suffix: '+', label: 'Projects Completed', icon: 'fa-tasks' },
  { end: 12, suffix: '+', label: 'Years Experience', icon: 'fa-calendar-check' },
  { end: 50, suffix: '+', label: 'Professional Team', icon: 'fa-user-tie' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__bg-shape" />
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <Counter key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
