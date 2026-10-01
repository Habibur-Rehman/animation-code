import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./circularAnimationV2.scss";
import { logo01Togglehead, logo02Togglehead } from "../../source";
import { main } from "@popperjs/core";

export const logoData = [
  { id: 1, img: logo01Togglehead, title: "Accessibility" },
  { id: 2, img: logo02Togglehead, title: "Distribution and Logistics" },
  { id: 3, img: logo01Togglehead, title: "Value additions" },
  { id: 4, img: logo02Togglehead, title: "A range of clients" },
  {
    id: 5,
    img: logo01Togglehead,
    title: "Varying Machine Capacities and In-House Functions",
  },
  { id: 6, img: logo02Togglehead, title: "Automation" },
  { id: 7, img: logo01Togglehead, title: "In-house maintenance team" },
];

// radius is in em. offset is the start angle in degrees (0 = top).
// logoOffset shifts which logos each orbit starts with.
const orbits = [
  {
    id: "outer",
    radius: 50.78125,
    count: 6,
    offset: 0,
    logoOffset: 0,
    reverse: false,
    duration: 60,
  },
  {
    id: "middle",
    radius: 37.8,
    count: 6,
    offset: 30,
    logoOffset: 2,
    reverse: true,
    duration: 50,
  },
  {
    id: "inner",
    radius: 21.9,
    count: 6,
    offset: 0,
    logoOffset: 4,
    reverse: false,
    duration: 40,
  },
];

const CircularAnimationV2 = () => {
  const containerRef = useRef(null);
  const tweensRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tweens = [];

      container.querySelectorAll(".orbit_motion_container").forEach((orbit) => {
        const reverse = orbit.dataset.reverse === "true";
        const duration = Number(orbit.dataset.duration);

        tweens.push(
          // rotate the whole orbit
          gsap.to(orbit, {
            rotation: reverse ? -360 : 360,
            duration,
            ease: "none",
            repeat: -1,
          }),
          // counter-rotate logos so they stay upright
          gsap.to(orbit.querySelectorAll(".icon_img"), {
            rotation: reverse ? 360 : -360,
            duration,
            ease: "none",
            repeat: -1,
          })
        );
      });

      tweensRef.current = tweens;
    }, container);

    return () => ctx.revert();
  }, []);

  const pauseAll = () => tweensRef.current.forEach((t) => t.pause());
  const playAll = () => tweensRef.current.forEach((t) => t.play());

  return (
    <main className="orbit_mainV2">
      <section className="orbit_sec1" ref={containerRef}>
        <div className="luxury_orbit">
          <div
            className="circle_wrapper"
            onMouseEnter={pauseAll}
            onMouseLeave={playAll}
          >
            {orbits.map((orbit) => (
              <div
                className="orbit"
                key={orbit.id}
                style={{ "--orbit-radius": `${orbit.radius}em` }}
              >
                {/* Orbit ring */}
                <div className="orbit_ring" />

                {/* Rotating logos */}
                <div
                  className="orbit_motion_container"
                  data-reverse={orbit.reverse}
                  data-duration={orbit.duration}
                >
                  {Array.from({ length: orbit.count }).map((_, index) => {
                    const item =
                      logoData[(index + orbit.logoOffset) % logoData.length];
                    const angle = orbit.offset + (index / orbit.count) * 360;

                    return (
                      <div
                        className="icon_wrapper"
                        key={`${orbit.id}-${index}`}
                        style={{ "--angle": `${angle}deg` }}
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CircularAnimationV2;
