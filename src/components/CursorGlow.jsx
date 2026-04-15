import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

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
          zIndex: 9998, // just under grain
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
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default CursorGlow;
