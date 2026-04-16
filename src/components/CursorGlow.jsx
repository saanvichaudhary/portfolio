import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkVisibility = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isMobileWidth = window.innerWidth <= 768;
      setIsVisible(!isTouch && !isMobileWidth);
    };

    // Initial check
    checkVisibility();

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          opacity: 0.08,
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 99999, // higher than header (20000)
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
    </>
  );
};

export default CursorGlow;
