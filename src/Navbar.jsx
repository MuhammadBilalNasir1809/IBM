import React, { useState } from 'react';
import './Navbar.css';

const ArrowDownIcon = (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ibm-navbar-arrow"><path d="M4 6L8 10L12 6" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="ibm-navbar">
      <div className="ibm-navbar-left">
        <button className="ibm-navbar-hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Open menu">
          <svg viewBox="0 0 32 32"><rect x="6" y="8" width="20" height="2" rx="1"/><rect x="6" y="15" width="20" height="2" rx="1"/><rect x="6" y="22" width="20" height="2" rx="1"/></svg>
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
          <li><a href="https://www.ibm.com/watson/" target="_blank" rel="noopener noreferrer">AI <span className="ibm-navbar-caret">{ArrowDownIcon}</span></a></li>
          <li><a href="https://www.ibm.com/cloud/hybrid" target="_blank" rel="noopener noreferrer">Hybrid Cloud <span className="ibm-navbar-caret">{ArrowDownIcon}</span></a></li>
          <li><a href="https://www.ibm.com/products" target="_blank" rel="noopener noreferrer">Products <span className="ibm-navbar-caret">{ArrowDownIcon}</span></a></li>
          <li><a href="https://www.ibm.com/consulting/" target="_blank" rel="noopener noreferrer">Consulting</a></li>
          <li><a href="https://www.ibm.com/support" target="_blank" rel="noopener noreferrer">Support <span className="ibm-navbar-caret">{ArrowDownIcon}</span></a></li>
          <li><a href="https://www.ibm.com/think/" target="_blank" rel="noopener noreferrer">Think</a></li>
        </ul>
      </div>
      <div className="ibm-navbar-right">
        <span className="ibm-navbar-icon" title="Search">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
        </span>
        <span className="ibm-navbar-icon" title="Chat">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="7,15 12,11 17,15"/></svg>
        </span>
        <span className="ibm-navbar-icon" title="Globe">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
        </span>
        <span className="ibm-navbar-icon" title="User">
          <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
        </span>
      </div>
    </nav>
  );
}

export default Navbar; 