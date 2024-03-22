import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='flex flex-wrap justify-between items-center p-4 shadow-md bg-customBlack text-customNeon sticky top-0 z-10'>
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img src={logo} alt="Logo" className="w-12 h-12" />
                <p className="text-3xl font-semibold">Healixirs</p>
            </div>
            <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-customBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {menuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
            <ul className={`md:flex md:items-center space-x-8 ${menuOpen ? 'block' : 'hidden'}`}>
                <li><Link className="hover:text-customBlue-300" to='/' onClick={toggleMenu}>Home</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/shop' onClick={toggleMenu}>Shop</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/mens' onClick={toggleMenu}>Men</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/womens' onClick={toggleMenu}>Women</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/kids' onClick={toggleMenu}>Kids</Link></li>
            </ul>
            <div className="flex items-center space-x-8">
                {/* Button */}
                <Link to='/login' className="px-4 py-2 border border-customBlue-400 text-customBlue-400 rounded-full transition-colors duration-300 hover:bg-customBlue-500 hover:text-white">Login</Link>
                <Link to='/cart' className="relative">
                    <img src={cart} alt="Cart" className="w-10 h-10" />
                    <div className="w-6 h-6 flex justify-center items-center bg-customBlue-500 text-customBlue-100 rounded-full absolute -top-2 -right-2">0</div>
                </Link>
            </div>
        </nav>
    );
}
