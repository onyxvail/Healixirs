import React, { useState } from 'react';
import './ScrollUp.css';
import upArrowImage from '../Assets/up_arrow.png'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
      <img src={upArrowImage} alt="Scroll to top" className="scroll-to-top-image" />
    </button>
  );
};

export default ScrollToTopButton;
