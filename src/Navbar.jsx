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

const productCategories = [
  { label: 'Featured', featured: true },
  { label: 'AI & machine learning' },
  { label: 'Analytics' },
  { label: 'Asset lifecycle management' },
  { label: 'Business automation' },
  { label: 'Containers' },
  { label: 'Databases' },
  { label: 'DevOps & Engineering' },
  { label: 'IT automation' },
  { label: 'Middleware' },
  { label: 'Network' },
  { label: 'Operating systems' },
  { label: 'Quantum' },
  { label: 'Security & identity' },
  { label: 'Servers' },
  { label: 'Storage' },
];

const featuredProducts = [
  [
    { title: 'Context', desc: 'Software to manage applications, mitigate risks and enhance resilience' },
    { title: 'Environmental Intelligence', desc: 'SaaS for predicting and responding to weather and climate events' },
    { title: 'FlashSystem', desc: 'Primary storage for performance and latency sensitive workloads' },
    { title: 'HashCorp', desc: 'Manage cloud infrastructure and security' },
    { title: 'IBM Cloud', desc: 'On-demand cloud computing platform and APIs' },
    { title: 'IBM Z', desc: 'Flagship mainframe with on-chip AI and quantum-safe cryptography' },
  ],
  [
    { title: 'IBM webMethods Hybrid Integration', desc: 'AI powered automation software to unify integration workflows' },
    { title: 'Instana', desc: 'Software for application performance monitoring and automation' },
    { title: 'MacS360', desc: 'Unified endpoint management software for many device types' },
    { title: 'Maximo', desc: 'Software for asset management and related workflows' },
    { title: 'Planning Analytics', desc: 'Software to automate financial and operational planning' },
    { title: 'Robotic Process Automation (RPA)', desc: 'Software to automate workflows and business processes' },
  ],
  [
    { title: 'Storage Scale', desc: 'Software defined storage for AI and high performance workloads' },
    { title: 'Turbenomic', desc: 'Software to manage and optimize IT resource usage' },
    { title: 'Verify', desc: 'Identify, authentication, and access control software' },
    { title: 'watsonx', desc: 'AI and data platform' },
    { title: 'watsonx Assistant', desc: 'Virtual agents customizable to any domain' },
    { title: 'watsonx Orchestrate', desc: 'Personal-assistant software that automates repetitive tasks' },
  ],
];

const aiMLProducts = [
  [
    { title: 'Cloud Pak for AIOps', desc: 'DevOps management tool with AI analysis and recommendations'},
    { title: 'Cloud Pak for Data', desc: 'Tools for data analysis, organization and management' },
    { title: 'InstructLab', desc: 'Deploy custom AI models as a service' },
    { title: 'Knowledge Catalog', desc: 'SaaS to catalog data, AI models, metadata, policies and more' },
    { title: 'Watson Discovery', desc: 'AI to search in and answer questions about business documents' },
  ],
  [
    { title: 'Watson Natural Language Understanding', desc: 'API for text analysis and metadata extraction', bold: true },
    { title: 'Watson Speech to Text', desc: 'API for real-time speech recognition and transcription' },
    { title: 'Watson Studio', desc: 'IDE to build, run and manage AI models' },
    { title: 'Watson Text to Speech', desc: 'API for real-time text to speech conversion' },
    { title: 'Z Anomaly Analytics', desc: 'Operational anomaly detection software for mainframes' },
  ],
  [
    { title: 'watsonx', desc: 'AI and data platform', bold: true },
    { title: 'watsonx Assistant', desc: 'Virtual agents customizable to any domain' },
    { title: 'watsonx Code Assistant', desc: 'AI tool to generate code' },
    { title: 'watsonx.data', desc: 'Hybrid, open data lakehouse for AI and analytics' },
    { title: 'watsonx.data integration', desc: 'Scale data delivery with unified integration' },
    { title: 'watsonx data intelligence', desc: 'Discover, govern, and share trusted data' },
  ],
];

