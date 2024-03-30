import React from 'react';
import newsletterImage from '../Assets/newsletter.png';
import './NewsLetter.css';

export const NewsLetter = () => {
  return (
    <div className='newsletter bg-customNeon text-customWhite p-8 rounded-lg shadow-lg'>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          <span>Subscribe to our Newsletter</span>
          <img src={newsletterImage} alt="Newsletter" className="w-12 h-12 ml-4" />
        </h1>
      </div>
      <p className="text-customBlack mb-6">Get the latest news and updates from Healixirs</p>
      <div className="flex items-center">
        <input type="email" placeholder="Enter your email" className="flex-grow mr-4 px-4 py-2 border border-white rounded-lg focus:outline-none text-customBlack" />
        <button className="px-6 py-2 bg-white text-customBlack rounded-lg hover:bg-opacity-75 focus:outline-none animatedButton">Subscribe</button>
      </div>
    </div>
  );
};
