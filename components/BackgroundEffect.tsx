import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Configuration
    let triangleSize = width < 768 ? 20 : 25; // Much smaller for finer grid
    const heightScale = Math.sqrt(3) / 2;
    let triHeight = triangleSize * heightScale;
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Recalculate grid size on resize
      triangleSize = width < 768 ? 20 : 25;
      triHeight = triangleSize * heightScale;
      
      initTriangles();
    };

    // State variables
    let mouseX = -1000;
    let mouseY = -1000;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    interface Triangle {
      x: number;
      y: number;
      centerX: number;
      centerY: number;
      isUp: boolean;
      intensity: number; // 0 to 1
    }

    let triangles: Triangle[] = [];

    const initTriangles = () => {
      triangles = [];
      const cols = Math.ceil(width / (triangleSize / 2)) + 2;
      const rows = Math.ceil(height / triHeight) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Checkerboard pattern for up/down triangles
          const isUp = (r + c) % 2 === 0;
          
          const x = c * (triangleSize / 2);
          const y = r * triHeight;

          const centerX = x;
          const centerY = y + (isUp ? triHeight / 3 : -triHeight / 3);

          triangles.push({
            x,
            y,
            centerX,
            centerY,
            isUp,
            intensity: 0
          });
        }
      }
    };

    initTriangles();

    const drawTriangle = (t: Triangle) => {
      ctx.beginPath();
      const halfSize = triangleSize / 2;

      if (t.isUp) {
        ctx.moveTo(t.x, t.y - triHeight / 2); // Top
        ctx.lineTo(t.x + halfSize, t.y + triHeight / 2); // Bottom Right
        ctx.lineTo(t.x - halfSize, t.y + triHeight / 2); // Bottom Left
      } else {
        ctx.moveTo(t.x - halfSize, t.y - triHeight / 2); // Top Left
        ctx.lineTo(t.x + halfSize, t.y - triHeight / 2); // Top Right
        ctx.lineTo(t.x, t.y + triHeight / 2); // Bottom
      }
      
      ctx.closePath();

      // Visual Logic
      // Base state: extremely faint
      const baseAlpha = 0.02;
      
      // Active state: Violet/Fuchsia mix
      if (t.intensity > 0.01) {
        // Interpolate color based on intensity
        // Low intensity = Violet (139, 92, 246)
        // High intensity = Fuchsia (217, 70, 239)
        
        const r = 139 + (217 - 139) * t.intensity;
        const g = 92 + (70 - 92) * t.intensity;
        const b = 246 + (239 - 246) * t.intensity;
        
        // Stroke
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.1 + t.intensity * 0.6})`;
        ctx.lineWidth = 0.5 + t.intensity * 1.0;
        
        // Fill - only when fairly active to simulate "opening"
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${t.intensity * 0.15})`;
        ctx.fill();
      } else {
        ctx.strokeStyle = `rgba(100, 116, 139, ${baseAlpha})`;
        ctx.lineWidth = 0.3; // Very thin base lines
      }

      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Responsive interaction radius
      const interactionRadius = width < 768 ? 80 : 120;
      const decayRate = 0.95; 

      triangles.forEach(t => {
        // Calculate distance to mouse
        const dx = mouseX - t.centerX;
        const dy = mouseY - t.centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Add energy if close
        if (dist < interactionRadius) {
          const force = (1 - dist / interactionRadius);
          t.intensity = Math.min(t.intensity + force * 0.2, 1); 
        }

        // Decay energy
        t.intensity *= decayRate;

        // Optimization: only draw if visible (intensity > 0 or base grid)
        // Drawing everything for the base grid effect, but could optimize if needed.
        // Since it's canvas, drawing 1000s of lines is okay-ish, but we kept size reasonable.
        drawTriangle(t);
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BackgroundEffect;
