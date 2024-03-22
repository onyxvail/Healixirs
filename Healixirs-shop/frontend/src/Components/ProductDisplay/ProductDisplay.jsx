import React from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

export const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='productdisplay flex flex-col md:flex-row'>
            <div className="productdisplay-left md:w-1/2 p-4 flex flex-wrap justify-center">
                {[...Array(4)].map((_, index) => (
                    <img key={index} src={product.image} alt={`Product ${index + 1}`} className="w-20 h-auto rounded-md shadow-md mb-2 md:mr-2 md:mb-0 hover:scale-105 transition-transform duration-300" />
                ))}
                <img src={product.image} alt="Product" className="w-20 h-auto rounded-md shadow-md mb-2 md:mr-2 md:mb-0 hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="productdisplay-right md:w-1/2 p-4">
                <h1 className="text-xl md:text-3xl font-semibold mb-2">{product.name}</h1>
                <div className="flex items-center mb-2">
                    {[...Array(4)].map((_, index) => (
                        <img key={index} src={star_icon} alt={`Star ${index + 1}`} className="h-4 md:h-6" />
                    ))}
                    <img src={star_dull_icon} alt="Dull Star" className="h-4 md:h-6" />
                    <p className="ml-2 text-base md:text-lg">(120)</p>
                </div>
                <div className="flex justify-between mb-4">
                    <div className="text-gray-500 text-base md:text-lg">${product.old_price}</div>
                    <div className="text-red-500 font-semibold text-lg md:text-xl">${product.new_price}</div>
                </div>
                <div className="mb-4 text-base md:text-lg">{product.description}</div>
                <div className="mb-4">
                    <h1 className="font-semibold mb-2 text-lg md:text-xl">Select Size</h1>
                    <div className="flex flex-wrap gap-2">
                        {['S', 'XS', 'M', 'L', 'XL'].map(size => (
                            <div key={size} className="border border-gray-300 rounded-md py-2 px-4 text-sm md:text-base">{size}</div>
                        ))}
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition-colors duration-300 text-sm md:text-base">Add To Cart</button>
                <p className="text-sm md:text-base mb-2"><span className="font-semibold">Category:</span> Female's Build, Crowns, Rings of magic, Wolves's Cape, Skins, Dragon's Armor</p>
                <p className="text-sm md:text-base"><span className="font-semibold">Tags:</span> New Harvest, Old Harvest</p>
            </div>
        </div>
    );
};
