import React from 'react';
import exclusiveImage from '../Assets/exclusive_image.png';
import Additional from '../Assets/additional.png';
import { Link } from 'react-router-dom';
import './Offer.css'; // Import CSS file for animations

export const Offer = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-customNeon'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-4/5 lg:w-3/5 px-4"> {/* Adjusted container size here */}
        <div className="md:w-1/2 order-2 md:order-1 animated fadeInLeft"> {/* Add animated class for animation */}
          <img src={exclusiveImage} alt="" className="w-full h-auto hexagon-neon-shadow" />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <div className="flex flex-col justify-center items-center md:items-start h-full">
            <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mb-4 text-white">
              Exclusive Loot
              <br className="hidden md:block" />
              Deals for you.
            </h1>
            <p className="text-lg text-center md:text-left mb-4 text-white">ONLY FOR THE HORDE.</p>
            <Link to="/offers" className="border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-customNeon transition duration-300">Check Now</Link>
          </div>
        </div>
        <div className="md:w-1/2 order-3 md:order-3 animated fadeInRight"> {/* Add animated class for animation */}
          <img src={Additional} alt="" className="w-full h-auto hexagon-neon-shadow" />
        </div>
      </div>
    </div>
  );
};
