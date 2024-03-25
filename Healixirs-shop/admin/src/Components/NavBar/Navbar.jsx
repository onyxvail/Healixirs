import React from 'react'
import './Navbar.css'
import navLogo from "../../Assets/nav-logo.svg";
import navProfile from "../../Assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navLogo} alt='nav-logo' className='nav-logo'/>
        <h1 className='nav-title'>Healixirs</h1>
        <img src={navProfile} alt='navProfile' className='navProfile'/>

    </div>
  )
}

export default Navbar