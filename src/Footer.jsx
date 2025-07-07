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
            <a href="#">Products</a>
            <a href="#">Consulting services</a>
            <a href="#">Industries</a>
            <a href="#">Case studies</a>
            <a href="#">Financing</a>
            <a href="#">Research</a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="#">Business partners</a>
            <a href="#">Documentation</a>
            <a href="#">Events</a>
            <a href="#">Subscription center</a>
            <a href="#">Support</a>
            <a href="#">TechXchange community</a>
          </div>

          <div className="footer-column">
            <h4>Follow</h4>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Podcasts</a>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <a href="#">Overview</a>
            <a href="#">Careers</a>
            <a href="#">Investor relations</a>
            <a href="#">Leadership</a>
            <a href="#">Newsroom</a>
            <a href="#">Security, privacy and trust</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <a href="#">Contact IBM</a>
          <a href="#">Privacy</a>
        </div>
        <div>
          <a href="#">Terms of use</a>
        </div>
        <div>
        <a href="#">Accessibility</a>
        </div>
        <div>
          <a href="#">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;