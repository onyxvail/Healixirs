import React from 'react';
import './Popular.css';
import data_product from '../Assets/data.js';
import { Item } from '../Items/Item';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Popular = () => {
  const repeatText = (text, count) => {
    let repeatedText = '';
    for (let i = 0; i < count; i++) {
      repeatedText += text + ' '; // Add a space between each repetition
    }
    return repeatedText.trim(); // Trim to remove extra space at the end
  };

  const popularText = repeatText('Popular in Store', 8); // Repeat "Popular in Store" 8 times

  const settings = {
    dots: false,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    variableWidth: true,
    adaptiveHeight: true, // Adjusts slide height to the content
  };

  return (
    <div className='popular'>
      <div className="popular-title-container">
        <Slider {...settings}>
          <div className="popular-title-slide">{popularText}</div>
        </Slider>
      </div>
      <hr/>   
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};
