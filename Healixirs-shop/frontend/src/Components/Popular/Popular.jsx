import React from 'react';
import './Popular.css';
import data_product from '../Assets/data.js';
import { Item } from '../Items/Item';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Popular = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
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
          <div className="popular-title-slide"> Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store</div>
        </Slider>
      </div>
      <hr/>   
      <div className="popular-item">
        <Slider {...settings}> {/* Add slider for images */}
          {data_product.map((item, i) => (
            <div key={i} className="popular-item-slide">
              <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
