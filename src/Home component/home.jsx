import React from 'react'
import {motion as Motion} from 'framer-motion'
import './home.css'
import profile from '../assets/ddd.jpg'
function Home() {
  return (
    <div className='home' id='home'>
        <h1>FREELANCER AND FRONTEND DEVELOPER</h1>
      <div className='introduction'>
        <div className='greetings'>
            <h2>HELLO I'AM</h2>
            <span>BENARD</span>
            <p>Are you looking for a skilled frontend developer who can transform your UI/UX designs
               into fully functional, pixel perfect code, integrate backend API's?  Welcome to my Portfolio.</p>
            <Motion.button
             whileHover={{ scale: 1.03 }}
             whileTap={{ scale: 0.95 }}
            ><a href="#portfolio">explore my work</a></Motion.button>
        </div>
        
        <div className='profile-img'>
            <img src={profile} alt="ssewabuga benard" />
        </div>
      </div>
      <span className='icon'>B.</span>
    </div>
  )
}

export default Home
