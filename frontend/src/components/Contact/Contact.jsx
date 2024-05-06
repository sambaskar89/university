import React from 'react'
import './Contact.css'
import messageimage from '../../assets/email_9809981.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const  Contact= () => {

  //onsubmit function started!!
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9239dc33-16d5-4072-a96e-18dd8865009b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
// on submit function ended!!
  return (

    <div className='contact'> 

    

    <div className='contact-mycol'>
      <h3> Send us a message< img src={messageimage} ></img></h3>
      <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, suggestions are important to us we strive to provide exceptional service to our university community.</p>
      
      
      
      <ul>
           <li><FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px',marginRight:'5px'}} />Contact@sam.com </li>
           <li> <FontAwesomeIcon icon={faPhone} style={{fontSize:'20px'}}/> +91 9500920350 </li>
           <li> <FontAwesomeIcon icon={faLocationDot} style={{fontSize:'20px'}} /> 819/6 E.B colony <br/> Rajiv nagar, kovilpatti 
          </li>

      </ul>
      
    </div>
    

    <div className='contact-mycol'>
    
    <form onSubmit={onSubmit}>
        
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter your name'required/>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone"placeholder='Enter your phone number' required/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="6" placeholder='Enter your message'required></textarea>
      </div>
      <button type="submit" className='mybtn dark-mybtn'>Submit now</button>

    </form>
    <span>{result}</span>
    
   </div>
   
    </div>
  )
}

export default Contact
