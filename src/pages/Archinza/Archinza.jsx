import React, { useState } from "react";
import "./archinza.scss";
import { images } from "../../source";
import { useLongPress } from "react-use";

const Arcinza = () => {
  const [selected, setSelected] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  // Long press handler - toggles checkbox state
  //   const longPressEvent = useLongPress(() => {
  //     console.log("Long press detected!");

  //     setSelected((prevSelected) => {
  //       const newSelected = !prevSelected;
  //       setSelectedCount((prevCount) => (newSelected ? prevCount + 1 : prevCount - 1));
  //       return newSelected;
  //     });
  //   }, { delay: 500 });

  const longPressEvent = useLongPress(
    () => {
      setSelected((prevSelected) => {
        const newSelected = !prevSelected;

        if (newSelected) {
          console.log("Checkbox checked on long press!");
          setSelectedCount((prevCount) => prevCount + 1);
        } else {
          console.log("Checkbox unchecked on long press!");
          setSelectedCount((prevCount) => prevCount - 1);
        }

        return newSelected;
      });
    },
    { delay: 500 }
  );

  return (
    <section className="archinza_sec1">
      <div className="my_container">
        <form>
          <div className="row archin_row">
            <div className="col-md-4 arcin_col">
              <div className="box">
                <img
                  src={images.archinzaGal01.image}
                  alt=""
                  className="gal_img"
                />

                <div className="img_select_wrapper">
                  <label className="checkbox_container" {...longPressEvent}>
                    <input type="checkbox" checked={selected} readOnly />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <h1 className="selected_text">{selectedCount} Image Selected</h1>
        </form>
      </div>
    </section>
  );
};

export default Arcinza;
