import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaHome, FaProjectDiagram, FaUserAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-logo">
          <h2>Arvind Kumar</h2>
          <p>🚀 Full Stack Developer | MERN Stack</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about"><FaUserAlt /> About</a></li>
            <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
            <li><a href="#skills"><FaHome /> Skills</a></li>
            <li> <a
              href="mailto:arvindkumar8960905167@gmail.com?subject=Hiring Inquiry&body=Hello Arvind, I would like to..."
              className="hire-me-button"
            ><FaEnvelope /> Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Arvindkumar20" target="_blank" rel="noopener noreferrer" className="github"><FaGithub className="github"/></a>
            <a href="https://www.linkedin.com/in/arvind-kumar-1466812b1" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/Arvind827502" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Arvind Kumar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
