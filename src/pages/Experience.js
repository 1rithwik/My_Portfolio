import React from 'react';
import './Home.css';

export const Experience = () => {
  return (
    <div className="page-experience">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-section">
        <div className="experience-item">
          <h2>RPA Developer Internship</h2>
          <p>
            <strong>Company:</strong>Bradsol <br />
            <strong>Role:</strong> RPA Developer <br />
            <strong>Duration:</strong> July,2024 - Aug,2024
          </p>
          <p>
            During this internship, I gained expertise in Robotic Process Automation (RPA) by 
            developing automation scripts that optimized workflows. I learned how to use tools like 
            Power Automate desktop, enhanced my problem-solving skills, and understood how automation 
            impacts business efficiency. And also using OpenAI to format the data and generate the content.
            <br/>
            This experience laid the foundation for my interest in automation technologies.
          </p>
        </div>

        <div className="experience-item">
          <h2>Java Software Developer Internship</h2>
          <p>
            <strong>Company:</strong>Mthree<br />
            <strong>Role:</strong> Java Software Developer <br />
            <strong>Duration:</strong> Sep,2024 - present
          </p>
          <p>
            In this internship, I focused on building backend services using Java framworks. I worked on developing 
            RESTful APIs, enhancing database management skills, and collaborating with a team to deploy scalable 
            software solutions. Also learned frontend frameworks like Angular and done handsome practise.<br/> This role improved my understanding of software architecture, debugging, and 
            teamwork, and solidified my interest in software development as a career.
          </p>
        </div>
      </div>
    </div>
  );
};
