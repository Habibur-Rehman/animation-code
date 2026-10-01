import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./togglehead.scss";

const DEFAULT_ICONS = {
  c: "🍒",
  m: "🌈",
  a: "👻",
  x: "⚡",
  s: "✨",
  r: "🚀",
  ".": "💣",
};

// strings = plain text, {icon} = letter that becomes an icon, {circle} = pill "o"
const LINES = [
  ["we"],
  [{ icon: "c" }, "reate"],
  ["me", { icon: "m" }, "or", { icon: "a" }, "ble"],
  ["e", { icon: "x" }, "perience", { icon: "s" }],
  ["f", { circle: true }, "r b", { icon: "r" }, "ands", { icon: "." }],
];

export default function HeroEmojisGsap({ icons = DEFAULT_ICONS }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const chars = hero.querySelectorAll(".ch-in");
      const iconItems = hero.querySelectorAll(".line-icon");
      const circles = hero.querySelectorAll(".circle");

      // --------------------------------------------------
      // INITIAL CHARACTER DROP-IN
      // --------------------------------------------------

      gsap.set(chars, {
        yPercent: -101,
      });

      gsap.to(chars, {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.05,
      });

      // --------------------------------------------------
      // ICON LETTER -> SVG/EMOJI LOOP
      // --------------------------------------------------

      iconItems.forEach((item, index) => {
        const inner = item.querySelector(".inner");
        const icon = item.querySelector(".icon");

        if (!inner || !icon) return;

        // Initially show the letter
        gsap.set(inner, {
          opacity: 1,
        });

        gsap.set(icon, {
          opacity: 0,
        });

        // Every second icon starts 0.5s later
        const delay = index % 2 === 1 ? 0.5 : 0;

        const tl = gsap.timeline({
          repeat: -1,
          delay,
        });

        // Letter stays visible
        tl.to(inner, {
          opacity: 1,
          duration: 0.5,
          ease: "none",
        });

        // Letter fades out
        tl.to(inner, {
          opacity: 0,
          duration: 0.4,
          ease: "none",
        });

        // Icon fades in
        tl.to(icon, {
          opacity: 1,
          duration: 0.4,
          ease: "none",
        });

        // Icon stays visible
        tl.to(icon, {
          opacity: 1,
          duration: 0.5,
          ease: "none",
        });

        // Icon fades out
        tl.to(icon, {
          opacity: 0,
          duration: 0.4,
          ease: "none",
        });

        // Letter comes back
        tl.to(inner, {
          opacity: 1,
          duration: 0.4,
          ease: "none",
        });
      });

      // --------------------------------------------------
      // EXPANDING O / CIRCLE
      // --------------------------------------------------

      circles.forEach((circle) => {
        const isDesktop = window.innerWidth >= 750;

        const normalWidth = isDesktop ? "7.71vw" : "8.46vw";
        const expandedWidth = isDesktop
          ? "calc(7.71vw * 3)"
          : "calc(8.46vw * 3)";

        gsap.set(circle, {
          width: normalWidth,
        });

        gsap.to(circle, {
          width: expandedWidth,
          duration: 0.8,
          delay: 1,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          repeatDelay: 1.2,
        });
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section className="heroEmojis" ref={heroRef}>
      <div className="heroEmojis-content">
        <h1
          className="heroEmojis-title"
          aria-label="we create memorable experiences for brands."
        >
          {LINES.map((parts, li) => {
            let ci = 0;

            return (
              <span className="line" key={li} aria-hidden="true">
                {parts.map((part, pi) => {
                  if (typeof part === "string") {
                    return [...part].map((ch, k) => (
                      <span className="ch" key={`${pi}-${k}`}>
                        <span className="ch-in">
                          {ch === " " ? "\u00a0" : ch}
                        </span>
                      </span>
                    ));
                  }

                  if (part.circle) {
                    return (
                      <span className="ch" key={pi}>
                        <span className="ch-in">
                          <span className="line-icon">
                            <span className="circle" />
                          </span>
                        </span>
                      </span>
                    );
                  }

                  return (
                    <span className="ch" key={pi}>
                      <span className="ch-in">
                        <span className="line-icon">
                          <span className="inner">
                            {part.icon}
                          </span>

                          <span className="icon">
                            {icons[part.icon]}
                          </span>
                        </span>
                      </span>
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>
      </div>
    </section>
  );
}