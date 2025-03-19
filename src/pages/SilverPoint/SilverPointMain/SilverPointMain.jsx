import React from "react";
import "./silverPointMain.scss";
import { images } from "../../../source";
import { useState } from "react";

const logoData = [
  images.logo01.image,
  images.logo02.image,
  images.logo03.image,
  images.logo03.image,
  images.logo02.image,
  images.logo01.image,
];

const SilverPointMain = () => {
  const [isHover, setIsHover] = useState();
  const [isOut, setIsOut] = useState();

  const handleMouseOver = (index) => {
    setIsHover(index);
    // setIsOut(null); // Remove bottomColor if hovering again
  };

  const handleMouseOut = (index) => {
    setIsHover(null);
    // setIsOut(index);

    // Remove bottomColor class after 0.65s (when animation is done)
    // setTimeout(() => {
    //     setIsOut(null);
    // }, 0);
  };

  return (
    <>
      <section className="silver_sec1">
        <div className="my_container">
          <div className="row logo_row">
            {logoData?.map((logo, i) => (
              <div className="col-md-3 logo_col" key={i}>
                <div
                  className={`logo_box ${
                    isHover === i ? "active" : "bottomColor"
                    // isHover === i ? "active" : isOut === i ? "bottomColor" : ""
                  }`}
                  onMouseEnter={() => handleMouseOver(i)}
                  onMouseOut={() => handleMouseOut(null)}
                >
                  <img src={logo} alt="" className="logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SilverPointMain;
