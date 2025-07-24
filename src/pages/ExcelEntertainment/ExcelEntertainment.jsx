import { useEffect, useLayoutEffect, useRef } from "react";
import "./excelEntertainment.scss";
import {
  centerBottom,
  centerMiddle,
  centerTop,
  leftBottom,
  leftMiddle,
  leftTop,
  natureImg,
  natureImg02,
  rightBottom,
  rightMiddle,
  rightTop,
} from "../../source";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Cards from "./Sections/Card";
import ImageZoomAnimationa from "./Sections/ImageZoomAnimationa";

gsap.registerPlugin(ScrollTrigger);

const ExcelEntertainment = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
          end: "bottom center",
          // endTrigger: ".product_container",
          // end: "top top",
          scrub: 1,
          // markers: true,
        },
      });

      // Circle clip
      tl.fromTo(
        sectionRef.current,
        {
          clipPath: "circle(0% at 50% 50%)",
          //   scale: 0,
        },
        {
          clipPath: "circle(75% at 50% 50%)",
          //   scale: 1,
          ease: "power2.out",
        }
        // "zoom"
      );

      // Move left and right column images
      tl.fromTo(
        ".moving_img",
        {
          y: "0em",
        },
        {
          // y: "3.75em",
          y: "7.5em",
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 25%",
            end: "bottom center",
            scrub: 1,
            // markers: true,
          },
        }
        // "imgchanges"
      );

      tl.fromTo(
        sectionRef.current,
        {
          scale: 1,
          transformOrigin: "50% 50%",
          // duration: 5,
        },
        {
          scale: 3.2,
          transformOrigin: "50% 50%",
          duration: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            end: "50% 50%",
            scrub: 1,
            markers: true,
          },
        }
        // "imgchanges"
      );

      tl.fromTo(
        sectionRef.current,
        {
          // scale: 1,
          duration: 5,
        },
        {
          //   opacity: 0.8,
          // scale: 6,
          ease: "power2.out",
          duration: 5,
          scrollTrigger: {
            // trigger: sectionRef.current,
            trigger: ".fixed_img",
            // start: "top top",
            // endTrigger: ".moving_img",
            // end: "bottom bottom",
              start: "top 10%",
            end: "50% 50%",
            scrub: 1,
            // markers: true,
            // pin: sectionRef.current,
            pin: ".fixed_img",
            pinSpacing: false,
          },
        }
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 25%",
  //         end: "bottom center",
  //         // endTrigger: ".product_container",
  //         // end: "top top",
  //         scrub: 1,
  //         //   markers: true,
  //       },
  //     });

  //     tl.fromTo(
  //       sectionRef.current,
  //       {
  //         clipPath: "circle(0% at 50% 50%)",
  //       },
  //       {
  //         clipPath: "circle(75% at 50% 50%)",
  //         ease: "power2.out",
  //       }
  //     );

  //     tl.to(
  //       ".moving_img",
  //       {
  //         y: "3.75em",
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 25%",
  //           end: "bottom center",
  //           scrub: 1,
  //           // markers: true,
  //         },
  //       }
  //       // "imgchanges"
  //     );

  //     tl.fromTo(
  //       sectionRef.current,
  //       { scale: 1 },
  //       {
  //         //   opacity: 0.8,
  //         scale: 6,
  //         ease: "power2.out",
  //         duration: 5,
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: 1,
  //           // markers: true,
  //           pin: sectionRef.current,
  //           pinSpacing: false,
  //         },
  //       }
  //     );
  //     tl.fromTo(
  //       ".center_img",
  //       { y: "0" },
  //       {
  //         y: "-15vh",
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: 1,
  //         },
  //       }
  //     );
  //     tl.fromTo(
  //       ".fixed_img",
  //       { y: "0" },
  //       {
  //         y: "0",
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: ".fixed_img",
  //           // start: "top top",
  //           start: "top 35%",
  //           end: "bottom bottom",
  //           scrub: 1,
  //           pin: ".fixed_img",
  //           pinSpacing: false,
  //           // markers: true,
  //         },
  //       }
  //     );
  //   });

  //   return () => {
  //     ctx.revert();
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Control the duration of the scroll
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true,
      smoothWheel: true,
    });

    // Use requestAnimationFrame to continuously update the scroll
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <section className="excel_ent_sec1">
        <div className="my_container">
          <h1>Ground Zero</h1>
          <div className="cards_wrapper">
            <Cards />
          </div>
        </div>
      </section>

      <section className="excel_ent_sec2">
        <div className="circle_wrapper">
          <div className="circle-module" ref={sectionRef}>
            <div className="grid_row">
              <img src={natureImg02} alt="" className="moving_img" />
              <img src={natureImg} alt="" className="center_img" />
              <img src={natureImg02} alt="" className="moving_img" />

              <img src={natureImg} alt="" className="moving_img" />
              <img src={centerMiddle} alt="" className="fixed_img center_img" />
              <img src={natureImg} alt="" className="moving_img" />

              <img src={natureImg02} alt="" className="moving_img" />
              <img src={natureImg} alt="" className="center_img" />
              <img src={natureImg02} alt="" className="moving_img" />
            </div>
          </div>
        </div>
      </section>

      {/* <ImageZoomAnimationa /> */}
    </>
  );
};

export default ExcelEntertainment;
