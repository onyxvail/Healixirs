// App.js
import React from 'react';
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
import kid_banner from './Components/Assets/banner_kids.png';
import { ShopContextProvider } from './Context/ShopContext'; // Import ShopContextProvider

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ShopContextProvider> {/* Wrap your components with ShopContextProvider */}
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/homes' element={<Shop category="home" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/:productId' element={<Product />} />
          </Routes>
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
