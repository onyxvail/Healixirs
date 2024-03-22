import React from 'react';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item bg-customBlack shadow-md p-4 rounded-lg w-80 hover:scale-105 transition duration-500 ease-in-out'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" className="w-full rounded-lg mb-2" /></Link>
      <p className="text-customWhite text-base mb-2">{props.name}</p>
      <div className="flex items-center justify-between">
        <div className="text-customNeon font-semibold text-lg">${props.new_price}</div>
        <div className="text-gray-500 font-medium text-lg line-through">${props.old_price}</div>
      </div>
    </div>
  );
};
