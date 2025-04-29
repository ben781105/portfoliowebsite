import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css';
import Backdrop from '../backdrop/Backdrop'; // <-- use the reusable component

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
    title: 'Portfolio Project 2',
    class: 'slide-two',
    github: 'https://github.com/your-user/project2',
    live: 'https://your-live-site.com/project2'
  },
  {
    id: 3,
    title: 'Portfolio Project 3',
    class: 'slide-three',
    github: 'https://github.com/your-user/project3',
    live: 'https://your-live-site.com/project3'
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
