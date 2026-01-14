import React from 'react';
import Header from '@/components/landing-page/header';
import Hero from '@/components/landing-page/hero';
import FeaturesStrip from '@/components/landing-page/Features-strip';
import SaveGas from '@/components/landing-page/save-gas';
import NoETH from '@/components/landing-page/no-eth';


// Complete landing page with Hero and Problem sections
const LandingPage: React.FC = () => {
  return (
    <main className="bg-black w-full">
      <Header />
      <Hero />
      <FeaturesStrip />
      <SaveGas />
      <NoETH />


    </main>
  );
};

export default LandingPage;