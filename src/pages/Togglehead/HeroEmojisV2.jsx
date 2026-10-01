import { useEffect, useState } from "react";

/**
 * Recreation of the Elva "heroEmojis" hero.
 *
 *  1. Letters drop in from above, staggered 0.05s, each line masked.
 *  2. Then the "icon letters" (c m a x s r .) crossfade letter -> icon.
 *     Even-indexed icons (c, a, s, .) start first, odd ones (m, x, r)
 *     start 0.5s later. Cycle: 0.5s hold, 0.4s fade, 0.5s rest, repeat.
 *  3. The "o" in "for" is a pill outline whose width yoyos to 3x
 *     (2x on tablets, 1.5x on phones).
 *
 * The real site uses an SVG sprite (<use href="#c" />). Pass your own via
 * the `icons` prop, e.g. icons={{ c: <svg>...</svg> }}. Emoji are stand-ins.
 */

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

export default function HeroEmojis({ icons = DEFAULT_ICONS }) {
  const [live, setLive] = useState(false);

  // Start the icon loops once the letter drop-in has finished
  useEffect(() => {
    const longest = Math.max(
      ...LINES.map((l) =>
        l.reduce((n, p) => n + (typeof p === "string" ? p.length : 1), 0)
      )
    );
    const t = setTimeout(() => setLive(true), 800 + longest * 50);
    return () => clearTimeout(t);
  }, []);

  let iconCount = 0; // global index -> even/odd group

  return (
    <section className={`heroEmojis ${live ? "is-live" : ""}`}>
      <style>{css}</style>

      <div className="heroEmojis-content">
        <h1
          className="heroEmojis-title"
          aria-label="we create memorable experiences for brands."
        >
          {LINES.map((parts, li) => {
            let ci = 0; // char index within the line (for stagger)
            return (
              <span className="line" key={li} aria-hidden="true">
                {parts.map((part, pi) => {
                  if (typeof part === "string") {
                    return [...part].map((ch, k) => (
                      <span className="ch" key={`${pi}-${k}`}>
                        <span className="ch-in" style={{ "--i": ci++ }}>
                          {ch === " " ? "\u00a0" : ch}
                        </span>
                      </span>
                    ));
                  }

                  if (part.circle) {
                    return (
                      <span className="ch" key={pi}>
                        <span className="ch-in" style={{ "--i": ci++ }}>
                          <span className="line-icon">
                            <span className="circle" />
                          </span>
                        </span>
                      </span>
                    );
                  }

                  const group = iconCount++ % 2 === 0 ? "grpA" : "grpB";
                  return (
                    <span className="ch" key={pi}>
                      <span className="ch-in" style={{ "--i": ci++ }}>
                        <span
                          className={`line-icon ${group} ${
                            part.icon === "." ? "--dot" : ""
                          }`}
                        >
                          <span className="inner">{part.icon}</span>
                          <span className="icon">{icons[part.icon]}</span>
                        </span>
                      </span>
                    </span>
                  );
                })}
              </span>
            );
          })}
        </h1>

        <p className="heroEmojis-tag">HELLO</p>
        <p className="heroEmojis-description">
          <span>🎉</span> Elva is now part of Third and Grove!{" "}
          <a href="https://www.thirdandgrove.com/insights/third-and-grove-acquires-elva">
            See whats next
          </a>
          .
        </p>
      </div>
    </section>
  );
}

