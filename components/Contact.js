import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./contact.css";

const myStyle = {
  textAlign: "center",
  fontSize: "54px",
  marginTop: "30px",
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, such as sending feedback to your backend or displaying a thank you message.
    console.log("Submitted:", name, email, query);
  };
  return (
    <>
      <header className="about-header">
        <h1>CraftSkillHub</h1>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/Browse">
              projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/Create">
              Create Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/Community">
              Community
            </Link>
          </li>
          <li id="buttons">
            <div className="btn">
              <button className="login-btn">
                <Link className="link-btn" to="/Login">
                  Login
                </Link>
              </button>
              <button className="signup-btn">
                <Link className="link-btn" to="/Signup">
                  SignUp
                </Link>
              </button>
            </div>
          </li>
        </ul>
      </header>
      <h1 style={myStyle}>Contact Us</h1>
      <div className="contact-container">
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Describe your query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
