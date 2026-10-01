import { useNavigate } from "react-router-dom";
import FullImage from "./sections/FullImage";
import Hero from "./sections/Hero";
import NextProject from "./sections/NextProject";
import ProjectInfo from "./sections/ProjectInfo";
import { useEffect } from "react";
import PageTransition from "./sections/PageTransition";

const projectData = {
  title: "Residential Complex in Estepona",
  description:
    "The project combines modern architecture with Mediterranean aesthetics. Open spaces, panoramic glazing, natural materials and landscape integration create a comfortable environment for living.",

  location: "Estepona, Spain",
  year: "2025",
  area: "18,500 m²",
  status: "Completed",
  category: "Residential",
  design: "Contemporary",
};

const ProjectTransition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
    <PageTransition>
      <Hero
        title="Residential Complex in Estepona"
        location="Estepona, Spain"
        backgroundImage="/images/sambhav/prayer.webp"
      />

      <ProjectInfo data={projectData} />
      <FullImage
        image="/images/sambhav/prayer2.webp"
        caption="Residential Complex in Estepona"
        overlay
      />

      <NextProject
        title="Villa"
        category="Contemporary Minimalism"
        image="/images/sambhav/serava-villa.webp"
        onClick={() => navigate("/sambhav/project-v2")}
      />
      </PageTransition>
    </>
  );
};

export default ProjectTransition;
