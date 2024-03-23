import React from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productdisplay.css'; 

export const ProductDisplay = (props) => {
    const { product } = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className='bg-customNeon'>
            <div className='productdisplay mt-0 p-4 md:p-0 flex flex-wrap md:flex-nowrap'>
                <div className="productdisplay-left mb-4 md:mb-0 md:w-1/2 pr-4 h-full">
                    <Slider {...settings} className="h-full">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="h-full">
                                <img src={product.image} alt={`Product ${index + 1}`} className="product-image w-40 md:w-auto h-auto rounded-md shadow-md mb-2 hover:scale-105 transition-transform duration-300" /> {/* Adjusted image size */}
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="productdisplay-right md:w-1/2 h-full">
                    <h1 className="text-sm md:text-3xl font-semibold mb-10">{product.name}</h1>
                    <div className="flex items-center mb-20"> {/* Increased gap */}
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src={star_icon} alt={`Star ${index + 1}`} className="h-4 md:h-6" />
                        ))}
                        <img src={star_dull_icon} alt="Dull Star" className="h-4 md:h-6" />
                        <p className="ml-4 text-xs md:text-base">(120)</p> {/* Increased gap */}
                    </div>
                    <div className="flex justify-between mb-16">
                        <div className="flex"> {/* Wrap the prices in a flex container */}
                            <div className="text-gray-500 font-semibol text-base md:text-lg mr-20 line-through">${product.old_price}</div> {/* Added line-through */}
                            <div className="text-red-500 font-semibold text-base md:text-lg">${product.new_price}</div>
                        </div>
                    </div>
                    <div className="mb-14 text-xs md:text-sm">{product.description}</div>
                    <div className="mb-10">
                        <h1 className="font-semibold mb-4 text-sm md:text-base">Select Size</h1>
                        <div className="flex flex-wrap gap-2">
                            {['S', 'XS', 'M', 'L', 'XL'].map(size => (
                                <div key={size} className="border border-customBlack rounded-md py-2 px-4 text-xs md:text-sm">{size}</div>
                            ))}
                        </div>
                    </div>
                    <button className="bg-customBlack text-white px-4 py-2 rounded-md mb-6 hover:bg-customOrange transition-colors duration-300 text-xs md:text-sm">Add To Cart</button>
                    <p className="text-xs md:text-sm mb-3"><span className="font-semibold">Category:</span> Female's Build, Crowns, Rings of magic, Wolves's Cape, Skins, Dragon's Armor</p>
                    <p className="text-xs md:text-sm"><span className="font-semibold">Tags:</span> New Harvest, Old Harvest</p>
                </div>
            </div>
        </div>
    );
};
