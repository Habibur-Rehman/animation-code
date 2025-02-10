import "./accordionImagePositionChange.scss";
import { mutualLearning, respect, trust } from "../../../source";
import { useRef, useState } from "react";

export const homeFaqData = [
  {
    title: "Research & Process",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers.",
    img: mutualLearning,
  },
  {
    title: "Equipments & Capabilities",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers. Our ATLAS uGDX B.Tech program isOur ATLAS uGDX B.Tech program isOur ATLAS uGDX B.Tech program is",
    img: respect,
  },
  {
    title: "Facilities",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers.",
    img: trust,
  },
];

const AccordionImagePositionChange = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const activeAccordionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    setActiveIndex(index);
  };

  const reorderedImages = [
    homeFaqData[activeIndex], // Active image first
    ...homeFaqData.filter((_, index) => index !== activeIndex), // Other images
  ];

  return (
    <>
      <section className="icon_animation_sec1">
        <div className="row">
          <div className="col-md-6">
            <div className="custom-accordion-container">
              {homeFaqData.map((item, index) => (
                <div
                  className={`custom-accordion-wrapper ${
                    openIndex === index ? "active" : ""
                  }`}
                  key={index}
                  ref={openIndex === index ? activeAccordionRef : null}
                >
                  <div
                    className="accordion-title"
                    onClick={() => handleItemClick(index)}
                  >
                    <span>{item.title}</span>
                    <span>{openIndex === index ? "-" : "+"}</span>
                  </div>
                  <div
                    className={`custom-accordion-item ${
                      openIndex === index ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion-content"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="acc_img_wrapper">
              {reorderedImages.map((item, index) => (
                <div className="icon_wrapper">
                  <img
                    key={index}
                    src={item.img}
                    alt="Active Section"
                    className={`accordion-image ${
                      activeIndex === homeFaqData.indexOf(item) ? "active" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccordionImagePositionChange;
