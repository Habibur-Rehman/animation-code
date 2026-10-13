function setBackgroundHeight() {
  const image = document.querySelector(".blog_banner_custom");
  // const background = document.querySelector(".background-img");
  const background = document.querySelector(".single-entry-wrap");

  if (image && background) {
    background.style.marginTop = `${image.getBoundingClientRect().height}px`;
  }
}

const image = document.querySelector(".blog_banner_custom");

if (image) {
  if (image.complete) {
    setBackgroundHeight();
  } else {
    image.addEventListener("load", setBackgroundHeight, { once: true });
  }

  window.addEventListener("resize", setBackgroundHeight);
  console.log("Event listener added for window resize");
}

// gsap start

// document.addEventListener("DOMContentLoaded", () => {
//     if (typeof gsap === "undefined" ||
//         typeof ScrollTrigger === "undefined") {
//       return;
//     }

//     gsap.registerPlugin(ScrollTrigger);

//     const banner = document.querySelector(".single-billboard");
//     const images = banner?.querySelectorAll(".blog_banner_custom");
//     const keyTakeAways = banner?.querySelector(".keyTakeAways");
//     const article = document.querySelector(".single-entry-wrap");

//     if (!banner || !images?.length || !keyTakeAways || !article) {
//       return;
//     }

//     gsap.set(images, {
//       scale: 1,
//       transformOrigin: "center center"
//     });

//     gsap.set(keyTakeAways, {
//       autoAlpha: 0
//     });

//     gsap.set(article, {
//       y: 0
//     });

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: banner,
//         start: "top top",
//         // end: () => `+=${window.innerHeight * 2.5}`,
//         end: () => `+=${window.innerHeight * 1}`,
//         scrub: 1,
//         pin: true,
//         pinSpacing: false,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         markers: true
//       }
//     });

//     // Step 1: Zoom the responsive banner image.
//     timeline.to(images, {
//       scale: 1.35,
//       duration: 1.2,
//       ease: "none"
//     });

//     // Step 2: Reveal Key Takeaways.
//     timeline.to(keyTakeAways, {
//       autoAlpha: 1,
//       duration: 0.8,
//       ease: "none"
//     });

//     // Step 3: Bring the article upward over the banner.
//     // timeline.fromTo(
//     //   article,
//     //   {
//     //     // y: () => window.innerHeight
//     //     y: () => window.innerHeight
//     //   },
//     //   {
//     //     y: 0,
//     //     duration: 1.5,
//     //     ease: "none"
//     //   }
//     // );

//     window.addEventListener("load", () => {
//       ScrollTrigger.refresh();
//     });

//     window.addEventListener("resize", () => {
//       ScrollTrigger.refresh();
//     });
//   });

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const banner = document.querySelector(".single-billboard");
  const images = banner?.querySelectorAll(".blog_banner_custom");
  const keyTakeAways = banner?.querySelector(".keyTakeAways");
  const article = document.querySelector(".single-entry-wrap");

  if (!banner || !images?.length || !keyTakeAways || !article) {
    return;
  }

  // Pre-set positions using percentage-based transforms for smooth hardware acceleration
  gsap.set(images, { scale: 1, transformOrigin: "center center" });
  gsap.set(keyTakeAways, { autoAlpha: 0 });
  gsap.set(article, { yPercent: 100 }); // Place article exactly 100vh below viewport start

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: banner,
      start: "top top",
      end: "+=100%", 
      scrub: true, 
      //   pin: true,
      pinSpacing: true, // Enables proper layout calculation without double-scroll jitter
      invalidateOnRefresh: true,
      markers: true, 
    },
  });

  // STEP 1: Zoom banner and reveal keyTakeAways simultaneously
  timeline
    .to(images, {
      scale: 1.35,
      duration: 1,
      ease: "none",
    })
    .to(
      keyTakeAways,
      {
        autoAlpha: 1,
        duration: 2,
        ease: "power2.inOut",
      },
      "<"
    );

  // STEP 2: Slide article smoothly over the fixed banner
  timeline.to(article, {
    yPercent: 0,
    duration: 1.5,
    ease: "none",
  });
});
// gsap end
