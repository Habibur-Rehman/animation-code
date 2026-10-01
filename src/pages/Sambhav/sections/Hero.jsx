import React from "react";
import "./hero.scss";

const Hero = ({ title, location, backgroundImage }) => {
  return (
    <section
      className="project-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="project-hero__overlay" />

      <div className="project-hero__content">
        <div className="project-hero__wrapper">
          <p className="project-hero__title">
            {title}
          </p>

          <p className="project-hero__location">
            {location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;