import React from "react";
import "./TechSkills.css"; // Import CSS for styling
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


const skills = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: "Expert", icon: <FaJs color="#F7DF1E" /> },
      { name: "HTML5", level: "Expert", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", level: "Expert", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Markdown", level: "Junior", icon: <FaMarkdown color="#000" /> },
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Node.js", level: "Expert", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", level: "Expert", icon: <SiExpress color="#000" /> },
    ],
  },
  {
    category: "Front-end",
    skills: [
      { name: "React", level: "Expert", icon: <FaReact color="#61DAFB" /> },
      {
        name: "Firebase",
        level: "Expert",
        icon: <SiFirebase color="#FFCA28" />,
      },
      {
        name: "Bootstrap",
        level: "Expert",
        icon: <FaBootstrap color="#7952B3" />,
      },
      {
        name: "Tailwind",
        level: "Expert",
        icon: <SiTailwindcss color="#38B2AC" />,
      },
      
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: "Expert", icon: <SiMongodb color="#47A248" /> },
      {
        name: "MySQL",
        level: "Intermediate",
        icon: <SiMysql color="#4479A1" />,
      },
      {
        name: "Mongoose",
        level: "Expert",
        icon: <SiMongoose color="#880000" />,
      },
    ],
  },
  {
    category: "Dev Tools",
    skills: [
      { name: "Git", level: "Expert", icon: <FaGit color="#F05032" /> },
      { name: "GitHub", level: "Expert", icon: <FaGithub color="#181717" /> },
    ],
  },
  {
    category: "Design Tools",
    skills: [
      {
        name: "Adobe Photoshop",
        level: "Intermediate",
        icon: <SiAdobephotoshop color="#31A8FF" />,
      },
      { name: "Figma", level: "Junior", icon: <SiFigma color="#F24E1E" /> },
      {
        name:"VS Code",
        level: "Expert",
        icon:<VscVscode color="#007ACC"/> 
      },
      {
        name: "Canva",
        level: "Intermediate",
        icon: <SiCanva color="#38B2AC" />,
      },
    ],
  },
];

const TechSkills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">🚀 Tech Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className={`skill-level ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
