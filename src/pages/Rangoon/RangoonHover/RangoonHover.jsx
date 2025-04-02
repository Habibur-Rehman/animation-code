import { useEffect, useRef } from "react";
import {
  cream01,
  cream02,
  cream03,
  cream04,
  hover01,
  hover02,
  hover03,
  hover04,
  hover05,
  hoverCircle,
} from "../../../source";
import "./rangoonHover.scss";
import { gsap } from "gsap";

const RangoonHover = () => {
  const imageRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     imageRef.current,
  //     { scale: 0, opacity: 0 }, // Start from scale 0 and hidden
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       duration: 1,
  //       ease: "elastic.out(1.2, 0.5)", // Smooth bounce effect
  //     }
  //   );
  // }, []);

  return (
    <>
      <section className="rangoonhover_sec1">
        <div className="my_container">
          <div className="cream_container">
            <div className="img_wrapper">
              {/* <img src={hoverCircle} alt="cream" className="circle" /> */}
              <img src={cream01} alt="cream" className="cream_img" />
              <div className="hover_img_wrapper" ref={imageRef}>
                <img src={hover01} alt="leaf" className="hover_img_1" />
                <img src={hover02} alt="leaf" className="hover_img_2" />
                <img src={hover03} alt="leaf" className="hover_img_3" />
                <img src={hover04} alt="leaf" className="hover_img_4" />
                <img src={hover05} alt="leaf" className="hover_img_5" />
              </div>
            </div>
            <div className="img_wrapper img_wrapper_2">
              {/* <img src={hoverCircle} alt="cream" className="circle" /> */}
              <img
                src={cream02}
                alt="cream"
                className="cream_img cream_img_2"
              />
              <div className="hover_img_wrapper">
                <img src={hover01} alt="leaf" className="hover_img_1" />
                <img src={hover02} alt="leaf" className="hover_img_2" />
                <img src={hover03} alt="leaf" className="hover_img_3" />
                <img src={hover04} alt="leaf" className="hover_img_4" />
                <img src={hover05} alt="leaf" className="hover_img_5" />
              </div>
            </div>
            <div className="img_wrapper">
              <img
                src={cream03}
                alt="cream"
                className="cream_img cream_img_3"
              />
            </div>
            <div className="img_wrapper">
              <img src={cream04} alt="cream" className="cream_img" />
            </div>
          </div>
        </div>
      </section>

      <section className="rangoonhover_sec2">
        <div className="my_container">
            <div className="moving_wrapper">
                <div className="moving_triangle"></div>
                <div className="moving_triangle_bottom"></div>
            </div>
        </div>
      </section>
    </>
  );
};

export default RangoonHover;
