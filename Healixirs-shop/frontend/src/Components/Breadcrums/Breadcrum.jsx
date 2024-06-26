import React from 'react';
import arrow_icon from '../Assets/arrow_icon.png';

export const Breadcrum = (props) => {
    const { product } = props;


    if (!product || !product.category || !product.name) {
        return null;
    }

    return (
        <div className='flex items-center gap-2 text-gray-600 text-base font-semibold uppercase bg-customNeon p-4 md:p-6 m-0'>
            <span>HOME</span>
            <img src={arrow_icon} alt="Arrow Icon" className="h-4 w-auto" />
            <span>SHOP</span>
            <img src={arrow_icon} alt="Arrow Icon" className="h-4 w-auto" />
            <span className="text-gray-700">{product.category}</span>
            <img src={arrow_icon} alt="Arrow Icon" className="h-4 w-auto" />
            <span className="text-gray-750 text-xs">{product.name}</span>
        </div>
    );
};
