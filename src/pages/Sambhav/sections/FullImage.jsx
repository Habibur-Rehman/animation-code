import React from "react";
import "./fullImage.scss";

const FullImage = ({
  image,
  caption,
  height = "100vh",
  overlay = false,
  parallax = false,
}) => {
  return (
    <section
      className={`full-image ${parallax ? "parallax" : ""}`}
      style={{ height }}
    >
      <div className="image-wrapper">
        <img src={image} alt={caption || "Project"} />

        {overlay && <div className="overlay" />}

        {caption && (
          <div className="caption">
            <p>{caption}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FullImage;