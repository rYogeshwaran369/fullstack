// App.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/styles.css'; // Import external stylesheet for animations
import Imgeone from '../assets/images/banner/bannerImgOne.webp';
import Imgetwo from '../assets/images/banner/bannerImgTwo.webp';
import ImgeThree from '../assets/images/banner/bannerImgThree.webp';

const images = [Imgeone, Imgetwo, ImgeThree];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '100%',
        margin: 'auto',
        display: 'flex',
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            display: index === currentSlide ? 'block' : 'none',
            animation: index === currentSlide ? 'fadeEffect ease-in-out infinite' : '',
            height: 500,
            width: '100%',
            backgroundSize: 'contain',
          }}
        >
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
