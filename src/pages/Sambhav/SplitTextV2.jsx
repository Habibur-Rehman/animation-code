import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const SplitTextAboutV2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".about-content");

      texts.forEach((text) => {
        const split = new SplitText(text, {
          type: "words,chars",
          charsClass: "split-char",
        });

        gsap.fromTo(
          split.chars,
          {
            opacity: 0,
            rotationY: 90,
          },
          {
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "expo.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-about" ref={sectionRef}>
      <div className="content-wrapper">
        <h2 className="about-content">
          Boutique developers, crafting residences FOR A MODERN LIVING.
        </h2>
      </div>
    </section>
  );
};

export default SplitTextAboutV2;
