import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-section">

      <div className="home-left">
        <h2>Welcome !</h2>
        <h1>My Name is <br/> Rithwik Reddy Rokkam</h1>
        <p>Learner | Developer | Enthusiast</p>
      </div>

      <div className="home-right">
        <img
          src={require("../assets/IdCard.jpeg")}
          alt="Your Portrait"
          className="profile-image"
        />
      </div>

      <div className="home-buttons">
        <p>To know more about me, click the buttons below:</p>
        <div className="button-group">
          <button className="btn" onClick={() => navigate('/about-me')}>
            About Me
          </button>
          <button className="btn" onClick={() => navigate('/education')}>
            My Education
          </button>
          <button className="btn" onClick={() => navigate('/experience')}>
            Experience
          </button>
          <button className="btn" onClick={() => navigate('/personal')}>
            Personal Information
          </button>
          <button className="btn" onClick={() => navigate('/contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};
