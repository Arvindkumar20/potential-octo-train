import "./About.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profileImg from "../assets/pic.jpg";
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
    <motion.div
      className="profile-container dark-mode"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="top">
        {/* Profile Image with 3D Effect */}
        <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.1} transitionSpeed={400}>
          <motion.div
            className="profile-image-wrapper"
            initial={{ scale: 0.8, rotateY: 90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            <img src={profileImg} alt="Profile" className="profile-img" />
          </motion.div>
        </Tilt>

        {/* Profile Info */}
        <motion.div
          className="profile-header"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="profile-name">👋 Hi, I'm Arvind Kumar</h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🔍 Analytical, self-motivated, and confident.
          </motion.p>
          <p className="role">🌍 MERN | Full-Stack Web Developer</p>

          {/* Social Links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/arvind-kumar-1466812b1"
              className="icon linkedin"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/Arvind827502"
              className="icon twitter"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://github.com/Arvindkumar20"
              className="icon github"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section with 3D Effects */}
      <motion.div
        className="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {[
          { icon: <FaLaptopCode />, label: "Web Developer" },
          { icon: <FaLightbulb />, label: "React Developer" },
          { icon: <FaServer />, label: "Node.js" },
          { icon: <FaRocket />, label: "MERN Stack" },
          { icon: <FaPalette />, label: "Material UI" },
          { icon: <FaHandshake />, label: "Team Player" },
        ].map((skill, index) => (
          <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1}>
            <motion.span
              className="skill-tag"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon} {skill.label}
            </motion.span>
          </Tilt>
        ))}
      </motion.div>

      {/* Objective Section */}
      <motion.div
        className="objective"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2>🎯 Objective</h2>
        <p>
          A motivated individual with in-depth knowledge of programming
          languages, especially JavaScript and development tools. I am skilled
          and experienced in both Front-end and Back-end Web Development,
          seeking a position as a Web Developer in a growth-oriented company
          where I can use my skills to the advantage of the company while having
          the scope to develop my own skills.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Top;
