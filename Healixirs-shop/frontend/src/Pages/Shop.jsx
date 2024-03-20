import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import { Offer } from '../Components/Offers/Offer';
import { NewCollections } from '../Components/NewCollections/NewCollections';
const Shop = () => {
  return (
    <>
      <Hero>
        <div>Shop</div>
      </Hero>
      <Popular />
      <Offer />
      <NewCollections/>
    </>
  );
};

export default Shop;
