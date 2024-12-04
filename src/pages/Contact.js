import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import './Home.css';

export const Contact = () => {
  return (
    <div className="page-contact">
      <h1 className="contact-title">Contact Me</h1>
      
      <div className="contact-info">

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <div className="contact-details">
            <h2>Professional Opportunities</h2>
            <p>If you want to talk to me regarding professional life or providing any career opportunities, feel free to connect with me on LinkedIn.</p>
            <a href="https://www.linkedin.com/in/rithwik-reddy-rokkam-44402421b/" target="_blank" rel="noopener noreferrer" className="contact-link">Connect on LinkedIn</a>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h2>General Inquiries</h2>
            <p>If you'd like to talk to me about anything else, please feel free to email me.</p>
            <p>Mail me at rokkamrithwik@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <div className="contact-details">
            <h2>My Projects</h2>
            <p>To explore more of my projects and open-source contributions, check out my GitHub profile.</p>
            <a href="https://github.com/1rithwik" target="_blank" rel="noopener noreferrer" className="contact-link">Visit My GitHub</a>
          </div>
        </div>

        <div className="contact-item">
          <FaLaptopCode className="contact-icon" />
          <div className="contact-details">
            <h2>Problem Solving Skills</h2>
            <p>If you're curious about my problem-solving skills and coding practice, you can find me on LeetCode.</p>
            <a href="https://leetcode.com/u/rithwikrokkam/" target="_blank" rel="noopener noreferrer" className="contact-link">Check My LeetCode</a>
          </div>
        </div>
      </div>
    </div>
  );
};
