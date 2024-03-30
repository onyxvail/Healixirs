import React, { useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import herbs_banner from './Components/Assets/banner_herbs.png';
import ScrollToTopButton from './Components/ScrollUp/ScrollUp';
import AboutPage from './Pages/About';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      // Check if an element is in view
      const element = document.getElementById('animate-on-scroll');
      if (element && isElementInViewport(element)) {
        element.classList.add('animate');
      }
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/homes' element={<Shop Category="home" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/Herbs' element={<ShopCategory banner={herbs_banner} category="Herbs" />} />
          <Route path='/product/:productID' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/About' element={<AboutPage />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;