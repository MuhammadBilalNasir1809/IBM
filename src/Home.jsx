import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import TechConsulting from './TechConsulting';
import DeveloperToolkit from './Developertoolkit';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <DeveloperToolkit />
      <TechConsulting />
      <Footer />
    </div>
  );
}

export default Home;
