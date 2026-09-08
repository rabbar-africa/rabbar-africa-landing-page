"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: string;
}

/** Light-yellow through lime, matching the hero accent. */
const COLOURS = ["#DAE648", "#E8F34F", "#F2F7A1", "#FFFFFF"];
const MAX_PARTICLES = 140;

/**
 * A canvas particle trail that follows the cursor inside its parent element.
 *
 * Skipped entirely for `prefers-reduced-motion` and for coarse pointers
 * (touch), where there is no cursor to follow. The canvas never takes pointer
 * events, so it cannot interfere with the links underneath it.
 */
export function CursorParticles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let frame = 0;
    let lastX = 0;
    let lastY = 0;
    let hasMoved = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(parent);

    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) break;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.9 + 0.15;
        const maxLife = Math.random() * 55 + 35;
        particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.35, // drift upward
          life: maxLife,
          maxLife,
          size: Math.random() * 2.2 + 0.8,
          hue: COLOURS[Math.floor(Math.random() * COLOURS.length)],
        });
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      // Spawn more when the cursor is moving quickly.
      const dist = hasMoved ? Math.hypot(x - lastX, y - lastY) : 0;
      spawn(x, y, Math.min(3, 1 + Math.floor(dist / 26)));
      lastX = x;
      lastY = y;
      hasMoved = true;
    };

    const onPointerLeave = () => {
      hasMoved = false;
    };

    parent.addEventListener("pointermove", onPointerMove);
    parent.addEventListener("pointerleave", onPointerLeave);

    const tick = () => {
      const { width, height } = canvas;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, width / dpr, height / dpr);

      particles = particles.filter((p) => p.life > 0);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.006; // gentle gravity so the trail settles
        p.vx *= 0.985;
        p.life -= 1;

        // life is fractional, so it can dip below zero within a frame. A
        // negative radius makes arc() throw, which would abort tick() before
        // it schedules the next frame and kill the trail permanently.
        const t = p.life / p.maxLife;
        if (t <= 0) continue;

        ctx.globalAlpha = t * 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * t, 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      parent.removeEventListener("pointermove", onPointerMove);
      parent.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
