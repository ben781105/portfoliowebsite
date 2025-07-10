import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Backdrop from './backdrop';
import './slider.css';
import './backdrop.css';


const slides = [
  {
    id: 1,
    title: 'Teo Cakes (e-commerce)',
    class: 'slide-one',
    github: 'https://github.com/ben781105/teofront',
    live: 'https://cakeshop-wi4m.onrender.com/'
  },
  {
    id: 2,
    title: 'Blaze-nest Project',
    class: 'slide-two',
    github: 'https://github.com/ben781105/blaze-nest',
    live: 'https://blaze-nest.vercel.app'
  },
  {
    id: 3,
    title: 'Teo Cakes (backend)',
    class: 'slide-three',
    github: 'https://github.com/ben781105/TEO',
    live: 'https://cakeshop-wi4m.onrender.com'
  },
   {
    id: 4,
    title: 'Bulk Sms Website (Frontend)',
    class: 'slide-four',
    github: 'https://github.com/ben781105/startfront',
    live: 'https://github.com/ben781105/startfront'
  },
   {
    id: 5,
    title: 'Bulk Sms Website (Backend)',
    class: 'slide-four',
    github: 'https://github.com/ben781105/startback',
    live: 'https://github.com/ben781105/startback'
  },

];


const Slider = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="slider"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`slide-content ${slide.class}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            
            <AnimatePresence>
              {hovered === i && (
                <Backdrop
                title={slide.title}
                github={slide.github}
                live={slide.live}
              />
              
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
