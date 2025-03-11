import { useLayoutEffect, useRef, useState } from "react";
import "./scrollNumber.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateCircle } from "../../../../source";

gsap.registerPlugin(ScrollTrigger);

const ScrollNumber = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const totalPanels = 5;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let totalScroll = panelsRef.current.scrollWidth - window.innerWidth;

      gsap.to(panelsRef.current, {
        x: -totalScroll, // Move panels left
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          markers: true, // Remove in production
          onUpdate: (self) => {
            let progressPercent = self.progress;
            setProgress(progressPercent);
          },
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <>
      <div className="scroll_numb_container">
      
        <div className="scroll-wrapper" ref={containerRef}>
          {/* Fixed Progress Indicator */}
          <div className="progress-indicator">
            <svg className="progress-ring" width="50" height="50">
              <circle
                className="progress-background"
                cx="25"
                cy="25"
                r="22"
                strokeWidth="3"
              />
              <circle
                className="progress-circle"
                cx="25"
                cy="25"
                r="22"
                strokeWidth="3"
                strokeDasharray="138"
                strokeDashoffset={138 - progress * 138}
              />
            </svg>
            <span className="progress-text">
              {/* {Math.round(progress * totalPanels) + 1} */}
              {Math.min(Math.round(progress * (totalPanels - 1)) + 1, totalPanels)}
            </span>
          </div>
          {/* Horizontal Panels Start */}
          <div className="panels-container" ref={panelsRef}>
            <section className="panel">
              <div className="content_wrapper">
                <h1 className="title">Heading 1</h1>
                <img src={animateCircle} alt="" />
              </div>
            </section>
            <section className="panel">
              <div className="content_wrapper">
                <h1 className="title">Heading 2</h1>
                <img src={animateCircle} alt="" />
              </div>
            </section>
            <section className="panel">
              <div className="content_wrapper">
                <h1 className="title">Heading 3</h1>
                <img src={animateCircle} alt="" />
              </div>
            </section>
            <section className="panel">
              <div className="content_wrapper">
                <h1 className="title">Heading 4</h1>
                <img src={animateCircle} alt="" />
              </div>
            </section>
            <section className="panel">
              <div className="content_wrapper">
                <h1 className="title">Heading 5</h1>
                <img src={animateCircle} alt="" />
              </div>
            </section>
          </div>
          {/* Horizontal Panels End */}
        </div>
      </div>
    </>
  );
};

export default ScrollNumber;
