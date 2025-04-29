import React from 'react'
import './mainlayout.css'
import Submain from '../submainlayout/submain'
import Fixedlayout from '../fixedlayout/fixedlayout'
function Mainlayout() {
  return (
    <div className='mainlayout'>
      <Submain/>
      <Fixedlayout/>
    </div>
  )
}

export default Mainlayout
