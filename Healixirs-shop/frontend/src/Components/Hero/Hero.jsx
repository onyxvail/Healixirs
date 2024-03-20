import React from 'react';
import handIcon from '../../Components/Assets/hand-icon.png';
import arrowIcon from '../../Components/Assets/arrow-icon.png';
import heroImage from '../../Components/Assets/hero-image.png';
import './Hero.css'; // Import CSS for animations

export const Hero = () => {
  return (
    <div className='hero bg-gradient-to-b from-purple-900 via-purple-600 to-pink-100 h-screen flex animated-background'>
      <div className="hero-left flex-1 flex flex-col justify-center items-start px-8 lg:px-16">
        <h2 className="text-custom-purple text-5xl font-semibold">New Herbs</h2>
        <div className="hand-hand-icon flex items-center gap-4">
          <p className="text-white text-4xl font-bold">New</p>
          <img src={handIcon} alt="" className="w-24" />
        </div>
        <p className="text-white text-4xl font-bold">Collection</p>
        <p className="text-white text-4xl font-bold">For Wood Elves</p>
        <div className="hero-latest-btn flex items-center bg-custom-purple text-white rounded-full py-4 px-8 mt-8">
          <div>Latest merch</div>
          <img src={arrowIcon} alt="" className="w-6 h-6 ml-2" />
        </div>
      </div>

      <div className="hero-right hidden lg:flex flex-5 justify-center items-center">
        <img src={heroImage} alt="" className="w-full" />
      </div>
    </div>
  );
};
