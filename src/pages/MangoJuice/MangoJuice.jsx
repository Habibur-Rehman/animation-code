import React, { useRef, useEffect, useState } from "react";
import "./mangoJuice.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MangoJuiceComp from "../../components/MangoJuiceComp/MangoJuiceComp";

gsap.registerPlugin(ScrollTrigger);

const MangoJuice = () => {
  const canvasRef = useRef(null);
  const frameCount = 192; // Total number of frames
  const images = useRef([]); // Store preloaded images
  const imageSeq = { frame: 0 }; // Track current frame
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track loading status

  // Preload all images
  // useEffect(() => {
  //   let loadedImages = 0;
  //   for (let i = 1; i <= frameCount; i++) {
  //     const img = new Image();
  //     img.src = `/mango-juice/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
  //     img.onload = () => {
  //       loadedImages++;
  //       if (loadedImages === frameCount) {
  //         setImagesLoaded(true); // All images loaded
  //       }
  //     };
  //     img.onerror = (e) => console.error("Error loading image:", img.src, e);
  //     images.current[i - 1] = img;
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!imagesLoaded) return; // Wait for images to load

  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");

  //   // Get image dimensions for canvas sizing
  //   const img = images.current[0];
  //   canvas.width = img.naturalWidth;
  //   canvas.height = img.naturalHeight;

  //   // Function to render the current frame
  //   const render = () => {
  //     if (images.current[imageSeq.frame]) {
  //       context.clearRect(0, 0, canvas.width, canvas.height);
  //       context.drawImage(
  //         images.current[imageSeq.frame],
  //         0,
  //         0,
  //         canvas.width,
  //         canvas.height,
  //       );
  //     }
  //   };

  //   // GSAP ScrollTrigger animation
  //   gsap.to(imageSeq, {
  //     frame: frameCount - 1, // End at last frame
  //     snap: "frame",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".mango_wrapper",
  //       start: "top top",
  //       end: "+=3000",
  //       scrub: 1,
  //       pin: ".mango_wrapper",
  //       markers: false,
  //     },
  //     onUpdate: render,
  //   });

  //   // Title animation alongside scroll
  //   gsap.to(".mango_title", {
  //     scrollTrigger: {
  //       trigger: ".mango_wrapper",
  //       start: "top top",
  //       end: "+=3000",
  //       scrub: 1,
  //     },
  //     scale: 1.3,
  //     opacity: 0,
  //     ease: "power1.inOut",
  //     duration: 1,
  //   });

  //   render(); // Initial frame render
  // }, [imagesLoaded]);

  return (
    <>
      {/* <div className="mango_juice_container">
        <div className="mango_wrapper">
          {imagesLoaded && <h1 className="mango_title">Mango Juice</h1>}
          {!imagesLoaded && (
            <p className="loading_text">Loading animation...</p>
          )}
          <canvas
            ref={canvasRef}
            className="mango_canvas"
            style={{
              width: "100%",
              display: imagesLoaded ? "block" : "none",
            }}
          />
        </div>
      </div> */}

      {/* Mango Juice Animation Component Start */}
      <div className="mango_sec1">
        <MangoJuiceComp />
      </div>
      {/* Mango Juice Animation Component End */}

      <div className="mango_sec2">
        <div>
          <p>test 1</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            omnis mollitia at, alias, incidunt quis eaque est tempore commodi
            animi distinctio, suscipit molestias quia error debitis dolor vitae
            nobis veritatis odio aliquid iste optio cupiditate voluptates! Qui
            nostrum ipsa voluptas exercitationem aliquam id unde facilis sed
            repellat incidunt eveniet, cumque fuga cupiditate tenetur esse
            veritatis maiores expedita ipsum sit? Vero ratione ullam corporis? A
            officia aliquam nam corrupti est, suscipit minima eos corporis
            aspernatur ullam deleniti omnis nihil neque, iste sequi at alias
            accusamus? Id delectus deleniti illum vitae accusantium numquam,
            nemo minima mollitia excepturi deserunt neque expedita architecto
            odio laboriosam dicta. Necessitatibus nisi enim beatae iure alias
            unde animi fuga velit similique et? Exercitationem magni id labore
            deserunt porro? Eligendi id nemo quo consectetur odit animi soluta
            quisquam ea quaerat recusandae similique accusamus maxime sapiente
            impedit iure quibusdam, officia molestiae. Iste quod voluptates
            beatae dolor accusamus earum reiciendis asperiores, doloribus
            recusandae, incidunt molestias repellat optio ex tenetur quo nisi
            maiores, mollitia illum. Facere iste nesciunt nisi nobis, at
            voluptates quo eius ea deleniti maiores explicabo laudantium dolore,
            nulla modi pariatur perferendis similique labore, assumenda
            laboriosam. Aliquam laborum aspernatur quos sapiente quibusdam
            suscipit non asperiores dolorum, maiores, porro vero corporis
            praesentium ea ullam voluptate! Maxime laudantium architecto
            dignissimos perspiciatis illo nam, cum temporibus suscipit dicta
            voluptates tenetur, consectetur aliquid deserunt quam laboriosam rem
            explicabo autem, atque totam iusto. Deleniti pariatur aperiam quasi
            exercitationem perferendis consequuntur quae possimus magni minus
            modi quia, quas nihil distinctio, voluptate aliquid beatae quibusdam
            dignissimos itaque, ipsa nam delectus nisi obcaecati expedita!
            Ducimus excepturi explicabo rerum at eum quam, quasi amet odit modi
            illum velit, blanditiis ad iure laudantium vitae quo sapiente
            adipisci corrupti labore eaque hic quas. Itaque omnis accusamus
            praesentium quae cumque quam sequi iste quia, numquam hic odio esse
            dolorem, assumenda a quaerat consectetur mollitia? Ducimus suscipit
            aut nobis error. Eum, reiciendis exercitationem? Doloremque hic ut
            maxime aut doloribus obcaecati nemo adipisci, repellendus pariatur
            necessitatibus consectetur vero soluta porro dolores placeat illum
            cupiditate fuga quod ipsum inventore libero quidem repudiandae
            praesentium? Recusandae unde dolore omnis molestiae veritatis
            reiciendis repellat perferendis fugit labore incidunt quam, ipsa
            eius esse! Consequuntur numquam alias impedit eaque quasi recusandae
            laborum inventore quos. Saepe porro, laboriosam molestiae,
            architecto sed molestias ea cumque optio expedita ab unde illo illum
            odit neque dicta sapiente corrupti quidem? Consectetur, saepe,
            corporis fuga quaerat rem nobis ducimus inventore nulla consequatur
            ab quae? Aut corrupti unde beatae inventore delectus ad harum
            nesciunt repudiandae, blanditiis excepturi, repellat nam dolorum
            aliquam at tempore voluptatem! Omnis assumenda adipisci magnam dicta
            obcaecati quia minus illo voluptates unde id reprehenderit dolor,
            exercitationem alias, sed nihil accusantium deserunt ipsa iusto
            architecto. Animi nam illo aliquid quas, voluptatem vero porro,
            aspernatur reiciendis praesentium natus, quis vel. Molestiae
            dignissimos assumenda ipsam eveniet iusto dicta explicabo esse quas
            vitae accusantium nostrum error quae quis architecto praesentium nam
            dolore, nesciunt quia voluptate ad tempora? Laboriosam dolore
            recusandae non similique dolor blanditiis, explicabo consectetur
            accusantium eveniet quo consequatur corporis cum voluptas, iure,
            alias rem ducimus quod!
          </p>
        </div>
      </div>
    </>
  );
};

export default MangoJuice;
