import React, { useEffect, useRef, useState } from "react";
import "./longPressV2.scss";
import { images } from "../../../source";
import { useLongPress } from "use-long-press"; // ✅ Correct library
import { useWindowSize } from "react-use";

const galleryData = [
  { img: images.archinzaGal01.image },
  { img: images.archinzaGal02.image },
  { img: images.archinzaGal03.image },
  { img: images.archinzaGal04.image },
  { img: images.archinzaGal01.image },
  { img: images.archinzaGal02.image },
  { img: images.archinzaGal03.image },
  { img: images.archinzaGal04.image },
  { img: images.archinzaGal01.image },
  { img: images.archinzaGal02.image },
  { img: images.archinzaGal03.image },
  { img: images.archinzaGal04.image },
];

const LongPressV2 = () => {
  const { width } = useWindowSize();
  const [isCount, setIsCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  // const [isDeActivate, setIsDeActivate] = useState(false);console.log("deactive",isDeActivate)
  // const [selectedItems, setSelectedItems] = useState(
  //   new Array(galleryData.length).fill(false)
  // );

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIsCount((prevCount) => prevCount + 1);
    } else {
      setIsCount((prevCount) => prevCount - 1);
      console.log("unchecked");
    }
  };

  const longPressEvent = useLongPress(
    () => {
      setIsActive(true);
      // setIsDeActivate(true);
    },
    { delay: 500 }
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsActive(false); // Deactivate checkboxes
        setIsCount(0);
        // Uncheck all checkboxes
        document
          .querySelectorAll(".checkbox_container input")
          .forEach((checkbox) => {
            checkbox.checked = false;
          });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // To check the touch device
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  return (
    <section
      className="longpressV2_container"
      ref={containerRef}
      // onClick={() => setIsDeActivate(false)}
      // onMouseUp={() => {setIsDeActivate(true)}}
    >
      <div className="my_container">
        <form>
          <div className="row long_row">
            {galleryData.map((item, index) => (
              <div className="col-md-4 long_col" key={index}>
                <div className="box">
                  <img
                    src={item.img}
                    alt=""
                    className="gal_img"
                    // {...(isTouchDevice || width <= 767
                    //   ? longPressEvent(index)
                    //   : {})}
                    {...longPressEvent()}
                  />
                  {isTouchDevice || width <= 767 ? (
                    <div className="img_select_wrapper">
                      <label
                        className={`checkbox_container ${
                          isActive ? "active" : ""
                        }`}
                        // {...longPressEvent(index)}
                      >
                        <input
                          type="checkbox"
                          // checked={selectedItems[index]}
                          onChange={handleCheckboxChange}
                          readOnly
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  ) : (
                    <div className="img_select_wrapper">
                      <label className="checkbox_container">
                        <input
                          type="checkbox"
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <h1 className="selected_text">{isCount} Image Selected</h1>
        </form>
      </div>
    </section>
  );
};

export default LongPressV2;
