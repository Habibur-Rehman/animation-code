import React, { useState } from "react";
import "./mapAnimation.scss";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Presense } from "../../source";

const globalPresenceData = [
  {
    title: "Asia",
    locationMarks: [
      {
        id: 1,
        name: "Algeria",
        left: 46,
        top: 36,
      },
      {
        id: 2,
        name: "Australia",
        left: 77,
        top: 78,
      },
      {
        id: 3,
        name: "Austria",
        left: 50,
        top: 28,
      },
      {
        id: 4,
        name: "Bahrain",
        left: 58,
        top: 39.5,
      },
      {
        id: 5,
        name: "Bangladesh",
        left: 67,
        top: 44,
      },
      {
        id: 6,
        name: "Brazil",
        left: 37,
        top: 63,
      },
      {
        id: 7,
        name: "Belgium",
        left: 47.5,
        top: 36,
      },
      {
        id: 8,
        name: "Canada",
        left: 24,
        top: 41,
      },
    ],
  },
  {
    title: "Africa",
    locationMarks: [
      {
        id: 58,
        name: "Panama",
        left: 29.2,
        top: 62,
      },
      {
        id: 59,
        name: "Peru",
        left: 30.5,
        top: 68,
      },
      {
        id: 60,
        name: "Slovenia",
        left: 50,
        top: 29,
      },
      {
        id: 61,
        name: "Switzerland",
        left: 49,
        top: 28,
      },
      {
        id: 62,
        name: "Turkey",
        left: 53,
        top: 32,
      },
    ],
  },
  {
    title: "North America",
    locationMarks: [
      {
        id: 1,
        name: "Algeria",
        left: 46,
        top: 36,
      },
      {
        id: 53,
        name: "Georgia",
        left: 56.5,
        top: 29,
      },
      {
        id: 54,
        name: "Greece",
        left: 50.5,
        top: 29,
      },
      {
        id: 55,
        name: "Indonesia",
        left: 73,
        top: 61,
      },
      {
        id: 56,
        name: "India",
        left: 64.3,
        top: 46,
      },
      {
        id: 57,
        name: "Norway",
        left: 49.2,
        top: 18,
      },
    ],
  },
  {
    title: "South America",
    locationMarks: [
      {
        id: 48,
        name: "Armenia",
        left: 57,
        top: 31,
      },
      {
        id: 49,
        name: "Bulgaria",
        left: 52,
        top: 30,
      },
      {
        id: 50,
        name: "Cuba",
        left: 29.5,
        top: 55,
      },
      {
        id: 51,
        name: "Ecuador",
        left: 30.2,
        top: 65.5,
      },
      {
        id: 52,
        name: "Estonia",
        left: 52.2,
        top: 21,
      },
    ],
  },
  {
    title: "Europe",
    locationMarks: [
      {
        id: 42,
        name: "England",
        left: 46.5,
        top: 25,
      },
      {
        id: 43,
        name: "Japan",
        left: 79,
        top: 49,
      },
      {
        id: 44,
        name: "South Korea",
        left: 76.2,
        top: 46,
      },
      {
        id: 45,
        name: "Tunisia",
        left: 48.7,
        top: 34,
      },
      {
        id: 46,
        name: "Ivory Coast",
        left: 45.2,
        top: 50,
      },
      {
        id: 47,
        name: "Argentina",
        left: 35.5,
        top: 79.1,
      },
    ],
  },
  {
    title: "Australia",
    locationMarks: [
      {
        id: 37,
        name: "UK",
        left: 46,
        top: 25,
      },

      {
        id: 38,
        name: "USA",
        left: 25,
        top: 49,
      },

      {
        id: 39,
        name: "Venezuela",
        left: 32,
        top: 59,
      },
      {
        id: 40,
        name: "Zambia",
        left: 54,
        top: 58,
      },
      {
        id: 41,
        name: "France",
        left: 46.8,
        top: 27,
      },
    ],
  },
];

const MapAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const handleMouseOver = (mark) => {
    setIsHovered(mark);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  //   const geoUrl =
  //     "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <>
      <div className="mapanim_container">
        <div className="my_container">
          <div className="tab_Wrapper">
            {globalPresenceData.map((tab, i) => (
              <p
                key={i}
                className={`tab_name ${isActive === i ? "active" : ""}`}
                onClick={() => {
                  setIsActive(i);
                }}
              >
                {tab.title}
              </p>
            ))}
          </div>
        </div>
        <div className="map presence_img_sec">
          <img src={Presense} style={{ width: "100%" }} />
          {globalPresenceData.map((tab, i) => (
            <div class="map-pins" key={i}>
              {globalPresenceData[isActive]?.locationMarks?.map((mark, i) => {
                return (
                  <>
                    <div>
                      <a
                        onMouseEnter={() => handleMouseOver(mark.id)}
                        onMouseLeave={() => handleMouseOut()}
                        style={{
                          left: `${mark.left}vw`,
                          top: `${mark.top}%`,
                          cursor: "pointer",
                        }}
                        class="map-location-marker animated"
                        data-map-title="San Francisco"
                        data-map-link="san-francisco"
                        data-map-image="san-francisco.jpg"
                        data-job-listings="https://westernunion.taleo.net/careersection/10045/jobsearch.ftl?&src=CWS-10230"
                      ></a>

                      {/* {showLocation == mark.name && <> */}
                      <svg
                        className={`arrowSvg ${
                          isHovered == mark.id ? "d-block" : "d-none"
                        }`}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          color: "#483F3C",
                          left: `${mark.left - 0.3}vw`,
                          top: `${mark.top - 2.5}%`,
                          zIndex: "2",
                        }}
                      >
                        <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path>
                      </svg>
                      <div
                        className={`locationBx ${
                          isHovered == mark.id ? "d-flex" : "d-none"
                        }`}
                        style={{
                          left: `${mark.left + 1}vw`,
                          top: `${mark.top - 4}%`,
                          zIndex: "9",
                        }}
                      >
                        <h1 className="m-0 text-center">{mark.name}</h1>
                      </div>
                      {/* </>} */}
                    </div>
                  </>
                );
              })}
            </div>
          ))}
        </div>

        {/* <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap> */}
      </div>
    </>
  );
};

export default MapAnimation;
