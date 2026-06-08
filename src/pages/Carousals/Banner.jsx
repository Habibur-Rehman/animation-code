import "./carousals.scss";
import { images } from "../../source";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "react-use";

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

const Banner = () => {
  const { width: WindoWidth } = useWindowSize();

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        let currentImageIndex = 2;
        let currentContentIndex = 1;
        const totalImages = sliderContent.length;
        let isAnimating = false;

        // ✅ FIX: querySelectorAll
        function splitTextIntoSpans(selector) {
          let elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            let text = element.innerText;
            let splitText = text
              .split("")
              .map((char) => {
                return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
              })
              .join("");
            element.innerHTML = splitText;
          });
        }

        // ✅ initial reveal
        gsap.to(".slide-next-img", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power3.out",
          delay: 1,
        });

        const handleClick = () => {
          if (isAnimating) return;
          isAnimating = true;

          splitTextIntoSpans(".slider-content-active h1");

          gsap.to(".slide-active img", {
            scale: 2,
            duration: 2,
            ease: "power3.out",
          });

          gsap.to(".slider-content-active h1 span", {
            top: "10.9375em",
            stagger: 0.05,
            ease: "power3.out",
            onComplete: () => {
              gsap.to(".slider-content-active", {
                top: "-10.9375em",
                duration: 0.25,
                ease: "power3.out",
              });
            },
          });

          splitTextIntoSpans(".slider-content-next h1");

          gsap.set(".slider-content-next h1 span", {
            top: "12.5em",
          });

          gsap.to(".slider-content-next", {
            top: 0,
            duration: 1.25,
            ease: "power3.out",
            onComplete: () => {
              gsap.to(".slider-content-active", {
                top: 0,
                ease: "power3.out",
                duration: 0.5,
              });
            },
          });

          // ✅ FIX: correct selector
          const nextContent = document.querySelector(".slider-content-next");
          if (nextContent) {
            nextContent.classList.remove("slider-content-next");
            nextContent.style.top = "0";
          }

          currentContentIndex = (currentContentIndex + 1) % totalImages;
          const nextContentText = sliderContent[currentContentIndex];

          const newContentHTML = `
            <div class="slider-content-next" style="top: 12.5em;">
              <h1>${nextContentText}</h1>
            </div>
          `;

          document
            .querySelector(".slider-content")
            .insertAdjacentHTML("beforeend", newContentHTML);

          // ✅ FIX: safe index
          currentImageIndex = (currentImageIndex + 1) % sliderImages.length;

          const newSlideHTML = `
            <div class="slide-next">
              <div class="slide-next-img">
                <img src="${sliderImages[currentImageIndex]}" alt="" />
              </div>
            </div>
          `;

          document
            .querySelector(".slider")
            .insertAdjacentHTML("beforeend", newSlideHTML);

          // ✅ FIX: correct selector
          gsap.to(".slide-next:last-child .slide-next-img", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
          });

          const slideNextImg = document.querySelector(
            ".slide-next:last-child .slide-next-img",
          );

          gsap.to(slideNextImg, {
            position: "fixed", // 🔥 detach from parent
            top: 0,
            left: 0,
            x: 0,
            y: 0,
            width: "100vw",
            height: "100vh",
            duration: 2,
            ease: "power3.out",
            onComplete: () => {
              const currenActiveSlide = document.querySelector(".slide-active");
              if (currenActiveSlide) currenActiveSlide.remove();

              const nextSlide = document.querySelector(".slide-next");

              if (nextSlide) {
                nextSlide.classList.remove("slide-next");
                nextSlide.classList.add("slide-active");

                const img = nextSlide.querySelector("img");

                // ✅ reset styles properly
                gsap.set(nextSlide, {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: "none",
                  width: "100%",
                  height: "100%",
                });

                gsap.set(img, {
                  width: "100%",
                  height: "100%",
                });
              }

              isAnimating = false;
            },
          });
        };

        document.addEventListener("click", handleClick);

        return () => {
          document.removeEventListener("click", handleClick);
        };
      });

      return () => ctx.revert();
    },
    { dependencies: [WindoWidth], revertOnUpdate: true },
  );

  return (
    <>
    <div className="carousal_container_1">
      <div className="slider">
        <div className="slide-active">
          <img src={images.archinzaGal01.image} alt="" className="slide_img" />
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

      <div className="slider-content">
        <div className="slider-content-active">
          <h1>Luminapad</h1>
        </div>

        <div className="slider-content-next">
          <h1>PulseEar</h1>
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
