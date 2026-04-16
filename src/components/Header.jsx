import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'research', 'skills', 'contact'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold to set when a section becomes active
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = section;
          }
        }
      }

      // If we are at the very top, keep nothing highlighted or highlighting first section
      if (window.scrollY < 100) {
        current = '';
      }

      // If we are close to bottom, highlight contact
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', mobileLabel: 'About' },
    { id: 'projects', label: 'Projects', mobileLabel: 'Projects' },
    { id: 'research', label: 'Publications & Research', mobileLabel: 'Research' },
    { id: 'skills', label: 'Skills & Expertise', mobileLabel: 'Skills' },
    { id: 'contact', label: 'Contact', mobileLabel: 'Contact' }
  ];

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
        zIndex: 20000,
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.03em' }}>
          Portfolio.
        </div>
        <nav className="header-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-btn"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '0.5rem 1rem',
                  backgroundColor: isActive ? 'var(--text-main)' : 'transparent',
                  color: isActive ? '#fff' : 'inherit',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="desktop-text">{link.label}</span>
                <span className="mobile-text" style={{ display: 'none' }}>{link.mobileLabel}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          header {
            padding: 1rem 0 !important;
          }
          .header-container {
            flex-direction: column;
            gap: 0.5rem;
          }
          .header-nav {
            gap: 0.5rem !important;
            flex-wrap: wrap;
            justify-content: center;
          }
          .header-nav a {
            font-size: 0.8rem !important;
          }
          .nav-btn {
            font-size: 0.75rem !important;
            padding: 0.3rem 0.6rem !important;
          }
          .desktop-text {
            display: none !important;
          }
          .mobile-text {
            display: inline !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
