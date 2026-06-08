"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sambhavMovingBox } from "../../source";

gsap.registerPlugin(ScrollTrigger);

const MovingBox = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      const photo = section.querySelector(".main-info__photo");
      const image = section.querySelector(".main-info__img");
      const text = section.querySelector(".main-info__text");
      const descr2 = section.querySelector(".main-info__descr2");

      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.from(photo, {
        flex: "0 0 0%",
      })
        .from(
          image,
          {
            scale: 1.2,
          },
          0,
        )
        .fromTo(
          text,
          {
            yPercent: 80,
          },
          {
            yPercent: 0,
          },
          0,
        )
        .fromTo(
          descr2,
          {
            x: "100%",
          },
          {
            x: "0%",
            duration: 0.4,
          },
          "<",
        );

      gsap.to(image, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-info" ref={sectionRef}>
      <div className="main-info__sticky">
        <div className="main-info__content">
          <div className="main-info__photo">
            <div className="main-info__img">
              <img src={sambhavMovingBox} alt="Architecture" />
            </div>
          </div>

          <div className="main-info__text">
            <div className="main-info__descr">
              We are boutique developers redefining redevelopment through a
              thoughtful, design-led approach, creating distinctive homes FOR A
              modern living.
            </div>

            <div className="main-info__descr2">
              <div className="main-info__descr2-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </div>

              <button className="main-info__button">KNOW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingBox;
