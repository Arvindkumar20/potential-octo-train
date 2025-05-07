import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import imgs from "../assets/react.svg";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="logo"
          title="Arvind Kumar"
          whileHover={{ scale: 1.1 }}
        >
          <img src={imgs} alt="Logo" />
        </motion.a>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <motion.ul
          className={`nav-links ${menuOpen ? "active" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a
              href="mailto:arvindkumar8960905167@gmail.com?subject=Hiring Inquiry&body=Hello Arvind, I would like to discuss an opportunity!"
              className="hire-me-button"
            >
              Hire Me
            </a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
