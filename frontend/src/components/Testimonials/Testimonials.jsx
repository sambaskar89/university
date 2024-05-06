import React from 'react'
import './Testimonials.css'
//slick slider imports//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {

  const sliderRef = useRef(null);

  const testimonialData = [
    { id: 1, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg'),name:'sam jacob',text: 'Edusity, USA',text1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.'
    },
    { id: 2, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg'), name:'sam jacob',text: 'Edusity, USA',text2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.'},
    { id: 3, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg'), name:'sam jacob', text: 'Edusity, USA',text3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.'},
    { id: 4, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg'), name:'sam jacob',text: 'Edusity, USA',text4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.' },
    { id: 5, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg') , name:'sam jacob',text: 'Edusity, USA',text5: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.'},
    { id: 6, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg'), name:'sam jacob',text: 'Edusity, USA',text6: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.' },
    { id: 7, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg'), name:'sam jacob',text: 'Edusity, USA',text7: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.' },
    { id: 8, imageSrc:  require('../../assets/pexels-ekrulila-21369952.jpg'), name:'sam jacob',text: 'Edusity, USA',text8: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nemo nisi distinctio vel praesentium tempora, inventore omnis ratione? In totam voluptatibus fuga explicabo eos consequatur deleniti? Quas nihil nostrum repellat.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1670, // Large screen breakpoint
        settings: {
          slidesToShow: 3, // Show three slides in a row for large screens
        },
      },
      {
        breakpoint: 1072, // Medium screen breakpoint
        settings: {
          slidesToShow: 2, // Show two slides in a row for medium screens
        },
      },
      {
        breakpoint: 752, // Small screen breakpoint
        settings: {
          slidesToShow: 1, // Show one slide in a row for smaller screens
        },
      },
    ],
  };
  

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    
 <div className="testimonial-slider-container">
<div>
         <button onClick={goToPrev} className="slider-buttons-left"> <FontAwesomeIcon icon={faCircleChevronLeft} className="fa-circle-chevron-left" style={{  fontSize: '24px'}} /></button>
 </div>
         <div className='testimonial-slider' >

      <Slider ref={sliderRef} {...settings}>

          {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">

     <div className='card-content'>
            <img src={testimonial.imageSrc} alt={`Testimonial ${testimonial.id}`} />
        <div className='paragraph-content'>
            <p>{testimonial.name}</p>
            <p>{testimonial.text}</p>
         </div>
    </div>

            <p className='para-text'>{testimonial.text1}</p>
            <p>{testimonial.text2}</p>
            <p>{testimonial.text3}</p>
            <p>{testimonial.text4}</p>
            <p>{testimonial.text5}</p>
            <p>{testimonial.text6}</p>
            <p>{testimonial.text7}</p>
            <p>{testimonial.text8}</p>
           
          </div>
        ))}

      </Slider>

      </div>
<div>
      <button onClick={goToNext} className="slider-buttons-right"  ><FontAwesomeIcon icon={faCircleChevronRight} className="fa-circle-chevron-right" style={{  fontSize: '24px'}} /></button>
</div> 

    </div>
  );
};

export default Testimonials;




