import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles/Skills.module.css";
import { skillsRadar } from "../data/data";

/* ---------- Tiny CountUp (no deps) ---------- */
function CountUp({ end = 0, duration = 900, fps = 60 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const frames = Math.max(1, Math.round((duration / 1000) * fps));
    let i = 0;
    const tick = () => {
      i++;
      const t = i / frames; // 0..1
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(Math.round(end * ease));
      if (i < frames) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, fps]);
  return <>{val}</>;
}

/* ---------- Star Particles (canvas) ---------- */
function Particles() {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - r.left) / w - 0.5;
      mouse.current.y = (e.clientY - r.top) / h - 0.5;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });

    const count = Math.round((w * h) / 14000); // scale with area
    const stars = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      s: Math.random() * 0.4 + 0.2,
      tw: Math.random() * 1000,
    }));

    let raf = 0;
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      const dx = mouse.current.x * 0.6;
      const dy = mouse.current.y * 0.6;
      for (const st of stars) {
        st.x += st.s * dx;
        st.y += st.s * dy;
        if (st.x < 0) st.x += w;
        if (st.x > w) st.x -= w;
        if (st.y < 0) st.y += h;
        if (st.y > h) st.y -= h;

        const twinkle = 0.65 + 0.35 * Math.sin((t + st.tw) * 0.003);
        ctx.globalAlpha = 0.5 * twinkle;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r * twinkle, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return <canvas ref={ref} className={styles.particles} aria-hidden="true" />;
}

/* ---------- Neon Radar (SVG with animations) ---------- */
function NeonRadar({ labels, values }) {
  const size = 420,
    cx = size / 2,
    cy = size / 2,
    maxR = 150;
  const angleStep = (Math.PI * 2) / labels.length;

  const pt = (i, v = 100) => {
    const a = -Math.PI / 2 + i * angleStep;
    const r = (Math.max(0, Math.min(100, v)) / 100) * maxR;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };

  const points = useMemo(() => values.map((v, i) => pt(i, v)), [values]);
  const pathD = useMemo(
    () =>
      points
        .map((p, i) => `${i ? "L" : "M"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
        .join(" ") + " Z",
    [points]
  );

  return (
    <svg
      className={styles.svg}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Skills radar"
    >
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="45%">
          <stop offset="0%" stopColor="#22d3ee20" />
          <stop offset="70%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="areaFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee66" />
          <stop offset="100%" stopColor="#8BE9FD33" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8BE9FD" />
        </linearGradient>
        <linearGradient id="gridStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff22" />
          <stop offset="100%" stopColor="#ffffff11" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#22d3ee77" />
        </filter>
      </defs>

      {/* rotating halo */}
      <g className={styles.orbit}>
        <circle cx={cx} cy={cy} r={maxR + 26} fill="url(#bgGlow)" />
      </g>

      {/* rings & spokes */}
      {[maxR, maxR * 0.8, maxR * 0.6, maxR * 0.4, maxR * 0.2].map(
        (r, idx) => (
          <circle
            key={r}
            cx={cx}
            cy={cy}
            r={r}
            className={styles.ring}
            stroke="url(#gridStroke)"
            fill="none"
            strokeWidth="1"
            style={{ "--delay": `${idx * 80}ms` }}
          />
        )
      )}
      {labels.map((_, i) => {
        const [x, y] = pt(i, 100);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            className={styles.spoke}
            stroke="url(#gridStroke)"
            strokeWidth="1"
            style={{ "--delay": `${i * 45}ms` }}
          />
        );
      })}

      {/* polygon */}
      <g className={styles.areaGroup}>
        <path d={pathD} className={styles.area} fill="url(#areaFill)" filter="url(#softGlow)" />
        <path d={pathD} className={styles.outline} stroke="url(#lineStroke)" strokeWidth="2.5" fill="none" />
      </g>

      {/* dots */}
      {points.map(([x, y], i) => (
        <g key={i} className={styles.dotPulse} style={{ "--delay": `${i * 120}ms` }}>
          <circle cx={x} cy={y} r="3.8" fill="#0b1220" stroke="#22d3ee" strokeWidth="2" />
          <circle cx={x} cy={y} r="9" fill="#22d3ee22" />
        </g>
      ))}

      {/* labels */}
      {labels.map((label, i) => {
        const [lx, ly] = pt(i, 112);
        return (
          <text
            key={label}
            x={lx}
            y={ly}
            className={styles.svgLabel}
            textAnchor={lx < cx - 10 ? "end" : lx > cx + 10 ? "start" : "middle"}
            dy={ly < cy ? -6 : 14}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export default function Skills() {
  const pairs = skillsRadar.labels.map((label, i) => ({
    label,
    value: skillsRadar.values[i],
    i,
  }));

  return (
    <section id="skills" className={styles.section}>
      {/* animated particles behind */}
      <Particles />

      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>🧩 Skills Overview</h2>
          <p className={styles.sub}>Full-stack JS • UI + API + DB</p>
        </div>

        <div className={styles.grid}>
          {/* Left: progress list */}
          <div className={`${styles.card} ${styles.listCard}`}>
            <div className={styles.listHead}>
              <span className={styles.dot}></span>
              <span>Core & Current Focus</span>
            </div>

            <ul className={styles.skills}>
              {pairs.map(({ label, value, i }) => (
                <li
                  key={label}
                  className={styles.item}
                  style={{ "--stagger": `${i * 80}ms` }}
                >
                  <div className={styles.row}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.value}>
                      <CountUp end={value} duration={900} />%
                    </span>
                  </div>

                  <div
                    className={styles.bar}
                    aria-label={`${label} ${value}%`}
                  >
                    <span
                      className={styles.fill}
                      style={{ "--w": `${value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.tags}>
              <span className={styles.tag}>React/Next</span>
              <span className={styles.tag}>Node/Express</span>
              <span className={styles.tag}>MongoDB/MySQL</span>
              <span className={styles.tag}>TypeScript</span>
              <span className={styles.tag}>UI/UX</span>
            </div>
          </div>

          {/* Right: radar */}
          <div className={`${styles.card} ${styles.radarCard}`}>
            <NeonRadar
              labels={skillsRadar.labels}
              values={skillsRadar.values}
            />
            <div className={styles.legend}>
              <span className={styles.legendDot}></span>
              <span>Proficiency radar (normalized 0–100)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
