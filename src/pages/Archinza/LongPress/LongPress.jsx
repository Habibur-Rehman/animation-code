import React, { useState } from "react";
import "./longPress.scss";
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

const LongPress = () => {
  const { width } = useWindowSize();
  const [isCount, setIsCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState(
    new Array(galleryData.length).fill(false)
  );

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIsCount((prevCount) => prevCount + 1);
    } else {
      setIsCount((prevCount) => prevCount - 1);
    }
  };

  // ✅ useLongPress must be called at the component level
  const longPressEvent = useLongPress(
    (event, { context }) => {
      const index = context; // Get the index from context

      setSelectedItems((prevSelected) => {
        const newSelected = [...prevSelected];
        newSelected[index] = !newSelected[index];

        if (newSelected[index]) {
          console.log(`✅ Checkbox at index ${index} checked on long press!`);
        } else {
          console.log(`❌ Checkbox at index ${index} unchecked on long press!`);
        }

        return newSelected;
      });
    },
    { delay: 500 }
  );

  // ✅ Correct way to count selected checkboxes
  const selectedCount = selectedItems.filter((isSelected) => isSelected).length;

  // To check the touch device
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  return (
    <section className="longpress_container">
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
                    {...(isTouchDevice || width <= 767
                      ? longPressEvent(index)
                      : {})}
                  />
                  {isTouchDevice || width <= 767 ? (
                    <div className="img_select_wrapper">
                      <label
                        className="checkbox_container"
                        // {...longPressEvent(index)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedItems[index]}
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
          <h1 className="selected_text">
            {isTouchDevice || width <= 767 ? selectedCount : isCount} Image
            Selected
          </h1>
        </form>
      </div>
    </section>
  );
};

export default LongPress;
