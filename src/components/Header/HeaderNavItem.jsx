import React from "react";
import { NavLink } from "react-router-dom";
import { downArrow } from "../../source";

const HeaderNavItem = ({
  navData,
  navActiveIndex,
  handleNavIndex,
  arrIndex,
  setActiveIndex,
}) => {
  if (navData.dropdown) {
    return (
      <li className="nav_item">
        {navData.mainLink ? (
          navData.linkType === "external" ? (
            <div className="nav_link_wrapper">
              <span
                className={`nav_link ${
                  navActiveIndex === arrIndex ? "dropActive" : ""
                }`}
              >
                <a href={navData.mainLink} onClick={setActiveIndex}>
                  {navData.mainTitle}
                </a>
                <div
                  className="arrow_wrapper"
                  onClick={() => handleNavIndex(arrIndex)}
                >
                  <img src={downArrow} alt="arrow" className="arrow" />
                </div>
              </span>
            </div>
          ) : (
            <NavLink className="nav_link_wrapper">
              <span
                className={`nav_link ${
                  navActiveIndex === arrIndex ? "dropActive" : ""
                }`}
              >
                {navData.mainTitle}
                <div
                  className="arrow_wrapper"
                  onClick={() => handleNavIndex(arrIndex)}
                >
                  <img src={downArrow} alt="arrow" className="arrow" />
                </div>
              </span>
            </NavLink>
          )
        ) : (
          <div className="nav_link_wrapper">
            <span
              className={`nav_link ${
                navActiveIndex === arrIndex ? "dropActive" : ""
              }`}
            >
              {navData.mainTitle}
              <div
                className="arrow_wrapper"
                onClick={() => handleNavIndex(arrIndex)}
              >
                <img src={downArrow} alt="arrow" className="arrow" />
              </div>
            </span>
          </div>
        )}

        <div
          className={`dropdown_box ${
            navActiveIndex === arrIndex ? "active" : ""
          }`}
        >
          {navData.dropdown.map((data, i) => (
            <div className="dropdown_list_item" key={i}>
              {data.linkType === "external" ? (
                <a
                  className="drop_nav_link"
                  href={data.dropDownLink}
                  onClick={setActiveIndex}
                >
                  {data.dropDownTitle}
                </a>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "drop_nav_link active" : "drop_nav_link"
                  }
                  to={data.dropDownLink}
                >
                  {data.dropDownTitle}
                  {/* <div className="arrow_wrapper">
                  <img src={downArrow} alt="arrow" className="arrow" />
                </div> */}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </li>
    );
  }

  return (
    <li className="nav_item">
      {navData.linkType === "external" ? (
        <a
          className="nav_link"
          href={navData.mainLink}
          onClick={setActiveIndex}
        >
          {navData.mainTitle}
        </a>
      ) : (
        <>
          <NavLink
            className={({ isActive }) => {
              return `${isActive ? "nav_link active" : "nav_link"}`;
            }}
            to={navData.mainLink}
          >
            {/* <div className="arrow_wrapper">
              <img src={downArrow} alt="arrow" className="arrow" />
            </div> */}
            {navData.mainTitle}
          </NavLink>
        </>
      )}
    </li>
  );
};

export default HeaderNavItem;
