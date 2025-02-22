import { useEffect, useRef } from "react";
import "./homePage.scss";
import { Link } from "react-router-dom";
import { printedPage } from "../../source";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageSequence from "../../components/Gsap/ImageSequence/ImageSequence";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  // const containerRef = useRef();
  // const printImgRef = useRef();

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".home_sec1",
  //       start: "top top",
  //       end: "bottom 30%",
  //       scrub: 1.5,
  //       markers: true,
  //       pin: ".print_row",
  //     },
  //   });

  //   tl.fromTo(
  //     printImgRef.current,
  //     {
  //       scale: 0.4,
  //       // maxWidth: "500%",
  //       transformOrigin: "0 100%",
  //       duration: 1.5,
  //       ease: "power2.out",
  //       left: "0",
  //     },
  //     {
  //       // maxWidth: "100%",
  //       scale: 1,
  //       duration: 1.5,
  //       transformOrigin: "0 100%",
  //       left: "initial",
  //     }
  //   );

  //   return () => tl.kill(); // Cleanup on unmount
  // }, []);

  return (
    <>
      {/* <section className="home_sec1">
        <div className="my_container">
          <h1 className="section_title">
            One Of Asia's Most Awarded <br /> Printing Presses
          </h1>
          <div className="img_wrapper">
            <img
              ref={printImgRef}
              src={printedPage}
              width={1920}
              height={1080}
              alt="printed page"
              className="printed_page"
            />
          </div>
          <div className="row print_row">
            <div className="col-lg-6 print_col">
              <div className="print_box link_wrapper">
                <Link to="/" className="section_desc print_link">
                  Know More
                </Link>
              </div>
            </div>

            <div className="col-lg-6 print_col">
              <div className="print_box">
                <p className="section_desc">
                  Based in Mumbai, Silverpoint Press Private Limited (SPPL) is
                  one of India's leading commercial printing presses, offering
                  high-quality sheet Ted and Digital services for a wide range
                  or products. established over four decades ago. SPPLhas been
                  associated with some of india's most respectea companies,
                  Munti-National mrs and adverusing agencies as. well as
                  creative artists, photographers and designers
                </p>
              </div>
            </div>

            <div className="col-lg-6 print_col" ref={containerRef}>
              <div className="img_box">
              </div>
            </div>

            <div className="col-lg-6 print_col">
              <div className="content_wrapper">
                <h2 className="section_title">100</h2>
                <h3 className="section_title36">Regions of Operations</h3>
                <p className="section_desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneg
                  sodales ultrices mi, at hendrent turois interdum.n
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_sec2">
        <div className="my_container">
          <h2 className="section_title">Scroll to Top</h2>
        </div>
      </section> */}

      <section className="home_sec3"><ImageSequence /></section>
    </>
  );
};

export default HomePage;
