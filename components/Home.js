import React from 'react';
import Header from './header';
import Hero from './Hero-section';
import Footer from './footer';
import Section from './section2';

function Home() {
  return (
    <>
      <div className= "container">
        <Header />
        <Hero />
      </div>
        <Section />
        <Footer />
      
    </>
    
  )
}

export default Home;
