import React from 'react';
import data_product from '../Assets/data';
import {Item} from '../Items/Item'; // Assuming Item is exported as default from 'Item.jsx'
import './RelatedProducts.css';

export const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-10 h-90vh'>
      <h1 className="text-black text-5xl font-semibold">Related Products</h1>
      <hr className="w-48 h-6 rounded-full bg-gray-700" />

      <div className="relatedproducts-item mt-10 flex gap-6">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} className="w-48" />
        ))}
      </div>
    </div>
  );
};
