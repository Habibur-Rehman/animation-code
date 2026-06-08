import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./flipCards.scss";

gsap.registerPlugin(ScrollTrigger);

const FlipCardV1 = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      // Initial stacking (perfect overlap)
      gsap.set(cards, {
        x: 0,
        rotateY: 0,
        z: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 👉 STEP 1: Spread like your reference
      tl.to(cards, {
        x: (i) => (i - 1) * 320,
        rotate: (i) => (i - 1) * 5, // slight tilt
        duration: 1,
        ease: "power2.inOut",
      });

      // 👉 STEP 2: Flip cards (MAIN EFFECT)
      tl.to(
        cards,
        {
          rotateY: (i) => (i === 1 ? 0 : i === 0 ? -180 : 180),
          z: 150,
          duration: 1,
          ease: "power3.inOut",
        },
        "+=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="split-section" ref={sectionRef}>
      <h2 className="title">Three pillars with one purpose</h2>

      <div className="cards-wrapper">
        {[0, 1, 2].map((_, i) => (
          <div className="card" key={i}>
            <div className="inner">
              <img src="/image.jpg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlipCardV1;