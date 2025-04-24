
import React, { useState, useEffect } from 'react';

const images = [
  '/lovable-uploads/34cd96f5-265d-40bc-9a8f-8e85e82618cf.png',
  '/lovable-uploads/56378c67-8ec9-4132-9691-974474038f5d.png',
  '/lovable-uploads/9cad5bba-a5f1-41c7-a40b-7c27a774caa3.png'
];

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0" style={{ top: '64px' }}>
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
