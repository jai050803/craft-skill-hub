import React from 'react';
import './Terms.css';
import { Link } from 'react-router-dom';
function Terms() {
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
        <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p>
            By using CraftSkillHub, you agree to abide by these terms and conditions outlined below.
        </p>
        <h2>Use of Content</h2>
        <p>
            The content provided on CraftSkillHub is for informational purposes only. You may not use, reproduce, distribute, or modify any content without explicit permission.
        </p>
        <h2>Registration</h2>
        <p>
            To access certain features, you may need to register an account. You are responsible for maintaining the confidentiality of your account information.
        </p>
        {/* Add more terms and conditions here */}
        </div>
    </>
  );
}

export default Terms;
