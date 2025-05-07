import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaProjectDiagram,
  FaUserAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        {/* Logo & Description */}
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Arvind Kumar</h2>
          <p>🚀 Full Stack Developer | MERN Stack</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
              <a href="#about"><FaUserAlt /> About</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
              <a href="#projects"><FaProjectDiagram /> Projects</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
              <a href="#skills"><FaHome /> Skills</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
              <a href="mailto:arvindkumar8960905167@gmail.com?subject=Hiring Inquiry&body=Hello Arvind, I would like to..."
                className="hire-me-button">
                <FaEnvelope /> Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Follow Me</h3>
          <div className="social-icons">
            <motion.a href="https://github.com/Arvindkumar20" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 200 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/arvind-kumar-1466812b1" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 200 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://x.com/Arvind827502" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 200 }}>
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p>© {new Date().getFullYear()} Arvind Kumar. All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
