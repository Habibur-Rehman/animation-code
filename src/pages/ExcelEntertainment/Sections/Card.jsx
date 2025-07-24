import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { centerCard } from "../../../source";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards_container",
          start: "25% 40%",
          end: "bottom center",
          scrub: 1,
          pin: true,
        //   markers: true,
        },
      });

      tl.fromTo(
        ".img_wrapper01",
        {
          x: "50%",
          rotateZ: 10,
          zIndex: 2,
        },
        {
          x: "0%",
          rotateZ: -10,
          ease: "power1.inOut",
          duration: 2,
          scrub: 0.1,
        },
        "move"
      );
      tl.fromTo(
        ".img_wrapper02",
        {
          y: "0%",
          zIndex: 1,
        },
        {
          y: "-25%",
          ease: "power1.inOut",
          duration: 1.5,
          scrub: 0.1,
        },
        "move"
      );

      tl.fromTo(
        ".img_wrapper03",
        {
          x: "-50%",
          rotateZ: -10,
          zIndex: 3,
        },
        {
          x: "0%",
          rotateZ: 10,
          ease: "power1.inOut",
          duration: 1.2,
          scrub: 0.1,
        },
        "move"
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section>
      <div className="cards_container">
        <div className="img_wrapper img_wrapper01">
          <img src={centerCard} alt="" className="card_img card01_img" />
        </div>
        <div className="img_wrapper img_wrapper02">
          <img src={centerCard} alt="" className="card_img card02_img" />
        </div>
        <div className="img_wrapper img_wrapper03">
          <img src={centerCard} alt="" className="card_img card02_img" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
