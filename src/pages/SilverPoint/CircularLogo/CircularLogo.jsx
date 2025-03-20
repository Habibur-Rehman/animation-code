import React, { useEffect, useState } from "react";
import "./circularLogo.scss";
import { images } from "../../../source"; // Import your logo images

const logos = [
  {
    src: images.logo01.image,
    src2: images.logo07.image,
    src3: images.logo05.image,
    src4: images.logo02.image,
    src5: images.logo06.image,
    src6: images.logo04.image,
  },
  {
    src: images.logo02.image,
    src2: images.logo07.image,
    src3: images.logo05.image,
    src4: images.logo02.image,
    src5: images.logo06.image,
    src6: images.logo04.image,
  },
  {
    src: images.logo03.image,
    src2: images.logo07.image,
    src3: images.logo05.image,
    src4: images.logo02.image,
    src5: images.logo06.image,
    src6: images.logo04.image,
  },
  {
    src: images.logo04.image,
    src2: images.logo07.image,
    src3: images.logo05.image,
    src4: images.logo02.image,
    src5: images.logo06.image,
    src6: images.logo04.image,
  },
  {
    src: images.logo05.image,
    src2: images.logo07.image,
    src3: images.logo05.image,
    src4: images.logo02.image,
    src5: images.logo06.image,
    src6: images.logo04.image,
  },
  {
    src: images.logo06.image,
    src2: images.logo07.image,
    src3: images.logo05.image,
    src4: images.logo02.image,
    src5: images.logo06.image,
    src6: images.logo04.image,
  },
];

const CircularLogo = () => {
  const totalLogos = logos.length;
  const radius = 250; // Adjust radius as needed
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanged((prev) => !prev);
    }, 2000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="circle-container">
      {/* <================ First Circle Start===============> */}
      <div className="outer_circle"></div>
      {logos.map((logo, index) => {
        const angle = (360 / totalLogos) * index + 270; // Shift first image to 12 o’clock
        // console.log(`Index: ${index}, Angle: ${angle}`);
        return (
          <div
            key={index}
            className="logo-item fade-image"
            //   style={{
            //     transform: `rotate(${
            //       (360 / logos.length) * index
            //     }deg) translate(180px) rotate(-${(360 / logos.length) * index}deg)`,
            //   }}
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <img
              src={isChanged ? logo.src4 : logo.src}
              alt="logo"
              className={`logo_img ${isChanged ? "active" : ""}`}
            />
          </div>
        );
      })}
      {/* <================ First Circle End===============> */}

      {/* <================ Second Circle Start===============> */}
      <div className="inner_circle"></div>
      {logos.map((logo, index) => {
        const radius = 195;
        const angle = (360 / totalLogos) * index + 0; // Shift first image to 12 o’clock
        // console.log(`Index: ${index}, Angle: ${angle}`);
        return (
          <div
            key={index}
            className="logo-item"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <img
              src={isChanged ? logo.src6 : logo.src2}
              alt="logo"
              className={`logo_img ${isChanged ? "active" : ""}`}
            />
          </div>
        );
      })}
      {/* <================ Second Circle End===============> */}

      {/* <================ Third Circle Start===============> */}
      <div className="small_circle"></div>
      {logos.map((logo, index) => {
        const radius = 140;
        const angle = (360 / totalLogos) * index + 270; // Shift first image to 12 o’clock
        // console.log(`Index: ${index}, Angle: ${angle}`);
        return (
          <div
            key={index}
            className="logo-item"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <img
              src={isChanged ? logo.src5 : logo.src3}
              alt="logo"
              className={`logo_img ${isChanged ? "active" : ""}`}
            />
          </div>
        );
      })}
      {/* <================ Third Circle End===============> */}
    </div>
  );
};

export default CircularLogo;
