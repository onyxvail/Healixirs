import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Footer } from '../Components/Footer/Footer';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Items/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">
            showing 1-12 out of 36 products.
          </p>
          <div className="shopcategory-sort flex items-center">
            <span className="mr-2">Sort by</span>
            <img src={dropdown_icon} alt="Sort by" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      {/* Always render the Footer component */}
      <Footer />
    </div>
  );
};

export default ShopCategory;
