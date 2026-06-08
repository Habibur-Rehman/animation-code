import "./carousals.scss";
import { images } from "../../source";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";
import { useRef } from "react";

const sliderImages = [
  images.archinzaGal01.image,
  images.archinzaGal02.image,
  images.archinzaGal03.image,
  images.archinzaGal04.image,
];

const sliderContent = ["Luminapad", "PulseEar", "ZenithWatch", "AeroCharge"];

const BannerV2 = () => {
  const { width: WindoWidth } = useWindowSize();

  const activeRef = useRef(null);
  const nextRef = useRef(null);
  const contentRef = useRef(null);

  // <====================== Logic 1 for on gsap scroll start =================>
  // useGSAP(() => {
  //   const ctx = gsap.context(() => {
  //     let total = sliderImages.length;

  //     const initialClip = "polygon(43% 30%, 57% 30%, 57% 70%, 43% 70%)";

  //     const fullClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  //     // set initial
  //     gsap.set(".slide-next", { clipPath: initialClip });

  //     ScrollTrigger.create({
  //       trigger: ".carousal_container_2",
  //       start: "top top",
  //       end: `+=${total * 100}%`,
  //       pin: ".carousal_wrapper",
  //       scrub: true,
  //       markers: true,

  //       onUpdate: (self) => {
  //         let progress = self.progress;

  //         // 👉 divide into segments
  //         let segment = 1 / (total - 1);

  //         let index = Math.floor(progress / segment);

  //         // clamp
  //         if (index >= total - 1) index = total - 2;

  //         // 👉 progress inside current segment (0 → 1)
  //         let localProgress = (progress - index * segment) / segment;

  //         // ✅ update images ONLY when index changes
  //         if (activeRef.current.dataset.index != index) {
  //           activeRef.current.dataset.index = index;

  //           activeRef.current.src = sliderImages[index];
  //           nextRef.current.src = sliderImages[index + 1];
  //         }

  //         // ✅ animate clip-path based on localProgress
  //         let currentClip = gsap.utils.interpolate(
  //           initialClip,
  //           fullClip,
  //           localProgress,
  //         );

  //         gsap.set(".slide-next", {
  //           clipPath: currentClip,
  //         });
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);
  // <====================== Logic 1 for on gsap scroll end =================>

  // <====================== Logic for on gsap autoplay start =================>
  useGSAP(() => {
    const ctx = gsap.context(() => {
      let total = sliderImages.length;

      const initialClip = "polygon(43% 30%, 57% 30%, 57% 70%, 43% 70%)";

      const fullClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

      let currentIndex = 0;

      // ✅ initial setup
      activeRef.current.dataset.index = 0;
      activeRef.current.src = sliderImages[0];
      nextRef.current.src = sliderImages[1];
      contentRef.current.innerText = sliderContent[0];

      gsap.set(".slide-next", { clipPath: initialClip });

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.out" },
      });

      // ✅ FIX: small delay so first animation is visible
      tl.to({}, { duration: 0.3 });

      for (let i = 0; i < total; i++) {
        tl.to(".slide-next", {
          clipPath: fullClip,
          duration: 2.5,

          onStart: () => {
            currentIndex = i;

            activeRef.current.src = sliderImages[currentIndex];
            nextRef.current.src = sliderImages[(currentIndex + 1) % total];
          },

          onComplete: () => {
            // reset mask
            gsap.set(".slide-next", {
              clipPath: initialClip,
            });

            // update content
            gsap.to(contentRef.current, {
              clipPath: "inset(100% 0% 0% 0%)",
              duration: 0.7,
              onComplete: () => {
                contentRef.current.innerText =
                  sliderContent[(currentIndex + 1) % total];

                gsap.fromTo(
                  contentRef.current,
                  { clipPath: "inset(100% 0% 0% 0%)" },
                  {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 0.7,
                  },
                );
              },
            });
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  // <====================== Logic for on gsap autoplay end =================>

  // <====================== Logic 2 for on gsap scroll start =================>
  // useGSAP(() => {
  //   const ctx = gsap.context(() => {
  //     let total = sliderImages.length;

  //     const initialClip = "polygon(43% 30%, 57% 30%, 57% 70%, 43% 70%)";

  //     const fullClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  //     const overlap = 0.3; // 🔥 control this (0.2–0.5 best)

  //     gsap.set(".slide-next", { clipPath: initialClip });

  //     ScrollTrigger.create({
  //       trigger: ".carousal_container_2",
  //       start: "top top",
  //       end: `+=${total * 100}%`,
  //       pin: ".carousal_wrapper",
  //       scrub: true,
  //       markers: true,

  //       onUpdate: (self) => {
  //         let progress = self.progress;

  //         let baseSegment = 1 / (total - 1);

  //         // 🔥 reduce segment so next starts early
  //         let effectiveSegment = baseSegment * (1 - overlap);

  //         let index = Math.floor(progress / effectiveSegment);

  //         // if (index >= total - 1) index = total - 2;
  //         if (index >= total) index = total - 1;

  //         // 🔥 local progress with overlap
  //         let localProgress =
  //           (progress - index * effectiveSegment) / baseSegment;

  //         // clamp 0 → 1
  //         localProgress = Math.max(0, Math.min(1, localProgress));

  //         // smooth easing (optional but recommended)
  //         localProgress = gsap.parseEase("power2.out")(localProgress);

  //         // update images
  //         if (activeRef.current.dataset.index != index) {
  //           activeRef.current.dataset.index = index;

  //           activeRef.current.src = sliderImages[index];
  //           nextRef.current.src = sliderImages[index + 1];

  //           gsap.to(contentRef.current, {
  //             // y: 20,
  //             // opacity: 0,
  //             clipPath: "inset(100% 0% 0% 0%)",
  //             // clipPath: "polygon(0 0%, -70% 0, 100% 100%, 0% 100%)",
  //             duration: 0.35,
  //             onComplete: () => {
  //               contentRef.current.innerText = sliderContent[index];

  //               gsap.fromTo(
  //                 contentRef.current,
  //                 {
  //                   // y: -20,
  //                   // opacity: 0,
  //                   clipPath: "inset(100% 0% 0% 0%)",
  //                   // clipPath: "polygon(0 0%, -70% 0, 100% 100%, 0% 100%)",
  //                 },
  //                 {
  //                   // y: 0,
  //                   // opacity: 1,
  //                   duration: 0.35,
  //                   clipPath: "inset(0% 0% 0% 0%)",
  //                   // clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0% 100%)",
  //                 },
  //               );
  //             },
  //           });
  //         }

  //         // animate clip
  //         let currentClip = gsap.utils.interpolate(
  //           initialClip,
  //           fullClip,
  //           localProgress,
  //         );

  //         gsap.set(".slide-next", {
  //           clipPath: currentClip,
  //         });
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);
  // <====================== Logic 2 for on gsap scroll end =================>

  return (
    <>
      <div className="carousal_container_3">
        <div className="carousal_wrapper">
          <div className="slider">
            {/* ACTIVE IMAGE */}
            <div className="slide-active">
              <img ref={activeRef} alt="" className="slide_img" />
            </div>

            {/* NEXT IMAGE */}
            <div className="slide-next">
              <div className="slide-next-img">
                <img ref={nextRef} alt="" className="slide_img" />
              </div>
            </div>
          </div>

          <div className="slider-content">
            <div className="slider-content-active">
              <h1 ref={contentRef}></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="carousal3_text_container">
        <div className="my_container">
          <h1>Autoplay or Scroll Based Animation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            dignissimos mollitia cumque tempora? Sequi accusantium corporis
            numquam laboriosam nisi a, deleniti harum saepe, odio blanditiis
            laborum quas voluptate amet. Sed!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            soluta ipsa atque in fuga eligendi accusamus aliquam voluptate quam
            sapiente neque id architecto illum magni veniam quidem, fugiat
            nostrum iure eos ad quaerat, quo quisquam necessitatibus ab?
            Expedita necessitatibus corporis quidem ab cupiditate soluta,
            voluptatem tenetur alias, illum enim, temporibus libero aperiam
            consequatur debitis. Ipsum laboriosam fuga exercitationem esse velit
            sint quas accusamus sunt officia? Sapiente sed minus vitae ut sint
            deleniti quaerat, error at ad ea libero quis esse sequi nihil ullam
            placeat mollitia perferendis incidunt quisquam beatae
            exercitationem. Sequi eius consequatur aliquid praesentium et
            architecto ut, voluptatibus aperiam aspernatur similique? Debitis
            aliquid accusantium rerum laborum mollitia. Architecto alias harum
            qui doloribus earum nihil esse, saepe voluptates, tempora magnam
            aliquam iure eius nemo sunt vero, similique corrupti ipsum obcaecati
            temporibus! Atque recusandae qui quod eius quo non, rem possimus
            repellat cumque voluptate voluptas libero accusantium. In tempora
            odio illo tempore labore, minima cumque molestiae vel quasi veniam
            sint excepturi ex? Expedita quam suscipit debitis a saepe nihil
            facere aliquam, accusamus veniam, autem fugit omnis qui vitae
            repudiandae est amet quisquam animi fuga ratione iusto aliquid
            repellendus? Quae earum quisquam officiis, provident deleniti esse
            harum, hic dolorum non nulla voluptatum explicabo. Unde nobis sunt
            fugit suscipit laudantium perspiciatis totam aspernatur obcaecati
            ab? Minima asperiores soluta unde laboriosam recusandae ipsam nobis
            vel autem in natus odit quasi illo hic explicabo sapiente voluptates
            aut porro, vitae obcaecati. Nisi totam quisquam doloribus obcaecati
            facere repellendus aliquam commodi, quas praesentium ex dolorem
            minus sint, eveniet incidunt. Laborum sapiente necessitatibus,
            consequuntur architecto corrupti ipsam error sit aliquid molestias,
            optio, ducimus nihil? Debitis voluptates nesciunt libero laudantium
            quas saepe, architecto amet deleniti possimus vitae distinctio
            tenetur numquam commodi officia est atque voluptate! Sequi magni, ex
            fuga error similique quo itaque natus ipsum laboriosam aliquid
            repudiandae asperiores tempore accusantium exercitationem ratione
            quaerat eum ut est. Qui corporis, accusantium maxime consequuntur
            explicabo corrupti facere delectus fugit voluptatibus! Non aliquid
            eius sit, atque, laudantium quam qui obcaecati impedit vitae maxime
            labore voluptatum nisi quas iste vero illo debitis ad adipisci
            minima veniam totam iure? Eaque ipsam, tempora unde pariatur
            corporis ad molestiae doloremque repellat quaerat consectetur
            blanditiis vero saepe dolores veniam veritatis architecto? Nemo
            fugit quis, nesciunt, amet rem voluptate sunt laborum repudiandae
            accusamus libero facere iste obcaecati quam illo voluptatem animi
            dolor vel, aperiam quaerat voluptas error esse molestiae unde odio.
            Iste a hic porro? Aut adipisci iste magni placeat neque. Vitae
            voluptate error quo porro, quibusdam accusamus nesciunt itaque
            voluptatem doloribus recusandae alias explicabo possimus dolore,
            assumenda dignissimos similique nisi nostrum molestias aspernatur
            incidunt quasi distinctio adipisci atque. Nulla ad doloremque iusto
            veritatis cumque rerum impedit corporis dolore quae tempore velit
            expedita placeat, dignissimos saepe odio explicabo dolorum vero
            minima? Provident debitis, odio ipsum mollitia corporis dolorem
            temporibus obcaecati? Voluptatibus ducimus natus cupiditate delectus
            tempore maxime dolor consequuntur deserunt. Adipisci facere vel
            autem cumque corporis id incidunt itaque! Exercitationem, omnis
            quia. Enim autem repellat, quos voluptas, inventore earum beatae
            asperiores mollitia numquam, sunt sequi laboriosam consequatur.
            Corrupti, porro! Exercitationem ad accusantium esse! Illum unde iure
            illo vel quas at tempora suscipit molestias quibusdam commodi ut,
            non voluptatem cupiditate expedita eveniet excepturi laudantium
            cumque quasi soluta dolores possimus eligendi recusandae ipsa. Animi
            quas accusamus minima, sed dolorem error, optio nesciunt praesentium
            corporis culpa perspiciatis atque maxime vero excepturi facilis nam
            adipisci, rerum commodi omnis consequuntur consequatur fuga voluptas
            perferendis. Explicabo error ullam, quam saepe mollitia veniam quod
            illum cupiditate optio quas nisi, temporibus impedit, consectetur
            nihil minus ad vel alias similique quia obcaecati quasi nobis
            commodi dolor. Repudiandae facilis distinctio nostrum, minus
            quibusdam perspiciatis exercitationem. Maiores, delectus fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            dignissimos mollitia cumque tempora? Sequi accusantium corporis
            numquam laboriosam nisi a, deleniti harum saepe, odio blanditiis
            laborum quas voluptate amet. Sed!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            dignissimos mollitia cumque tempora? Sequi accusantium corporis
            numquam laboriosam nisi a, deleniti harum saepe, odio blanditiis
            laborum quas voluptate amet. Sed!
          </p>
        </div>
      </div>
    </>
  );
};

export default BannerV2;
