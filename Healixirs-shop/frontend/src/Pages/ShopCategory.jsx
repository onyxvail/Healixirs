import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Footer } from '../Components/Footer/Footer';
import { Item } from '../Components/Items/Item';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category bg-customEerie">
      <img className="shopcategory-banner w-full h-auto object-cover" src={props.banner} alt="" />

      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="flex justify-between items-center mb-8">
          <p className="text-lg font-semibold text-customWhite">
            Showing 1-12 out of 36 products.
          </p>
          <div className="shopcategory-sort flex items-center">
            <span className="mr-2 text-customWhite">Sort by</span>
            <img src={dropdown_icon} alt="Sort by" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  className="rounded-lg shadow-md overflow-hidden"
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopCategory;
