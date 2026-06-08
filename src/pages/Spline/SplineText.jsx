// import { useEffect, useRef, useState, useCallback } from "react";

// const SPLINE_URL = "https://prod.spline.design/Ud0SNrma8uyGZA2x/scene.splinecode";

// function GrainOverlay() {
//   return (
//     <div style={{
//       position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10,
//       opacity: 0.18, mixBlendMode: "multiply",
//       backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//       backgroundRepeat: "repeat", backgroundSize: "180px",
//     }} />
//   );
// }

// function CustomCursor() {
//   const ref = useRef(null);
//   const pos = useRef({ x: -100, y: -100 });
//   const cur = useRef({ x: -100, y: -100 });

//   useEffect(() => {
//     const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
//     window.addEventListener("mousemove", move);
//     let raf;
//     const loop = () => {
//       cur.current.x += (pos.current.x - cur.current.x) * 0.12;
//       cur.current.y += (pos.current.y - cur.current.y) * 0.12;
//       if (ref.current) {
//         ref.current.style.left = cur.current.x + "px";
//         ref.current.style.top = cur.current.y + "px";
//       }
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);
//     return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
//   }, []);

//   return <div ref={ref} style={{
//     position: "fixed", width: 10, height: 10, borderRadius: "50%",
//     background: "#d94b25", pointerEvents: "none", zIndex: 9999,
//     transform: "translate(-50%, -50%)", mixBlendMode: "multiply",
//   }} />;
// }

// export default function SplineText() {
//   const splineContainerRef = useRef(null);
//   const heroRef = useRef(null);
//   const svgRef = useRef(null);
//   const rafRef = useRef(null);

//   const [splineLoaded, setSplineLoaded] = useState(false);
//   const [textVisible, setTextVisible] = useState(false);

//   // Normalized mouse -1..+1
//   const targetMouse = useRef({ x: 0, y: 0 });
//   const currentMouse = useRef({ x: 0, y: 0 });

//   // ── Spline loader ──
//   useEffect(() => {
//     let app = null;
//     async function load() {
//       try {
//         const { Application } = await import("https://unpkg.com/@splinetool/runtime@1.9.82/build/runtime.js");
//         const canvas = splineContainerRef.current?.querySelector("canvas");
//         if (!canvas) return;
//         app = new Application(canvas);
//         await app.load(SPLINE_URL);
//         setSplineLoaded(true);
//         setTimeout(() => setTextVisible(true), 300);
//       } catch { setTextVisible(true); }
//     }
//     load();
//     return () => app?.dispose?.();
//   }, []);

//   // ── SVG filter + text update loop ──
//   useEffect(() => {
//     const svg = svgRef.current;
//     if (!svg) return;

//     // feDisplacementMap + feGaussianBlur driven by mouse position
//     const feDisplace1 = svg.querySelector("#disp1");
//     const feDisplace2 = svg.querySelector("#disp2");
//     const feBlur1 = svg.querySelector("#blur1");
//     const feBlur2 = svg.querySelector("#blur2");
//     const feTurb1 = svg.querySelector("#turb1");
//     const feTurb2 = svg.querySelector("#turb2");
//     const text1 = svg.querySelector("#text1");
//     const text2 = svg.querySelector("#text2");

//     let seed = 0;

//     const loop = () => {
//       const ease = 0.06;
//       currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * ease;
//       currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * ease;

//       const mx = currentMouse.current.x; // -1 to +1 horizontal
//       const my = currentMouse.current.y; // -1 to +1 vertical
//       const dist = Math.sqrt(mx * mx + my * my); // 0 at center, ~1.4 at corners

//       // ── Tilt: 3D-like skew based on mouse position ──
//       const rotY = mx * 20;   // horizontal tilt
//       const rotX = -my * 12;  // vertical tilt
//       const skewX = mx * -4;

