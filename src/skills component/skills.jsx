import React from 'react'
import './skills.css'
import { motion as Motion } from 'framer-motion'

import django from '../assets/django.svg'
import mySQL from '../assets/mysql-original-wordmark.svg'
import html from '../assets/file-type-html.svg'
import css from '../assets/file-type-css.svg'
import js from '../assets/javascript-js.svg'
import react from '../assets/react.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import python from '../assets/python.svg'
import tailwind from '../assets/tailwindcss-icon.svg'

function Skills() {
  const logos = [html, css, tailwind,js, react, git, github, python, django, mySQL]

  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <p>My skills encompass a wide range of technologies and tools, enabling me to deliver high-quality web solutions.</p>

      <div className='skills-container'>
        <Motion.div 
          className='skills-track'
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className='skill-logo'>
              <img src={logo} alt={`tech-logo-${index}`} className='skills-icon' />
            </span>
          ))}
        </Motion.div>
      </div>
    </div>
  )
}

export default Skills
