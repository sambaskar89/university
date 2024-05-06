import React from 'react'

import './Footer.css'


const Footer = () => {

  return (

    <div className='footer'>


        <p>&copy; {new Date().getFullYear() } Your Company. All rights reserved.</p>
       <ul>
        <li>Terms of services</li>
        <li>Privacy</li>
       </ul>
       
      
    </div>
  )
}

export default Footer
