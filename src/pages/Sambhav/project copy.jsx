import React, { useState, useRef, useCallback } from "react";

const PROJECTS = [
  {
    slug: "modern-mosque",
    title: "Modern Mosque",
    location: "Doha, Qatar",
    year: "2024",
    category: "Public space — Interior design",
    from: "#8C7A5E",
    to: "#3C3428",
    description:
      "A reinterpretation of sacred geometry through restrained material choices — brushed brass screens, poured stone floors, and light drawn down through a single oculus.",
  },
  {
    slug: "rising-retreat",
    title: "Rising Retreat",
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    category: "Hospitality — Interior design",
    from: "#7A6A63",
    to: "#241E1B",
    description:
      "A desert retreat built around silence and shade. Every room is oriented to the dunes, every surface chosen to age with the climate rather than resist it.",
  },
  {
    slug: "glass-pavilion",
    title: "Glass Pavilion",
    location: "Kyoto, Japan",
    year: "2023",
    category: "Cultural space — Interior design",
    from: "#5F6E68",
    to: "#1B211F",
    description:
      "A tea pavilion rebuilt in glass and cedar. The structure disappears into the garden it was designed to frame, leaving only a roofline and a single fixed view.",
  },
  {
    slug: "ochre-house",
    title: "Ochre House",
    location: "Marrakech, Morocco",
    year: "2023",
    category: "Residential — Interior design",
    from: "#A17B4E",
    to: "#3A2A18",
    description:
      "A courtyard house built from rammed earth and hand-troweled tadelakt, tuned to the heat of the medina and the sound of the fountain at its centre.",
  },
];

const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

function ProjectImage({ project, gradientOnly, children, style }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(160deg, ${project.from}, ${project.to})`,
        ...style,
      }}
    >
      {!gradientOnly && children}
    </div>
  );
}

export default function ProjectTransition() {
  const [index, setIndex] = useState(0);
  const [overlay, setOverlay] = useState(null);
  const scrollRef = useRef(null);
  const peekRef = useRef(null);

  const project = PROJECTS[index];
  const nextIndex = (index + 1) % PROJECTS.length;
  const next = PROJECTS[nextIndex];

  const handleActivate = useCallback(() => {
    if (!peekRef.current || overlay) return;
    const rect = peekRef.current.getBoundingClientRect();

    setOverlay({
      project: next,
      phase: "docked",
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOverlay((o) => (o ? { ...o, phase: "expanded" } : o));
      });
    });

    window.setTimeout(() => {
      try {
        window.history.pushState({}, "", `/projects/${next.slug}`);
        document.title = `${next.title} — Interior design`;
      } catch (e) {}

      if (scrollRef.current) scrollRef.current.scrollTop = 0;
      setIndex(nextIndex);

      window.setTimeout(() => {
        setOverlay((o) => (o ? { ...o, phase: "settling" } : o));
        window.setTimeout(() => setOverlay(null), 650);
      }, 60);
    }, 820);
  }, [overlay, next, nextIndex]);

  const overlayStyle = (() => {
    if (!overlay) return null;
    if (overlay.phase === "docked") {
      return {
        position: "fixed",
        top: overlay.rect.top,
        left: overlay.rect.left,
        width: overlay.rect.width,
        height: overlay.rect.height,
        zIndex: 50,
        overflow: "hidden",
        transition: "none",
      };
    }
    if (overlay.phase === "expanded") {
      return {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        overflow: "hidden",
        transition: `top 820ms ${EASE},
             left 820ms ${EASE},
             width 820ms ${EASE},
             height 820ms ${EASE}`,
      };
    }
    return {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 50,
      overflow: "hidden",
      opacity: 0,
      transition: "opacity 600ms ease",
    };
  })();

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#0D0D0F",
        color: "#ECE7DD",
      }}
    >

      <div
        ref={scrollRef}
        className="pt-scrollarea"
        style={{
          height: "640px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 32px",
            background: "linear-gradient(180deg, rgba(13,13,15,0.9), transparent)",
            width: "100%",
          }}
        >
          <span className="pt-serif" style={{ fontSize: 18 }}>
            studio&nbsp;/&nbsp;interiors
          </span>
          <span className="pt-eyebrow">
            {String(index + 1).padStart(2, "0")} — {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </div>

        <section style={{ position: "relative", height: "480px" }}>
          <ProjectImage project={project} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(13,13,15,0) 40%, rgba(13,13,15,0.75) 100%)",
            }}
          />
          <div style={{ position: "absolute", left: 32, right: 32, bottom: 40 }}>
            <p className="pt-eyebrow" style={{ marginBottom: 10 }}>
              {project.category}
            </p>
            <h1
              className="pt-serif"
              style={{ fontSize: 56, fontWeight: 500, margin: 0, lineHeight: 1.02 }}
            >
              {project.title}
            </h1>
            <p style={{ margin: "12px 0 0", color: "#A79A85", fontSize: 14 }}>
              {project.location} · {project.year}
            </p>
          </div>
        </section>

        <section style={{ padding: "64px 32px", maxWidth: 640 }}>
          <p className="pt-eyebrow" style={{ marginBottom: 14 }}>About</p>
          <p className="pt-serif" style={{ fontSize: 22, lineHeight: 1.55, fontWeight: 400 }}>
            {project.description}
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            padding: "0 32px 64px",
          }}
        >
          {[0, 1].map((i) => (
            <div key={i} style={{ position: "relative", height: 220 }}>
              <ProjectImage
                project={{
                  from: i === 0 ? project.to : project.from,
                  to: i === 0 ? project.from : project.to,
                }}
              />
            </div>
          ))}
        </section>

        <section
          style={{
            position: "relative",
            height: "560px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ padding: "0 32px 24px" }}>
            <p className="pt-eyebrow">Next project</p>
          </div>

          <div
            ref={peekRef}
            onClick={handleActivate}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleActivate()}
            style={{
              position: "relative",
              height: "70%",
              cursor: overlay ? "default" : "pointer",
              overflow: "hidden",
            }}
          >
            <ProjectImage project={next} style={{ transform: "translateY(-8%)" }} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(13,13,15,0.15)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 32,
                bottom: 32,
                right: 32,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <h2 className="pt-serif" style={{ fontSize: 40, fontWeight: 500, margin: 0 }}>
                {next.title}
              </h2>
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(236,231,221,0.4)",
                  borderRadius: 999,
                  padding: "8px 18px",
                }}
              >
                View project →
              </span>
            </div>
          </div>
        </section>
      </div>

      {overlay && (
        <div style={overlayStyle}>
          <ProjectImage project={overlay.project}>
            <div
              style={{
                position: "absolute",
                left: 32,
                bottom: 40,
                opacity: overlay.phase === "expanded" ? 1 : 0,
                transition: "opacity 400ms ease 400ms",
              }}
            >
              <p className="pt-eyebrow" style={{ marginBottom: 10 }}>
                {overlay.project.category}
              </p>
              <h1
                className="pt-serif"
                style={{ fontSize: 56, fontWeight: 500, margin: 0, color: "#ECE7DD" }}
              >
                {overlay.project.title}
              </h1>
            </div>
          </ProjectImage>
        </div>
      )}
    </div>
  );
}