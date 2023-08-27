import React from 'react';
import {Link} from 'react-router-dom';


function Browse() {
  return (
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
  )
}

export default Browse;