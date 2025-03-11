import React, { useEffect, useRef, useState } from "react";
import "./progressSwiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { animateCircle, leftArrow, printedPage, rightArrow } from "../../../../source";
import gsap from "gsap";

const sliderData = [
  {
    id: 1,
    img: animateCircle,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, corrupti distinctio, fugiat eum numquam sapiente expedita quaerat exercitationem voluptatem, unde laborum debitis. Dignissimos
            praesentium accusantium consectetur reprehenderit reiciendis ut quibusdam.`,
  },
  {
    id: 2,
    img: printedPage,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, corrupti distinctio, fugiat eum numquam sapiente expedita quaerat exercitationem voluptatem, unde laborum debitis. Dignissimos
            `,
  },
  {
    id: 3,
    img: animateCircle,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, corrupti distinctio, fugiat eum numquam sapiente expedita quaerat exercitationem voluptatem, unde laborum debitis. Dignissimos
            praesentium accusantium consectetur reprehenderit reiciendis ut quibusdam.`,
  },
  {
    id: 4,
    img: printedPage,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, corrupti distinctio, fugiat eum numquam sapiente expedita quaerat exercitationem voluptatem, unde laborum debitis. Dignissimos
            `,
  },
];

const ProgressSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!progressRef.current) return;

    const updateProgress = () => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "linear",
      });
    };

    const resetProgress = () => {
      gsap.set(progressRef.current, { scaleX: 0 });
      updateProgress();
    };

    resetProgress();

    return () => {
      gsap.killTweensOf(progressRef.current);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="progress_slider_container">
        <div className="slider_wrapper">
          <Swiper
            ref={swiperRef}
            // effect="cards"
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".right_arrow",
              prevEl: ".left_arrow",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {sliderData.map((item, i) => (
              <SwiperSlide>
                <div className="box" key={i}>
                  <div className="box_data">
                    <img src={item.img} alt="" />
                  </div>
                  {/* <div className="box_data content_wrapper">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora, corrupti distinctio, fugiat eum numquam sapiente
                    expedita quaerat exercitationem voluptatem, unde laborum
                    debitis. Dignissimos praesentium accusantium consectetur
                    reprehenderit reiciendis ut quibusdam.
                  </p>
                </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="content_container">
            {sliderData.map((item, i) => (
              <div
                className={`content_wrapper ${
                  activeIndex === i ? "active" : ""
                }`}
                key={i}
              >
                <p>{item.desc}</p>
              </div>
            ))}
            <div className="arrow_wrapper">
              <img
                src={leftArrow}
                alt=""
                className="left_arrow"
                onClick={() => {
                  swiperRef.current.swiper.slidePrev();
                  setActiveIndex(swiperRef.current.swiper.realIndex);
                }}
              />
              <img
                src={rightArrow}
                alt=""
                className="right_arrow"
                onClick={() => {
                  swiperRef.current.swiper.slideNext();
                  setActiveIndex(swiperRef.current.swiper.realIndex);
                }}
              />
            </div>
          </div>
          {/* <div className="arrow_wrapper">
            <img src={leftArrow} alt="" className="left_arrow" />
            <img src={rightArrow} alt="" className="right_arrow" />
          </div> */}
          <div className="slider__progress">
            <div className="progress" ref={progressRef}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressSwiper;
