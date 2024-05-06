import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { useState } from 'react';
function App() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };


  return (
    <div>
    <Navbar/>

      <section id='Hero'> 
      <Hero/>
      </section>

      <Title subtitle='our program' title='What we offer'/>

      <div className='container'>

        <section id="Programs">
         <Programs/> 
         </section>

         <section id="About">
         <About isPlaying={isVideoPlaying} toggleVideo={toggleVideo} />
         </section>

         <Title subtitle='Gallery' title='Campus Photos'/>

         <section id="Campus">
         <Campus/>
         </section>

         <Title subtitle='Testimonials' title='What student says'/>

          <div>
            <section id="Testimonials">
             <h2 style={{ marginLeft: '95px', marginBottom:'30px'}}>Testimonials</h2>
             <Testimonials />
             </section>
          </div>

         <Title subtitle='Contact us' title='Get in Touch'/>

        <section id="Contact">
        <Contact/>
        </section>

     <Footer/>
     
      </div> { /*Container div ends-----*/}
      <VideoPlayer isPlaying={isVideoPlaying}  setIsPlaying={setIsVideoPlaying}toggleVideo={toggleVideo} />
    </div>
  );
}

export default App
