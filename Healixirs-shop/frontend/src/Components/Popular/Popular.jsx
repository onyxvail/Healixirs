import './Popular.css'; // Importing CSS may not be necessary if styles are defined in Tailwind
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
    adaptiveHeight: true,
  };

  return (
    <div className='popular'>
      <div className="popular-title-container">
        <Slider {...settings}>
          <div className="popular-title-slide flex items-center space-x-2 overflow-hidden text-customBlue text-xl bg-customGray">
            {/* Custom classes added for styling */}
            Popular in Store Popular in Store Popular Popular in Store Popular in Store Popular Popular in Store Popular in Store Popular Popular in Store Popular in Store Popular Popular in Store Popular in Store PopularPopular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store Popular in Store
          </div>
        </Slider>
      </div>
      <hr/>
      <div className="popular-item overflow-hidden">
        {/* Added overflow-hidden class */}
        <Slider {...settings}>
          {data_product.map((item, i) => (
            <div key={i} className="popular-item-slide inline-block">
              {/* Removed custom animation classes as Tailwind does not support animations */}
              <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};