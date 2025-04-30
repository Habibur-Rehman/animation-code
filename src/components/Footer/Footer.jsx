import React from "react";
import "./footer.scss";
import { callIcon, globeIcon, mailIcon, protransLogoWhite } from "../../source";

const Footer = () => {
  return (
    <>
      <footer className="footer_section">
        <div className="my_container">
          <div className="row footer_row">
            <div className="col-3 footer_logo_col">
              <img src={protransLogoWhite} alt="logo" className="footer_logo" />
            </div>
            <div className="col-lg-3 col-12 footer_content">
              <div className="footer_content_wrapper">
                <div className="footer_heading">HEAD OFFICE</div>
                <div className="footer_item">
                  G 20, Dubai Airport Freezone, Dubai, U.A.E
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 footer_content footer_col_third">
              <div className="footer_content_wrapper footer_wraper_two">
                <div className="footer_heading">OUR PRESENCE</div>
                <div className="footer_item">
                  <span className="bold_content">UAE:</span> Dubai Airport
                  Freezone, Cargo Village & Jebel Ali Freezone
                </div>
                <div className="footer_item">
                  {" "}
                  <span className="bold_content">India:</span> Mumbai, Delhi
                </div>
                <div className="footer_item">
                  {" "}
                  <span className="bold_content">Uganda:</span> Entebbe
                </div>
                <div className="footer_item">
                  {" "}
                  <span className="bold_content">Nigeria:</span> Lagos
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 footer_content footer_col_last">
              <div className="footer_content_wrapper">
                <div className="footer_heading">GET IN TOUCH</div>
                <div className="footer_item">
                  <div className="footer_icon_item_wrapper">
                    <img src={callIcon} alt="call" className="footer_icons" />
                    <a href="tel:+971042314567">04 231 4567</a>
                  </div>
                  <div className="footer_icon_item_wrapper">
                    <img src={mailIcon} alt="mail" className="footer_icons" />
                    <a href="mailto:admin@protransme.com">
                      admin@protransme.com
                    </a>
                  </div>
                  <div className="footer_icon_item_wrapper">
                    <img src={globeIcon} alt="globe" className="footer_icons" />
                    <a
                      href="https://protransme.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.protransme.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_section">
          <div className="copyright">
            © 2025 Protrans Logistics FZCO. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
