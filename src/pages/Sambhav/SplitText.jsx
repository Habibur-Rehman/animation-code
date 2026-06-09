import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // Requires Club GSAP

gsap.registerPlugin(ScrollTrigger, SplitText);

const SplitTextAbout = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Split the text into characters and words
      const childSplit = new SplitText(textRefs.current, {
        type: "chars, words",
        charsClass: "char-unit",
      });

      // 2. Set perspective on the words to enable 3D rotation
      gsap.set(childSplit.words, { perspective: 1000 });

      // 3. Create the ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          // endTrigger: ".about-content",
          // trigger: ".helpers__item:first-child",
          // endTrigger: ".helpers__item:last-child",
          start: "-30% top",
          // end: "bottom bottom",
          end: "+=50%",
          // start: "50% bottom",
          // end: "100% 50%",
          // start: "50% bottom",
          // end: "70% top",
          scrub: true,
          // markers: true,
        },
      });

      // 4. Animate every word at the same time (position parameter: 0)
      childSplit.words.forEach((word) => {
        const chars = word.querySelectorAll(".char-unit");

        tl.fromTo(
          chars,
          {
            opacity: 0,
            // rotationY: 90,
            z: -100,
          },
          {
            opacity: 1,
            // rotationY: 0,
            z: 0,
            duration: 1,
            ease: "power2.out",
            // This staggers letters within the word
            stagger: { each: 0.05, from: "end" },
            // stagger: { each: 0.05, from: "start" },
          },
          0, // <--- This '0' makes all word animations start at the same time
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="about-content"
      // style={{ background: "#0a0a0a", color: "white" }}
    >
      <div
        className="sticky-wrapper"
        // style={{
        //   height: "100vh",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   position: "sticky",
        //   top: 0,
        // }}
      >
        <div
          ref={containerRef}
          className="text_wrapper"
          // style={{ textAlign: "center", maxWidth: "900px" }}
        >
          <h2 ref={(el) => (textRefs.current[0] = el)} className="split-char">
            Boutique <span style={{ color: "#950606" }}>developers</span>,
            crafting residences FOR A MODERN LIVING.
          </h2>
          {/* <h2 ref={el => textRefs.current[1] = el} className="split-char">
            FOR MODERN ARCHITECTURE
          </h2> */}
        </div>
      </div>

      {/* Scroll area */}
      {/* <div className="helpers">
        <div className="helpers__item" style={{ height: "100vh" }}></div>
        <div className="helpers__item" style={{ height: "100vh" }}></div>
      </div> */}
    </div>
  );
};

export default SplitTextAbout;
