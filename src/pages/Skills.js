// import React from 'react';
// import './Home.css';

// export const Skills = () => {
//   return (
//     <div className="page-skills">
//       <h1 className="skills-title">Skills</h1>

//       <div className="skills-section">
//         <h2>Technical Skills</h2>
//         <ul>
//           <li>
//             <strong>Programming Languages:</strong> Java, Python, JavaScript
//             <p className="skill-description">
//               Used Java for backend development, Python for data analysis and scripting, and JavaScript for building interactive web applications.
//             </p>
//           </li>
//           <li>
//             <strong>Data Structures and Algorithms:</strong>
//             <p className="skill-description">
//               Familiar with various data structures such as arrays, linked lists, stacks, queues, strings. Proficient in algorithms like sorting, searching.
//             </p>
//           </li>
//           <li>
//             <strong>Web Development:</strong> React, Angular, Spring Boot
//             <p className="skill-description">
//               Developed dynamic web applications and RESTful APIs using modern frameworks and tools.
//             </p>
//           </li>
//           <li>
//             <strong>Database Management:</strong> MySQL
//             <p className="skill-description">
//               Designed normalized databases, optimized queries, and managed data integrity in complex projects.
//             </p>
//           </li>
//           <li>
//             <strong>Other Tools:</strong> Git, RPA Tool(Power Automate Desktop)
//             <p className="skill-description">
//               Used version control for collaboration, and RPA tools for automation.
//             </p>
//           </li>
//         </ul>


//         <h2>Personal Skills</h2>
//         <ul>
//           <li>
//             <strong>Communication:</strong> Good verbal and written communication skills developed through team collaborations and presentations.
//           </li>
//           <li>
//             <strong>Problem-Solving:</strong> Tackled complex challenges during hackathons and coding competitions.
//           </li>
//           <li>
//             <strong>Teamwork:</strong> Worked effectively with teams during internships, projects, and academic tasks.
//           </li>
//           <li>
//             <strong>Time Management:</strong> Balanced academic, professional, and personal responsibilities efficiently.
//           </li>
//         </ul>
//       </div>

//       <div className="projects-section">
//         <h2>Projects</h2>
//         <ul>
//           <li>
//             <strong>Road Failure Detection System:</strong>
//             <p className="project-description">
//             Developed a road failure detection system using YOLOv8 algorithm, leveraging deep learning
//             techniques to identify defects on roads.<br/>
//             Implemented real-time alerting and notification features to inform authorities of detected road defects,
// enhancing road maintainence efficiency and safety.
//             </p>
//             <a href='https://www.jetir.org/papers/JETIR2405901.pdf'>Project Paper</a>
//           </li>
//           <li>
//             <strong>Automation Using PAD and OpenAI:</strong>
//             <p className="project-description">
//             Automated the end-to-end process of order retrieval, validation, and document processing using Power
//             Automate Desktop, integrating multiple third-party sites and APIs.
//             <br/>
//             Developed custom Python scripts for data extraction, mapping, and JSON file generation, leveraging
//             OpenAI for enhanced data processing.
//             </p>
//           </li>
//           <li>
//             <strong>Wheel Alignment Center Web Application:</strong>
//             <p className="project-description">
//             Developed a full-stack web application for a wheel alignment center, enabling features like
// appointment scheduling, tire inventory management, and user feedback, with secure authentication
// and role-based authorization. <br/>
// Implemented caching using Caffeine to optimize performance and utilized transactional management
// for reliable appointment booking while handling concurrent requests
//             </p>
//             <a href='https://github.com/1rithwik/WebApplication_Project'>Project Link</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import './Home.css';
import myData from '../data'; // Import the data

export const Skills = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

  const renderMainButtons = () => (
    <>
      <button className="main-button" onClick={() => setActiveSection('Skills')}>
        My Skills
      </button>
      <button className="main-button" onClick={() => setActiveSection('Projects')}>
        My Projects
      </button>
    </>
  );

  const renderSkillsButtons = () => (
    <>
      {Object.keys(myData.mySkills[0]).map((skillType, index) => (
        <button
          key={index}
          className="skill-item"
          onClick={() => setActiveSubSection(skillType)}
        >
          {skillType.replace('_', ' ')}
        </button>
      ))}
      <button onClick={() => setActiveSection(null)}>Back</button>
    </>
  );

  const renderTechnicalSkillsButtons = () => (
    <>
      {myData.mySkills[0].Technical_Skills.map((skill, index) => (
        <button
          key={index}
          className="skill-item"
          onClick={() => setActiveSubSection(skill)}
        >
          {Object.keys(skill)[0]}
        </button>
      ))}
      <button onClick={() => setActiveSubSection(null)}>Back</button>
    </>
  );

  const renderSoftSkillsButtons = () => (
    <>
      {myData.mySkills[0].Soft_Skills.map((skill, index) => (
        <button
          key={index}
          className="skill-item"
          onClick={() => setActiveSubSection(skill)}
        >
          {Object.keys(skill)}
        </button>
      ))}
      <button onClick={() => setActiveSubSection(null)}>Back</button>
    </>
  );

  const renderSkillDetails =(details) =>(
    <div className="details-section">
      <h2>{Object.values(details)[0]}</h2>
      <p>{details.About}</p>
      <button onClick={() => setActiveSubSection(null)}>Back</button>
    </div>
  );

  const renderProjectsButtons = () => (
    <>
      {myData.myProjects.map((project, index) => (
        <button
          key={index}
          className="project-item"
          onClick={() => setActiveSubSection(project)}
        >
          {project.Title}
        </button>
      ))}
      <button onClick={() => setActiveSection(null)}>Back</button>
    </>
  );

  const renderProjectDetails = (details) => (
    <div className="details-section">
      <h2>{details.Title}</h2>
      {details.Description
        && details.Description.map((desc, index) => <p key={index}>{desc}</p>)
      }
      {details.Project_Link && <a href={details.Project_Link}>Project_Link</a>}<br/>
      <button onClick={() => setActiveSubSection(null)}>Back</button>
    </div>
  );

  return (
    <div className="page-skills">
      <h1 className="skills-title">Skills & Projects</h1>
      <div className="skills-section">
        {activeSection === null ? (
          renderMainButtons()
        ) : activeSection === 'Skills' ? (
          activeSubSection === null ? (
            renderSkillsButtons()
          ) : activeSubSection === 'Technical_Skills' ? (
            renderTechnicalSkillsButtons()
          ) : activeSubSection === 'Soft_Skills' ? (
            renderSoftSkillsButtons()
          ) : (
            renderSkillDetails(activeSubSection)
          )
        ) : activeSection === 'Projects' ? (
          activeSubSection === null ? (
            renderProjectsButtons()
          ) : (
            renderProjectDetails(activeSubSection)
          )
        ) : null}
      </div>
    </div>
  );
};