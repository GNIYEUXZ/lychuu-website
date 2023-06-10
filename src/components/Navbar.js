import React, { useState, useEffect, useRef } from 'react';
import '../App.scss';
import { Container } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import logo from '../assets/img/logo.svg';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar${isOpen ? ' open' : ''}`} ref={navbarRef}>
     <Container>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <AiOutlineMenu />
        </div>
        {isOpen && (
          <div className="navbar-links">
            <a href="#marketplace">01  Online Marketplace</a>
            <a href="#events">02  Offline Events</a>
            <a href="#contact">03  Contact Us</a>
          </div>
        )}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <a href="https://instagram.com/lychuu.marche?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="navbar-instagram-link">
          <AiFillInstagram />
        </a>
        </Container>
    </nav>
  );
};