const analyticsProducts = [
  [
    { title: 'Business Analytics Enterprise', desc: 'Software for business planning and analysis', bold: true },
    { title: 'CPLEX', desc: 'Software to build and solve complex optimization models' },
    { title: 'Cloud Pak for Data', desc: 'Tools for data analysis, organization and management' },
    { title: 'Cognos Analytics', desc: 'Software for business intelligence and performance management' },
    { title: 'Databand', desc: 'Data observability software for data engineers and DataOps teams' },
  ],
  [
    { title: 'InfoSphere Information Server', desc: 'Data integration suite for ETL, governance and analysis', bold: true },
    { title: 'Manta Data Lineage', desc: 'Software to visualize the flow of data from origin to consumption' },
    { title: 'Netezza', desc: 'Data warehousing and analytics system on custom hardware' },
    { title: 'Optim', desc: 'Software to manage test, production, and archived data' },
    { title: 'Planning Analytics', desc: 'Software to automate financial and operational planning' },
  ],
  [
    { title: 'SPSS', desc: 'Software for statistical analysis and business intelligence', bold: true },
    { title: 'Spectrum Computing', desc: 'Software to optimize resources in complex computing clusters' },
    { title: 'StreamSets', desc: 'Graphical interface to build and manage streaming data pipelines' },
    { title: 'Watson Discovery', desc: 'AI to search in and answer questions about business documents' },
    { title: 'Watson Studio', desc: 'IDE to build, run and manage AI models' },
  ],
];

const assetLifecycleProducts = [
  [
    { title: 'Environmental Intelligence', desc: 'SaaS for predicting and responding to weather and climate events', bold: true },
    { title: 'Envizi', desc: 'ESG data management, reporting and analysis SaaS' },
  ],
  [
    { title: 'Maximo', desc: 'Software for asset management and related workflows', bold: true },
    { title: 'TRIRIGA', desc: 'Software for real estate and workplace management' },
  ],
];

const businessAutomationProducts = [
  [
    { title: 'Blueworks Live', desc: 'SaaS for collaboratively modeling business processes', bold: true },
    { title: 'Business Automation Manager Open Editions', desc: 'Workflow automation and decision management software' },
    { title: 'Business Automation Workflow', desc: 'Cloud Pak for Business Automation add-on to automate workflows' },
    { title: 'Cloud Pak for Business Automation', desc: 'Operations management software with AI insights' },
  ],
  [
    { title: 'Datacap', desc: 'Document management for IBM Cloud Pak for Business Automation', bold: true },
    { title: 'FileNet Content Manager', desc: 'Content management solution for Cloud Pak for Business Automation' },
    { title: 'Operational Decision Manager', desc: 'Cloud Pak for Business Automation addon for rule-based decisions' },
    { title: 'Process Mining', desc: 'Software to extract process data from business applications' },
  ],
  [
    { title: 'Robotic Process Automation (RPA)', desc: 'Software to automate workflows and business processes', bold: true },
    { title: 'watsonx Orchestrate', desc: 'Personal-assistant software that automates repetitive tasks' },
  ],
];

const containersProducts = [
  [
    { title: 'Red Hat OpenShift', desc: 'Enterprise Kubernetes platform for containers', bold: true },
    { title: 'IBM Cloud Kubernetes Service', desc: 'Managed Kubernetes for containerized apps' },
    { title: 'IBM Cloud Code Engine', desc: 'Serverless platform for containers and code' },
  ],
  [
    { title: 'IBM Cloud Container Registry', desc: 'Private image registry for containers' },
    { title: 'IBM Cloud Pak for Applications', desc: 'Modernize and run applications in containers' },
  ],
];

const databasesProducts = [
  [
    { title: 'Db2', desc: 'Enterprise relational database for transactional workloads', bold: true },
    { title: 'Cloudant', desc: 'NoSQL database for web and mobile apps' },
    { title: 'MongoDB', desc: 'Document database for modern applications' },
  ],
  [
    { title: 'PostgreSQL', desc: 'Open source relational database' },
    { title: 'IBM Informix', desc: 'Database for IoT and OLTP workloads' },
  ],
];

const devopsProducts = [
  [
    { title: 'UrbanCode', desc: 'Continuous delivery and release automation', bold: true },
    { title: 'Tekton', desc: 'Open source CI/CD pipelines' },
    { title: 'Rational Team Concert', desc: 'Agile planning and tracking' },
  ],
  [
    { title: 'IBM Cloud Continuous Delivery', desc: 'Toolchains for DevOps automation' },
    { title: 'GitHub Actions', desc: 'CI/CD for GitHub repositories' },
  ],
];

const itAutomationProducts = [
  [
    { title: 'Turbonomic', desc: 'AI-powered application resource management', bold: true },
    { title: 'Instana', desc: 'Application performance monitoring' },
    { title: 'Netcool', desc: 'Event management and automation' },
  ],
  [
    { title: 'IBM Cloud Pak for Watson AIOps', desc: 'AI for IT operations' },
    { title: 'Ansible Automation Platform', desc: 'Automate IT infrastructure' },
  ],
];

const middlewareProducts = [
  [
    { title: 'WebSphere Application Server', desc: 'Enterprise Java application server', bold: true },
    { title: 'MQ', desc: 'Messaging for applications and microservices' },
    { title: 'DataPower Gateway', desc: 'Secure API and integration gateway' },
  ],
  [
    { title: 'API Connect', desc: 'API management platform' },
    { title: 'App Connect', desc: 'Integration for cloud and on-premises apps' },
  ],
];

