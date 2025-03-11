import { useLayoutEffect, useRef } from "react";
import "./horizontalScroll.scss"; // Import styles
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateCircle } from "../../../../source";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //   let sections = gsap.utils.toArray(".panel");
      let totalScroll = panelsRef.current.scrollWidth - window.innerWidth;

      gsap.to(panelsRef.current, {
        x: -totalScroll, // Move panels left
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // markers: true, 
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="horizontal_scroll_container">
      {/* Initial Vertical Section */}
      {/* <div className="firstContainer">
        <h1>Testing horizontal scrolling</h1>
        <h2>First Container</h2>
      </div> */}

      {/* Horizontal Scroll Section */}
      <div className="scroll-wrapper" ref={containerRef}>
        {/* First Blue Panel */}
        {/* <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div> */}

        {/* Horizontal Panels */}
        <div className="panels-container" ref={panelsRef}>
          <section className="panel">
            <div>
              <h1 className="title">Scroll Up or Down</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quo in quia aperiam deserunt incidunt vel perspiciatis omnis,
                cupiditate laborum alias error aspernatur, harum inventore ex
                sequi officia corrupti praesentium libero iste nam eaque
                assumenda optio reiciendis. Hic quisquam laborum facilis
              </p>
              <img src={animateCircle} alt="" />
            </div>
          </section>
          <section className="panel">
            <div>
              <img src={animateCircle} alt="" />
              <h1>test heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quo in quia aperiam deserunt incidunt vel perspiciatis omnis,
                cupiditate laborum alias error aspernatur, harum inventore ex
                sequi officia corrupti praesentium libero iste nam eaque
                assumenda optio reiciendis. Hic quisquam laborum facilis
              </p>
            </div>
          </section>
          <section className="panel">
            <div>
              <h1>test heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quo in quia aperiam deserunt incidunt vel perspiciatis omnis,
                cupiditate laborum alias error aspernatur, harum inventore ex
                sequi officia corrupti praesentium libero iste nam eaque
                assumenda optio reiciendis. Hic quisquam laborum facilis
              </p>
              <img src={animateCircle} alt="" />
            </div>
          </section>
          <section className="panel">
            <div>
              <img src={animateCircle} alt="" />
              <h1>test heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quo in quia aperiam deserunt incidunt vel perspiciatis omnis,
                cupiditate laborum alias error aspernatur, harum inventore ex
                sequi officia corrupti praesentium libero iste nam eaque
                assumenda optio reiciendis. Hic quisquam laborum facilis
              </p>
            </div>
          </section>
          <section className="panel red">ONE</section>
          <section className="panel orange">TWO</section>
          <section className="panel purple">THREE</section>
        </div>
      </div>

      {/* Final Vertical Section */}
      <div className="lastContainer">Last Container</div>
    </div>
  );
};

export default HorizontalScroll;
