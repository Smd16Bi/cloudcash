import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/css';
import './slider.css';

import cloud from "../../assets/icon-cloud.svg"
const Slider = ({ className, slides }) => {
  return (
    <Swiper
      className={className}
      spaceBetween={50}
      slidesPerView={1}
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
  );
};


Slider.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.object)
}
export default Slider;
