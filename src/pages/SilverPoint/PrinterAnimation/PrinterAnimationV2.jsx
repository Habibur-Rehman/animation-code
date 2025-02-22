import { useRef } from "react";
import "./printerAnimationV2.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { animateCircle, printer } from "../../../source";
gsap.registerPlugin(ScrollTrigger);

const PrinterAnimationV2 = () => {
  const circleRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: circleRef.current,
  //       start: "top 40%",
  //       end: "bottom 30%",
  //       scrub: 1.5,
  //       // markers: true, // Enable this for debugging
  //       pin: ".testing_sec2",
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
        pin: ".testing_sec2",
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
        ease: "power2.out",
      }
    );

    // Step 2: RotateX to 0 AFTER clipPath animation completes
    tl.to(circleRef.current, {
      rotateX: 0,
      scaleX: 1,
      scaleY: 1,
      ease: "power2.inOut",
      duration: 3,
    });

    // Step 3: Hide `testing_sec2` & Move `absolute_img` to `col-md-6`
    tl.to(".testing_sec2", {
      opacity: 0,
      onComplete: () => {
        document.querySelector(".printer").style.opacity = "0";
        document.querySelector(".printer_row").style.opacity = "1";
        // gsap.fromTo(
        //   ".absolute_img",
        //   {
        //     scale: 1, // Initial scale
        //     height: "100%", // Start full height
        //     opacity: 1, // Start fully visible
        //   },
        //   {
        //     scale: 0.5, // Shrinks to 50%
        //     height: "auto",
        //     opacity: 1, // Ensures it stays visible
        //     duration: 3,
        //     transformOrigin: "0 50%",
        //     ease: "power2.inOut",
        //     // scrub: 2, // Smooth scroll effect
        //   }
        // );

        // setTimeout(() => {
          
          gsap.to(".absolute_img", {
            scale: 0.5, // Shrinks to 50%
            height: "auto",
            // width: "120%",
            opacity: 1,
            duration: 1,
            transformOrigin: "0 100%",
            ease: "power2.inOut",
            // scrollTrigger: {
            //   trigger: circleRef.current,
            //   start: "top 40%",
            //   end: "bottom 30%",
            //   // start: "top 40%",
            //   // end: "bottom 30%",
            //   scrub: 1.5,
            //   // pin:".printer_row",
            //   // pin: ".testing_sec2",
            //   // anticipatePin: 1, // Smooth pin transition
            // },
          });
        // }, 100); 
      },
    });

    tl.to(".testing_sec2", {
      opacity: 1,
      onReverseComplete: () => {
        document.querySelector(".printer").style.opacity = "1";
        document.querySelector(".printer_row").style.opacity = "0";
        // gsap.to(".printer", {
        //   opacity: 1,
        //   duration: 5,
        //   ease: "power2.inOut",
        // });

        // gsap.fromTo(
        //   ".absolute_img",
        //   {
        //     scale: 0.5, // Shrinks to 50%
        //     height: "auto",
        //     opacity: 1, // Ensures it stays visible
        //     duration: 5,
        //     transformOrigin: "0 50%",
        //     ease: "power4.inOut",
        //     scrub: 2, // Smooth scroll effect
        //   },
        //   {
        //     scale: 1, // Initial scale
        //     height: "100%", // Start full height
        //     opacity: 1, // Start fully visible
        //     transformOrigin: "initial",
        //   }
        // );
        
        // gsap.to(".absolute_img", {
        //   scale: 1, // Expand back to original size
        //   height: "100%",
        //   opacity: 1,
        //   duration: 3,
        //   transformOrigin: "0 100%",
        //   ease: "power2.inOut",
        // });
        gsap.to(".absolute_img", {
          scale: 1, // Restore to full size
          // height: "100%",
          // width: "110%",
          opacity: 1,
          duration: 1,
          transformOrigin: "0 100%",
          ease: "power2.inOut",
          // scrollTrigger: {
          //   trigger: circleRef.current,
          //   start: "bottom 30%",
          //   end: "top 40%",
          //   scrub: 1.5,
          // },
        });
      },
    });

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className="testing_sec2">
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

export default PrinterAnimationV2;
