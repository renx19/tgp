import React, { useEffect } from 'react';
import '../../styles/ulfooter.css';
import image1 from '../../assets/light.jpg'; // Import your images
import image2 from '../../assets/light.jpg';

function Developer() {
  useEffect(() => {
    const handleScroll = () => {
      const popups = document.querySelectorAll('.popup');
      popups.forEach((popup, index) => {
        const positionFromTop = popup.getBoundingClientRect().top;
        if (positionFromTop - window.innerHeight <= 0) {
          popup.classList.add('show');
        } else {
          popup.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className='dev-con'>
      <h1>Developer</h1>
      <p>Developed by: [Mark Justin Borja]</p>
      <p>Designed by: [Arthur James Onrubia]</p>

      {/* Example images */}
      <div className="popup" style={{ backgroundImage: `url(${image1})` }}></div>
      <div className="popup" style={{ backgroundImage: `url(${image2})` }}></div>
    </div>
  );
}

export default Developer;