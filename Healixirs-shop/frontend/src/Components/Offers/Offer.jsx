import React from 'react';
import exclusiveImage from '../Assets/exclusive_image.png';
import { Link } from 'react-router-dom';

export const Offer = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-customNeon'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-4/5 lg:w-3/5 px-4">
        <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
          <img src={exclusiveImage} alt="Exclusive Loot" className="w-full h-auto animate-float hexagon-neon-shadow" />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mb-4 md:mb-0 text-white">
            Exclusive Loot
            <br className="hidden md:block" />
            Deals for you.
          </h1>
          <p className="text-lg text-center md:text-left mb-4 text-white">Only for the hoarders of the epic loot.</p>
          <Link to="/offers" className="btn-primary inline-block mx-auto md:mx-0">Check Now</Link>
        </div>
      </div>
    </div>
  );
};
