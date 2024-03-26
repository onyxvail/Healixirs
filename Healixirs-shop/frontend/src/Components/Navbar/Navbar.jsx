import React, { useContext } from 'react';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const { getTotalItems } = useContext(ShopContext);

    return (
        <nav className='flex flex-wrap justify-between items-center p-4 shadow-md bg-customBlack text-customNeon sticky top-0 z-10'>
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img src={logo} alt="Logo" className="w-12 h-12" />
                <p className="text-3xl font-semibold">Healixirs</p>
            </div>
            <ul className="md:flex md:items-center space-x-8">
                <li><Link className="hover:text-customBlue-300" to='/'>Home</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/Shop'>Shop</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/mens'>Men</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/womens'>Women</Link></li>
                <li><Link className="hover:text-customBlue-300" to='/Herbs'>Herbs</Link></li>
            </ul>
            <div className="flex items-center space-x-8">
                {localStorage.getItem('auth-token') ? (
                    <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Logout , Sayonara.</button>
                ) : (
                    <Link to='/login' className="px-4 py-2 border border-customBlue-400 text-customBlue-400 rounded-full transition-colors duration-300 hover:bg-customBlue-500 hover:text-white">Login</Link>
                )}
                <Link to='/cart' className="relative">
                    <img src={cart} alt="Cart" className="w-10 h-10" />
                    <div className="w-6 h-6 flex justify-center items-center bg-customBlue-500 text-customRed rounded-full absolute -top-2 -right-2">{getTotalItems()}</div>
                </Link>
            </div>
        </nav>
    );
};
