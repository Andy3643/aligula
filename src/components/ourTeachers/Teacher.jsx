import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import { Teachers } from '../../data';
import {MdArrowForwardIos} from 'react-icons/md'
import {MdArrowBackIosNew} from 'react-icons/md'

import './Teacher.css'
SwiperCore.use([Autoplay, Navigation]);

const Teacher = () => {
  return (
    <div className='container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 6000,
        }}
        loop={true}
        navigation={{
          prevEl: '.swiper-button-preev',
          nextEl: '.swiper-button-neext',
        }}
      >
        {Teachers.map((slide,i) =>(
                <SwiperSlide className="card">
                   <br></br>
                        <div className="card-container left-s">
                            <div className="name">
                                <img src={slide.profile} alt="" />
                                <h4>{slide.name}</h4> 
                            </div>
                            <div className='card_description'>
                                <span>{slide.position}</span><br></br>
                                <span>{slide.subjects}</span><br></br>
                                <span>.</span>
                            </div>                 
                        </div>

                    
                </SwiperSlide>
            ))}
      </Swiper>
      <div className="swiper-icons">
        <div className="swiper-navigation">
            <div className="icon-container">
              <MdArrowBackIosNew className="swiper-button-preev"/>
            </div>
            <div className="icon-container">
              <MdArrowForwardIos  className="swiper-button-neext"  />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Teacher
