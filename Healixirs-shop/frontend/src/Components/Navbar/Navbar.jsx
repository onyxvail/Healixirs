import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p> Healixirs </p>
            </div>
            <ul className="nav-menu">
                <li><Link style={{ textDecoration : 'none'}} to='/'>Home</Link></li>
                <li><Link style={{ textDecoration : 'none'}} to='/shop'>Shop</Link></li>
                <li><Link style={{ textDecoration : 'none'}} to='/abouts'>About</Link></li>
                <li><Link style={{ textDecoration : 'none'}} to='/contacts'>Contact</Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="" className="cart-image" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}