//       if (text1) {
//         text1.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) skewX(${skewX}deg)`;
//       }
//       if (text2) {
//         text2.style.transform = `perspective(700px) rotateX(${rotX * 0.65}deg) rotateY(${rotY * 0.65}deg) skewX(${skewX * 0.65}deg)`;
//       }

//       // ── Directional blur: blur increases toward where mouse is ──
//       // Map mouse x/y into blur per axis
//       // Right side → more blur on right side of text → horizontal stdDeviation high
//       // Top hover → vertical blur increases

//       // We drive stdDeviation asymmetrically using feComponentTransfer trick:
//       // blurX scales with |mx|, blurY scales with |my|
//       // direction sign comes from feDisplacementMap scale

//       const blurX = Math.abs(mx) * 14;  // 0..14
//       const blurY = Math.abs(my) * 10;  // 0..10
//       const baseBlur = dist * 6;         // baseline glow, increases from center

//       const totalBlurX = baseBlur + blurX;
//       const totalBlurY = baseBlur + blurY;

//       if (feBlur1) feBlur1.setAttribute("stdDeviation", `${totalBlurX} ${totalBlurY}`);
//       if (feBlur2) feBlur2.setAttribute("stdDeviation", `${totalBlurX * 0.7} ${totalBlurY * 0.7}`);

//       // ── Displacement: push text in mouse direction (stretch effect) ──
//       const dispScale = dist * 28;
//       if (feDisplace1) feDisplace1.setAttribute("scale", dispScale.toFixed(1));
//       if (feDisplace2) feDisplace2.setAttribute("scale", (dispScale * 0.6).toFixed(1));

//       // Slowly animate turbulence seed for organic feel
//       seed += 0.003;
//       if (feTurb1) feTurb1.setAttribute("seed", seed.toFixed(2));
//       if (feTurb2) feTurb2.setAttribute("seed", (seed * 1.3).toFixed(2));

//       rafRef.current = requestAnimationFrame(loop);
//     };

//     rafRef.current = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   const handleMouseMove = useCallback((e) => {
//     const rect = heroRef.current?.getBoundingClientRect();
//     if (!rect) return;
//     targetMouse.current.x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
//     targetMouse.current.y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     targetMouse.current = { x: 0, y: 0 };
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
//         * { margin: 0; padding: 0; box-sizing: border-box; }

//         body { cursor: none; }

//         .lh-root {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           overflow: hidden;
//           background: #f5ede8;
//           font-family: 'Anton', sans-serif;
//           cursor: none;
//         }
//         .lh-spline {
//           position: absolute; inset: 0; z-index: 1;
//         }
//         .lh-spline canvas { display: block; width: 100%; height: 100%; }

//         .lh-shimmer {
//           position: absolute; inset: 0;
//           background: linear-gradient(110deg, #f0e4de 30%, #e8d4cc 50%, #f0e4de 70%);
//           background-size: 200% 100%;
//           animation: shimmer 1.8s infinite linear;
//           z-index: 2; transition: opacity 0.6s ease;
//         }
//         @keyframes shimmer {
//           0%   { background-position: 200% 0; }
//           100% { background-position: -200% 0; }
//         }

//         /* The SVG text layer sits above everything */
//         .lh-svg-layer {
//           position: absolute; inset: 0; z-index: 20;
//           pointer-events: none;
//           overflow: visible;
//         }

//         #text1, #text2 {
//           transform-origin: center center;
//           transform-box: fill-box;
//           transition: none;
//           will-change: transform;
//         }

//         .lh-nav {
//           position: absolute; top: 0; left: 0; right: 0;
//           z-index: 30;
//           display: flex; justify-content: space-between; align-items: center;
//           padding: 28px 48px;
//         }
//         .lh-logo {
//           font-family: 'Anton', sans-serif; font-size: 17px;
//           color: #d94b25; letter-spacing: 0.04em; text-transform: uppercase;
//         }
//         .lh-links { display: flex; gap: 32px; list-style: none; }
//         .lh-links a {
//           font-family: 'Anton', sans-serif; font-size: 13px;
//           letter-spacing: 0.06em; text-transform: uppercase;
//           color: #3a2015; text-decoration: none; opacity: 0.65;
//           transition: opacity 0.2s;
//         }
//         .lh-links a:hover { opacity: 1; }

