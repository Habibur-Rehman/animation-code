import "./VideoDemo.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import {
  laxmiDiwaliVideo,
  regsiterCtaImg,
  silverpressDesktopVideo,
  silverpressMobileVideo,
} from "../../../source";
import { useWindowSize } from "react-use";

const VideoDemo = () => {
  const { width } = useWindowSize();
  return (
    <>
      {/* <Header /> */}

      <section className="video_laxmi">
        <video
          className="video_banner"
          width="100%"
          //   height="100%"
          autoPlay
          muted
          loop
          playsInline
          //   controls
        >
          <source
            className="video_source"
            src={width > 767 ? laxmiDiwaliVideo : laxmiDiwaliVideo}
            type="video/mp4"
          />
        </video>
        <div className="diwali_cta_wrapper">
          <a href="https://laxmihos.com/contact">
            <img
              width={1081}
              height={241}
              src={regsiterCtaImg}
              alt="register"
              className="register_cta"
            />
          </a>
          <a href="https://laxmihos.com/contact">
            <img
              width={1081}
              height={241}
              src={regsiterCtaImg}
              alt="register"
              className="register_cta"
            />
          </a>
        </div>
      </section>

      {/* <section className="video_sec1">
        <video
          className="video_banner"
          width="100%"
        //   height="100%"
          autoPlay
          muted
          loop
          playsInline
          //   controls
        >
          <source
            className="video_source"
            src={
              width > 767 ? silverpressDesktopVideo : silverpressMobileVideo
            }
            type="video/mp4"
          />
        </video>
      </section> */}

      {/* <section className="video_sec2">
        <div className="my_container">
          <h2 className="title">Video 2</h2>
        </div>
        <video
          className="video_banner"
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
          //   controls
        >
          <source
            className="video_source"
            src={width > 767 ? silverpressMobileVideo : silverpressMobileVideo}
            type="video/mp4"
          />
        </video>
      </section> */}
      <Footer />
    </>
  );
};

export default VideoDemo;
