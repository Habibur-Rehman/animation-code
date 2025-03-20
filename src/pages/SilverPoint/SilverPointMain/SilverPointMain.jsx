import React from "react";
import "./silverPointMain.scss";
import { images } from "../../../source";
import { useState } from "react";
import CircularLogo from "../CircularLogo/CircularLogo";

const logoData = [
  {
    img: images.logo01.image,
    hoverImg: images.logo02.image,
  },
  {
    img: images.logo02.image,
    hoverImg: images.logo01.image,
  },
  {
    img: images.logo03.image,
    hoverImg: images.logo02.image,
  },
  {
    img: images.logo03.image,
    hoverImg: images.logo03.image,
  },
  {
    img: images.logo02.image,
    hoverImg: images.logo02.image,
  },
  {
    img: images.logo01.image,
    hoverImg: images.logo01.image,
  },
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
                    isHover === i ? "active" : ""
                    // isHover === i ? "active" : isOut === i ? "bottomColor" : ""
                  }`}
                  onMouseEnter={() => handleMouseOver(i)}
                  onMouseOut={() => handleMouseOut(null)}
                >
                  <img src={logo.img} alt="" className="logo" />
                  <img src={logo.hoverImg} alt="" className="hover_logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="silver_sec2">
        <div className="my_container">
          <CircularLogo />
        </div>
      </section>
    </>
  );
};

export default SilverPointMain;
