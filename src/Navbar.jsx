import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const dropdownOptions = {
  AI: [
    'Overview',
    'Consulting',
    'Watsonx',
    'Agents',
    'Granite model',
    'Research',
    'Ethics and governance'
  ],
  'Hybrid Cloud': [
    'Overview',
    'Consulting',
    'Cloud platform',
    'IT infrastructure',
    'Quantum computing',
    'Research',
  ],
  Products: [
    'Overview',
    'Consulting',
    'Cloud platform',
    'IT infrastructure',
    'Quantum computing',
    'Research',
  ],
  Support: [
    'Overview',
    'Consulting',
    'Cloud platform',
    'IT infrastructure',
    'Quantum computing',
    'Research',
  ],
};

const supportDropdown = [
  {
    items: [
      { label: "What's New", arrow: true, highlight: true },
      { label: 'Community', arrow: true, highlight: true },
      { label: 'Developer', arrow: true, highlight: true },
      { label: 'Call for Code', indent: true },
      { label: 'Generative AI', indent: true },
      { label: 'Hackathons', indent: true },
      { label: 'Open Source @ IBM', indent: true },
      { label: 'Technologies', indent: true },
    ],
  },
  {
    items: [
      { label: 'Documentation', arrow: true, highlight: true },
      { label: 'All product documentation' },
      { label: 'IBM Cloud documentation' },
      { label: 'IBM Redbooks' },
      { label: 'IBM Cloud platform support', arrow: true, highlight: true },
      { label: 'Implementation' },
      { label: 'Expert Labs' },
    ],
  },
  {
    items: [
      { label: 'Support', arrow: true, highlight: true },
      { label: 'Download fixes, updates & drivers' },
      { label: 'Download licensed software - Passport Advantage' },
      { label: 'IBM Software Licensing' },
      { label: 'Open a case' },
      { label: 'View more' },
      { label: 'View support plans' },
      { label: 'View your cases'},
    ],
  },
  {
    items: [
      { label: 'Technology Lifecycle Services', arrow: true, highlight: true },
      { label: 'Enterprise networking and security' },
      { label: 'Servers and storage' },
      { label: 'Software' },
    ],
  },
  {
    items: [
      { label: 'Training', arrow: true, highlight: true },
      { label: 'Courses' },
      { label: 'Digital learning subscriptions' },
      { label: 'Learning paths & collections' },
      { label: 'Professional certifications' },
    ],
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (openDropdown) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [openDropdown]);

  const handleDropdown = (option) => {
    setOpenDropdown((prev) => (prev === option ? null : option));
  };

  const getArrowIcon = (option) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`ibm-navbar-arrow${openDropdown === option ? ' flipped' : ''}`}
      style={{ transition: 'transform 0.2s', transform: openDropdown === option ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path d="M4 6L8 10L12 6" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <nav className="ibm-navbar" ref={navRef}>
      <div className="ibm-navbar-left">
        <button className="ibm-navbar-hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Open menu">
          <svg viewBox="0 0 32 32"><rect x="6" y="8" width="20" height="2" rx="1" /><rect x="6" y="15" width="20" height="2" rx="1" /><rect x="6" y="22" width="20" height="2" rx="1" /></svg>
        </button>
        <a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM Logo"
            className="ibm-navbar-logo"
          />
        </a>
        <div className="ibm-navbar-divider" />
        <ul className={`ibm-navbar-links${menuOpen ? ' open' : ''}`}>
          <li onClick={() => handleDropdown('AI')}>
            <span>AI <span className="ibm-navbar-caret">{getArrowIcon('AI')}</span></span>
            {openDropdown === 'AI' && (
              <div className="ibm-navbar-dropdown">
                <div style={{ display: 'flex', width: '100%' }}>
                  {dropdownOptions['AI'].slice(0, 4).map((item) => (
                    <div className="ibm-navbar-dropdown-item" key={item}>
                      {item === 'Overview' ? (
                        <a href="https://www.ibm.com/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="ibm-navbar-dropdown-text" style={{ color: 'inherit', textDecoration: 'none' }}>
                          {item}
                        </a>
                      ) : (
                        <span className="ibm-navbar-dropdown-text">{item}</span>
                      )}
                      <span style={{ marginLeft: 8 }}>&rarr;</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                  {dropdownOptions['AI'].slice(4).map((item) => (
                    <div className="ibm-navbar-dropdown-item" key={item}>
                      <span className="ibm-navbar-dropdown-text">{item}</span> <span style={{ marginLeft: 8 }}>&rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li onClick={() => handleDropdown('Hybrid Cloud')}>
            <span>Hybrid Cloud <span className="ibm-navbar-caret">{getArrowIcon('Hybrid Cloud')}</span></span>
            {openDropdown === 'Hybrid Cloud' && (
              <div className="ibm-navbar-dropdown">
                <div style={{ display: 'flex', width: '100%' }}>
                  {dropdownOptions['Hybrid Cloud'].slice(0, 3).map((item) => (
                    <div className="ibm-navbar-dropdown-item" key={item}>
                      {item === 'Overview' ? (
                        <a href="https://www.ibm.com/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="ibm-navbar-dropdown-text" style={{ color: 'inherit', textDecoration: 'none' }}>
                          {item}
                        </a>
                      ) : (
                        <span className="ibm-navbar-dropdown-text">{item}</span>
                      )}
                      <span style={{ marginLeft: 8 }}>&rarr;</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                  {dropdownOptions['Hybrid Cloud'].slice(3).map((item) => (
                    <div className="ibm-navbar-dropdown-item" key={item}>
                      <span className="ibm-navbar-dropdown-text">{item}</span> <span style={{ marginLeft: 8 }}>&rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li onClick={() => handleDropdown('Products')}>
            <span>Products <span className="ibm-navbar-caret">{getArrowIcon('Products')}</span></span>
            {openDropdown === 'Products' && (
              <div className="ibm-navbar-dropdown">
                {dropdownOptions['Products'].map((item) => (
                  <div className="ibm-navbar-dropdown-item" key={item}>
                    <span className="ibm-navbar-dropdown-text">{item}</span> <span style={{ marginLeft: 8 }}>&rarr;</span>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li><a href="https://www.ibm.com/consulting/" target="_blank" rel="noopener noreferrer">Consulting</a></li>
          <li onClick={() => handleDropdown('Support')}>
            <span>Support <span className="ibm-navbar-caret">{getArrowIcon('Support')}</span></span>
            {openDropdown === 'Support' && (
              <div className="ibm-navbar-dropdown support-mega-menu">
                {supportDropdown.map((col, idx) => (
                  <div className="support-dropdown-col" key={idx}>
                    {col.heading && (
                      <div className="support-dropdown-heading">
                        {col.heading}
                      </div>
                    )}
                    {col.items.map((item, i) => (
                      <div
                        key={i}
                        className={`support-dropdown-item${item.highlight ? ' highlight' : ''}${item.indent ? ' indent' : ''}`}
                      >
                        <span className="support-dropdown-label">{item.label}</span>
                        {item.arrow && <span style={{ marginLeft: 4 }}>&rarr;</span>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li><a href="https://www.ibm.com/think/" target="_blank" rel="noopener noreferrer">Think</a></li>
        </ul>
      </div>
      <div className="ibm-navbar-right">
        <span className="ibm-navbar-icon" title="Search">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" /></svg>
        </span>
        <span className="ibm-navbar-icon" title="Chat">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="7,15 12,11 17,15" /></svg>
        </span>
        <span className="ibm-navbar-icon" title="Globe">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="10" ry="4" /><line x1="2" y1="12" x2="22" y2="12" /></svg>
        </span>
        <span className="ibm-navbar-icon" title="User">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 8-4 8-4s8 0 8 4" /></svg>
        </span>
      </div>
    </nav>
  );
}

export default Navbar; 