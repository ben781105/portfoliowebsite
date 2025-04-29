import React from 'react'
import './submain.css'
import Home from '../Home component/home'
import Services from '../services component/services'
import About from '../About conponent/about'
import Portfolio from '../portfolio component/portfolio'
import Skills from '../skills component/skills'
import Contact from '../contact component/contact'
function Submain() {
  return (
    <div className='submain' id='submain'>
      <Home/>
      <Services/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Submain

