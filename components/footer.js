import React from 'react';
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

function Header() {
  return (
    <footer className="footer">
    	<div className="footer-content">
        	<p>{year} CraftSkillHub. All rights reserved.</p>
        	<nav>
            	<ul className="footer-nav">
                	<li><p><Link className="link" to="/about">About Us</Link></p></li>
                	<li><p><Link className="link" to="/contact">Contact Us</Link></p></li>
                	<li><p><Link className="link" to="/terms">Terms Of Use</Link></p></li>
                	<li><p><Link className="link" to="/privacy">Privacy and Policy</Link></p></li>
            	</ul>
        	</nav>
    	</div>
	</footer>
  )
}

export default Header;