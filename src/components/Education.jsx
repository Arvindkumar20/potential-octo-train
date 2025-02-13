import React from "react";
import "./Education.css"; // Import the CSS file

const qualifications = [
  {
    year: "2025",
    title: "BCA and Full Stack Web Development(MERN)",
    description:
      "Currently pursuing a Bachelor of Computer Applications (BCA) along with an in-depth Full Stack Web Development (MERN) program. This course covers a wide range of technologies, from HTML, CSS, JavaScript to advanced frameworks like React.js, Node.js, Express.js, and MongoDB. Through hands-on projects and real-world applications, I have built expertise in frontend and backend development, API integration, and database management.Additionally, I am currently working as a MERN Stack Developer at HindTech IT Solutions, where I am gaining real-world experience in developing scalable and efficient web applications. This role allows me to apply my knowledge in a professional setting, further enhancing my problem-solving skills and expertise in modern web technologies.",
    institution: "FIemits",
    duration: "Jun 2022 - Jun 2025",
  },
  {
    year: "2022",
    title: "Intermediate (PCM - Physics, Chemistry, Mathematics)",
    description:
      "Completed my Intermediate in PCM stream from UP Board in 2022, gaining a strong foundation in Mathematics, Physics, and Chemistry. I developed problem-solving skills, especially in probability, statistics, and analytical thinking. This academic journey was a crucial step in shaping my logical approach and passion for technology.",
    institution: "BSD Inter College",
    duration: "April 2020 - December 2022",
  },
];

const Education = () => {
  return (
    <div className="timeline-container">
      <h2 className="title">Qualifications</h2>
      <div className="timeline">
        {qualifications.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="year-badge">{item.year}</span>
              <h3 className="qualification-title">{item.title}</h3>
              <p className="description">{item.description}</p>
              <p className="institution">
                {item.institution} • {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
