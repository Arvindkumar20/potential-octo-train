import "./About.css";
import profileImg from "../assets/pic.jpg"; // Replace with your actual image path
import {
  FaTwitter,
  FaGithub,
  FaLaptopCode,
  FaLightbulb,
  FaServer,
  FaRocket,
  FaPalette,
  FaHandshake,
  FaLinkedin,
} from "react-icons/fa";

const Top = () => {
  return (
    <div className="profile-container dark-mode" id="about">
      <div className="top">
        <div className="profile-image-wrapper">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div>
          <div className="profile-header">
            <div className="profile-info">
              <h1 className="profile-name">👋 Hi, I'm Arvind Kumar</h1>
              <p className="tagline">
                🔍 Analytical, self-motivated, and confident.
              </p>
              <p className="role">🌍 MERN | Full-Stack Web Developer</p>

              {/* Social Links */}
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/arvind-kumar-1466812b1"
                  className="icon facebook"
                >
                  <FaLinkedin />
                </a>
                <a href="https://x.com/Arvind827502" className="icon twitter">
                  <FaTwitter />
                </a>
                <a href="https://github.com/Arvindkumar20" className="icon github">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <span className="skill-tag">
              <FaLaptopCode /> Web Developer
            </span>
            <span className="skill-tag">
              <FaLightbulb /> React Developer
            </span>
            <span className="skill-tag">
              <FaServer /> Node.js
            </span>
            <span className="skill-tag">
              <FaRocket /> MERN Stack
            </span>
            <span className="skill-tag">
              <FaPalette /> Material UI
            </span>
            <span className="skill-tag">
              <FaHandshake /> Team Player
            </span>
          </div>
        </div>
      </div>

      {/* Objective Section */}
      <div className="objective">
        <h2>🎯 Objective</h2>
        <p>
          A motivated individual with in-depth knowledge of programming
          languages, especially JavaScript and development tools. I am skilled
          and experienced in both Front-end and Back-end Web Development,
          seeking a position as a Web Developer in a growth-oriented company
          where I can use my skills to the advantage of the company while having
          the scope to develop my own skills.
        </p>
      </div>
    </div>
  );
};

export default Top;
