import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./circularAnimation.scss";
import { logo01Togglehead, logo02Togglehead, semiCircle } from "../../source";

export const logoData = [
  {
    id: 1,
    img: logo01Togglehead,
    title: "Accessibility",
  },
  {
    id: 2,
    img: logo02Togglehead,
    title: "Distribution and Logistics",
  },
  {
    id: 3,
    img: logo01Togglehead,
    title: "Value additions",
  },
  {
    id: 4,
    img: logo02Togglehead,
    title: "A range of clients",
  },
  {
    id: 5,
    img: logo01Togglehead,
    title: "Varying Machine Capacities and In-House Functions",
  },
  {
    id: 6,
    img: logo02Togglehead,
    title: "Automation",
  },
  {
    id: 7,
    img: logo01Togglehead,
    title: "In-house maintenance team",
  },
];

const CircularAnimation = ({ reverse = false, duration = 30 }) => {
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const mainTweenRef = useRef(null);
  const counterTweenRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const orbit = orbitRef.current;
    if (!container || !orbit) return;

    // Anti-clockwise rotation: orbit = -360deg, icon counter-rotation = +360deg
    // Clockwise rotation: orbit = +360deg, icon counter-rotation = -360deg
    const orbitTargetRotation = reverse ? -360 : 360;
    const iconTargetRotation = reverse ? 360 : -360;

    const ctx = gsap.context(() => {
      // Rotate the orbit container continuously
      const mainTween = gsap.to(orbit, {
        rotation: orbitTargetRotation,
        duration: duration,
        ease: "none",
        repeat: -1,
      });

      // Counter-rotate icons so logos stay upright
      const icons = orbit.querySelectorAll(".icon_img");
      const counterTween = gsap.to(icons, {
        rotation: iconTargetRotation,
        duration: duration,
        ease: "none",
        repeat: -1,
      });

      mainTweenRef.current = mainTween;
      counterTweenRef.current = counterTween;
    }, container);

    return () => ctx.revert();
  }, [reverse, duration]);

  const handleMouseEnter = () => {
    mainTweenRef.current?.pause();
    counterTweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    mainTweenRef.current?.play();
    counterTweenRef.current?.play();
  };

  return (
    <section className="orbit_sec1" ref={containerRef}>
      <div className="luxury_orbit">
        <div className="circle_wrapper">
          {/* Semicircle */}
          <img
            src={semiCircle}
            alt=""
            width={1625}
            height={859}
            className="first_outer_cirlcle"
          />

          {/* Orbit Container */}
          <div
            className="orbit_motion_container"
            ref={orbitRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {logoData?.map((item, index) => {
              const total = logoData.length;
              const angle = (index / total) * 360;
              return (
                <div
                  className="icon_wrapper"
                  key={item.id || index}
                  style={{
                    "--angle": `${angle}deg`,
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title || "logo"}
                    className="icon icon_img"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularAnimation;
