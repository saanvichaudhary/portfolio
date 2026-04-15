import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const entries = [
    { date: "12 Oct 2025", cat: "Paper", title: "Real-Time Embedded Air Quality Sensors for Urban Areas", desc: "A study on deploying edge ML models to low-power custom Arduino hardware." },
    { date: "05 Aug 2025", cat: "Essay", title: "The Future of Edge ML in Healthcare Analytics", desc: "Exploring how distributed sensor processing can radically decrease hospital latency." },
    { date: "22 May 2025", cat: "Experiment", title: "Bio-Signal Filtering Optimization Techniques", desc: "Reviewing analog vs. digital filters for modern biomedical wearable dev kits." }
  ];

  return (
    <section id="research" style={{ 
      padding: '10rem 0', 
      position: 'relative',
      backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?notebook,paper,minimal)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Heavy overlay to ensure readability */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(245, 241, 234, 0.85)', backdropFilter: 'blur(8px)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '4rem', color: 'var(--primary)' }}>Research & Notes</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {entries.map((entry, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              style={{ 
                padding: '3rem 0',
                borderBottom: '1px solid var(--border-light)',
                display: 'grid',
                gridTemplateColumns: 'minmax(150px, 1fr) 3fr',
                gap: '2rem',
                alignItems: 'baseline'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.05em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  {entry.cat}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', opacity: 0.6 }}>
                  {entry.date}
                </span>
              </div>
              
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '1rem', color: 'var(--text-main)', transition: 'color 0.3s' }}>
                  {entry.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', opacity: 0.8, fontWeight: 300, lineHeight: 1.6, maxWidth: '700px' }}>
                  {entry.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
