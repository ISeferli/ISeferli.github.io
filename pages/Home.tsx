import React from 'react';
import { StarSeparator, COLORS } from '../constants';
import Hero from '../components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
// import Blog from '@/components/Blog';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      {/* <Blog /> */}
    </>
  );
};

export default Home;