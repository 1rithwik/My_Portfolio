import React from 'react';
import './Home.css';

export const AboutMe = () => {
  return (
    <div className="page-about-me">
      <h1 className="about-me-title">About Me</h1>
      
      <div className="about-section">
        <div className="about-item">
          <h2>Where I Live</h2>
          <p>I currently live in <strong>Hyderabad</strong>, a vibrant city known for its Tasty Masala Food.</p>
        </div>

        <div className="about-item">
          <h2>Where I Was Born</h2>
          <p>I was born in <strong>Hyderabad</strong>, which holds a special place in my heart for its unique characteristic.</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-item">
          <h2>About My Family</h2>
          <p>
            I belong to a <strong>nuclear</strong> family, and we are a close-knit group of <strong>4</strong> members. 
            Our family values revolve around love, respect, support which have shaped me into who I am today.
          </p>
        </div>

        <div className="about-item">
          <h2>Family Members</h2>
          <ul>
            <li><strong>Father:</strong> Runs Business</li>
            <li><strong>Mother:</strong>House wife</li>
            <li><strong>Sibling:</strong> UnderGraduate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
