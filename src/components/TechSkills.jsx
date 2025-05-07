import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./TechSkills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMarkdown,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiFirebase,
  SiAdobephotoshop,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import axios from "axios";

// Skill categories
// const skills = [
//   {
//     category: "Languages",
//     skills: [
//       { name: "JavaScript", level: "Expert", icon: <FaJs color="#F7DF1E" /> },
//       { name: "HTML5", level: "Expert", icon: <FaHtml5 color="#E34F26" /> },
//       { name: "CSS3", level: "Expert", icon: <FaCss3Alt color="#1572B6" /> },
//       { name: "Markdown", level: "Junior", icon: <FaMarkdown color="#000" /> },
//     ],
//   },
//   {
//     category: "Back-end",
//     skills: [
//       { name: "Node.js", level: "Expert", icon: <FaNodeJs color="#339933" /> },
//       { name: "Express.js", level: "Expert", icon: <SiExpress color="#000" /> },
//     ],
//   },
//   {
//     category: "Front-end",
//     skills: [
//       { name: "React", level: "Expert", icon: <FaReact color="#61DAFB" /> },
//       { name: "Firebase", level: "Expert", icon: <SiFirebase color="#FFCA28" /> },
//       { name: "Bootstrap", level: "Expert", icon: <FaBootstrap color="#7952B3" /> },
//       { name: "Tailwind", level: "Expert", icon: <SiTailwindcss color="#38B2AC" /> },
//     ],
//   },
//   {
//     category: "Database",
//     skills: [
//       { name: "MongoDB", level: "Expert", icon: <SiMongodb color="#47A248" /> },
//       { name: "MySQL", level: "Intermediate", icon: <SiMysql color="#4479A1" /> },
//       { name: "Mongoose", level: "Expert", icon: <SiMongoose color="#880000" /> },
//     ],
//   },
//   {
//     category: "Dev Tools",
//     skills: [
//       { name: "Git", level: "Expert", icon: <FaGit color="#F05032" /> },
//       { name: "GitHub", level: "Expert", icon: <FaGithub color="#181717" /> },
//     ],
//   },
//   {
//     category: "Design Tools",
//     skills: [
//       { name: "Adobe Photoshop", level: "Intermediate", icon: <SiAdobephotoshop color="#31A8FF" /> },
//       { name: "Figma", level: "Junior", icon: <SiFigma color="#F24E1E" /> },
//       { name: "VS Code", level: "Expert", icon: <VscVscode color="#007ACC" /> },
//       { name: "Canva", level: "Intermediate", icon: <SiCanva color="#38B2AC" /> },
//     ],
//   },
// ];

const TechSkills = () => {
  const [skills, setSkills] = useState();

  const loadSkills = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/skill");
      console.log(res);
      setSkills(res.data.skills);
      console.log(res.data.skills[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);
  return (
    <motion.div
      className="skills-container"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Tech Skills
      </motion.h2>

      <motion.div className="skills-grid">
        {skills?.length >= 0 &&
          skills?.map((skill, index) => (
            <motion.div
              key={index}
              className="skills-category"
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                boxShadow: "0px 10px 30px rgba(255, 69, 96, 0.5)",
              }}
            >
              <h3>{skill?.category}</h3>
              <ul>
                {skill?.skills?.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="skill-item"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0px 5px 20px rgba(255, 69, 96, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {/* <span className="skill-icon">{skill.icon}</span>
                     */}
                    {skill.icon == "js" && <FaJs size={20} color="#F7DF1E" />}
                    {skill.icon == "react" && <FaReact size={20} color="#61DAFB" />}
                    {skill.icon == "mongo" && <SiMongodb color="#47A248" />}

                    <span className="skill-name">{skill.name}</span>
                    <span
                      className={`skill-level ${skill.level.toLowerCase()}`}
                    >
                      {skill.level}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default TechSkills;
