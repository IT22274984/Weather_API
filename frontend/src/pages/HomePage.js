import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import { useAuth0 } from '@auth0/auth0-react';

function HomePage() {
  const { isAuthenticated } = useAuth0();

  
  return (
    isAuthenticated && (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      
      <Footer />
    </>
    )
  );
}

export default HomePage;
