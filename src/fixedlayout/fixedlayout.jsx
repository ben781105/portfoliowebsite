import React, { useState,useEffect} from 'react';
import './fixedlayout.css';
import { FaXTwitter, FaGithub, FaTiktok, FaFacebook, FaBars, FaXmark } from 'react-icons/fa6';

function Fixedlayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Handle window resizing
  const handleResize = () => {
    if (window.innerWidth > 980) {
      setIsMenuOpen(true); 
    } else {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    if(window.innerWidth<980){
      setIsMenuOpen(!isMenuOpen);}
    }
   

  return (
    <>
      <div className='menu-toggle' onClick={toggleMenu}>
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </div>

      {isMenuOpen && (
        <div className='fixedlayout'>
          <ul className='socialmedia'>
            <li><a href='https://github.com/ben781105'><FaGithub className='media-icon' /></a></li>
            <li><a href='https://www.tiktok.com/@centered_div'><FaTiktok className='media-icon' /></a></li>
            <li><a href='https://www.facebook.com/profile.php?id=100085612663352&mibextid=ZbWKwL'><FaFacebook className='media-icon' /></a></li>
            <li><a href='https://x.com/ben41d'><FaXTwitter className='media-icon' /></a></li>
          </ul>

          <nav className='navbar'>
            <span className='name'>Ssewabuga Benard</span>
            <li onClick={toggleMenu}><a href="#home" >Home</a></li>
            <li onClick={toggleMenu}><a href="#services">Services</a></li>
            <li onClick={toggleMenu}><a href="#about">About</a></li>
            <li onClick={toggleMenu}><a href="#portfolio">Portfolio</a></li>
            <li onClick={toggleMenu}><a href="#skills">Skills</a></li>
            <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
          </nav>

          <sub>© 2025 BenardSJ. All rights reserved.</sub>
        </div>
      )}
    </>
  );
}

export default Fixedlayout;
