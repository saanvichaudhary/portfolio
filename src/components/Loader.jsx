import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second initial load
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{ scale: [0.9, 1, 0.9], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              filter: 'blur(10px)'
            }}
          />
          <span style={{ position: 'absolute', color: 'var(--primary)', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 500, marginTop: '80px' }}>
            LOADING
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
