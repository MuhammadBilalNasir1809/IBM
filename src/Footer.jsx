import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="ibm-footer">
      <div className="footer-content">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM Logo"
            width="80"
          />
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h4>Discover</h4>
            <a href="https://www.ibm.com">Products</a>
            <a href="https://www.ibm.com">Consulting services</a>
            <a href="https://www.ibm.com">Industries</a>
            <a href="https://www.ibm.com">Case studies</a>
            <a href="https://www.ibm.com">Financing</a>
            <a href="https://www.ibm.com">Research</a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="https://www.ibm.com">Business partners</a>
            <a href="https://www.ibm.com">Documentation</a>
            <a href="https://www.ibm.com">Events</a>
            <a href="https://www.ibm.com">Subscription center</a>
            <a href="https://www.ibm.com">Support</a>
            <a href="https://www.ibm.com">TechXchange community</a>
          </div>

          <div className="footer-column">
            <h4>Follow</h4>
            <a href="https://www.ibm.com">LinkedIn</a>
            <a href="https://www.ibm.com">X</a>
            <a href="https://www.ibm.com">Instagram</a>
            <a href="https://www.ibm.com">YouTube</a>
            <a href="https://www.ibm.com">Podcasts</a>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <a href="https://www.ibm.com">Overview</a>
            <a href="https://www.ibm.com">Careers</a>
            <a href="https://www.ibm.com">Investor relations</a>
            <a href="https://www.ibm.com">Leadership</a>
            <a href="https://www.ibm.com">Newsroom</a>
            <a href="https://www.ibm.com">Security, privacy and trust</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="https://www.ibm.com">Contact IBM</a>
          <a href="https://www.ibm.com">Privacy</a>
        </div>
        <div>
          <a href="https://www.ibm.com">Terms of use</a>
        </div>
        <div>
        <a href="https://www.ibm.com">Accessibility</a>
        </div>
        <div>
          <a href="https://www.ibm.com">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;