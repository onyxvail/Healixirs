import React, { useContext } from 'react'; // Import useContext hook
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Footer } from '../Components/Footer/Footer';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      {/* Conditionally render the Footer component */}
      {props.category === 'men' || props.category === 'women' ? <Footer /> : null}
    </div>
  );
};

export default ShopCategory;
