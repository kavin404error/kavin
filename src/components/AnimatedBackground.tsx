import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      vx: number;
      vy: number;
      targetOpacity: number;
    }> = [];

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        targetOpacity: Math.random() * 0.6 + 0.2,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.02;

        if (Math.random() > 0.99) {
          particle.targetOpacity = Math.random() * 0.6 + 0.2;
        }

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          particle.x - particle.size,
          particle.y - particle.size,
          particle.size * 2,
          particle.size * 2
        );
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40"
    />
  );
}
