import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Teachers } from '../../data';


import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
    <div className="container">
    <div className='s-container'>
      <Swiper
        style={{
          "--swiper-pagination-color": "red",
          "--swiper-pagination-vertical-gap": "100px",
        }}
        spaceBetween={50}
        slidesPerView={3}
        loopFillGroupWithBlank={true}
        loop={true}
        centeredSlides={true}
        
        pagination={{
       
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {Teachers.map((slide,i) =>(
                <SwiperSlide>
                    <div className="left-s">
                        <div className="name">
                          <img src={slide.profile} alt="" />
                            <span>{slide.name}</span> 
                        </div>
                        <div>
                            <span>{slide.position}</span><br></br>
                            <span>{slide.subjects}</span>
                        </div> 
                        
                    </div>
                    
                </SwiperSlide>
            ))}

      </Swiper>
      </div>
      </div>
    </>
  );
}
