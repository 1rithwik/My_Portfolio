import React, { useState } from 'react';
import './Home.css';
import myData from '../data'; // Import the data

export const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  const expSound = new Audio(require('../assets/mixkit-retro-confirmation-tone-2860.wav'))

  return (
    <div className="page-experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-section">
        {activeExperience === null ? (
          myData.myExperience.map((experience, index) => (
            <button
              key={index}
              className="experience-item"
              onClick={() => {expSound.play();setActiveExperience(index)}}
            >
              {experience.JobTitle}
            </button>
          ))
        ) : (
          <div className="experience-details">
            <h2>{myData.myExperience[activeExperience].JobTitle}</h2>
            <p><strong>Company:</strong> {myData.myExperience[activeExperience].Company}</p>
            <p><strong>Duration:</strong> {myData.myExperience[activeExperience].Duration}</p>
            {myData.myExperience[activeExperience].About.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <button onClick={() => {setActiveExperience(null)}}>Back</button>
          </div>
        )}
      </div>
    </div>
  );
};
