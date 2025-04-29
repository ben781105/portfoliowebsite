import React from 'react'
import './portfolio.css'
import Slider from '../swiper component/slider'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
        <p>What sets me apart is not just my technical <span style={{color: '#e2f87b'}}>expertise</span> but also my commitment to sharing great ideas and learning from others.</p>
        <Slider/>
    </div>
  )
}

export default Portfolio
