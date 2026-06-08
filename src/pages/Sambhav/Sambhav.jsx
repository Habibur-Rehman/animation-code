import MovingBox from "./MovingBox";
import "./sambhav.scss";
import WeDoSection from "./TextAnimation";

const Sambahv = () => {
  return (
    <>
      <section className="sambhav_sec1">
        <h1>SAMBHAV</h1>
      </section>
      
      <section className="sambhav_sec2">
        <MovingBox />
      </section>

      <section className="sambhav_sec3">
        <WeDoSection />
      </section>
    </>
  );
};

export default Sambahv;
