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
import redux from '../assets/redux.svg'
import typescript from '../assets/typescript.svg'
import postgres from '../assets/postgresql.svg'

function Skills() {
  const logos = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: js, name: "JavaScript" },
  { src: typescript, name: "TypeScript" },
  { src: react, name: "React" },
  { src: git, name: "Git" },
  { src: github, name: "GitHub" },
  { src: python, name: "Python" },
  { src: django, name: "Django" },
  { src: mySQL, name: "MySQL" },
  { src: redux, name: "Redux" },
  { src: postgres, name: "PostgreSQL" }
];


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
          
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className='skill-logo group relative'>
              <img src={logo.src} alt={logo.name} className='skills-icon' />

              <span className='tooltip'>
                {logo.name}
              </span>
            </span>
          ))}
        </Motion.div>
      </div>
    </div>
  )
}

export default Skills
