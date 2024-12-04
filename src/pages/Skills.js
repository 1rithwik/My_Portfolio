import React from 'react';
import './Home.css';

export const Skills = () => {
  return (
    <div className="page-skills">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-section">
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Programming Languages:</strong> Java, Python, JavaScript
            <p className="skill-description">
              Used Java for backend development, Python for data analysis and scripting, and JavaScript for building interactive web applications.
            </p>
          </li>
          <li>
            <strong>Data Structures and Algorithms:</strong>
            <p className="skill-description">
              Familiar with various data structures such as arrays, linked lists, stacks, queues, strings. Proficient in algorithms like sorting, searching.
            </p>
          </li>
          <li>
            <strong>Web Development:</strong> React, Angular, Spring Boot
            <p className="skill-description">
              Developed dynamic web applications and RESTful APIs using modern frameworks and tools.
            </p>
          </li>
          <li>
            <strong>Database Management:</strong> MySQL
            <p className="skill-description">
              Designed normalized databases, optimized queries, and managed data integrity in complex projects.
            </p>
          </li>
          <li>
            <strong>Other Tools:</strong> Git, RPA Tool(Power Automate Desktop)
            <p className="skill-description">
              Used version control for collaboration, and RPA tools for automation.
            </p>
          </li>
        </ul>
      </div>

      <div className="skills-section">
        <h2>Personal Skills</h2>
        <ul>
          <li>
            <strong>Communication:</strong> Good verbal and written communication skills developed through team collaborations and presentations.
          </li>
          <li>
            <strong>Problem-Solving:</strong> Tackled complex challenges during hackathons and coding competitions.
          </li>
          <li>
            <strong>Teamwork:</strong> Worked effectively with teams during internships, projects, and academic tasks.
          </li>
          <li>
            <strong>Time Management:</strong> Balanced academic, professional, and personal responsibilities efficiently.
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Road Failure Detection System:</strong>
            <p className="project-description">
            Developed a road failure detection system using YOLOv8 algorithm, leveraging deep learning
            techniques to identify defects on roads.<br/>
            Implemented real-time alerting and notification features to inform authorities of detected road defects,
enhancing road maintainence efficiency and safety.
            </p>
            <a href='https://www.jetir.org/papers/JETIR2405901.pdf'>Project Paper</a>
          </li>
          <li>
            <strong>Automation Using PAD and OpenAI:</strong>
            <p className="project-description">
            Automated the end-to-end process of order retrieval, validation, and document processing using Power
            Automate Desktop, integrating multiple third-party sites and APIs.
            </p><br/>
            Developed custom Python scripts for data extraction, mapping, and JSON file generation, leveraging
            OpenAI for enhanced data processing.
          </li>
          <li>
            <strong>Wheel Alignment Center Web Application:</strong>
            <p className="project-description">
            Developed a full-stack web application for a wheel alignment center, enabling features like
appointment scheduling, tire inventory management, and user feedback, with secure authentication
and role-based authorization. <br/>
Implemented caching using Caffeine to optimize performance and utilized transactional management
for reliable appointment booking while handling concurrent requests
            </p>
            <a href='https://github.com/1rithwik/WebApplication_Project'>Project Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
