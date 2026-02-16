import React from 'react';
import { motion } from 'framer-motion';

export default function ShinyText({
  text,
  speed = 3,
  delay = 0,
  color = '#ffffff',
  shineColor = '#ffffff',
  spread = 90,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
  className = ''
}) {
  if (disabled) {
    return <span className={className} style={{ color }}>{text}</span>;
  }

  const duration = speed;
  const animationDirection = direction === 'left' ? '-100%' : '100%';

  return (
    <span className={`relative inline-block ${className}`} style={{ color }}>
      {text}
      <motion.span
        className="absolute inset-0 opacity-0"
        style={{
          backgroundImage: `linear-gradient(${direction === 'left' ? '90deg' : '-90deg'}, transparent, rgba(255,255,255,0.8), transparent)`,
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        animate={{
          backgroundPosition: direction === 'left' ? ['200% 0', '-200% 0'] : ['-200% 0', '200% 0'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: yoyo ? 1 : Infinity,
          repeatType: yoyo ? 'reverse' : 'loop',
          ease: 'linear',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {text}
      </motion.span>
    </span>
  );
}