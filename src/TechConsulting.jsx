import React, { useState } from 'react';
import './TechConsulting.css';

const cards = [
  {
    title: 'AI solutions',
    hoverText: 'Explore AI solutions',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16"/><path d="M20 4v8M20 28v8M4 20h8M28 20h8"/></svg>
    ),
  },
  {
    title: 'AI models',
    hoverText: 'Discover AI models',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="16" rx="2"/><circle cx="14" cy="28" r="4"/><circle cx="26" cy="28" r="4"/></svg>
    ),
  },
  {
    title: 'Consulting',
    hoverText: 'Meet our consultants',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><circle cx="14" cy="18" r="4"/><circle cx="26" cy="18" r="4"/><rect x="10" y="24" width="20" height="8" rx="4"/></svg>
    ),
  },
  {
    title: 'Analytics',
    hoverText: 'See analytics tools',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><rect x="8" y="28" width="4" height="8"/><rect x="18" y="20" width="4" height="16"/><rect x="28" y="12" width="4" height="24"/></svg>
    ),
  },
  {
    title: 'IT automation',
    hoverText: 'Automate IT tasks',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><path d="M8 20h24M8 20l6-6M8 20l6 6"/></svg>
    ),
  },
  {
    title: 'Compute and servers',
    hoverText: 'Explore compute options',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><rect x="8" y="12" width="24" height="8" rx="2"/><rect x="8" y="24" width="24" height="8" rx="2"/></svg>
    ),
  },
  {
    title: 'Databases',
    hoverText: 'See database solutions',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><rect x="10" y="14" width="20" height="12" rx="6"/><ellipse cx="20" cy="14" rx="10" ry="4"/></svg>
    ),
  },
  {
    title: 'Security and identity',
    hoverText: 'Learn about security',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#0f62fe" strokeWidth="2" viewBox="0 0 40 40"><rect x="12" y="18" width="16" height="12" rx="4"/><circle cx="20" cy="24" r="3"/></svg>
    ),
  },
];

function TechConsulting() {
  const [hovered, setHovered] = useState(Array(cards.length).fill(false));

  const handleMouseEnter = idx => {
    setHovered(h => h.map((v, i) => i === idx ? true : v));
  };
  const handleMouseLeave = idx => {
    setHovered(h => h.map((v, i) => i === idx ? false : v));
  };

  return (
    <section className="tech-consulting-section">
      <div className="tech-consulting-header">
        <h2>Technology and consulting</h2>
        <div className="tech-consulting-desc">
          From <a href="#" className="blue-link">next-generation AI</a> to cutting edge <a href="#" className="blue-link">hybrid cloud solutions</a> to the deep expertise of <a href="#" className="blue-link">IBM Consulting<sup>®</sup></a>, IBM has what it takes to help you reinvent how your business works in the age of AI.
        </div>
      </div>
      <div className="tech-consulting-grid">
        {cards.map((card, idx) => (
          <div
            className={`tech-card${hovered[idx] ? ' hovered' : ''}`}
            key={card.title}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <div className="tech-card-title">{hovered[idx] ? card.hoverText : card.title}</div>
            <div className="tech-card-icon">{card.icon}</div>
            <div className="tech-card-arrow">&rarr;</div>
          </div>
        ))}
      </div>
      {/* Inside IBM Section */}
      <div className="inside-ibm-section">
        <h2 className="inside-ibm-title">Inside IBM</h2>
        <div className="inside-ibm-columns">
          <div className="inside-ibm-col">
            <div className="inside-ibm-col-title">Our company</div>
            <div className="inside-ibm-col-desc">Explore IBM history and culture of putting technology to work in the real world.</div>
            <div className="inside-ibm-links">
              <a href="#" className="inside-ibm-link">About IBM <span className="arrow">&rarr;</span></a>
              <a href="#" className="inside-ibm-link">Our history <span className="arrow">&rarr;</span></a>
            </div>
          </div>
          <div className="inside-ibm-col">
            <div className="inside-ibm-col-title">Our innovations</div>
            <div className="inside-ibm-col-desc">Visit the IBM lab, and see what's in store for the future of computing.</div>
            <div className="inside-ibm-links">
              <a href="#" className="inside-ibm-link">IBM Research <span className="external">&#x2197;</span></a>
              <a href="#" className="inside-ibm-link">Quantum computing <span className="arrow">&rarr;</span></a>
            </div>
          </div>
          <div className="inside-ibm-col">
            <div className="inside-ibm-col-title">Our people</div>
            <div className="inside-ibm-col-desc">See what it takes to become an IBMer, or build your skills with our educational courses.</div>
            <div className="inside-ibm-links">
              <a href="#" className="inside-ibm-link">Become an IBMer <span className="arrow">&rarr;</span></a>
              <a href="#" className="inside-ibm-link">Start learning <span className="external">&#x2197;</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechConsulting; 