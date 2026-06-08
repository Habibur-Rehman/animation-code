import "./carousals.scss";
import { images } from "../../source";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
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
  "AuraBearm",
];

const sliderImages = [
  images.archinzaGal01.image,
  images.archinzaGal02.image,
  images.archinzaGal03.image,
  images.archinzaGal04.image,

  images.archinzaGal01.image,
  images.archinzaGal02.image,
  images.archinzaGal03.image,
  images.archinzaGal04.image,
];

const BannerV1 = () => {
  const { width: WindoWidth } = useWindowSize();

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        let currentImageIndex = 2;
        let currentContentIndex = 1;
        const totalImages = 10;
        let isAnimating = false;

        function splitTextIntoSpans(selector) {
          let elements = document.querySelector(selector);
          elements.forEach((element) => {
            let text = element.innerText;
            let splitText = text
              .split("")
              .map(function (char) {
                return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
              })
              .join("");
            element.innerHTML = splitText;
          });
        }

        gsap.to(".slide-next-img", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power3.out",
          delay: 1,
        });

        document.addEventListener("click", function () {
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
                stagger: 0.05,
                ease: "power3.out",
                duration: 0.5,
              });
            },
          });

          const nextContent = document.querySelector(".slider-conten-next");
          nextContent.classList.remove("slider-content-next");
          nextContent.style.top = "0";

          currentContentIndex = (currentContentIndex + 1) % totalImages;
          const nextContentText = sliderContent[currentContentIndex];
          const newContentHTML = `<div class="slider-content-next" style="top: 12.5em;"><h1>${nextContentText}</h1></div>`;
          document
            .querySelector(".slider-content")
            .insertAdjacentHTML("beforeend", newContentHTML);

          currentImageIndex = (currentImageIndex % totalImages) + 1;

          // <img src="./assets/${currentImageIndex}.jpg" alt="" />
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
          gsap.to(".slider .slider-next:last-child .slide-next-img", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
          });

          const slideNextImg = document.querySelector(".slide-next-img");
          gsap.to(slideNextImg, {
            width: "100vw",
            height: "100vh",
            duration: 2,
            ease: "power3.out",
            onComplete: () => {
              const currenActiveSlide = document.querySelector(".slide-active");
              if (currenActiveSlide) {
                currenActiveSlide.parentNode.removeChild(currenActiveSlide);
              }

              const nextSlide = document.querySelector(".slide-next");
              if (nextSlide) {
                nextSlide.classList.remove("slide-next");
                nextSlide.classList.add("slide-active");

                const nextSlideImg = nextSlide.querySelector(".slide-next-img");
                if (nextSlide) {
                  nextSlideImg.classList.remove("slide-next-img");
                }
              }

              setTimeout(() => {
                isAnimating = false;
              }, 500);
            },
          });
        });
      });

      return () => ctx.revert();
    },
    { dependencies: [WindoWidth], revertOnUpdate: true },
  );

  return (
    <>
      <div className="slider">
        <div className="slide-active">
          <img
            src={images.archinzaGal01.image}
            alt={images.archinzaGal01.alt}
            className="slide_img"
          />
        </div>
        <div className="slide-next">
          <div className="slide-next-img">
            <img
              src={images.archinzaGal02.image}
              alt={images.archinzaGal02.alt}
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
    </>
  );
};

export default BannerV1;
