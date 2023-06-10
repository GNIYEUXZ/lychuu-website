import React, { useState, useEffect } from 'react';
import '../App.scss';
import event1Img1 from "../assets/img/event1-1.jpg"
import event1Img2 from "../assets/img/event1-2.jpg"
import event1Img3 from "../assets/img/event1-3.jpg"
import event1Img4 from "../assets/img/event1-4.jpg"

export const Carousel1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const images = [
    {
      src: event1Img1,
      description: 'S/S Lychuu Gallery Fair',
      link: 'https://www.youtube.com/watch?v=q95s-hqPrmg',
    },
    {
        src: event1Img2,
        description: 'F/W Lychuu Vinyl Cocktail Night',
        link: 'https://mp.weixin.qq.com/s/pwkL1yu349ankulT3y6Tqg',
      },
      {
        src: event1Img3,
        description: 'F/W Lychuu Black Friday Market',
        link: 'https://mp.weixin.qq.com/s/FvZ24OutPNyVYuQIJOCPoA',
      },
      {
        src: event1Img4,
        description: 'F/W Lychuu Vintage Market',
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
