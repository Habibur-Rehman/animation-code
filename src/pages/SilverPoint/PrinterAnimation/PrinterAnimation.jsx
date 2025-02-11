import { useRef } from "react";
import "./printerAnimation.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { animateCircle, printer } from "../../../source";
gsap.registerPlugin(ScrollTrigger);

const PrinterAnimation = () => {
  const circleRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: circleRef.current,
  //       start: "top 40%",
  //       end: "bottom 30%",
  //       scrub: 1.5,
  //       // markers: true, // Enable this for debugging
  //       pin: ".testing_sec1",
  //     },
  //   });

  //   // Step 1: Clip-path reveal first
  //   tl.fromTo(
  //     circleRef.current,
  //     {
  //       clipPath: "inset(0% 0% 80% 0%)",
  //       scaleX: 0.3,
  //       scaleY: 0.6,
  //       rotateX: 60,
  //       opacity: 0,
  //       transformPerspective: 800,
  //     }, // Initially hidden
  //     {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       // rotateX: 60,
  //       // scaleX: 0.5,
  //       // scaleY: 0.7,
  //       opacity: 1,
  //       duration: 3,
  //       ease: "power1.out",
  //     }
  //   );

  //   // Step 2: RotateX to 0 AFTER clipPath animation completes
  //   tl.to(
  //     circleRef.current,
  //     { rotateX: 0, scaleX: 1, scaleY: 1, ease: "power2.inOut", duration: 10 }
  //     // "+=0.5" // Small delay after clipPath finishes
  //     // document.querySelector(".printer_row").style.display = "none"
  //   );
  //   // tl.addPause();

  //   // Step 3: Hide `sticky_circle` & Move `absolute_img` to `col-md-6`
  //   tl.to(".sticky_circle", {
  //     opacity: 0,
  //     duration: 1.5,
  //     ease: "power2.inOut",
  //     onComplete: () => {
  //       document.querySelector(".sticky_circle").style.display = "none";
  //       // document.querySelector(".printer_row").style.display = "flex";
  //       document
  //         .querySelector(".left_box")
  //         .appendChild(document.querySelector(".absolute_img"));
  //       gsap.set(".absolute_img", {
  //         position: "relative",
  //         // scaleX:0.5,
  //       });
  //     },
  //   });

  //   tl.to(".sticky_circle", {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power2.inOut",
  //     onReverseComplete: () => {
  //       document.querySelector(".sticky_circle").style.display = "flex";
  //       document
  //         .querySelector(".sticky_circle_element")
  //         .appendChild(document.querySelector(".absolute_img"));
  //       gsap.set(".absolute_img", { position: "absolute" });
  //     },
  //   });

  //   // tl.to(".absolute_img", {
  //   //   x: 0,
  //   //   y: 50,
  //   //   scaleX: 1,
  //   //   duration: 2,
  //   //   scrub:2,
  //   //   ease: "power2.inOut",
  //   // });

  //   return () => tl.kill(); // Cleanup on unmount
  // }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top 40%",
        end: "bottom 30%",
        scrub: 1.5,
        // markers: true, // Enable this for debugging
        pin: ".testing_sec1",
      },
    });

    // Step 1: Clip-path reveal first
    tl.fromTo(
      circleRef.current,
      {
        clipPath: "inset(0% 0% 80% 0%)",
        scaleX: 0.3,
        scaleY: 0.6,
        rotateX: 60,
        opacity: 0,
        transformPerspective: 800,
      }, // Initially hidden
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: 3,
        ease: "power1.out",
      }
    );

    // Step 2: RotateX to 0 AFTER clipPath animation completes
    tl.to(circleRef.current, {
      rotateX: 0,
      scaleX: 1,
      scaleY: 1,
      ease: "power2.inOut",
      duration: 10,
    });

    // Step 3: Hide `testing_sec1` & Move `absolute_img` to `col-md-6`
    tl.to(".testing_sec1", {
      opacity: 0,
      onComplete: () => {
        document.querySelector(".printer").style.opacity = "0";
        document.querySelector(".printer_row").style.opacity = "1";
        gsap.set(".absolute_img", {
          maxWidth: "50%",
          height: "auto",
          duration: 5,
          top: "40em",
          left: "25%",
          translateX: "-50%",
          translateY: "-50%",
          scrub: 2,
          ease: "power4.inOut",
          // minHeight: "30em",
        });
      },
    });

    tl.to(".testing_sec1", {
      opacity: 1,
      onReverseComplete: () => {
        document.querySelector(".printer").style.opacity = "1";
        document.querySelector(".printer_row").style.opacity = "0";
        gsap.set(".absolute_img", {
          maxWidth: "100%",
          height: "100%",
          duration: 5,
          left: "initial",
          translateX: "0%",
          scrub: 2,
          ease: "power4.inOut",
        });
      },
    });

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className="testing_sec1">
        <h1>Printer Animation</h1>
        <div className="sticky_circle">
          <img src={printer} alt="printer" className="printer" />
          <div className="sticky_circle_element" ref={circleRef}>
            <img src={animateCircle} alt="" className="absolute_img" />
          </div>
          <div className="half_height_bg"></div>
        </div>

        <div className="row printer_row">
          <div className="col-md-6 left_box">
            <p>
              Our product portfolio encompasses a wide range of the latest and
              most advanced ophthalmic products, meticulously designed to cater
              to every aspect of eye care.
            </p>
            {/* <img src={animateCircle} alt="" className="col_img" /> */}
          </div>
          <div className="col-md-6">
            <p>
              Our product portfolio encompasses a wide range of the latest and
              most advanced ophthalmic products, meticulously designed to cater
              to every aspect of eye care.
            </p>
            <div style={{ height: "500px", backgroundColor: "#00000016" }}>
              text
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrinterAnimation;
