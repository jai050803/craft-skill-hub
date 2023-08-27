import React from 'react';
import './privacy.css';
import { Link } from 'react-router-dom';

function Privacy() {
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
        <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>
            Welcome to CraftSkillHub! This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website.
        </p>
        <h2>Information We Collect</h2>
        <p>
            We may collect various types of information, including personal information (such as your name, email address, and location) and non-personal information (such as your browser type and device information). This information is collected when you sign up, use our services, or interact with our platform.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
            We use your information to provide and improve our services, customize your experience, communicate with you, and ensure the security of our platform. We may also use your information to send you updates, promotions, and relevant content.
        </p>
        <h2>Sharing Your Information</h2>
        <p>
            We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with service providers and partners who assist us in operating and improving our services.
        </p>
        <h2>Security</h2>
        <p>
            We take reasonable measures to protect your personal information from unauthorized access and disclosure. However, no data transmission over the internet can be guaranteed as completely secure. Please take necessary precautions when sharing your information online.
        </p>
        <h2>Changes to this Policy</h2>
        <p>
            We may update this Privacy Policy to reflect changes in our practices or legal obligations. We encourage you to review this policy periodically to stay informed about how we handle your information.
        </p>
        <h2>Contact Us</h2>
        <p>
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at privacy@craftskillhub.com.
        </p>
        {/* Add more sections of your privacy policy here */}
        </div>
    </>
  );
}

export default Privacy;
