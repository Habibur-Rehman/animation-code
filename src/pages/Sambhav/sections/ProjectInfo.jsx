import React from "react";
import "./projectInfo.scss";

const ProjectInfo = ({ data }) => {
  return (
    <section className="project-info">
      <div className="container">

        <div className="project-info__left">
          <span className="section-tag">PROJECT INFORMATION</span>

          <h2 className="project-title">
            {data.title}
          </h2>

          <p className="project-description">
            {data.description}
          </p>
        </div>

        <div className="project-info__right">

          <div className="info-item">
            <span>Location</span>
            <h4>{data.location}</h4>
          </div>

          <div className="info-item">
            <span>Year</span>
            <h4>{data.year}</h4>
          </div>

          <div className="info-item">
            <span>Area</span>
            <h4>{data.area}</h4>
          </div>

          <div className="info-item">
            <span>Status</span>
            <h4>{data.status}</h4>
          </div>

          <div className="info-item">
            <span>Category</span>
            <h4>{data.category}</h4>
          </div>

          <div className="info-item">
            <span>Design</span>
            <h4>{data.design}</h4>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectInfo;