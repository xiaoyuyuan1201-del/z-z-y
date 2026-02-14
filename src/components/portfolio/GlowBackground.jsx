import React, { useEffect, useRef } from 'react';

export default function GlowBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    if (!container) return;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    container.appendChild(canvas);

    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.02;

      // 清空画布
      ctx.fillStyle = 'rgba(10, 5, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // 主光束 - 青蓝色
      const gradient1 = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        canvas.height * 0.6
      );
      gradient1.addColorStop(0, 'rgba(0, 200, 255, 0.3)');
      gradient1.addColorStop(0.3, 'rgba(0, 150, 200, 0.15)');
      gradient1.addColorStop(1, 'rgba(0, 100, 150, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 底部亮光带
      const bottomGradient = ctx.createLinearGradient(0, canvas.height * 0.6, 0, canvas.height);
      bottomGradient.addColorStop(0, 'rgba(0, 200, 255, 0)');
      bottomGradient.addColorStop(0.5, 'rgba(0, 180, 220, 0.2)');
      bottomGradient.addColorStop(1, 'rgba(30, 150, 200, 0.3)');

      ctx.fillStyle = bottomGradient;
      ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);

      // 左右侧的柔和光晕
      const leftGlow = ctx.createRadialGradient(
        centerX * 0.3,
        centerY,
        0,
        centerX * 0.3,
        centerY,
        canvas.width * 0.4
      );
      leftGlow.addColorStop(0, 'rgba(100, 200, 255, 0.1)');
      leftGlow.addColorStop(1, 'rgba(100, 200, 255, 0)');

      ctx.fillStyle = leftGlow;
      ctx.fillRect(0, 0, canvas.width * 0.6, canvas.height);

      const rightGlow = ctx.createRadialGradient(
        centerX * 1.7,
        centerY,
        0,
        centerX * 1.7,
        centerY,
        canvas.width * 0.4
      );
      rightGlow.addColorStop(0, 'rgba(100, 200, 255, 0.1)');
      rightGlow.addColorStop(1, 'rgba(100, 200, 255, 0)');

      ctx.fillStyle = rightGlow;
      ctx.fillRect(canvas.width * 0.4, 0, canvas.width * 0.6, canvas.height);

      // 动态流光效果
      const waveY = Math.sin(time * 0.5) * 30;
      const beamGradient = ctx.createLinearGradient(
        0,
        centerY + waveY - 80,
        0,
        centerY + waveY + 80
      );
      beamGradient.addColorStop(0, 'rgba(0, 180, 220, 0)');
      beamGradient.addColorStop(0.3, 'rgba(0, 200, 255, 0.4)');
      beamGradient.addColorStop(0.5, 'rgba(100, 220, 255, 0.5)');
      beamGradient.addColorStop(0.7, 'rgba(0, 200, 255, 0.4)');
      beamGradient.addColorStop(1, 'rgba(0, 180, 220, 0)');

      ctx.fillStyle = beamGradient;
      ctx.fillRect(0, centerY + waveY - 80, canvas.width, 160);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}