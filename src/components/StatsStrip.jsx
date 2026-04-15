import React from 'react';
import { motion } from 'framer-motion';

const StatsStrip = () => {
  const stats = [
    "AI & Nanoenergy Researcher",
    "ML Engineer Intern – Sweden",
    "7+ Major Projects",
    "International Conference Publication"
  ];

  return (
    <section style={{ padding: '2rem 0 6rem 0', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            alignItems: 'center',
            borderTop: '1px solid var(--border-light)',
            borderBottom: '1px solid var(--border-light)',
            padding: '2rem 0'
          }}
        >
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 500, 
                color: 'var(--primary)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em',
                padding: '0.5rem 1.5rem',
                textAlign: 'center'
              }}>
                {stat}
              </span>
              {idx !== stats.length - 1 && (
                <span style={{ 
                  color: 'var(--accent)', 
                  opacity: 0.5,
                  display: 'inline-block',
                  margin: '0 0.5rem'
                }}>
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsStrip;
