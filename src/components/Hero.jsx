import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// TODO: When you upload your pictures to the assets folder, 
// import them here like this (they can be any image type like .jpg, .png):
// import bg1 from '../assets/my-pic-1.jpg';
// import bg2 from '../assets/my-pic-2.jpg';
// import bg3 from '../assets/my-pic-3.jpg';

// For now, using reliable placeholder images from Unsplash without relying on Unsplash Source APIs
const backgroundImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
];

// If using local images later, change it to this:
// const backgroundImages = [bg1, bg2, bg3];

const Hero = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Carousel logic - automatically change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{ 
        height: '100vh', 
        position: 'relative',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', // Centers everything for that cinematic aesthetic
        overflow: 'hidden',
        backgroundColor: 'var(--bg-main)'
      }}
    >
      {/* Background Image Carousel */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImages[currentIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
        
        {/* Cinematic Dark/Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(14, 14, 12, 0.5) 0%, rgba(14, 14, 12, 0.9) 100%)',
          zIndex: 1
        }} />
      </div>

      {/* Main Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <motion.div 
          style={{ y: textY, opacity, textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(4rem, 10vw, 8.5rem)', 
              fontWeight: 600, 
              letterSpacing: '-0.04em', 
              lineHeight: 1, 
              marginBottom: '2rem', 
              color: '#d6d3d1', // Light beige for high contrast against dark overlay
              textShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            Saanvi<br/>Chaudhary
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: '#a8a29e' }}>
              Electronics & Biomedical Engineer
            </h2>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 300, color: 'var(--accent)', letterSpacing: '0.05em' }}>
              Machine Learning Engineer
            </h3>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 10
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>Scroll</span>
        <motion.div 
          style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)', overflow: 'hidden', position: 'relative' }}
        >
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            style={{ width: '100%', height: '50%', backgroundColor: 'var(--accent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
