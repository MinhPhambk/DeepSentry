"use client";
import React, { useEffect, useRef } from "react";

interface TechImage {
  name: string;
  src: string;
  image: HTMLImageElement;
}

interface Particle {
  x: number;
  y: number;
  alpha: number;
  image: HTMLImageElement;
  size: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const icons: { name: string; src: string }[] = [
  // replace with your image path
  { name: "JavaScript", src: "/js.png" },
  { name: "TypeScript", src: "/ts.png" },
  { name: "React", src: "/react.svg" },
  { name: "Next.js", src: "/js.png" },
  { name: "HTML", src: "/html.png" },
  { name: "CSS", src: "/css.png" },
];

const TechCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const techImagesRef = useRef<TechImage[]>([]);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      techImagesRef.current = await Promise.all(
        icons.map(({ name, src }) => {
          return new Promise<TechImage>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve({ name, src, image: img });
          });
        }),
      );
    };

    loadImages().then(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = particlesRef.current;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.update();
          p.draw(ctx);
          if (p.alpha <= 0) {
            particles.splice(i, 1);
          }
        }
        requestAnimationFrame(animate);
      };

      animate();

      const onMove = (e: MouseEvent) => {
        const randomIcon =
          techImagesRef.current[
            Math.floor(Math.random() * techImagesRef.current.length)
          ];

        const size = 22 + Math.random() * 8;

        const particle: Particle = {
          x: e.clientX,
          y: e.clientY,
          alpha: 1,
          image: randomIcon.image,
          size,
          update() {
            this.y -= 0.4;
            this.alpha -= 0.02;
          },
          draw(ctx: CanvasRenderingContext2D) {
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(
              this.image,
              this.x - this.size / 2,
              this.y - this.size / 2,
              this.size,
              this.size,
            );
            ctx.globalAlpha = 1;
          },
        };

        particles.push(particle);
      };

      window.addEventListener("mousemove", onMove);
      return () => {
        window.removeEventListener("mousemove", onMove);
      };
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default TechCursor;
