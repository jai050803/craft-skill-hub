
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import './create.css';

function Create() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    if (file) {
      // Here you can handle file submission to your backend
      alert('File submitted successfully!');
    }
  };

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
      <div className="create-container">
        <h1>Upload Picture or Video</h1>
        <input
          type="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Create;
