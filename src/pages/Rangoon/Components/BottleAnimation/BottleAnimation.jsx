import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bottle, bottleGreen } from "../../../../source";
import "./bottleAnimation.scss";

gsap.registerPlugin(ScrollTrigger);

const BottleAnimation = () => {
  const containerRef = useRef(null);
  const greenBottleRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const greenBottle = greenBottleRef.current;

    ScrollTrigger.create({
      trigger: greenBottle,
      start: "top center",
      end: "bottom bottom",
      onEnter: () => setIsFixed(false), // Move bottle inside
      onLeaveBack: () => setIsFixed(true), // Reset bottle position when scrolling back up
    });

    // const tl = gsap.timeline();

    // tl.fromTo(
    gsap.fromTo(
      greenBottle,
      { x: "-50%", y: "30%", scale: 2, scrub: 1, duration: 5 },
      {
        x: "-50%",
        y: 0,
        scale: 1,
        ease: "power2.out",
        duration: 5, // Smooth transition time
        scrollTrigger: {
          trigger: container,
          start: "top 100%",
          end: "bottom bottom",
          scrub: 1, // Smooth effect
          marker: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <div className="bottle_container" ref={containerRef}>
        <div className="my_container">
          <div className="bottle_wrapper">
            <img src={bottle} alt="bottle" className="bottle_img" />
            <img src={bottle} alt="bottle" className="bottle_img" />
            {/* Green Bottle (Initially fixed, then moves inside) */}
            {/* <img
              ref={greenBottleRef}
              src={bottleGreen}
              alt="green bottle"
              className={`bottle_img bottle_green ${isFixed ? "fixed" : "inside"}`}
            /> */}
            <div className="bottle_scroll_wrapper">
              <img
                ref={greenBottleRef}
                src={bottleGreen}
                alt="green bottle"
                className={`bottle_green ${isFixed ? "fixed" : "inside"}`}
              />
              <img
                src={bottle}
                alt="bottle"
                className="bottle_img"
                style={{ opacity: "0", maxWidth: "100%" }}
              />
            </div>
            <img src={bottle} alt="bottle" className="bottle_img" />
            <img src={bottle} alt="bottle" className="bottle_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottleAnimation;
