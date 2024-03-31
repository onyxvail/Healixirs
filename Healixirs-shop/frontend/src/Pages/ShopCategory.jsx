import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { Footer } from '../Components/Footer/Footer';
import { Item } from '../Components/Items/Item';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import soundFile from '../Components/Assets/7NA.mp3';

const ShopCategory = (props) => {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(soundFile));

  useEffect(() => {
    if (location.pathname.includes('/shopcategory')) {
      // If the user is on a shop category page, play the sound
      audio.play();
      setIsPlaying(true);
    } else {
      // Otherwise, pause the sound
      audio.pause();
      setIsPlaying(false);
    }

    // Cleanup function to stop audio when unmounting
    return () => {
      audio.pause();
      setIsPlaying(false);
    };
  }, [location.pathname, audio]);

  const handleToggleSound = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category bg-customEerie">
      {/* Banner with hover effect */}
      <img className="shopcategory-banner w-full h-auto object-cover transition-transform duration-500 transform hover:scale-105" src={props.banner} alt="" />

      {/* Container for product grid */}
      <div className="container mx-auto px-4 py-8">
        {/* Sorting and pagination */}
        <div className="flex justify-between items-stretch mb-6">
          <p className="text-lg font-semibold text-customWhite">
            Showing 1-12 out of 36 products.
          </p>
          {/* Dropdown for sorting */}
          <div className="shopcategory-sort flex items-center">
            <span className="mr-2 text-customWhite"></span>
            <img src={dropdown_icon} alt="Sort by" />
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {all_product.map((item) => {
            // Check if the product belongs to the selected category
            if (props.category === item.category) {
              return (
                <div key={item.id} className="flex justify-center">
                  {/* Item component for each product */}
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                    titleClassName="text-sm text-center"
                    imageClassName="w-full h-auto object-cover"
                    className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        
        {/* Explore more button */}
        <div className="shopcategory-loadmore text-center mt-8">
          <Link to="/about">
            <button className="bg-customNeon text-customBlack px-6 py-3 rounded-lg shadow-md hover:bg-customBlueDark transition-colors duration-300 ease-in-out">Check the Lore</button>
          </Link>
        </div>

        {/* Button to toggle sound */}
        <div className="text-center mt-4">
          <button onClick={handleToggleSound} className="bg-customNeon text-customBlack px-6 py-3 rounded-lg shadow-md hover:bg-customBlueDark transition-colors duration-300 ease-in-out">
            {isPlaying ? 'Pause Sound' : 'Play Sound'}
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ShopCategory;
