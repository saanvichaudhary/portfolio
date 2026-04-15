import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '2rem 0',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(253, 251, 247, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.03em' }}>
          Portfolio.
        </div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Projects</a>
          <a href="#research" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Research</a>
          <a href="#writing" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Writing</a>
          <a href="#contact" style={{
            fontSize: '0.9rem',
            fontWeight: 500,
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--text-main)',
            color: '#fff',
            borderRadius: '20px'
          }}>
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
