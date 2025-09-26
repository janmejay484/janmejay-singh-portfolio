import { useEffect, useRef } from "react";
import styles from "./styles/Starfield.module.css";

export default function Starfield() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    let width, height, dpr, stars;

    const LAYERS = [
      { count: 80,  speed: 0.015, size: [1.0, 1.6], alpha: 0.9 },
      { count: 120, speed: 0.03,  size: [0.8, 1.2], alpha: 0.75 },
      { count: 180, speed: 0.06,  size: [0.6, 1.0], alpha: 0.6 },
    ];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    }

    function rand(a, b) { return a + Math.random() * (b - a); }

    function initStars() {
      stars = [];
      LAYERS.forEach(layer => {
        for (let i = 0; i < layer.count; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: rand(layer.size[0], layer.size[1]),
            a: layer.alpha * rand(0.7, 1),
            v: layer.speed * rand(0.6, 1.4),
          });
        }
      });
    }

    function step() {
      ctx.fillStyle = "#0b1220"; // base night color (same site bg)
      ctx.fillRect(0, 0, width, height);

      // subtle vignette
      const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height)*0.7);
      grad.addColorStop(0, "rgba(0,0,0,0)");
      grad.addColorStop(1, "rgba(0,0,0,0.35)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const s of stars) {
        s.x -= s.v;
        if (s.x < -2) { s.x = width + 2; s.y = Math.random() * height; }
        ctx.globalAlpha = s.a;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#cfe6ff";
        ctx.fill();
      }
      ctx.restore();

      rafRef.current = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Cursor spotlight: updates CSS vars for the glow element
  useEffect(() => {
    const move = (e) => {
      const x = e.clientX, y = e.clientY;
      document.documentElement.style.setProperty("--mx", `${x}px`);
      document.documentElement.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className={styles.starfield} />
      <div className={styles.cursorLight} aria-hidden="true" />
    </>
  );
}
