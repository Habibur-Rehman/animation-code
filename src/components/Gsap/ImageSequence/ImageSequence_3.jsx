import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AirPodsScrollAnimation = () => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const frameCount = 8;
  const targetFrame = useRef(0);
  const lerpedFrame = useRef(0);

  const currentFrame = (index) =>
    `/ImageSequence/frame_${index.toString().padStart(3, "0")}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 770;

    let loadedImages = 0;

    // ✅ Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        if (loadedImages === frameCount) {
          requestAnimationFrame(render);
        }
      };
      images.current[i] = img;
    }

    let animationFrameId;

    // ✅ Smooth Frame Rendering (LERP)
    const render = () => {
      lerpedFrame.current = gsap.utils.interpolate(
        lerpedFrame.current,
        targetFrame.current,
        0.1 // Adjusted LERP for smoother but responsive animation
      );

      const frameIndex = Math.round(lerpedFrame.current);
      if (images.current[frameIndex]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images.current[frameIndex], 0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // ✅ GSAP ScrollTrigger Animation
    gsap.to(targetFrame, {
      current: frameCount - 1,
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top 10%",
        end: "bottom bottom",
        scrub: 2,
        pin: ".img_wrapper",
        duration: 100,
        onUpdate: (self) => {
          targetFrame.current = self.progress * (frameCount - 1);
        },
      },
    });

    render(); // Start animation loop

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "100vw",
        maxHeight: "100vh",
        height: "100vh",
      }}
    />
  );
};

const ImageSequence_2 = () => {
  return (
    <div
      className="img_wrapper"
      style={{ height: "100vh", background: "#000", position: "relative", overflow: "hidden" }}
    >
      <AirPodsScrollAnimation />
    </div>
  );
};

export default ImageSequence_2;