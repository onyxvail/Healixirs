import React from 'react';
import new_collection from '../Assets/new_collections';
import { Item } from '../Items/Item';

export const NewCollections = () => {
  return (
    <div className='new-collections bg-black text-white p-8'>
      <h1 className="text-3xl font-bold mb-4">New Collections</h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {new_collection.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};
