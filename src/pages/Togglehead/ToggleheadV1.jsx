import { useEffect, useState } from "react";
import "./togglehead.scss";

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

export default function Togglehead({ icons = DEFAULT_ICONS }) {
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
      {/* <style>{css}</style> */}

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
                        {/* <span className={`line-icon ${group}`}> */}
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
