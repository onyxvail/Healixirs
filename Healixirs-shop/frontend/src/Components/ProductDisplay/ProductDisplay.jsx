import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productdisplay.css'; 
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    const mainImageSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        horizental: true,
        cssEase: "ease-in-out",
    };
    
    const smallImageSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        horizental: true,
        cssEase: "linear"
    };

    return (
        <div className='bg-customNeon product-display-container'>
           <div className='productdisplay mt-2 p-4 md:p-0 flex flex-wrap md:flex-nowrap bg-customNeon mb-4'>
           <div className="productdisplay-left mb-4 md:mb-0 md:w-1/2 pr-4 h-full flex flex-col items-center justify-center bg-customNeon">
                    <Slider {...mainImageSettings} className="h-full w-full main-image-slider">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="h-full">
                                <img src={product.image} alt={`Product ${index + 1}`} className="product-image main-image" />
                            </div>
                        ))}
                    </Slider>
                    <Slider {...smallImageSettings} className="w-full mt-4">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="h-full small-image">
                                <img src={product.image} alt={`Product ${index + 1}`} className="product-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="productdisplay-right md:w-1/2 h-full bg-customNeon" >
                    <h1 className="text-sm md:text-3xl font-semibold mb-10">{product.name}</h1>
                    <div className="flex items-center mb-20">
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src={star_icon} alt={`Star ${index + 1}`} className="h-4 md:h-6" />
                        ))}
                        <img src={star_dull_icon} alt="Dull Star" className="h-4 md:h-6" />
                        <p className="ml-4 text-xs md:text-base">(120)</p>
                    </div>
                    <div className="flex justify-between mb-5">
                        <div className="flex">
                            <div className="text-gray-500 font-semibol text-base md:text-lg mr-20 line-through">${product.old_price}</div>
                            <div className="text-customRed font-semibold text-base md:text-lg">${product.new_price}</div>
                        </div>
                    </div>
                    <div className="mb-18 text-xs md:text-sm">{product.description}</div>
                    <div className="mb-12">
                        <h1 className="font-semibold mb-6 text-sm md:text-base">Select Size</h1>
                        <div className="flex flex-wrap gap-2">
                            {['S', 'XS', 'M', 'L', 'XL'].map(size => (
                                <div key={size} className="border border-customBlack rounded-md py-2 px-4 text-xs md:text-sm">{size}</div>
                            ))}
                        </div>
                    </div>
                    <button onClick={()=> {addToCart(product.id)}} className="bg-customBlack text-white px-4 py-2 rounded-md mb-6 hover:bg-customOrange transition-colors duration-300 text-xs md:text-sm">Add To Cart</button>
                    <p className="text-xs md:text-sm mb-3"><span className="font-semibold">Category:</span> Female's Build, Crowns, Rings of magic, Wolves's Cape, Skins, Dragon's Armor</p>
                    <p className="text-xs md:text-sm"><span className="font-semibold">Tags:</span> New Harvest, Old Harvest</p>
                </div>
            </div>
        </div>
    );
};