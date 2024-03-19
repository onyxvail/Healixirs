import React from 'react';
import './Hero.css';
import handIcon from '../../Components/Assets/hand-icon.png';
import arrowIcon from '../../Components/Assets/arrow-icon.png';
import heroImage from '../../Components/Assets/hero-image.png';



export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Herbs </h2>
        <div>
          <div className="hand-hand-icon">
            <p>New</p>
            <img src={handIcon} alt="" />
          </div>
          <p> Collection </p>
          <p> For Wood Elves</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest merch</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};
