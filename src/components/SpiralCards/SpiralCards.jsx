import React, { useEffect, useRef } from "react";
import "./spiralCards.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SpiralCards = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const total = cards.length;
      const radius = 180;

      // ✅ Set wrapper properly
      gsap.set(wrapperRef.current, {
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
        rotateX: 20, // 🔥 adds depth illusion
      });

      // ✅ Position cards (FIXED Z ISSUE)
      cards.forEach((card, i) => {
        const angle = (i / total) * Math.PI * 4;

        gsap.set(card, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          z: -i * 150, // 🔥 reduced depth (IMPORTANT)
          rotationY: angle * (180 / Math.PI),
          force3D: true,
        });
      });

      // ✅ Animate wrapper
      gsap.to(wrapperRef.current, {
        rotateY: 360,
        z: 300, // 🔥 moves camera through spiral
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // 🔥 cleanup (VERY important)
  }, []);

  return (
    <section className="spiral-section" ref={containerRef}>
      <div className="spiral-wrapper" ref={wrapperRef}>
        {[...Array(10)].map((_, i) => (
          <div
            className="card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpiralCards;
