// function setBackgroundHeight() {
//   const image = document.querySelector(".blog_banner_custom");
//   // const background = document.querySelector(".background-img");
//   const background = document.querySelector(".single-entry-wrap");

//   if (image && background) {
//     background.style.marginTop = `${image.getBoundingClientRect().height}px`;
//   }
// }

// const image = document.querySelector(".blog_banner_custom");

// if (image) {
//   if (image.complete) {
//     setBackgroundHeight();
//   } else {
//     image.addEventListener("load", setBackgroundHeight, { once: true });
//   }

//   window.addEventListener("resize", setBackgroundHeight);
//   console.log("Event listener added for window resize");
// }

// gsap start
// window.addEventListener("load", () => {
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const banner = document.querySelector(".single-billboard");
  const images = banner?.querySelectorAll(".blog_banner_custom");
  // All three copies (desktop / iPad / mobile); only the visible one shows via CSS
  const keyTakeAways = banner?.querySelectorAll(".keyTakeAways");
  const article = document.querySelector(".single-entry-wrap");

  if (!banner || !images?.length || !keyTakeAways?.length || !article) {
    return;
  }

  // Wrapper carries the offset, so the pinned article never has its margin touched
  let offsetWrap = article.parentElement.classList.contains("entry-offset-wrap")
    ? article.parentElement
    : null;

  if (!offsetWrap) {
    offsetWrap = document.createElement("div");
    offsetWrap.className = "entry-offset-wrap";
    article.parentNode.insertBefore(offsetWrap, article);
    offsetWrap.appendChild(article);
  }

  const getActiveImageHeight = () => {
    const activeImage = [...images].find(
      (img) => img.getBoundingClientRect().height > 0
    );
    return activeImage?.getBoundingClientRect().height || 0;
  };

  // Inline !important beats any stylesheet rule (iPad/mobile overrides)
  const setCardOpacity = (value) => {
    keyTakeAways.forEach((card) => {
      card.style.setProperty("opacity", value, "important");
      card.style.setProperty(
        "visibility",
        value > 0.01 ? "visible" : "hidden",
        "important"
      );
    });
  };

  const clearCardStyles = () => {
    keyTakeAways.forEach((card) => {
      card.style.removeProperty("opacity");
      card.style.removeProperty("visibility");
    });
  };

  const mm = gsap.matchMedia();

  // Desktop + iPad
   mm.add("(min-width: 768px)", () => {
    const state = { opacity: 0 };
    setCardOpacity(0);

    gsap.set(images, { scale: 1, transformOrigin: "center center" });

    // Offset below the banner, and pull the page back up by the same amount
    // so there is no empty gap at the bottom once the article slides up.
    const applyOffsets = () => {
      const h = getActiveImageHeight();
      offsetWrap.style.marginTop = h + "px";
      offsetWrap.style.marginBottom = -h + "px";
    };
    applyOffsets();

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: offsetWrap,
        start: () => "top " + getActiveImageHeight(),
        end: () => "+=" + window.innerHeight * 2,  // total scroll distance for BOTH phases
        scrub: 1.2,                                // smoothing: higher = smoother/laggier
        pin: article,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefreshInit: applyOffsets,
      },
    });

    timeline
      // Phase 1: zoom + fade in (timeline 0 -> 1)
      .to(images, { scale: 1.35, duration: 1 }, 0)
      .to(
        state,
        {
          opacity: 1,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => setCardOpacity(state.opacity),
        },
        0
      )
      // Phase 2: article slides up over the banner (timeline 1 -> 2.5)
      .fromTo(
        article,
        { y: 0 },
        {
          y: () => -getActiveImageHeight(),
          duration: 2.5,
          ease: "power1.inOut",
        },
        1
      );

    return () => {
      timeline.scrollTrigger?.kill(true);
      timeline.kill();
      clearCardStyles();
      offsetWrap.style.removeProperty("margin-top");
      offsetWrap.style.removeProperty("margin-bottom");
      gsap.set([...images, article], { clearProps: "all" });
    };
  });

  // Mobile: no GSAP animation
  mm.add("(max-width: 767px)", () => {
    clearCardStyles();
    offsetWrap.style.removeProperty("margin-top");
    offsetWrap.style.removeProperty("margin-bottom");
    gsap.set(images, { clearProps: "transform" });
  });

  // Re-measure after images load and on rotation
  images.forEach((img) => {
    if (!img.complete) img.addEventListener("load", () => ScrollTrigger.refresh());
  });
  window.addEventListener("orientationchange", () => {
    setTimeout(() => ScrollTrigger.refresh(), 300);
  });
});
// gsap end
