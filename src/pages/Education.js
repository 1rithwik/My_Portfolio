import React, { useState } from 'react';
import './Home.css';

export const Education = () => {
  const[activeItem,setActiveItem]= useState(null);
  const educationData = [
    {
      id: 1,
      title: "Schooling",
      content: (
        <p>
          I completed my schooling from <strong>Johnson Grammar School</strong>, where I studied from class 1 to 10. 
          Those were truly wonderful years filled with joy and learning. I formed lasting memories with 
          amazing friends, and many others, who made my school life unforgettable.
        </p>
      ),
    },
    {
      id: 2,
      title: "Intermediate (Class 11 and 12)",
      content: (
        <p>
          For my intermediate studies, I pursued the <strong>MPC Stream</strong> at <strong>Narayana Junior College</strong>, located in <strong>Hyderabad</strong>. 
          This was a period of intense learning and self-discovery, where I delved deeper into mathematics, physics, and chemistry. 
          The experience taught me discipline and perseverance, and I fondly remember the hours spent in the college library preparing for exams.
        </p>
      ),
    },
    {
      id: 3,
      title: "Graduation",
      content: (
        <>
          <p>
            My graduation years at <strong>Mahatma Gandhi Institute of technology</strong>, in <strong>Hyderabad</strong>, were the best years of my life. 
            I majored in <strong>Computer science and Business Systems</strong>, which helped me sharpen my technical skills and develop a passion for coding, as well as drived my interest to learn more about business and management.
          </p>
          <p>
            One of the highlights of this period was participating in coding competitions and hackathons with my close friends 
            like Kasyap and Sai Teja. We used to compete with each other, often sitting late in the library, solving complex problems. 
            These experiences not only strengthened my knowledge but also created cherished memories with my friends, who will always hold a special place in my heart.
          </p>
        </>
      ),
    },
  ];
  const EduSound = new Audio(require('../assets/mixkit-sci-fi-click-900.wav'));
  return (
    <div className="page-education">
      <h1 className="education-title">Education</h1>
      <div className="education-section">
        {activeItem === null ?
        (educationData.map((item) => (
          <button
          key={item.id}
          className="education-item"
          onClick={()=>{EduSound.play();setActiveItem(item.id)}}>
            {item.title}
          </button>
        ))):
        (
          <div className="education-content">
            <h2>{educationData[activeItem-1].title}</h2>
            {educationData[activeItem-1].content}
            <button onClick={()=>setActiveItem(null)}>Back</button>
          </div>
        )
      }
      </div>
    </div>
  );
};
