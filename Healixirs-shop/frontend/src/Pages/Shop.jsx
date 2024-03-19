import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import { Offer } from '../Components/Offers/Offer';

const Shop = () => {
  return (
    <>
      <Hero>
        <div>Shop</div>
      </Hero>
      <Popular />
      <Offer />
    </>
  );
};

export default Shop;
