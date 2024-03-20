import React from 'react';
import arrowIcon from '../../Components/Assets/arrow-icon.png';
import heroImage from '../../Components/Assets/hero-image.png';

export const Hero = () => {
  return (
    <div className='hero bg-black flex min-h-screen'>
      <div className="hero-left flex-1 flex flex-col justify-center items-start px-8 lg:px-16">
        <h2 className="text-white text-5xl font-semibold">New Herbs</h2>
        <p className="text-white text-4xl font-bold">Collection</p>
        <p className="text-white text-4xl font-bold">For Wood Elves</p>
        <div className="hero-latest-btn flex items-center bg-customNeon text-white rounded-full py-4 px-8 mt-8">
          <div>Latest Brew</div>
          <img src={arrowIcon} alt="" className="w-6 h-6 ml-2" />
        </div>
      </div>

      <div className="hero-right hidden lg:flex flex-1 justify-center items-center">
        <img src={heroImage} alt="" className="w-full" />
      </div>
    </div>
  );
};
