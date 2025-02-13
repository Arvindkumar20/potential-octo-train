import { useState } from "react";
import "./Navbar.css";
import imgs from "../assets/react.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo" title="Arvind Kumar">
          <img src={imgs} alt="Logo" />
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a
              href="https://www.canva.com/design/DAGd9yjyHWU/6fEXF5hvVUuY0t6-hUFIng/edit?utm_content=DAGd9yjyHWU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="mailto:arvindkumar8960905167@gmail.com?subject=Hiring Inquiry&body=Hello Arvind, I would like to discuss an opportunity!"
              className="hire-me-button"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
