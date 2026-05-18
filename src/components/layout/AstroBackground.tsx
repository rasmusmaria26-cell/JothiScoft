'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  baseOpacity: number;
  freq: number;
}

export function AstroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = 1;
    let W = 0;
    let H = 0;
    let cx = 0;
    let cy = 0;
    let R = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio, 2);
      W = rect.width * dpr;
      H = rect.height * dpr;
      
      canvas.width = W;
      canvas.height = H;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      cx = W / 2;
      cy = H / 2;
      R = Math.min(W, H) / 2;

      starsRef.current = [];
      for (let i = 0; i < 55; i++) {
        starsRef.current.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.2 * dpr,
          baseOpacity: Math.random() * 0.25 + 0.05,
          freq: Math.random() * 0.02 + 0.005,
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const img = new Image();
    img.src = '/astro-wheel.png';
    let imgLoaded = false;
    img.onload = () => {
      imgLoaded = true;
    };

    const drawRing = (r: number, alpha: number, dash: number[], lineWidth: number) => {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201, 146, 42, ${alpha})`;
      ctx.lineWidth = lineWidth * dpr;
      ctx.setLineDash(dash.map((d) => d * dpr));
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const tamilRasi = [
      'மேஷம்', 'ரிஷபம்', 'மிதுனம்', 'கடகம்', 'சிம்மம்', 'கன்னி',
      'துலாம்', 'விருச்சிகம்', 'தனுசு', 'மகரம்', 'கும்பம்', 'மீனம்'
    ];
    const zodiacs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

    const draw = () => {
      frameRef.current++;
      const frame = frameRef.current;
      
      ctx.clearRect(0, 0, W, H);

      // 1. Ambient glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.1);
      grad.addColorStop(0, 'rgba(201, 146, 42, 0.055)');
      grad.addColorStop(0.45, 'rgba(201, 146, 42, 0.022)');
      grad.addColorStop(1, 'rgba(201, 146, 42, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // 2. Star field
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(frame * star.freq);
        const opacity = star.baseOpacity + twinkle * 0.05;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, opacity)})`;
        ctx.fill();
      });

      ctx.save();
      ctx.translate(cx, cy);

      // 3. Image Wheel
      if (imgLoaded) {
        ctx.save();
        // Slow clockwise rotation
        const rImgRot = frame * 0.00012;
        ctx.rotate(rImgRot);
        
        // Scale the image to fit nicely within the screen
        const imgSize = R * 1.8; 
        
        ctx.drawImage(img, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
        ctx.restore();
      }

      // 7. Planet orbit rings + glows + dots
      const planets = [
        { name: 'Sun', tamil: 'சூ', radius: R * 0.22, speed: 0.00022, color: '#f2c96a', dot: 4 },
        { name: 'Saturn', tamil: 'ச', radius: R * 0.41, speed: -0.00014, color: '#c0a0e0', dot: 3.5 },
        { name: 'Jupiter', tamil: 'கு', radius: R * 0.575, speed: 0.00009, color: '#7ec8c8', dot: 3 },
        { name: 'Mars', tamil: 'செ', radius: R * 0.695, speed: -0.00019, color: '#e07070', dot: 3 },
      ];

      planets.forEach((p) => {
        // Orbit ring
        drawRing(p.radius, 0.10, [], 0.5);

        // Position
        const angle = frame * p.speed;
        const x = Math.cos(angle) * p.radius;
        const y = Math.sin(angle) * p.radius;

        // Radial glow
        const pGrad = ctx.createRadialGradient(x, y, 0, x, y, 10 * dpr);
        pGrad.addColorStop(0, p.color + '99'); // hex with alpha
        pGrad.addColorStop(1, p.color + '00');
        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.arc(x, y, 10 * dpr, 0, Math.PI * 2);
        ctx.fill();

        // Solid dot
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(x, y, p.dot * dpr, 0, Math.PI * 2);
        ctx.fill();

        // Planet text label
        ctx.font = `${8 * dpr}px "Anek Tamil", sans-serif`;
        ctx.fillStyle = p.color;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.tamil, x + (p.dot + 4) * dpr, y);
      });

      // 8. Center pulse
      const pulse = 0.5 + 0.5 * Math.sin(frame * 0.025);
      
      // Outer pulse ring
      const pulseRingR = (12 + pulse * 4) * dpr;
      ctx.beginPath();
      ctx.arc(0, 0, pulseRingR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201, 146, 42, ${0.15 + pulse * 0.15})`;
      ctx.lineWidth = 1 * dpr;
      ctx.stroke();

      // Inner glow dot
      const glowR = 4 * dpr;
      ctx.beginPath();
      ctx.arc(0, 0, glowR, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201, 146, 42, ${0.7 + pulse * 0.3})`;
      ctx.fill();

      // Center point
      ctx.beginPath();
      ctx.arc(0, 0, 2 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = '#f2c96a';
      ctx.fill();

      ctx.restore();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
}
