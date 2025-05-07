import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const qualifications = [
  {
    year: "2025",
    title: "BCA and Full Stack Web Development (MERN)",
    description:
      "Currently pursuing a Bachelor of Computer Applications (BCA) along with an in-depth Full Stack Web Development (MERN) program...",
    institution: "FIemits",
    duration: "Jun 2022 - Jun 2025",
  },
  {
    year: "2022",
    title: "Intermediate (PCM - Physics, Chemistry, Mathematics)",
    description:
      "Completed my Intermediate in PCM stream from UP Board in 2022, gaining a strong foundation in Mathematics, Physics, and Chemistry...",
    institution: "BSD Inter College",
    duration: "April 2020 - December 2022",
  },
];

const Education = () => {
  return (
    <motion.div 
      className="timeline-container"
      initial={{ opacity: 0, scale: 0.9, rotateX: -10 }} 
      animate={{ opacity: 1, scale: 1, rotateX: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        📚 The Journey Begins...
      </motion.h2>

      <div className="timeline">
        {qualifications.map((item, index) => (
          <motion.div 
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ scale: 1.1, rotateY: 5, boxShadow: "0px 10px 30px rgba(255, 69, 96, 0.5)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div 
              className="timeline-dot"
              animate={{ scale: [1, 1.4, 1], boxShadow: ["0px 0px 0px #fff", "0px 0px 20px #ff4f4f", "0px 0px 0px #fff"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            <motion.div 
              className="timeline-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: "rgba(255, 69, 96, 0.2)", transition: { duration: 0.5 } }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <motion.span 
                className="year-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {item.year}
              </motion.span>

              <motion.h3 
                className="qualification-title"
                whileHover={{ scale: 1.05, color: "#ff4560" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {item.title}
              </motion.h3>

              <motion.p 
                className="description"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {item.description}
              </motion.p>

              <p className="institution">{item.institution} • {item.duration}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Animated Background Particles */}
      <motion.div 
        className="particle-background"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default Education;