const css = `
.heroEmojis {
  --ink: #262523;
  --bg: #ececec;
  --grow: 3;                /* pill width multiplier */
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
  padding: 76.92vw 0 8rem;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Basis Grotesque", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.heroEmojis *, .heroEmojis *::before, .heroEmojis *::after { box-sizing: border-box; }
.heroEmojis-content { position: relative; padding: 0 0.8rem; }

/* ---------- title ---------- */
.heroEmojis-title {
  margin: 0 0 3.4rem;
  font-weight: 500;
  font-size: 12vw;
  line-height: 0.8;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}
.line {
  display: block;
  overflow: hidden;           /* masks the drop-in */
  padding: 0.07em 0;
  margin: -0.07em 0;
}
.is-live .line { overflow: visible; }

.ch { display: inline-block; }
.ch-in {
  display: inline-block;
  transform: translateY(-101%);
  animation: chIn 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  animation-delay: calc(var(--i) * 0.05s);
}
@keyframes chIn { to { transform: translateY(0); } }

/* ---------- icon letters ---------- */
.line-icon { display: inline-block; position: relative; }
.line-icon .icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65em;
  letter-spacing: 0;
  opacity: 0;
  filter: grayscale(1) contrast(0.85);
}
/* The period is narrow, so anchor its icon to the left edge and let it grow
   to the right (like the original 6.94vw-wide icon) instead of centering it,
   which pushed it back over the "S". */
.line-icon.--dot .icon {
  inset: auto;
  top: 0;
  left: 0.08em;
  width: 6.94vw;
  height: 100%;
  justify-content: flex-start;
}
.line-icon .icon svg { width: 100%; height: 100%; object-fit: contain; fill: var(--ink); }

/* 1.4s cycle = 0.5 hold + 0.4 fade + 0.5 rest; quick fade back avoids a hard snap */
.is-live .line-icon .inner { animation: iconOut 1.4s linear infinite; }
.is-live .line-icon .icon  { animation: iconIn  1.4s linear infinite; }
.is-live .grpB .inner,
.is-live .grpB .icon { animation-delay: 0.5s; }  /* odd group starts 0.5s later */

@keyframes iconOut {
  0%, 35.7% { opacity: 1; }
  64.3%, 92% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes iconIn {
  0%, 35.7% { opacity: 0; }
  64.3%, 92% { opacity: 1; }
  100% { opacity: 0; }
}

/* ---------- the "o" pill ---------- */
.line-icon .circle {
  display: inline-block;
  position: relative;
  left: 0.55vw;
  width: 8.46vw;
  height: 8.72vw;
  margin-right: 1.03vw;
  border: 1.39vw solid var(--ink);
  border-radius: 7rem;
  animation: pillSm 4s linear 1s infinite;
}
/* 0.8s out, 1.2s rest, 0.8s back, 1.2s rest (power3.inOut) */
@keyframes pillSm {
  0%   { width: 8.46vw; animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1); }
  20%  { width: calc(8.46vw * var(--grow)); }
  50%  { width: calc(8.46vw * var(--grow)); animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1); }
  70%  { width: 8.46vw; }
  100% { width: 8.46vw; }
}
@keyframes pillLg {
  0%   { width: 7.71vw; animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1); }
  20%  { width: calc(7.71vw * var(--grow)); }
  50%  { width: calc(7.71vw * var(--grow)); animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1); }
  70%  { width: 7.71vw; }
  100% { width: 7.71vw; }
}

/* ---------- tag + description ---------- */
.heroEmojis-tag,
.heroEmojis-description {
  margin: 0 0 3.4rem;
  font-size: 1.6rem;
  line-height: 1.2;
  text-transform: uppercase;
  opacity: 0;
  animation: fadeDown 0.6s ease-out forwards;
}
.heroEmojis-tag { animation-delay: 0.5s; }
.heroEmojis-description { animation-delay: 0.6s; }
.heroEmojis-description a {
  color: inherit;
  text-decoration: underline;
  transition: opacity 0.5s ease;
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ---------- breakpoints (from the original CSS) ---------- */
@media (max-width: 1024px) { .heroEmojis { --grow: 2; } }
@media (max-width: 500px)  { .heroEmojis { --grow: 1.5; } }

@media (min-width: 501px) {
  .heroEmojis { padding-top: 24rem; }
}
@media (min-width: 750px) {
  .heroEmojis-title { font-size: 11.5vw; margin-bottom: 0; }
  .line-icon .circle {
    border-width: 1.18vw;
    border-radius: 4.86vw;
    height: 8.06vw;
    width: 7.71vw;
    margin-right: 0.69vw;
    top: 0.2rem;
    animation-name: pillLg;
  }
  .heroEmojis-tag, .heroEmojis-description { position: absolute; margin: 0; }
  .heroEmojis-tag { left: 50vw; top: 0; }
  .heroEmojis-description {
    left: 66.67vw; top: 0;
    width: 27.78vw; min-width: 26rem; max-width: 26rem;
  }
}
@media (min-width: 1025px) {
  .heroEmojis { padding-top: 12rem; }
  .heroEmojis-tag, .heroEmojis-description { top: 8.89vw; }
  .heroEmojis-description { width: 22.22vw; }
}
@media (min-width: 1280px) {
  .heroEmojis-description { width: 16.67vw; }
}

@media (prefers-reduced-motion: reduce) {
  .ch-in { animation: none; transform: none; }
  .line-icon .inner, .line-icon .icon, .line-icon .circle { animation: none !important; }
}
`;
