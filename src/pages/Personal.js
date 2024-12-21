import React, { useState } from 'react';
import './Home.css';
import myData from '../data';
import Sitaramam from '../assets/sitaramam.jpg';
import Shinchan from '../assets/Shinchan.jpg';
import Doremon from '../assets/doremon.jpg';
import SP from '../assets/SP.jpg';
import TAJ from '../assets/TAJ.jpg';
import TPOH from '../assets/TPOH.jpg';

export const Personal = () => {
  const [view, setView] = useState('initial');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleVisitorClick = (type) => {
    setView('options');
    localStorage.setItem('hasVisited', 'true');
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % myData[currentCategory].length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + myData[currentCategory].length) % myData[currentCategory].length);
  };

  const renderInitialButtons = () => (
    <div className="full-page-buttons">
      <button onClick={() => handleVisitorClick('stranger')}>Stranger</button>
      <button onClick={() => handleVisitorClick('friend')}>Friend</button>
      <button onClick={() => handleVisitorClick('recruiter')}>Recruiter</button>
    </div>
  );

  const renderOptionButtons = () => (
    <div className="full-page-buttons">
      <button onClick={() => handleCategoryClick('favMoivies')}>Favorite Movies</button>
      <button onClick={() => handleCategoryClick('favCartoons')}>Favorite Cartoons</button>
      <button onClick={() => handleCategoryClick('myfriends')}>Friends</button>
    </div>
  );

  const renderCategoryDetails = () => {
    const items = myData[currentCategory];
    const currentItem = items[currentIndex];

    return (
      <div className="details-page">
        <h2>{currentItem.Title || currentItem.Name}</h2>
        <p>{currentItem.Year || currentItem.Profession || ''}</p>
        <img src={currentItem.Name === "The pursuit of Happiness" ? TPOH :
          currentItem.Name === "SitaRamam"? Sitaramam :
          currentItem.Name === "Soorarai Pottru"? SP :
          currentItem.Name === "Doremon"? Doremon:
          currentItem.Name === "Shicnchan"? Shinchan: TAJ}
        alt={currentItem.Title || currentItem.Name} className='personal-img'/>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={() => setCurrentCategory(null)}>Back</button>
      </div>
    );
  };

  return (
    <div className="page-container">
      {!localStorage.getItem('hasVisited') ? renderInitialButtons() : currentCategory ? renderCategoryDetails() : renderOptionButtons()}
    </div>
  );
};