const networkProducts = [
  [
    { title: 'Cloud Internet Services', desc: 'DDoS protection, CDN, and DNS services', bold: true },
    { title: 'Direct Link', desc: 'Private network connectivity to IBM Cloud' },
    { title: 'VPN for VPC', desc: 'Secure site-to-site connectivity' },
  ],
  [
    { title: 'Transit Gateway', desc: 'Connect and manage multiple networks' },
    { title: 'Load Balancer', desc: 'Distribute traffic across servers' },
  ],
];

const operatingSystemsProducts = [
  [
    { title: 'IBM i', desc: 'Integrated operating environment for IBM Power' },
    { title: 'AIX', desc: 'UNIX OS for IBM Power Systems', bold: true },
    { title: 'LinuxONE', desc: 'Enterprise Linux for mainframes' },
  ],
  [
    { title: 'Red Hat Enterprise Linux', desc: 'Open source enterprise OS' },
    { title: 'SUSE Linux Enterprise Server', desc: 'Linux OS for enterprise workloads' },
  ],
];

const quantumProducts = [
  [
    { title: 'IBM Quantum', desc: 'Cloud-based quantum computing platform', bold: true },
    { title: 'Qiskit', desc: 'Open source quantum development kit' },
    { title: 'Quantum Lab', desc: 'Environment for quantum programming' },
  ],
  [
    { title: 'Quantum Composer', desc: 'Visualize and build quantum circuits' },
    { title: 'Quantum System One', desc: 'Commercial quantum computer' },
  ],
];

const securityProducts = [
  [
    { title: 'QRadar', desc: 'Security information and event management (SIEM)', bold: true },
    { title: 'Guardium', desc: 'Data security and protection' },
    { title: 'MaaS360', desc: 'Unified endpoint management' },
  ],
  [
    { title: 'Verify', desc: 'Identity and access management' },
    { title: 'Resilient', desc: 'Security orchestration and incident response' },
  ],
];

const serversProducts = [
  [
    { title: 'IBM Power Systems', desc: 'Enterprise servers for mission-critical workloads', bold: true },
    { title: 'IBM Z', desc: 'Mainframe servers with advanced security' },
    { title: 'LinuxONE', desc: 'Linux servers for cloud and analytics' },
  ],
  [
    { title: 'IBM Storage', desc: 'Enterprise storage solutions' },
    { title: 'IBM Cloud Bare Metal Servers', desc: 'Dedicated servers for performance' },
  ],
];

