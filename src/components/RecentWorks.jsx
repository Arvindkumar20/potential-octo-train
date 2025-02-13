import React from "react";
import "./RecentWorks.css"; // Import CSS file
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Import Icons
import imageGene from "../assets/imageGene.webp";
import chatbot from "../assets/chatbot.gif";
import todo from "../assets/todo.gif";
import port from "../assets/port.png";
import social from "../assets/social.png";
import chat from "../assets/chat.png";
const projects = [
  {
    title: "AI Image Generator",
    description:
      "AI-powered image generator that creates stunning visuals based on user input. Utilizing advanced machine learning algorithms, this tool transforms text descriptions into high-quality images with precision and creativity.",
    image: imageGene,
    technologies: [
      "MongoDB",
      "ExpressJs",
      "React",
      "NodeJs",
      "styled components",
      "JavaScript",
      "Vite",
    ],
    link: "https://github.com/Arvindkumar20/AiImageGeneratorFrontend",
  },
  {
    title: "AI Chatbot",
    description:
      "Developed an AI-powered chatbot using React, Node.js, Express, and Tailwind CSS, integrated with Google's Gemini AI for intelligent and context-aware responses. This chatbot provides real-time interactions, understanding natural language inputs and delivering accurate responses. Designed with a sleek UI and efficient backend, it enhances user experience by offering smart assistance in various domains.",
    image: chatbot,
    technologies: [
      "Express",
      "React",
      "Node.js",
      "JavaScript",
      "Gemini",
      "Tailwind",
    ],
    link: "https://github.com/Arvindkumar20/chat-Bot",
  },
  {
    title: "ToDoList App",
    description:
      "Built a dynamic and user-friendly To-Do List application using React, Node.js, Express, and MongoDB. This app allows users to efficiently manage tasks with features such as task creation, real-time updates, deletion, and retrieval. With a clean and responsive UI, users can mark tasks as completed, edit existing tasks, and organize their workflow seamlessly. The backend ensures smooth data storage and retrieval, making task management hassle-free.",
    image: todo,
    technologies: [
      "MongoDB",
      "ExpressJs",
      "React",
      "Nodejs",
      "Tailwind",
      "JavaScript",
    ],
    link: "https://github.com/Arvindkumar20/ToDoListApp_Frontend",
  },
  {
    title: "PortFolio",
    description:
      "Built a dynamic and user-friendly PortFolio web application using React,Html,Css and js. This app allows users to efficiently Explore my skills education and projetcs.With a clean and responsive UI, users can visit My PortFolio web page.",
    image: port,
    technologies: ["React", "Html", "Css", "JavaScript"],
    link: "#",
  },
  {
    title: "Social Media App",
    description:
      "Built a dynamic and user-friendly Social Media application using React, Node.js, Express, and MongoDB.This app allows users to efficiently manage posts,comment and user profile with features such as create post, update post, upadete user profile, comment, like,share and real-time updates, deletion, and retrieval. With a clean and responsive UI, users can visit application.Complete user authentication with yup. The backend ensures smooth data storage and retrieval, making user management hassle-free.",
    image: social,
    technologies: [
      "MongoDB",
      "ExpressJs",
      "React",
      "Nodejs",
      "Styled components",
      "@MUI",
    ],
    link: "#",
  },
  {
    title: "Chat Application",
    description:
      "Built a dynamic and user-friendly Chat application using React, Node.js, Express, and MongoDB. This app allows users to efficiently manage chat and chat history with features such as chat creation, real-time updates, deletion, and retrieval. With a clean and responsive UI, users can handle chat history. The backend ensures smooth data storage and retrieval, making chat management hassle-free.",
    image: chat,
    technologies: [
      "React",
      "Nodejs",
      "socket.io",
      "Html",
      "Tailwind",
      "JavaScript",
    ],
    link: "https://github.com/Arvindkumar20/chatApp",
  },
];

const RecentWorks = () => {
  return (
    <section className="recent-works" id="projects">
      <h2 className="section-title">🚀 Recent Works</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">
                <FaCode className="icon" /> {project.title}
              </h3>
              <p className="project-description">{project.description}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <a href={project.link} className="read-more">
                Read more <FaExternalLinkAlt className="link-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
