import React from 'react'
import './Programs.css'
import program_1 from '../../assets/pexels-cottonbro-5474034.jpg'
import program_2 from '../../assets/pexels-ekrulila-21369952.jpg'
import program_3 from '../../assets/pexels-goumbik-574071.jpg'


const Programs = () => {
  return (
    <div className='programs'>

        <div className='program'>
            <img src={program_1}></img>
        </div>

        <div className='program'>
            <img src={program_2}></img>
        </div>

        <div className='program'>
            <img src={program_3}></img>
        </div> 
      
    </div>
  )
}

export default Programs
