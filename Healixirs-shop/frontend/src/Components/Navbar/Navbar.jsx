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
        <div className='sticky top-0 z-50 bg-white w-full flex flex-wrap justify-between items-center p-4 shadow-md'>
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img src={logo} alt="Logo" className="w-12 h-12" />
                <p className="text-custom-purple text-3xl font-semibold">Healixirs</p>
            </div>
            <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {menuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
            <ul className={`md:flex md:items-center space-x-8 ${menuOpen ? 'block' : 'hidden'}`}>
                <li><Link className="text-gray-600 hover:text-gray-800" to='/' onClick={toggleMenu}>Home</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800" to='/shop' onClick={toggleMenu}>Shop</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800" to='/about' onClick={toggleMenu}>About</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800" to='/contact' onClick={toggleMenu}>Contact</Link></li>
            </ul>
            <div className="flex items-center space-x-8">
                <Link to='/login' className="px-4 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-custom-purple-500 hover:text-white">Login</Link>
                <Link to='/cart' className="relative">
                    <img src={cart} alt="Cart" className="w-10 h-10" />
                    <div className="w-6 h-6 flex justify-center items-center bg-purple-500 text-white rounded-full absolute -top-1 -right-1">0</div>
                </Link>
            </div>
        </div>
    );
}
