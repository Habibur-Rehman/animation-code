import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./mangoJuiceComp.scss";

// register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

const MangoJuiceComp = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const totalFrames = 192; // update if number of frames changes
    const framePath = (i) =>
      `/mango-juice/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

    // preload frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = framePath(i);
    }

    const obj = { frame: 1 };

    const tween = gsap.to(obj, {
      frame: totalFrames,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalFrames * 5}%`, // long scroll for smooth animation
        scrub: true,
        pin: true,
        // markers: true, 
      },
      onUpdate: () => {
        if (imgRef.current) {
          imgRef.current.src = framePath(obj.frame);
        }
      },
    });

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="mango-section">
      <div className="frame-holder">
        <img
          ref={imgRef}
          src="/mango-juice/ezgif-frame-001.jpg"
          alt="mango animation frame"
        />
      </div>
    </section>
  );
};

export default MangoJuiceComp;