const storageProducts = [
  [
    { title: 'Ceph', desc: 'Multi-protocol software-defined enterprise storage platform' },
    { title: 'Cloud Block Storage', desc: 'Managed service optimized for low latency and high transfer rates' },
    { title: 'Cloud File Storage', desc: 'Managed service for flash-backed, durable, NFS-based file storage' },
    { title: 'Cloud Object Storage', desc: 'Unstructured data storage accessible via cloud APIs' },
    { title: 'DS8000', desc: 'High-capacity, high-availability mainframe storage system' },
  ],
  [
    { title: 'Defender', desc: 'Data resiliency software for threat detection and data recovery' },
    { title: 'FlashSystem', desc: 'All-flash array with performance and capacity for any workload'},
    { title: 'Fusion', desc: 'Container-native storage and data orchestration for OpenShift' },
    { title: 'Insights', desc: 'Storage AIOps for metrics-powered analysis and decisions' },
    { title: 'Protect', desc: 'Data resiliency, backup and recovery delivered via SaaS' },
  ],
  [
    { title: 'Protect for Cloud', desc: 'Backup and recovery SaaS for data in public cloud services' },
    { title: 'SAN Switches', desc: 'Scalable and highly available storage area network solutions' },
    { title: 'Scale', desc: 'Software defined storage for AI and high performance workloads' },
    { title: 'Scale System', desc: 'All-flash or hybrid performant storage for cloud scale use-cases' },
    { title: 'Tape Systems', desc: 'Software and hardware for encrypted and air-gapped archives' },
  ],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const [productsCategoryIdx, setProductsCategoryIdx] = useState(0);

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
          <li>
            <span onClick={() => handleDropdown('Products')}>Products <span className="ibm-navbar-caret">{getArrowIcon('Products')}</span></span>
            {openDropdown === 'Products' && (
              <div className="ibm-navbar-dropdown products-mega-menu">
                <div className="products-menu-left">
                  {productCategories.map((cat, idx) => (
                    <div
                      key={cat.label}
                      className={`products-menu-category${productsCategoryIdx === idx ? ' selected' : ''}`}
                      onClick={() => setProductsCategoryIdx(idx)}
                    >
                      {cat.label}
                    </div>
                  ))}
                  <a href="https://www.ibm.com/products" className="products-menu-all-btn" target="_blank" rel="noopener noreferrer">View all products <span style={{marginLeft: 8}}>&rarr;</span></a>
                </div>
                <div className="products-menu-right">
                  {productsCategoryIdx === 0 && (
                    <>
                      <div className="products-featured-title">Featured</div>
                      <div className="products-featured-cols">
                        {featuredProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name">{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 1 && (
                    <>
                      <div className="products-featured-title blue-title">AI &amp; machine learning <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Use IBM Watson’s AI or build your own machine learning models</div>
                      <div className="products-featured-cols">
                        {aiMLProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className={`products-featured-item${prod.highlight ? ' highlight' : ''}`} key={prod.title} style={prod.highlight ? {background:'#ededed'} : {}}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 2 && (
                    <>
                      <div className="products-featured-title blue-title">Analytics <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Aggregate and analyze large datasets</div>
                      <div className="products-featured-cols">
                        {analyticsProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className={`products-featured-item${prod.highlight ? ' highlight' : ''}`} key={prod.title} style={prod.highlight ? {background:'#ededed'} : {}}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 3 && (
                    <>
                      <div className="products-featured-title blue-title">Asset lifecycle management <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Manage and maintain physical assets</div>
                      <div className="products-featured-cols">
                        {assetLifecycleProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 4 && (
                    <>
                      <div className="products-featured-title blue-title">Business automation <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Automate workflows and business processes</div>
                      <div className="products-featured-cols">
                        {businessAutomationProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className={`products-featured-item${prod.highlight ? ' highlight' : ''}`} key={prod.title} style={prod.highlight ? {background:'#ededed'} : {}}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 5 && (
                    <>
                      <div className="products-featured-title blue-title">Containers <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Build, deploy, and manage containerized applications</div>
                      <div className="products-featured-cols">
                        {containersProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 6 && (
                    <>
                      <div className="products-featured-title blue-title">Databases <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Store, manage, and analyze your data</div>
                      <div className="products-featured-cols">
                        {databasesProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 7 && (
                    <>
                      <div className="products-featured-title blue-title">DevOps &amp; Engineering <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Automate, build, and deploy with DevOps tools</div>
                      <div className="products-featured-cols">
                        {devopsProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 8 && (
                    <>
                      <div className="products-featured-title blue-title">IT automation <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Automate IT operations and infrastructure</div>
                      <div className="products-featured-cols">
                        {itAutomationProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 9 && (
                    <>
                      <div className="products-featured-title blue-title">Middleware <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Integrate, connect, and manage applications</div>
                      <div className="products-featured-cols">
                        {middlewareProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 10 && (
                    <>
                      <div className="products-featured-title blue-title">Network <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Connect, secure, and optimize your network</div>
                      <div className="products-featured-cols">
                        {networkProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 11 && (
                    <>
                      <div className="products-featured-title blue-title">Operating systems <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Enterprise and open source operating systems</div>
                      <div className="products-featured-cols">
                        {operatingSystemsProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 12 && (
                    <>
                      <div className="products-featured-title blue-title">Quantum <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Explore quantum computing and development</div>
                      <div className="products-featured-cols">
                        {quantumProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 13 && (
                    <>
                      <div className="products-featured-title blue-title">Security &amp; identity <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Protect your data, users, and applications</div>
                      <div className="products-featured-cols">
                        {securityProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 14 && (
                    <>
                      <div className="products-featured-title blue-title">Servers <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Enterprise servers for every workload</div>
                      <div className="products-featured-cols">
                        {serversProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className="products-featured-item" key={prod.title}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {productsCategoryIdx === 15 && (
                    <>
                      <div className="products-featured-title blue-title">Storage <span className="products-title-arrow">&rarr;</span></div>
                      <div className="products-featured-desc" style={{marginBottom: '18px', marginLeft:'-50px'}}>Software, hardware and services for critical and operational workloads and data</div>
                      <div className="products-featured-cols">
                        {storageProducts.map((col, colIdx) => (
                          <div className="products-featured-col" key={colIdx}>
                            {col.map((prod) => (
                              <div className={`products-featured-item${prod.highlight ? ' highlight' : ''}`} key={prod.title} style={prod.highlight ? {background:'#ededed'} : {}}>
                                <div className="products-featured-name" style={prod.bold ? {fontWeight:600} : {}}>{prod.title}</div>
                                <div className="products-featured-desc">{prod.desc}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
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