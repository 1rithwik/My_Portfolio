import React from 'react';
import './Home.css';

export const Education = () => {
  return (
    <div className="page-education">
      <h1 className="education-title">Education</h1>

      <div className="education-section">
        <div className="education-item">
          <h2>Schooling</h2>
          <p>
            I completed my schooling from <strong>Johnson Grammar School</strong>, where I studied from class 1 to 10. 
            Those were truly wonderful years filled with joy and learning. I formed lasting memories with 
            amazing friends, and many others, who made my school life unforgettable.
          </p>
        </div>

        <div className="education-item">
          <h2>Intermediate (Class 11 and 12)</h2>
          <p>
            For my intermediate studies, I pursued the <strong>MPC Stream</strong> at <strong>Narayana Junior College</strong>, located in <strong>Hyderabad</strong>. 
            This was a period of intense learning and self-discovery, where I delved deeper into mathematics, physics, and chemistry. 
            The experience taught me discipline and perseverance, and I fondly remember the hours spent in the college library preparing for exams.
          </p>
        </div>

        <div className="education-item">
          <h2>Graduation</h2>
          <p>
            My graduation years at <strong>Mahatma Gandhi Institute of technology</strong>, in <strong>Hyderabad</strong>, were the best years of my life. 
            I majored in <strong>Computer science and Business Systems</strong>, which helped me sharpen my technical skills and develop a passion for coding, as well as drived my interest to learn more about business and management.
          </p>
          <p>
            One of the highlights of this period was participating in coding competitions and hackathons with my close friends 
            like Kasyap and Sai Teja. We used to compete with each other, often sitting late in the library, solving complex problems. 
            These experiences not only strengthened my knowledge but also created cherished memories with my friends, who will always hold a special place in my heart.
          </p>
        </div>
      </div>
    </div>
  );
};
