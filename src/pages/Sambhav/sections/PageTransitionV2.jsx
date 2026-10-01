import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PageTransitionV2 = ({ children }) => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    const tl = gsap.timeline();

    gsap.set(page, {
      xPercent: 105,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
    });

    tl.to(page, {
      xPercent: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });

    tl.call(() => {
      gsap.set(page, {
        clearProps: "all",
      });
    });

    return () => {
      gsap.killTweensOf(page);
    };
  }, []);

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransitionV2;