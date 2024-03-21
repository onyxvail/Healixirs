import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/footer_logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import github_icon from '../Assets/github_icon.png';

export const Footer = () => {
  return (
    <div className='footer bg-gray-800 text-white py-12'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left"> {/* Center text on mobile and align left on desktop */}
          <img src={footer_logo} alt="Footer Logo" className="w-20 h-auto mb-2 md:w-16 md:h-auto md:mb-0" /> {/* Slightly smaller logo */}
          <p className="text-xs"></p>
        </div>

        <ul className="footer-links flex flex-wrap mb-6 md:mb-0">
          <li className="mr-4 mb-2 md:mb-0"><a href="#">Company</a></li>
          <li className="mr-4 mb-2 md:mb-0"><a href="#">Products</a></li>
          <li className="mr-4 mb-2 md:mb-0"><a href="#">Offices</a></li>
          <li className="mr-4 mb-2 md:mb-0"><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="footer-social-icon flex mb-6 md:mb-0">
          <div className="footer-icons-container mr-4">
            <img src={instagram_icon} alt="Instagram" className="w-12 hover:animate-bounce" /> {/* Increase icon size */}
          </div>

          <div className="footer-icons-container mr-4">
            <img src={pinterest_icon} alt="Pinterest" className="w-12 hover:animate-bounce" /> {/* Increase icon size */}
          </div>

          <div className="footer-icons-container mr-4">
            <img src={whatsapp_icon} alt="WhatsApp" className="w-12 hover:animate-bounce" /> {/* Increase icon size */}
          </div>

          <div className="footer-icons-container">
            <img src={github_icon} alt="Github" className="w-12 hover:animate-bounce" /> {/* Increase icon size */}
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center mt-8">
        <hr className="border-gray-600 mb-4" />
        <p className="text-sm">Copyrights @ 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};
