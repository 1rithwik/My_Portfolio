import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const navigate = useNavigate();
  const[showButtons,setShowButtons]= useState(false);

  const pikaSound = new Audio(require('../assets/pika-pikachu-14757.mp3'));
  const navClick = new Audio(require('../assets/mixkit-arcade-game-jump-coin-216.wav'))

  return (
    <div className="home-section">

      <div className="home-left">
        <h2>Welcome !</h2>
        <h1>My Name is <br/> Rithwik Reddy Rokkam</h1>
        <h3>I'm a</h3>
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
        <p>To know more about me, click Here below:</p>
        <button onClick={()=>{
          pikaSound.play();
          setShowButtons(true);
          }
          }>Click Here</button>
        {showButtons && (
          <div className="button-group">
          <button className="btn" onClick={() => {navClick.play();navigate('/about-me');}}>
            About Me
          </button>
          <button className="btn" onClick={() => {navClick.play();navigate('/education')}}>
            My Education
          </button>
          <button className="btn" onClick={() => {navClick.play();navigate('/experience')}}>
            Experience
          </button>
          <button className="btn" onClick={() => {navClick.play();navigate('/personal')}}>
            Personal Information
          </button>
          <button className="btn" onClick={() => {navClick.play();navigate('/contact')}}>
            Contact Me
          </button>
        </div>
        )}
      </div>
    </div>
  );
};
