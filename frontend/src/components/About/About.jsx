import React from 'react'
import './About.css'
import about_img from '../../assets/pexels-jorge-acre-239933086-13755865.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const About = ({isPlaying, toggleVideo}) => {


  
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'></img>
            <FontAwesomeIcon icon={faCirclePlay}  className="icon-class"  onClick={toggleVideo}/>
        </div>
       
        <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow's Leaders Today</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus molestiae commodi nam minima voluptatum ipsam dolorum repellat nulla tempore, nesciunt delectus quidem et sint culpa qui laborum quae voluptatem deleniti.</p>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus molestiae commodi nam minima voluptatum ipsam dolorum repellat nulla tempore, nesciunt delectus quidem et sint culpa qui laborum quae voluptatem deleniti.</p>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus molestiae commodi nam minima voluptatum ipsam dolorum repellat nulla tempore, nesciunt delectus quidem et sint culpa qui laborum quae voluptatem deleniti.</p>
      
    </div>

    </div>
  )
}

export default About
