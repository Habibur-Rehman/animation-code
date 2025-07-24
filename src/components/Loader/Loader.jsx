import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <>
      <div className="Preloader_block">
        <div className="Preloader_logoType">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1800 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                {/* <text
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                  fontSize="160"
                  fontWeight="700"
                  fill="black"
                  fontFamily="sans-serif"
                >
                  LEONARDO
                </text> */}
                {/* <text x="50%" y="50%" dy=".35em" className="masked-text">
                  ARTH
                </text> */}
                <text x="42%" y="50%" dy=".35em" className="masked-text">
                  A
                </text>
                <text x="46%" y="50%" dy=".35em" className="masked-text">
                  R
                </text>
                <text x="50%" y="50%" dy=".35em" className="masked-text t_text">
                  T
                </text>{" "}
                <text x="54%" y="50%" dy=".35em" className="masked-text">
                  H
                </text>
              </mask>
            </defs>

            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="#172747"
              mask="url(#mask)"
            />
          </svg>
        </div>

        <div className="Preloader_overlay"></div>
      </div>
    </>
  );
};

export default Loader;
