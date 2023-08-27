import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section id="hero-content">
	        <div className="hero-text">
            <h1 className="hero-line">Welcome to CraftSkillHub</h1>
            <h2 className="sub-hero"> creativity meets community</h2>
            <a href="#" className="cta-button"><Link className='link' to="/browse">Explore Projects</Link></a>
          </div>
	  </section>

  )
}

export default Hero;