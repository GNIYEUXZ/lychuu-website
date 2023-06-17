import React, { useState, useRef } from 'react';
import { Marketplace } from './Marketplace.js';
import { Events } from './Events.js';
import { Contact } from './Contact.js';
import '../App.scss';

export const Collapsibles = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const items = [
    {
      title: '01 Online Marketplace',
      content: <Marketplace />,
      id: "marketplace",
    },
    {
      title: '02 Offline Events',
      content: <Events />,
      id: "events"
    },
    {
      title: '03 Contact Us',
      content: <Contact />,
      id: "contact"
    },
  ];

  return (
    <div className="collapsibles" id="collaspsibles">
      <div className="collapsible" ref={scrollRef} >
        {items.map((item, index) => (
          <div
            className={`item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <a
              className="item-header container"
              href='#marketplace'
              onClick={() => handleClick(index)}
              id={item.id}
            >
              <h2>{item.title}</h2>
            </a>
            {activeIndex === index && (
              <div className="item-content container" >
                <div>{item.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
