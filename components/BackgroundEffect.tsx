import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = -100; // Start off-screen
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Direct DOM update for performance (no React render loop)
      // Centering the 600px glow: subtract 300px
      glow.style.transform = `translate(${mouseX - 300}px, ${mouseY - 300}px)`;
      glow.style.opacity = '1'; // Fade in on first move
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px] transition-opacity duration-500 opacity-0 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(232, 121, 249, 0.1) 40%, transparent 70%)',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default BackgroundEffect;
