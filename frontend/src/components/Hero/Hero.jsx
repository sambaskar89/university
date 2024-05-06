import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// It is like a Home page !! //
const Hero = () => {
  return (
    <div className='hero' >
        <div className='hero-text'>
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting edge curriculum is designed to empower students with the knowledge,skills and experience needed to excel in the dynamic field of education</p>
            <button className='mybtn'>Explore more  <FontAwesomeIcon icon={faArrowRight} style={{  fontSize: '24px',marginLeft: '10px'}}/></button>
        </div>
      
    </div>
  )
}

export default Hero
