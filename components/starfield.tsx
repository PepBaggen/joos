"use client";

import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createStars = useCallback((width: number, height: number) => {
    const starCount = Math.floor((width * height) / 3000);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 3,
        size: Math.random() * 2 + 0.5,
        brightness: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    return stars;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      starsRef.current = createStars(rect.width, rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw subtle nebula gradient
      const gradient = ctx.createRadialGradient(
        rect.width * 0.3,
        rect.height * 0.4,
        0,
        rect.width * 0.3,
        rect.height * 0.4,
        rect.width * 0.6
      );
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.03)");
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw stars with parallax effect
      const parallaxX = (mouseRef.current.x - rect.width / 2) * 0.01;
      const parallaxY = (mouseRef.current.y - rect.height / 2) * 0.01;

      starsRef.current.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const alpha = star.brightness * twinkle;

        const px = star.x + parallaxX * star.z;
        const py = star.y + parallaxY * star.z;

        // Star glow
        const glowGradient = ctx.createRadialGradient(
          px,
          py,
          0,
          px,
          py,
          star.size * 3
        );
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        glowGradient.addColorStop(0.5, `rgba(200, 200, 255, ${alpha * 0.3})`);
        glowGradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(px, py, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Star core
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
