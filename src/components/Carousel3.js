import React, { useState, useEffect } from 'react';
import '../App.scss';
import event3Img1 from "../assets/img/event3-1.jpg"
import event3Img2 from "../assets/img/event3-2.jpg"
import event3Img3 from "../assets/img/event3-3.JPG"
import event3Img4 from "../assets/img/event3-4.png"

export const Carousel3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const images = [
    {
      src: event3Img1,
      description: 'F/W Lychuu X OIOE HOME - Christmas Candles',
      link: 'https://mp.weixin.qq.com/s/T8ydtTp3bPaIb0Z7vynm_g',
    },
    {
        src: event3Img2,
        description: 'S/S Lychuu Gallery Fair - Photography Booth',
        link: 'https://www.youtube.com/watch?v=q95s-hqPrmg',
      },
      {
        src: event3Img3,
        description: 'F/W Lychuu Black Friday Market - Vintage Fur',
        link: 'https://mp.weixin.qq.com/s/6uXeErjadIXRMv-c-xUQMA',
      },
      {
        src: event3Img4,
        description: 'F/W Lychuu Vintage Market - Another Shop',
        link: 'https://mp.weixin.qq.com/s/6uXeErjadIXRMv-c-xUQMA',
      },
  ];

  useEffect(() => {
    let interval;

    if (!hovered) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleImageHover = () => {
    setHovered(true);
  };

  const handleImageLeave = () => {
    setHovered(false);
  };

  return (
    <div className="carousel">
     <div className="carousel-images">
        {images.map((image, index) => (
          <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
            <div
              className={`carousel-image ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="image-description">
                <p>{image.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
