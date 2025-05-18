import React, { useEffect, useRef } from 'react';

const DotBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });

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
    window.addEventListener('resize', resizeCanvas);

    // ✅ Use pageX/Y for scroll-aware positioning
    const handlePointerMove = (event: PointerEvent) => {
      mousePos.current = {
        x: event.pageX,
        y: event.pageY,
      };
    };

    window.addEventListener('pointermove', handlePointerMove);

    const dotSpacing = 30;
    const dotRadius = 1.5;
    const baseOpacity = 0.05;
    const maxDistance = 200;

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mouseX, y: mouseY } = mousePos.current;

      for (let y = 0; y < canvas.height; y += dotSpacing) {
        for (let x = 0; x < canvas.width; x += dotSpacing) {
          const dx = x - mouseX;
          const dy = y - (mouseY - window.scrollY); // ✅ Align mouse with canvas
          const distance = Math.sqrt(dx * dx + dy * dy);
          const dynamicOpacity = Math.max(0, 1 - distance / maxDistance);
          const opacity = Math.max(baseOpacity, dynamicOpacity);

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      }

      requestAnimationFrame(drawDots);
    };

    drawDots();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ backgroundColor: '#000' }}
    />
  );
};

export default DotBackground;
