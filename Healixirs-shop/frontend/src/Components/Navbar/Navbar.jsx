import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
      Navbar
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-cart">
        <button> Login </button>
        <img src={cart} alt="" />
      </div>
    </div>
  );
}
