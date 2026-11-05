// npm i gsap   (Lenis smooth scroll stays set up in App.jsx)
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { badgeTogglehead, phoneTogglehead } from "../../source";
import "./sectionStackV5.scss";

gsap.registerPlugin(ScrollTrigger);

// Each section: enters from the TOP of the screen, rests in the middle,
// then travels DOWN and out of the BOTTOM while its title zooms in.
const ENTER = 1; // scroll units: top -> middle
const HOLD = 0.6; // rest in the middle (readable)
const EXIT = 1.4; // middle -> bottom, title zooms
const OVERLAP = 0.8; // next section starts entering this long after the previous starts exiting
const STEP = OVERLAP + ENTER + HOLD;
const TITLE_ZOOM = 4; // final title scale as it leaves the bottom
const LAST_EXITS = true; // set false to let the last section stay on screen

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

// Layout is a grid now: pills (left) | image (center) | paragraph (right).
// Only the title and badge x-positions are per-section.
const SECTIONS = [
  {
    title: "Marketing",
    titleX: 860.5,
    badgeX: 1260,
    text: LOREM,
    pills: ["Branding", "Strategy", "Social Media", "Campaign Management"],
  },
  {
    title: "Studios",
    titleX: 861.5,
    badgeX: 1259,
    text: "We turn ideas into powerful visual stories. From big-screen campaigns to bite-sized social content, our Studios team handles every stage of production—from concept and shoot to edit, motion and final delivery.",
    pills: [
      "TVC / DVC",
      "Short Form Video",
      "Production",
      "Post Production Services",
    ],
  },
  {
    title: "Digital",
    titleX: 860.5,
    badgeX: 1259,
    text: LOREM,
    pills: [
      "Web Design",
      "Marketplace Management",
      "Search Engine Optimization",
      "UI/UX Development & XR",
    ],
  },
  {
    title: "Paid Media",
    titleX: 860.5,
    badgeX: 1257,
    text: "Drive targeted reach and measurable results through strategic paid media campaigns. We help brands connect with the right audiences across channels, optimise ad performance, and maximise every media investment.",
    pills: [
      "Media Planning & BUYING",
      "Programmatic Ads",
      "BRANDING & PERFORMANCE CAMPAIGNS",
      "Display Ads",
    ],
  },
  {
    title: "Creators Network",
    titleX: 861,
    badgeX: 1259,
    text: LOREM,
    pills: [
      "Influencer Tie-ups",
      "Creator Mentoring",
      "Community Collaborations",
      "Celebrity Partnerships",
    ],
  },
];

// Figma px -> responsive length (1720px design width = 100vw)
const u = (n) => `calc(${n} * var(--u))`;

export default function SectionStackV5() {
  const wrap = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".th-panel");
      const n = panels.length;
      const extras = (p) => p.querySelectorAll(".th-pill, .th-text, .th-badge");

      // a section's own content steps (title line, image, pills, text, badge)
      const reveal = (tl, p, at) => {
        tl.fromTo(
          p.querySelector(".th-title-line"),
          // { yPercent: 110 },
          { yPercent: 0 },
          { yPercent: 0, duration: 0.7 },
          at
        )
          .fromTo(
            p.querySelector(".th-img"),
            { opacity: 0.9, scale: 0.85, y: 40 },
            { opacity: 0.9, scale: 1, y: 0, duration: 0.8 },
            at
          )
          .fromTo(
            p.querySelectorAll(".th-pill"),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 },
            at + 0.3
          )
          .fromTo(
            p.querySelector(".th-text"),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
            at + 0.5
          )
          .fromTo(
            p.querySelector(".th-badge"),
            { opacity: 0, scale: 0.6, rotate: -90 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.6 },
            at + 0.6
          );
      };

      // section travels to the bottom edge and out of view; title zooms the whole way
      const exit = (tl, p, at) => {
        tl.to(p, { yPercent: 120, duration: EXIT, ease: "power1.in" }, at)
          .to(
            p.querySelector(".th-title"),
            { scale: TITLE_ZOOM, duration: EXIT, ease: "power2.in" },
            at
          )
          // .fromTo(extras(p), { opacity: 1 }, { opacity: 0, duration: EXIT * 0.4, immediateRender: false }, at);
          .fromTo(
            extras(p),
            { opacity: 1 },
            { opacity: 0, duration: EXIT * 0.7, immediateRender: false },
            at
          );
      };

      // first section plays its intro once on load
      reveal(gsap.timeline({ delay: 0.2 }), panels[0], 0);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () =>
            "+=" + ((n - 1) * STEP + (LAST_EXITS ? EXIT : 0)) * 100 + "%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      for (let i = 0; i < n; i++) {
        const cur = panels[i];
        const E = i * STEP; // time this section starts leaving

        if (i > 0) {
          const A = E - ENTER - HOLD; // enter start
          tl.set(
            // cur.querySelectorAll(".th-img, .th-pill, .th-text, .th-badge"),
            cur.querySelectorAll(".th-pill, .th-text, .th-badge"),
            { opacity: 0 },
            0
          ).fromTo(
            cur,
            { yPercent: -100 },
            { yPercent: 0, duration: ENTER, ease: "power2.out" },
            A
          );
          reveal(tl, cur, A + 0.5);
        }
        if (i < n - 1 || LAST_EXITS) exit(tl, cur, E);
      }
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section className="th_container">
      {/* <div className="my_container"> */}
        <div ref={wrap} className="th-wrap">
          {SECTIONS.map((s, i) => (
            <div className="th-panel" key={s.title} style={{ zIndex: i + 1 }}>
              <div className="th-stage">
                {/* Main title (unchanged) */}
                <h2 className="th-title" style={{ left: u(s.titleX) }}>
                  <span className="th-mask">
                    <span className="th-title-line">{s.title}</span>
                  </span>
                </h2>

                {/* Grid: pills | image | paragraph */}
                <div className="th-row my_container">
                  <div className="th-left">
                    {s.pills.map((label) => (
                      <span className="th-pill" key={label}>
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="th-img">
                    <img alt="" src={phoneTogglehead} />
                  </div>

                  <p className="th-text">{s.text}</p>
                </div>

                {/* Badge (unchanged) */}
                <img
                  alt=""
                  className="th-badge"
                  src={badgeTogglehead}
                  style={{
                    left: u(s.badgeX),
                    top: u(434),
                    width: u(148.55),
                    height: u(148.55),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
}
