import React, { useRef, useEffect, useState } from "react";
import "./imageSequence.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageSequence = () => {
  const canvasRef = useRef(null);
  const frameCount = 8; // Number of frames in the sequence
  const images = useRef([]); // Store preloaded images
  const imageSeq = { frame: 0 }; // Track current frame
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track loading status

  // Preload images
  useEffect(() => {
    let loadedImages = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `/ImageSequence/frame_${i.toString().padStart(3, "0")}.png`; // Adjust path if needed
      img.onload = () => {
        loadedImages++;
        if (loadedImages === frameCount) {
          setImagesLoaded(true); // All images loaded
        }
      };
      img.onerror = (e) => console.error("Error loading image:", img.src, e);
      images.current[i] = img;
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return; // Wait for images to load

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;

    // Function to render the current frame
    const render = () => {
      if (images.current[imageSeq.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          images.current[imageSeq.frame],
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
    };

    // GSAP ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        pin: ".img_wrapper",
        ease: "power2.out",
        duration: 4,
        markers: true,
      },
    });

    tl.fromTo(
        imageSeq,
        { frame: 0 }, // Start from frame 0
        {
          frame: frameCount - 1, // End at last frame
          snap: "frame",
          ease: "power2.out",
          duration: 4, // Adjust for smoothness
          onUpdate: render,
          stagger: 2, // Keeps animation smoother
        }
      );

    tl.fromTo(
      ".title",
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      },
      {
        scale: 1.5,
        opacity: 0,
        ease: "power2.out",
        duration: 20,
        scrub: 1.5,
      }
    );

    // gsap.to(imageSeq, {
    //   frame: frameCount - 1,
    //   snap: "frame",
    //   //   ease: "power2.out",
    //   //   duration: 4,
    //   //   stagger: 2,
    //   scrollTrigger: {
    //     trigger: canvas,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 1.5,
    //     pin: ".img_wrapper",
    //     ease: "power2.out",
    //     duration: 4,
    //     // stagger: 2,
    //     markers: true,
    //   },
    //   onUpdate: render,
    // });

    render(); // Initial frame render
  }, [imagesLoaded]);

  return (
    <>
      <div className="img_wrapper">
        <p className="title">AirPods Pro </p>
        {!imagesLoaded && <p>Loading animation...</p>}
        <canvas ref={canvasRef} style={{ width: "100%", height: "auto" }} />
      </div>
    </>
  );
};

export default ImageSequence;
