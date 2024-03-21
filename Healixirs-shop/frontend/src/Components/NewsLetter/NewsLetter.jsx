import React from 'react';
import newsletterImage from '../Assets/newsletter.png';

export const NewsLetter = () => {
  return (
    <div className='newsletter bg-customNeon text-customWhite p-8'>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold flex items-center"> {/* Wrapped text and image in a flex container */}
          Subscribe to our Newsletter
          <img src={newsletterImage} alt="Newsletter" className="w-25 h-14 ml-8" /> {/* Adjust the width and height as needed */}
        </h1>
      </div>
      <p className="text-customBlack mb-8">Get the latest news and updates from Healixirs</p>
      <div className="flex">
        <input type="email" placeholder="Enter your email" className="flex-grow mr-4 px-4 py-2 border border-white rounded-lg focus:outline-none" />
        <button className="px-6 py-2 bg-white text-customBlack rounded-lg hover:bg-opacity-75 focus:outline-none">Subscribe</button>
      </div>
    </div>
  );
};
