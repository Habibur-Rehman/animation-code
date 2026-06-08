import "./carousals.scss";
import { images } from "../../source";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);

const sliderContent = [
  "Luminapad",
  "PulseEar",
  "ZenithWatch",
  "AeroCharge",
  "NimbusCam",
  "EclipseDrive",
  "TerraHub",
  "QuantumKey",
  "MeshRouter",
  "AuraBeam",
];

const sliderImages = [
  images.archinzaGal01.image,
  images.archinzaGal02.image,
  images.archinzaGal03.image,
  images.archinzaGal04.image,
];

const BannerV3 = () => {
  const { width: WindoWidth } = useWindowSize();

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(".slide-next", {
          // clipPath: "inset(30% 43% 30% 43%)",
          clipPath: "polygon(43% 30%, 57% 30%, 57% 70%, 43% 70%)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".carousal_container2",
            start: "top top",
            end: `+=200%`,
            // pin: true,
            pin: ".carousal_wrapper",
            // invalidateOnRefresh: true,
            // anticipatePin: 1,
            scrub: true,
            markers: true,
          },
        });

        tl.to(".slide-next", {
          // clipPath: "inset(0% 0% 0% 0%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          // duration: 2,
        });
      });

      return () => ctx.revert();
    },
    { dependencies: [WindoWidth], revertOnUpdate: true },
  );

  return (
    <>
      <div className="carousal_container_2">
        <div className="carousal_wrapper">
          <div className="slider">
            <div className="slide-active">
              <img
                src={images.archinzaGal01.image}
                alt=""
                className="slide_img"
              />
            </div>

            <div className="slide-next">
              <div className="slide-next-img">
                <img
                  src={images.archinzaGal02.image}
                  alt=""
                  className="slide_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV3;
