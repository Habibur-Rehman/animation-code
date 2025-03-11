import { useLayoutEffect } from "react";
import "./mapScroll.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MapScroll = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".map-container",
        start: "top top",
        end: "+=300%",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        markers: true,
      },
    });

    // tl.to (".map-container",{backgroundColor: "rgb(32, 28, 71)", duration: 10});

    // Step 1 & Step 2: Fade in images inside map-screen-1 and THEN fade out map-screen-1
    tl.to(".map-screen-1 .map_image", { opacity: 1 })
      .to(".map-screen-1 .map_image.first-location", { opacity: 1 }, "-=0.5")
      .to(".map-screen-1", { opacity: 0 }, "-=0.5")
      .to(".map-screen-2 .map_image.second-map", { opacity: 1 }, "-=0.15")
   
      tl.to(".map-container", { backgroundColor: "rgb(15, 15, 35)", duration: 1 }, "-=0.5");

    // Step 3: Fade in images inside map-screen-2
    tl.to(".map-container", { backgroundColor: "rgb(32, 28, 71)", duration: 1 }, "-=0.5")
    .to(
      [
        ".map-screen-2 .second-location1",
        ".map-screen-2 .second-location2",
        ".map-screen-2 .second-location3",
        ".map-screen-2 .second-location4",
      ],
      { opacity: 1, stagger: 0.3, duration: 1 }
    );
    
    

    // Step 4: Fade out map-screen-2
    tl.to(".map-screen-2", { opacity: 0, duration: 1 });

    // Step 5: Fade in map-screen-3
    tl.to(".map-screen-3", { opacity: 1, duration: 1 });
  }, []);

  return (
    <>
      <div className="map-container">
        <div className="map_component">
          <div className="map-screen-1">
            <img
              src="../cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4b0e858579eefb13b_Map.png"
              loading="lazy"
              sizes="94vw"
              srcset="
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4b0e858579eefb13b_Map-p-500.png   500w,
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4b0e858579eefb13b_Map-p-800.png   800w,
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4b0e858579eefb13b_Map-p-1080.png 1080w,
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4b0e858579eefb13b_Map.png        1906w
                "
              alt="A black and white map of the world"
              className="map_image first-map"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/67120b7bd5eb1895e4b190f4_Map-location.svg"
              loading="lazy"
              alt=""
              className="map_image first-location hide-mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671231ff14877d33a5fe7346_map-mobile-location.svg"
              loading="lazy"
              alt=""
              className="map_image first-location mobile-portrait"
            />
          </div>
          <div className="map-screen-2">
            <img
              src="../cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4be284c7be1606533_Map2.png"
              loading="lazy"
              sizes="94vw"
              srcset="
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4be284c7be1606533_Map2-p-500.png   500w,
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4be284c7be1606533_Map2-p-800.png   800w,
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4be284c7be1606533_Map2-p-1080.png 1080w,
                  https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671225d4be284c7be1606533_Map2.png        1906w
                "
              alt="A blue dotted world map on a black background"
              className="map_image second-map"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/67122c25c64c3c8a29fe975b_Map-locations2-1.svg"
              loading="lazy"
              alt=""
              className="map_image second-location1 hide-mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/67122c25668d3a6c90fc9d6a_Map-locations2-2.svg"
              loading="lazy"
              alt=""
              className="map_image second-location2 hide-mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/67122c253619168acb291a00_Map-locations2-3.svg"
              loading="lazy"
              alt=""
              className="map_image second-location3 hide-mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/67122c2574baa634ab807746_Map-locations2-4.svg"
              loading="lazy"
              alt=""
              className="map_image second-location4 hide-mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671232a3cbc0d0bc71b2b5a2_map-mobile-location2-1.svg"
              loading="lazy"
              alt=""
              className="map_image second-location1 mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671232a4ae7eba830723b094_map-mobile-location2-2.svg"
              loading="lazy"
              alt=""
              className="map_image second-location2 mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671232a3e015ba6ed33d23c3_map-mobile-location2-3.svg"
              loading="lazy"
              alt=""
              className="map_image second-location3 mobile-portrait"
            />
            <img
              src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671232a398c422d80bd5c0d0_map-mobile-location2-4.svg"
              loading="lazy"
              alt=""
              className="map_image second-location4 mobile-portrait"
            />
          </div>
          <div className="map-screen-3">
            <div className="map-screen-3_content">
              <div className="map-3-title_wrapper">
                <div className="text-style-eyebrow text-color-lav200">
                  High scalability
                </div>
                <h2 className="heading-style-h2">
                  Our model is designed for rapid deployment, allowing us to
                  meet global demand effectively
                </h2>
              </div>
              <div className="map-3-button_wrapper">
                <a
                  href="technology.html"
                  className="button is-icon is-alternate w-inline-block"
                >
                  <div>Explore Technology</div>
                  <div className="button_icon-wrapper is-alternate">
                    <div className="icon-embed-xsmall w-embed">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="maps_overlay-wrapper">
          <img
            src="https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671210c3ca6d4349a5becd47_temporaltwo_06.webp"
            loading="lazy"
            sizes="100vw"
            srcset="
                https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671210c3ca6d4349a5becd47_temporaltwo_06-p-500.webp   500w,
                https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671210c3ca6d4349a5becd47_temporaltwo_06-p-800.webp   800w,
                https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671210c3ca6d4349a5becd47_temporaltwo_06-p-1080.webp 1080w,
                https://cdn.prod.website-files.com/66f2c9f174a3db1620fac1d8/671210c3ca6d4349a5becd47_temporaltwo_06.webp        1440w
              "
            alt=""
            className="maps_overlay"
          />
        </div>
        <div className="map_ix-trigger"></div>
      </div>
    </>
  );
};

export default MapScroll;
