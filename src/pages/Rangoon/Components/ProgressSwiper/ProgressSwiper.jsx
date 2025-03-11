import React, { useRef, useState } from "react";
import "./progressSwiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { animateCircle, leftArrow, rightArrow } from "../../../../source";

const ProgressSwiper = () => {
  return (
    <>
      <div className="progress_slider_container">
        <div className="slider_wrapper">
          <Swiper
            slidesPerView={1}
            navigation={{
              nextEl: ".right_arrow",
              prevEl: ".left_arrow",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="box">
                <div className="box_data">
                  <img src={animateCircle} alt="" />
                </div>
                <div className="box_data content_wrapper">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, corrupti distinctio, fugiat eum numquam sapiente
                    expedita quaerat exercitationem voluptatem, unde laborum
                    debitis. Dignissimos praesentium accusantium consectetur
                    reprehenderit reiciendis ut quibusdam.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <div className="box_data">
                  <img src={animateCircle} alt="" />
                </div>
                <div className="box_data content_wrapper">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, corrupti distinctio, fugiat eum numquam sapiente
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <div className="box_data">
                  <img src={animateCircle} alt="" />
                </div>
                <div className="box_data content_wrapper">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, corrupti distinctio, fugiat eum numquam sapiente
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <div className="box_data">
                  <img src={animateCircle} alt="" />
                </div>
                <div className="box_data content_wrapper">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, corrupti distinctio, fugiat eum numquam sapiente
                    expedita quaerat exercitationem voluptatem, unde laborum
                    debitis. Dignissimos praesentium accusantium consectetur
                    reprehenderit reiciendis ut quibusdam.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="arrow_wrapper">
            <img src={leftArrow} alt="" className="left_arrow" />
            <img src={rightArrow} alt="" className="right_arrow" />
          </div>
          <div className="slider__progress">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressSwiper;
