import MovingBox from "./MovingBox";
import "./sambhav.scss";
import SplitTextAbout from "./SplitTextV2";
import WeDoSection from "./TextAnimation";

const Sambahv = () => {
  return (
    <>
      <section className="sambhav_sec1">
        <h1>SAMBHAV</h1>
      </section>

      <section className="sambhav_sec2">
        <SplitTextAbout />
      </section>

      <section className="sambhav_sec3">
        <MovingBox />
      </section>

      <section className="sambhav_sec4">
        <WeDoSection />
      </section>
    </>
  );
};

export default Sambahv;
