"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutAnimation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      const wrapper = section.querySelector(".content-wrapper");
      const helpers = section.querySelectorAll(".helpers__item");
      const contents = section.querySelectorAll(".about-content");

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: helpers[0],
          endTrigger: helpers[1],
          start: "50% bottom",
          end: "70% top",
          scrub: true,
        },
      });

      contents.forEach((item) => {
        const text = item.querySelector(".about-content__text");

        const split = new SplitText(text, {
          type: "words,chars",
          wordsClass: "split-word",
          charsClass: "split-char",
        });

        gsap.set(split.words, {
          perspective: 1000,
        });

        const wordTl = gsap.timeline();

        split.words.forEach((word) => {
          const chars = word.querySelectorAll(".split-char");

          const charsTl = gsap.timeline();

          charsTl
            .fromTo(
              chars,
              {
                opacity: 0,
                rotationY: 90,
                transformOrigin: "50% 50% -30",
                willChange: "transform",
              },
              {
                opacity: 1,
                rotationY: 0,
                duration: 0.72,
                ease: "expo.out",
                stagger: {
                  each: 0.04,
                  from: "end",
                },
              },
            )
            .to(chars, {
              delay: 2.4,
              opacity: 0,
              rotationY: 90,
              duration: 0.72,
              ease: "expo.out",
              stagger: {
                each: 0.04,
                from: "end",
              },
            });

          wordTl.add(charsTl, `+=${Math.random() * 0.5}`);
        });

        masterTl.add(wordTl);
      });

      gsap.to(wrapper, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: helpers[1],
          start: "bottom bottom",
          end: "50% top",
          scrub: true,
        },
      });

      gsap.from(wrapper, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: helpers[0],
          start: "50% bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-about" ref={sectionRef}>
      <div className="about-sticky">
        <h2 className="content-wrapper">
          <div className="about-content">
            <div className="about-content__text">
              WE DESIGN BESPOKE SOLUTIONS <br />
              FOR ARCHITECTURE AND INTERIOR DESIGN
            </div>
          </div>

          <div className="about-content">
            <div className="about-content__text">
              WE STRIVE FOR PERFECTION <br />
              IN EVERY DETAIL
            </div>
          </div>
        </h2>
      </div>

      <div className="helpers">
        <div className="helpers__item"></div>
        <div className="helpers__item"></div>
      </div>
    </section>
  );
};

export default AboutAnimation;