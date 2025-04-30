import React, { useEffect, useState } from "react";
import "./header.scss";
import { homeURL } from "../../helpers/paths";
import { useWindowSize } from "react-use";
import { Link, NavLink, useLocation } from "react-router-dom";
import { downArrow, protransLogo } from "../../source";
import HeaderNavItem from "./HeaderNavItem";
const body = document.querySelector("body");

const menuData = [
  {
    id: 1,
    type: "text",
    mainTitle: "About Us",
    mainLink: "#about",
    linkType: "external",
  },
  {
    id: 1,
    type: "text",
    mainTitle: "Contact Us",
    mainLink: "#contact-us",
    linkType: "external",
  },
  // {
  //   id: 2,
  //   type: "text",
  //   mainTitle: "Services",
  //   mainLink: "#services",
  //   linkType: "external",
  //   dropdown: [
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Air Freight",
  //       dropDownLink: "#services",
  //     },
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Sea Freight",
  //       dropDownLink: "#services",
  //     },
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Road Transport",
  //       dropDownLink: "#services",
  //     },
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Warehouse Storage",
  //       dropDownLink: "#services",
  //     },
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Third-Party Logistic",
  //       dropDownLink: "#third-party",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   type: "text",
  //   mainTitle: "Our Edge",
  //   // mainLink : "#our-edge",
  //   // linkType: "external",
  //   dropdown: [
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Key Strengths",
  //       dropDownLink: "#key-strength",
  //     },
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Industries",
  //       dropDownLink: "#industries",
  //     },
  //     {
  //       linkType: "external",
  //       dropDownTitle: "Commitment",
  //       dropDownLink: "#commitment",
  //     },
  //   ],
  // },
];

const Header = ({ quoteLink }) => {
  const { width } = useWindowSize();
  const [isBg, setIsbg] = useState(false);
  const { pathname: locationPathname } = useLocation();
  const [isHover, setIsHover] = useState();
  const [isDropHover, setIsDropHover] = useState();
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [navActiveIndex, setNavActiveIndex] = useState(null);

  const navlinkList = menuData.map((nav, i) => (
    <li className="link_item" key={`menu-item-${menuData[i].id}`}>
      {nav.dropdown ? (
        <div
          className={`dropdown ${isHover === i ? "active" : ""}`}
          onMouseOver={() => setIsHover(i)}
          onMouseOut={() => setIsHover(false)}
        >
          {nav.mainLink ? (
            nav.linkType === "external" ? (
              <a
                href={nav.mainLink}
                className={"nav_tab"}
                // onClick={() => setIsHover(false)}
              >
                <span>{nav.mainTitle}</span>
                <img
                  src={downArrow}
                  alt="down arrow"
                  className="dropdown_arrow"
                />
              </a>
            ) : (
              <NavLink
                to={nav.mainLink}
                className={({ isActive }) =>
                  isActive ? "nav_tab active" : "nav_tab"
                }
              >
                <span>{nav.mainTitle}</span>
                <img
                  src={downArrow}
                  alt="down arrow"
                  className="dropdown_arrow"
                />
              </NavLink>
            )
          ) : (
            <span
              className={`nav_tab`}
              // onClick={() => setIsHover(false)}
            >
              <span>{nav.mainTitle}</span>
              <img
                src={downArrow}
                alt="down arrow"
                className="dropdown_arrow"
              />
            </span>
          )}
          <ul className={`dropdown_menu_wrapper`}>
            {nav.dropdown.map((drop, index) => (
              <>
                <li className="dropdown_menu" key={index}>
                  {drop.linkType === "external" ? (
                    <a
                      className={`dropdown_menu_link`}
                      href={drop.dropDownLink}
                      onClick={() => setIsHover(false)}
                    >
                      {drop.dropDownTitle}
                    </a>
                  ) : (
                    <NavLink
                      className={`dropdown_menu_link`}
                      to={drop.dropDownLink}
                    >
                      {drop.dropDownTitle}
                    </NavLink>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {nav.linkType === "external" ? (
            <a className="nav_tab" href={nav.mainLink}>
              {nav.mainTitle}
            </a>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav_tab active" : "nav_tab"
              }
              to={nav.mainLink}
            >
              {nav.mainTitle}
            </NavLink>
          )}
        </div>
      )}
    </li>
  ));

  useEffect(() => {
    body.style.overflow = "auto";
    setIsMenuActive(false);
  }, [locationPathname]);

  useEffect(() => {
    // Check if URL contains a hash
    if (window.location.hash) {
      document.body.style.overflow = "auto";
      setIsMenuActive(false);
      // console.log("hash", window.location.hash);
    }
  }, [window.location.hash]);

  useEffect(() => {
    setIsHover(false);
  }, [locationPathname]);

  const handleScroll = () => {
    // if (window.location.pathname === "/")
    if (window.scrollY > 60) {
      setIsbg(true);
    } else {
      setIsbg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHamburgerClick = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  };

  const handleNavIndex = (i) => {
    if (navActiveIndex === i) {
      setNavActiveIndex(null);
    } else {
      setNavActiveIndex(i);
    }
  };

  useEffect(() => {
    if (isMenuActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, []);

  return (
    <>
      <header className={`header`}>
        {width >= 1024 ? (
          <div className={`navlinks_wrapper ${isBg ? "active" : ""}`}>
            <div className="logo_wrapper">
              <Link to={homeURL}>
                <img
                  className="logo_img"
                  src={isBg ? protransLogo : protransLogo}
                  alt="interact Logo"
                  onClick={scrollHandler}
                />
              </Link>
            </div>
            <div className="link_wrapper">
              <ul className="link_list">
                {navlinkList}
                <li className="link_item">
                  <div className="cta_wrapper" onClick={quoteLink}>
                    <span className={`nav_tab cta_link`}>Get a quote</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="my_container">
              <div className="hamburger_link_wrapper">
                <div className={`hamburger_wrapper ${isBg ? "active" : ""}`}>
                  <div className="logo_wrapper">
                    <Link className="logo_link" to={homeURL}>
                      <img
                        src={protransLogo}
                        alt="protrans logo"
                        className="mb_logo img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mobile_header_wrapper ${
                isMenuActive ? "active" : ""
              }`}
            >
              {/* <div className="logo_wrapper">
                <Link className="logo_link" to={homeURL}>
                  <img
                    src={protransLogo}
                    alt="protrans logo"
                    className="mb_logo img-fluid"
                  />
                </Link>
              </div> */}
              <ul className="mobile_links_wrapper">
                {menuData.map((navData, i) => (
                  <HeaderNavItem
                    navData={navData}
                    key={parseInt(navData.id)}
                    arrIndex={i}
                    handleNavIndex={handleNavIndex}
                    navActiveIndex={navActiveIndex}
                    setActiveIndex={() => {
                      setIsMenuActive(false);
                      handleHamburgerClick();
                    }}
                  />
                ))}
                <li className="nav_item">
                  <div className="cta_wrapper">
                    <span
                      className={`cta_link`}
                      // to={() => false}
                      onClick={() => {
                        setIsMenuActive(false);
                        quoteLink();
                        handleHamburgerClick();
                      }}
                    >
                      Get a quote
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hamburger lines UI start */}
            <div
              className={`hamburger_lines ${
                isMenuActive ? "active" : "" || isBg ? "black" : ""
              }`}
              onClick={handleHamburgerClick}
            >
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
