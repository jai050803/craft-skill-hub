import React from 'react';
import {Link} from 'react-router-dom';
import './about.css'


function About() {
  return (
    <>
      <header className='about-header'>
        <h1>CraftSkillHub</h1>
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li>
            <Link className="link"  to="/About">About</Link>
          </li>
          <li><Link className="link" to="/Contact">Contact</Link></li>
          <li><Link className="link"  to="/Browse">projects</Link></li>
          <li><Link className="link"  to="/Create">Create Projects</Link></li>
          <li><Link className="link"  to="/Community">Community</Link></li>
          <li id="buttons">
            <div className="btn">
              <button className="login-btn"><Link className="link-btn"  to="/Login">Login</Link></button>
              <button className="signup-btn"><Link className="link-btn"  to="/Signup">SignUp</Link></button>
            </div>
          </li>
        </ul>
      </header>
    
      <div className="about-container">
        <div className="about-heading">
          About The Founder
        </div>
        <div className="image-container">
          <div className="circle">
            {/* You can add your image here */}
          </div>
          <div className="rotating-circle"></div>
        </div>
        <div className="social-links">
          <p className="bold-text">Connect with me:</p>
          <div className="icon-links">
            <a href="your-link-to-social-media-1">
              <img src="../../public/pictures/instagram.svg" alt="instagram"/>
            </a>
            <a href="your-link-to-social-media-2">
            <img src="../../public/pictures/linkedin.png" alt="Linkedin"/>
            </a>
            <a href="your-link-to-social-media-3">
              <img src="../../public/pictures/twitter.png" alt="twitter"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;