// Backdrop.jsx
import { motion as Motion } from 'framer-motion';
import './backdrop.css';
import {FaSquareArrowUpRight} from 'react-icons/fa6'

const Backdrop = ({  github, live,title }) => {
  return (
    <Motion.div
      className="backdrop"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="backdrop-content">
        <h2>{title}</h2>
        <div className="backdrop-links">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub&nbsp;<FaSquareArrowUpRight className='link-icon'/></a>
          <a href={live} target="_blank" rel="noopener noreferrer">Live Demo&nbsp;<FaSquareArrowUpRight className='link-icon'/></a>
        </div>
      </div>
    </Motion.div>
  );
};

export default Backdrop;
