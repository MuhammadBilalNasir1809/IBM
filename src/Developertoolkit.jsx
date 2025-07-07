import React from 'react';
import './DeveloperToolKit.css';

function DeveloperToolkit() {
  return (
    <div className="developer-section">
      <h4 className="recommended-title">Recommended for you</h4>

      <div className="recommended-cards">
        <div className="card">
          <img
            src="https://assets.ibm.com/is/image/ibm/adobestock_434114415:1x1?ts=1751378304920&dpr=on%2C1&wid=320&hei=320"
            alt="AI agent functions"
          />
          <div className="card-text-group">
            <p className="card-category">Insight</p>
            <p className="card-text">
              Read how AI agents can help perform a range of different functions to enhance business needs
            </p>
            <span className="card-arrow">→</span>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.ibm.com/is/image/ibm/fba-logo:1x1?ts=1751378305458&dpr=on%2C1&wid=320&hei=320"
            alt="Franchise Brokers"
          />
          <div className="card-text-group">
            <p className="card-category">Case study</p>
            <p className="card-text">
              Franchise Brokers Association is transforming sales performance with AI automation
            </p>
            <span className="card-arrow">→</span>
          </div>
        </div>

        <div className="card">
          <img src="/img1.png" alt="Webinar" />
          <div className="card-text-group">
            <p className="card-category">Webinar</p>
            <p className="card-text">
              Explore the potential of AI agents that can effortlessly integrate into your business operations
            </p>
            <span className="card-arrow">↗</span>
          </div>
        </div>

        <div className="card">
          <img src="/img2.png" alt="AI Financial" />
          <div className="card-text-group">
            <p className="card-category">Report</p>
            <p className="card-text">
              From AI projects to profits: How agentic AI can sustain financial returns
            </p>
            <span className="card-arrow">→</span>
          </div>
        </div>
      </div>

      <div className="developer-columns">
        <div className="column">
          <h2>Developer toolkit</h2>
          <h3 className="highlight">Build, learn, deploy</h3>
          <p className="desc">
            Build smart, learn fast, win big and stay in control of your AI with governance.
          </p>
          <ul>
            <li><a href="#">Start building with IBM Granite® models →</a></li>
            <li><a href="#">Explore AI courses, APIs, data sets and more →</a></li>
            <li><a href="#">Power your future, build your dev skills ↗</a></li>
            <li><a href="#">Monitor agentic AI performance with watsonx.governance →</a></li>
          </ul>
        </div>

        <div className="column">
          <h3 className="highlight right">Why IBM?</h3>
          <p className="desc">See what the analysts have to say and start your hands-on journey.</p>
          <ul>
            <li><a href="#">Read why Gartner named IBM a Leader in Data Science and ML →</a></li>
            <li><a href="#">Discover why Omdia ranked IBM a Leader in IDE Assistants →</a></li>
            <li><a href="#">Get 25% off watsonx Code Assistant™ Essentials →</a></li>
            <li><a href="#">See why Granite Vision tops the SLMs chart in doc understanding →</a></li>
          </ul>
        </div>
      </div>

      <div className="special-offers-banner">
        <div className="special-offers-image">
          <img src="https://assets.ibm.com/is/image/ibm/big-blue-30-shopping-promotion-banner?ts=1751378310312&dpr=on%2C1&qlt=90&wid=320" alt="Special offers" />
        </div>
        <div className="special-offers-text">
          <div className="special-offers-title">Save <b>big</b> on our latest special offers</div>
          <div className="special-offers-desc">Don't miss out—explore exclusive offers, discounts and free trials.<br/>Start your IBM journey today!</div>
        </div>
        <div className="special-offers-action">
          <button className="special-offers-btn">Get the latest offers <span style={{marginLeft: '8px'}}>&rarr;</span></button>
        </div>
      </div>
    </div>
  );
}

export default DeveloperToolkit;
