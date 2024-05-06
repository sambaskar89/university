import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/pexels-jorge-acre-239933086-13755865.jpg'
import gallery_4 from '../../assets/pexels-pixabay-39284.jpg'
import gallery_3 from '../../assets/pexels-marcelo-gonzalez-1141370437-20923044.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1}></img>
            <img src={gallery_4}></img>
            <img src={gallery_3}></img>
            <img src={gallery_4}></img>
        </div>
        <div className='buttoncenter'>
        <button className='centeredbutton'>See more here <FontAwesomeIcon icon={faArrowRight} style={{  fontSize: '24px',marginLeft: '10px'}}/>
        </button>
        
        </div>
     </div>
  )
}

export default Campus
