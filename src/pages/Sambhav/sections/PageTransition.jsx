import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const page = pageRef.current;

    gsap.set(page, {
      yPercent: 100,
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100%",
      zIndex: 1000,
    });

    requestAnimationFrame(() => {
      gsap.to(page, {
        yPercent: 0,
        duration: 0.8,
        // ease: "power3.inOut",
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(page, {
            clearProps: "all",
          });
        },
      });
    });

    return () => gsap.killTweensOf(page);
  }, []);

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;
