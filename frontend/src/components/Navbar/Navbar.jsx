import React from 'react'
import './Navbar.css'
import logo from '../../assets/9391714.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  


  // regarding hamburger menu icon showing in small screens //
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 // ended...//
 //regarding nav bar background color ----//
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
}, []);




  return (

    <nav className={`container ${isScrolled ? 'dark-background' : ''}`}>
    <img src={logo} alt='example' className='logo'/>
    <ul className={isMenuOpen ? '' : 'hide-hamburger-menu'}>
      <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li> 
      <li><Link to='Programs' smooth={true} offset={-270} duration={500}>Program</Link></li>
      <li><Link to='About' smooth={true} offset={-150} duration={500}>About us</Link></li>
      <li><Link to='Campus' smooth={true} offset={-270} duration={500}>Campus</Link></li>
      <li><Link to='Testimonials' smooth={true} offset={-270} duration={500}>Testimonials</Link></li>
      <li><button className='mybtn'><Link to='Contact' smooth={true} offset={-270} duration={500}>Contact us</Link></button></li>
    </ul>
    <FontAwesomeIcon icon={faBars} className='hamburger-icon' onClick={toggleMenu} />
    
  </nav>
  
  )
}

export default Navbar
