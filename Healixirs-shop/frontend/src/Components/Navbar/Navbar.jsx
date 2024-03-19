import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';

export const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p> Healixirs </p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("Home")}>Home {menu === "Home" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Shop")}>Shop {menu === "Shop" ? <hr /> : null}</li>
                <li onClick={() => setMenu("About")}>About {menu === "About" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Contact")}>Contact {menu === "Contact" ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <button> Login </button>
                <img src={cart} alt="" className="cart-image"  />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}
