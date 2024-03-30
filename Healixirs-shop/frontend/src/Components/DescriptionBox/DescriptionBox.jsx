import React from 'react';
import './DescriptionBox.css';
import yami from '../Assets/yami.png';

export const DescriptionBox = () => {
  return (
    <div className='description-box bg-customNeon mx-20 my-10 rounded-lg shadow-lg'>
      <div className="descriptionbox-navigator flex bg-customNeon">
        <div className="descriptionbox-nav-box flex items-center justify-center text-base font-semibold border rounded-lg w-36 h-16 mr-4">
          Description
        </div>
        <div className="descriptionbox-nav-box flex items-center justify-center text-base font-semibold border bg-customRed text-gray-500 rounded-lg w-36 h-16">
          Reviews (120)
        </div>
      </div>

      <div className="descriptionbox-description flex flex-col gap-3 p-4 pb-16 text-sm">
        <h2 className="font-semibold text-lg">Product Description</h2>
        <p className="text-gray-700">Mystical item full of arcana.</p>
        <h2 className="font-semibold text-lg">Reviews</h2>
        <div className="review">
          <div className="review-header flex items-center">
            <img src={yami} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
            <span className="text-gray-800 font-semibold">Yami Sukeheiro</span>
          </div>
          <p className="text-gray-700">Very good product, I am very satisfied. I will buy again.</p>
        </div>
      </div>
    </div>
  );
};
