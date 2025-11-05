import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import "./tractorAnim.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  tractor01Img,
  tractor02Img,
  tractor03Img,
  tractor04Img,
  tractor05Img,
  tractor06Img,
  tractorBgImg,
  tractorBgVideo,
  tractorDetailsImg,
  tractorDetailsMbImg,
} from "../../../source";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);

const Tractor = () => {
  const { scene } = useGLTF("/Pfeda/tractor.glb");
  const tractorRef = useRef();
  const { width } = useWindowSize();

  // Set initial rotation like in your reference image
  const initialRotation = [0, 0, 0]; // adjust as needed

  useLayoutEffect(() => {
    // if (tractorRef.current) {
    if (!tractorRef.current) return;

    // kill any existing triggers before re-initializing
    // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const ctx = gsap.context(() => {
      // Intro title animation
      gsap.fromTo(
        ".title",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 2, ease: "power1.out" }
      );
      // gsap.fromTo(
      //   "#tractor_section",
      //   { x: "100%", duration: 2 },
      //   { x: "0%", duration: 2, ease: "power1.out" }
      // );

      // main scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          // trigger: "#tractor_section",
          trigger: ".tract_sec",
          pin: true,
          start: "top top",
          end: "+=300%",
          // start: "-5% top",
          // end: "200% 70%",
          scrub: 1,
          pinSpacer: false,
          invalidateOnRefresh: true,
          // anticipatePin: 1,
          //   fastScrollEnd: 3000,
          //   markers: true,
        },
      });
      tl.to(
        tractorRef.current.rotation,
        {
          y: Math.PI / 3,
        },
        "same"
      );
      tl.fromTo(
        ".title",
        {
          translateY: 0,
          duration: 1,
        },
        {
          translateY: "-100%",
          duration: 1,
        },
        "same"
      );
      tl.fromTo(
        ".details_container",
        {
          scale: 0,
          // opacity: 0,
          duration: 1,
          bottom: "50%",
          transformOrigin: "bottom bottom",
        },
        {
          scale: 1,
          // opacity: 1,
          duration: 1,
          // bottom: "115%",
          // bottom: `${width > 1024 ? "115%" : "110%"}`,
          bottom: `${width > 1024 ? "55%" : "70%"}`,
          // transformOrigin: "50% 50%",
        },
        "same"
      );
      tl.fromTo(
        ".details_container",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "-=0.6"
      );
      tl.fromTo(
        ".content_wrapper",
        {
          translateY: "100%",
          // translateX: `${width > 991 ? 0 : "-50%"}`,
          opacity: 0,
          duration: 1,
          bottom: 0,
          // transformOrigin: "bottom bottom",
        },
        {
          translateY: "0%",
          // translateY: `${width > 991 ? "0%" : "-50%"}`,
          // translateX: `${width > 991 ? 0 : "-50%"}`,
          opacity: 1,
          duration: 1,
          // bottom: "14.5%",
        },
        `${width > 991 ? "-=0.61" : "=-0.15"}`
      );
    });
    // }

    return () => ctx.revert();
  }, [width]);

  const scaleValue = width > 1024 ? 95 : width > 767 ? 87 : 70;

  return (
    <primitive
      ref={tractorRef}
      object={scene}
      scale={scaleValue}
      rotation={initialRotation}
    />
  );
};

export default function TractorAnim() {
  const { width } = useWindowSize();

  return (
    <>
      {/* <div class="loader">
        <p>Loading... Please wait</p>
        <div class="progress" style={{transform: "scaleX(1)"}}></div>
      </div> */}

      <section className="tract_sec">
        <div className="tract_container">
          <h1 className="title">
            Innovating Automotive <br /> & Furniture
          </h1>
          {/* <div className="bg_img_wrapper">
            <img src={tractorBgImg} className="tractor_bg" alt="" />
          </div> */}
          <div className="tractor_vid_wrapper">
            <video
              width="100%"
              height="100%"
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
              className="tractor_vid"
            >
              <source src={tractorBgVideo} type="video/mp4" />
            </video>
          </div>

          {/* <div className="my_container"> */}
          <div>
            <div id="tractor_section">
              <Canvas
                camera={{ position: [5, 2, 0] }}
                className="tractor_canvas"
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 3, 3]} />
                <Suspense fallback={null}>
                  <Tractor />
                </Suspense>
              </Canvas>

              {/* <div className="details_container">
                <div className="details_wrapper">
                  <div className="data_wrapper">
                    <img className="tract_1" src={tractor01Img} alt="1" />
                  </div>
                  <div className="data_wrapper">
                    <img className="tract_2" src={tractor02Img} alt="2" />
                  </div>
                  <div className="data_wrapper">
                    <img className="tract_3" src={tractor03Img} alt="3" />
                  </div>
                  <div className="data_wrapper">
                    <img className="tract_4" src={tractor04Img} alt="4" />
                  </div>
                  <div className="data_wrapper">
                    <img className="tract_5" src={tractor05Img} alt="5" />
                  </div>
                  <div className="data_wrapper">
                    <img className="tract_6" src={tractor06Img} alt="6" />
                  </div>
                </div>
              </div> */}

              <div className="details_container">
                <div className="data_wrapper">
                  <img
                    src={width > 991 ? tractorDetailsImg : tractorDetailsMbImg}
                    alt="tractor details"
                    className="tractor_details"
                  />
                </div>
              </div>
            </div>

            <div className="content_wrapper">
              <h3 className="section_title">ABOUT US</h3>
              <h2 className="section_subTitle">Transforming With Innovation</h2>
              <p className="section_desc">
                PFEDA is a leading global manufacturer of Polyurethane based
                products and solutions for the automotive industry and other
                fields of applications with a portfolio that covers a wide range
                of construction Equipments, Tractors, Trucks & Buses
              </p>
              <button className="section_btn">EXPLORE MORE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="tractor_sec1">
        <h1>Section 1</h1>
      </section>
      {/* <div style={{ height: "100vh" }}>section 2</div> */}
    </>
  );
}
