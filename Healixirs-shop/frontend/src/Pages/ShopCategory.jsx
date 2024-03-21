import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext'; // Import ShopContext

const ShopCategory = (props) => {
  // eslint-disable-next-line
  const { all_product } = useContext(ShopContext); // Use ShopContext
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>
  );
};

export default ShopCategory;
