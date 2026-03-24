import React, { useEffect, useRef } from "react";
import "./spiral.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);

const colors = [
  "maroon",
  "yellow",
  "red",
  "pink",
  "blue",
  "green",
  "purple",
  "lightgrey",
  "orange",
];

const Gallery3DV2 = () => {
  const { width: windowWidth } = useWindowSize();
  const containerRef = useRef(null);
  const outerRef = useRef(null);

  // console.log("y",(360 / colors?.length));

  const radius =
    windowWidth > 1200
      ? 450
      : windowWidth > 1024
        ? 400
        : windowWidth > 992
          ? 380
          : windowWidth > 767
            ? 300
            : 220;
  console.log("radius", radius);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          markers: true, // enable for debugging
        },
      });

      tl.to(outerRef.current, {
        rotateY: 360,
        ease: "none",
        duration: 10,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <section className="work2" ref={containerRef}>
        <div className="gallery_box">
          <div className="gallery_box_outer" ref={outerRef}>
            {colors.map((color, i) => (
              <div
                key={i}
                className="gallery_box_in"
                style={{
                  background: color,
                  transform: `rotateY(${i * (360 / colors?.length)}deg) translateZ(${radius}px)`,
                  //Note: translateZ(450px) is for increasing the radius of circle
                  // transform: `rotateY(${i * 40}deg) translateZ(450px)`,
                }}
              >
                <p className="card_numb">Card {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="extra-space">
        <h1>Extra space just for demo, remove this</h1>
      </section>
    </>
  );
};

export default Gallery3DV2;
