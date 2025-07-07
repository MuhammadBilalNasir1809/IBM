import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="ibm-banner">
      <div className="ibm-banner-main">
        <div className="ibm-banner-left">
          <h1 className="ibm-banner-title">Put AI to work <br />today</h1>
          <p className="ibm-banner-desc">
            Automate real workflows with prebuilt agents for sales and procurement or build your own with our new no-code tools and capabilities
          </p>
          <div className="ibm-banner-buttons">
            <button className="ibm-btn ibm-btn-primary">Explore what's new →</button>
            <button className="ibm-btn ibm-btn-secondary">Learn about AI agents →</button>
          </div>
        </div>
        <div className="ibm-banner-right">
          <img src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/creative-assets/ibs/ul/g/b4/04/061222_SLowell_IBM_ORCHESTRATE_HALLWAY_Scarf_01.component.crop-3by2-xl.ts=1751378299054.jpg/content/adobe-cms/us/en/homepage/jcr:content/root/leadspace_container/leadspace_expanded" alt="Multiple versions of the same person working on different tasks" className="ibm-banner-image" />
        </div>
        <div className="ibm-banner-news">
          <h3>Latest news</h3>
          <ul>
            <li><a href="#">Deutsche Telekom Selects IBM Concert to Accelerate IT…</a></li>
            <li><a href="#">Parsons Corporation is Ready Now to Build America's Brand…</a></li>
          </ul>
          <div className="ibm-banner-pagination">
            <span className="ibm-banner-page active">1</span>
            <span className="ibm-banner-page">2</span>
            <span className="ibm-banner-page">3</span>
            <span className="ibm-banner-page">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner; 