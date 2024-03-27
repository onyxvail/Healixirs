import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import { Offer } from '../Components/Offers/Offer';
import { NewCollections } from '../Components/NewCollections/NewCollections';
import { NewsLetter } from '../Components/NewsLetter/NewsLetter';
import { Footer } from '../Components/Footer/Footer';
import { useEffect } from 'react';
import soundFile from '../Components/Assets/sound.mp3';


const Home = () => {
  useEffect(() => {
    const audio = new Audio(soundFile);
    audio.play();
  }, []);

  return (
    <>
      <Hero>
        <div>Home</div>
      </Hero>
      <Popular />
      <Offer />
      <NewCollections/>
      <NewsLetter />
      <Footer/>
    </>
  );
};

export default Home;