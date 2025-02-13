import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';


function HomePage() {
  
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      
      <Footer />
    </>
  );
}

export default HomePage;
