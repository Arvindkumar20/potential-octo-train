import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import imageGene from "../assets/imageGene.webp";
import chatbot from "../assets/chatbot.gif";
import todo from "../assets/todo.gif";
import port from "../assets/port.png";
import social from "../assets/social.png";
import chat from "../assets/chat.png";
import "./RecentWorks.css";
import axios from "axios";

// const projects = [
//   {
//     title: "AI Image Generator",
//     description:
//       "AI-powered image generator that creates stunning visuals based on user input.",
//     image: imageGene,
//     technologies: [
//       "MongoDB",
//       "ExpressJs",
//       "React",
//       "NodeJs",
//       "Styled Components",
//       "JavaScript",
//       "Vite",
//     ],
//     link: "https://github.com/Arvindkumar20/AiImageGeneratorFrontend",
//   },
//   {
//     title: "AI Chatbot",
//     description:
//       "AI-powered chatbot using React, Node.js, Express, and Tailwind CSS, integrated with Gemini AI.",
//     image: chatbot,
//     technologies: [
//       "Express",
//       "React",
//       "Node.js",
//       "JavaScript",
//       "Gemini",
//       "Tailwind",
//     ],
//     link: "https://github.com/Arvindkumar20/chat-Bot",
//   },
//   {
//     title: "ToDoList App",
//     description:
//       "A dynamic To-Do List app with task management, real-time updates, and a clean UI.",
//     image: todo,
//     technologies: [
//       "MongoDB",
//       "ExpressJs",
//       "React",
//       "Nodejs",
//       "Tailwind",
//       "JavaScript",
//     ],
//     link: "https://github.com/Arvindkumar20/ToDoListApp_Frontend",
//   },
//   {
//     title: "Portfolio",
//     description:
//       "Personal portfolio showcasing projects, skills, and education with a sleek UI.",
//     image: port,
//     technologies: ["React", "HTML", "CSS", "JavaScript"],
//     link: "https://github.com/Arvindkumar20/potential-octo-train",
//   },
//   {
//     title: "Social Media App",
//     description:
//       "A feature-rich social media platform with posts, comments, likes, and real-time updates.",
//     image: social,
//     technologies: ["MongoDB", "ExpressJs", "React", "Nodejs", "MUI"],
//     link: "https://github.com/Arvindkumar20/Social_Media",
//   },
//   {
//     title: "Chat Application",
//     description:
//       "A real-time chat app with Socket.io, message history, and a modern UI.",
//     image: chat,
//     technologies: [
//       "React",
//       "Nodejs",
//       "Socket.io",
//       "HTML",
//       "Tailwind",
//       "JavaScript",
//     ],
//     link: "https://github.com/Arvindkumar20/ai_chatbot",
//   },
// ];

const RecentWorks = () => {
  const [projects, setProjects] = useState();

  const loadProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/project/get");
      console.log(res);
      setProjects(res.data.projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section className="recent-works" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        🚀 Recent Works
      </motion.h2>

      <div className="projects-container">
        {projects?.length > 0 &&
          projects?.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              <motion.div
                className="image-container"
                whileHover={{ scale: 1.08, rotateY: 5 }}
              >
                <motion.img
                  src={project.image.url}
                  alt={project.title}
                  className="project-image"
                />
              </motion.div>
              <div className="project-content">
                <h3 className="project-title">
                  <FaCode className="icon" /> {project.title}
                </h3>
                <p className="project-description">{project.description}</p>

                <motion.div
                  className="tech-stack"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="tech-badge"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#FF4500",
                        color: "#fff",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.a
                  href={project.link}
                  className="read-more"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#007bff",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Read more <FaExternalLinkAlt className="link-icon" />
                </motion.a>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default RecentWorks;
