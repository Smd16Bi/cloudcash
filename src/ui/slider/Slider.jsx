import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css';

import iconPrev from "../../assets/icon-prev.svg"
import iconNext from "../../assets/icons-next.svg"


import cloud from "../../assets/icon-cloud.svg"
const Slider = ({ className, slides }) => {
  const swiperRef = React.useRef();
  return (
    <div className='swiper-container'>
      <button className='swiper-button swiper-prev' onClick={() => swiperRef.current?.slidePrev()}>
        <img src={iconPrev} alt="Icon prev" />
      </button>
      <Swiper
        modules={[Navigation]}
        loop={true}
        className={className}
        spaceBetween={50}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {
          slides.map(el => {
            return (
              <SwiperSlide key={el.lastNumber}>
                <span className='name-app'>cloudcash</span>
                <p className='card-number'>**** **** **** <span>{el.lastNumber}</span></p>
                <div className='card-info'>
                  <div className='card-owner'>
                    <span className='card-owner__title'>Card holder</span>
                    <span className='card-owner__name'>{el.name}</span>
                  </div>
                  <div className='card-date'>
                    <span className='card-date__title'>Expire date</span>
                    <span className='card-date__name'>{el.date}</span>
                  </div>
                </div>

                <img src={cloud} alt="" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <button className='swiper-button swiper-next' onClick={() => swiperRef.current?.slideNext()}>
        <img src={iconNext} alt="Icon next" />
      </button>
    </div>

  );
};


Slider.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.object)
}
export default Slider;
