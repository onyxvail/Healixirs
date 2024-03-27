import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../../Components/Assets/arrow-icon.png';
import heroImage1 from '../../Components/Assets/hero-image1.png';
import heroImage2 from '../../Components/Assets/hero-image2.png';
import heroImage3 from '../../Components/Assets/hero-image3.png';
import heroImage4 from '../../Components/Assets/hero-image4.png';
import heroImage5 from '../../Components/Assets/hero-image5.png';
import heroImage6 from '../../Components/Assets/hero-image6.png';
import heroImage7 from '../../Components/Assets/hero-image7.png';
import heroImage8 from '../../Components/Assets/hero-image8.png';
import './Hero.css';

export const Hero = () => {
  // Array of hero images
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);

  // Phrases for animation
  const phrases = ["Exalted Equipments", "Divine Artifacts", "And Relics"];
  const ads = ["Come and get yours", "Now"];

  // Function to cycle through hero images and animations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setAnimationIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [currentImageIndex, heroImages.length, phrases.length]);

  return (
    <div className='hero bg-black flex min-h-screen relative py-8 lg:py-16'>
      <div className="hero-left flex-1 flex flex-col justify-center items-start px-8 lg:px-16">
        {/* Animated text */}
        <h2 className={`text-white text-4xl font-semibold glow-on-hover`}>
          {phrases[animationIndex]}
        </h2>
        {/* Animated paragraphs */}
        <p className={`text-white text-4xl font-bold glow-on-hover`}>{ads[0]}</p>
        <p className={`text-white text-4xl font-bold glow-on-hover`}>{ads[1]}</p>
        {/* Latest Loot button with Link component */}
        <Link to="/herbs" className="hero-latest-btn flex items-center bg-customNeon text-customBlack rounded-full py-4 px-8 mt-8">
          <div>Latest Loot</div>
          <img src={arrowIcon} alt="" className="w-6 h-6 ml-2" />
        </Link>
      </div>

      <div className="hero-right lg:flex flex-1 justify-center items-center">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`w-80 h-80 absolute transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};
