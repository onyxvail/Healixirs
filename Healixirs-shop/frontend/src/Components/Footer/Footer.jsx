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
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <img src={footer_logo} alt="Footer Logo" className="w-16 h-auto mb-2 md:w-12 md:h-auto md:mb-0" />
          <p className="text-xs"></p>
        </div>

        <ul className="footer-links flex flex-wrap justify-center md:justify-center mb-6 md:mb-0 text-center" style={{ gap: '20px' }}>
          <li className="mr-4 mb-2 md:mb-0"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Company</a></li>
          <li className="mr-4 mb-2 md:mb-0"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Products</a></li>
          <li className="mr-4 mb-2 md:mb-0"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Offices</a></li>
          <li className="mr-4 mb-2 md:mb-0"><a href="https://www.linkedin.com/in/onshafi">Contact</a></li>
        </ul>

        <div className="footer-social-icon flex mb-6 md:mb-0 ml-auto">
          <div className="footer-icons-container mr-4">
            <a href="https://www.instagram.com/yamihashira_" className="flex items-center justify-center">
              <img src={instagram_icon} alt="Instagram" className="w-12 hover:animate-bounce" />
            </a>
          </div>

          <div className="footer-icons-container mr-4">
            <a href="https://www.pinterest.com" className="flex items-center justify-center">
              <img src={pinterest_icon} alt="Pinterest" className="w-12 hover:animate-bounce" />
            </a>
          </div>

          <div className="footer-icons-container mr-4">
            <a href="https://www.whatsapp.com" className="flex items-center justify-center">
              <img src={whatsapp_icon} alt="WhatsApp" className="w-12 hover:animate-bounce" />
            </a>
          </div>

          <div className="footer-icons-container">
            <a href="https://github.com/onyxvail" className="flex items-center justify-center">
              <img src={github_icon} alt="Github" className="w-12 hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center mt-8 ml-auto">
        <hr className="border-gray-600 mb-4" />
        <p className="text-sm">Copyrights © 2024. All rights reserved.</p>
      </div>
    </div>
  );
};