//         .lh-caption {
//           position: absolute; bottom: 32px; left: 0; right: 0;
//           z-index: 30; text-align: center;
//           font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
//           color: #b06040; opacity: 0.45;
//         }

//         .lh-fade {
//           opacity: 0; transition: opacity 1s ease 0.2s;
//         }
//         .lh-fade.visible { opacity: 1; }
//       `}</style>

//       <CustomCursor />

//       <div
//         className="lh-root"
//         ref={heroRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* 3D Spline */}
//         <div className="lh-spline" ref={splineContainerRef}><canvas /></div>

//         {/* Shimmer */}
//         <div className="lh-shimmer" style={{ opacity: splineLoaded ? 0 : 1, pointerEvents: "none" }} />

//         {/* Grain */}
//         <GrainOverlay />

//         {/* Nav */}
//         {/* <nav className="lh-nav">
//           <span className="lh-logo">Lanterne</span>
//           <ul className="lh-links">
//             <li><a href="#">Projets</a></li>
//             <li><a href="#">Architecture</a></li>
//             <li><a href="#">Médiation</a></li>
//             <li><a href="#">À propos</a></li>
//           </ul>
//         </nav> */}

//         {/*
//           SVG layer — filters applied per text element.
//           Two separate filters so each line can have slightly different intensity.
//           feDisplacementMap + feGaussianBlur driven by mouse in the RAF loop.
//         */}
//         <svg
//           ref={svgRef}
//           className="lh-svg-layer"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="xMidYMid meet"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             {/* Filter for line 1 */}
//             <filter id="f1" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
//               <feTurbulence id="turb1" type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="2" seed="1" result="noise" />
//               <feDisplacementMap id="disp1" in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" result="displaced" />
//               <feGaussianBlur id="blur1" in="displaced" stdDeviation="0 0" result="blurred" />
//               <feMerge>
//                 <feMergeNode in="blurred" />
//               </feMerge>
//             </filter>

//             {/* Filter for line 2 */}
//             <filter id="f2" x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
//               <feTurbulence id="turb2" type="fractalNoise" baseFrequency="0.025 0.035" numOctaves="2" seed="2" result="noise" />
//               <feDisplacementMap id="disp2" in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" result="displaced" />
//               <feGaussianBlur id="blur2" in="displaced" stdDeviation="0 0" result="blurred" />
//               <feMerge>
//                 <feMergeNode in="blurred" />
//               </feMerge>
//             </filter>
//           </defs>

//           {/*
//             Text rendered in SVG so filters apply directly.
//             viewBox is 0-100, so 50 = center. Font size in viewBox units.
//           */}
//           {/* <text
//             id="text1"
//             x="50"
//             y="44"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontFamily="Anton, sans-serif"
//             fontSize="18"
//             fontWeight="400"
//             fill="#d94b25"
//             filter="url(#f1)"
//             className={`lh-fade${textVisible ? " visible" : ""}`}
//             style={{
//               textTransform: "uppercase",
//               letterSpacing: "-0.01em",
//             }}
//           >
//             LANTERNE
//           </text>

//           <text
//             id="text2"
//             x="50"
//             y="60"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontFamily="Anton, sans-serif"
//             fontSize="18"
//             fontWeight="400"
//             fill="#d94b25"
//             filter="url(#f2)"
//             className={`lh-fade${textVisible ? " visible" : ""}`}
//             style={{
//               textTransform: "uppercase",
//               letterSpacing: "-0.01em",
//             }}
//           >
//             ARCHITECTES
//           </text> */}
//         </svg>

//         {/* <p className="lh-caption">Architecture · Médiation · Montréal</p> */}
//       </div>
//     </>
//   );
// }
