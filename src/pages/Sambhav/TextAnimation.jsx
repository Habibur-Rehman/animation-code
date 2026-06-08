"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);

const WeDoSection = () => {
  const sectionRef = useRef(null);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
          },
        })
        .to(
          ".we_text",
          {
            x: windowWidth > 767 ? "-16vw" : "-100vw",
            ease: "none",
          },
          0,
        )
        .to(
          ".do_text",
          {
            x: windowWidth > 767 ?  "16vw" : "100vw",
            ease: "none",
          },
          0,
        )
        .to(
          ".center_block",
          {
            y: "50%",
            ease: "none",
          },
          0,
        )
        .fromTo(
          ".center_heading",
          {
            y: "420%",
            ease: "power2.out",
          },
          {
            y: "0%",
            stagger: 0.08,
            ease: "power2.out",
          },
          0,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wedo_section" ref={sectionRef}>
      <div className="top_block">
        <div className="side_text left_block">
          <h2 className="big_text we_text">LET'S</h2>
        </div>

        <div className="side_text right_block">
          <h2 className="big_text do_text">TALK</h2>
        </div>
      </div>

      <div className="center_block">
        <div className="center_text">
          <h3 className="center_heading">Got a</h3>
          <h3 className="center_heading">
            <span style={{ color: "#950606" }}>Project</span>?
          </h3>
          <h3 className="center_heading">
            <button>Get in Touch</button>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WeDoSection;
