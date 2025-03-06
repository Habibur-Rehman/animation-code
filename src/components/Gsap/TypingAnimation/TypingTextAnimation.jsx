import React, { useState, useEffect, useRef } from "react";
import "./typingTextAnimation.scss";
import gsap from "gsap";

const TypingTextAnimation = ({
  texts = [],
  typingSpeed = 2,
  deletingSpeed = 2,
  delayBeforeDelete = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!texts.length || !wrapperRef.current) return;

    const animateTyping = () => {
      const tl = gsap.timeline();

      // Shrink width (Deleting)
      tl.to(wrapperRef.current, {
        width: 0,
        duration: deletingSpeed,
        ease: "power2.inOut",
      })
        .call(() => {
          setActiveIndex((prev) => (prev + 1) % texts.length);
        })
        .set(wrapperRef.current, { width: 0 }) // Reset width before typing
        .to(wrapperRef.current, {
          width: "100%",
          maxWidth: "fit-content",
          duration: typingSpeed,
          ease: "power2.inOut",
        });
    };

    // Run animation at intervals
    const interval = setInterval(
      animateTyping,
      (typingSpeed + deletingSpeed + delayBeforeDelete) * 1000
    );
    return () => clearInterval(interval);
  }, [activeIndex, texts]);

  return (
    <div className="type_wrapper">
      <div ref={wrapperRef} className="typing_text">
        {texts[activeIndex]}
      </div>
    </div>
  );
};

export default TypingTextAnimation;
