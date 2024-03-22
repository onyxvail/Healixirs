import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import { Offer } from '../Components/Offers/Offer';
import { NewCollections } from '../Components/NewCollections/NewCollections';
import { NewsLetter } from '../Components/NewsLetter/NewsLetter';
import { Footer } from '../Components/Footer/Footer';

const Shop = () => {
  return (
    <>
      <Hero>
        <div>Shop</div>
      </Hero>
      <Popular />
      <Offer />
      <NewCollections/>
      <NewsLetter />
     
    </>
  );
};

export default Shop;

 /** i removed the footer under the newsletter  </Footer> from here and added it to App.js */