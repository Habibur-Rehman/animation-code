import React from "react";
import "./nextProject.scss";

const NextProject = ({
  title,
  category,
  image,
  onClick,
}) => {
  return (
    <section className="next-project">

      <div className="next-project__content">
        <p className="next-project__label">
          Next Project
        </p>

        <button
          className="next-project__title"
          onClick={onClick}
        >
          {title}
        </button>

        <p className="next-project__description">
          {category}
        </p>
      </div>

      <button
        className="next-project__thumb"
        onClick={onClick}
      >
        <img src={image} alt={title} />

        {/* <div className="overlay" /> */}

        {/* <span className="circle-arrow">
          →
        </span> */}
      </button>

      {/* <div className="scroll-to-bottom" /> */}
    </section>
  );
};

export default NextProject;