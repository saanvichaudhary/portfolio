import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const publications = [
    {
      type: "Publication",
      date: "Feb 2025",
      title: "A Machine Learning Model for Pulmonary Medication Recommendation Based on Patient Data",
      desc: "Presented at SocProS 2025 (IIT Roorkee); explores ML-driven decision support for pulmonary healthcare.",
      link: "#",
      btnText: "View Paper"
    },
    {
      type: "Publication",
      date: "2025",
      title: "Transformation of Carbon-Based Waste into Renewable Energy through a Triboelectric Nanogenerator",
      desc: "Presented at International Conference on Nanoscience and Nanotechnology, VIT Vellore.",
      link: "#",
      btnText: "View Paper"
    }
  ];

  const achievements = [
    {
      type: "Achievement",
      date: "2025",
      title: "Best IoT Project – Engineers’ Day, VIT Vellore",
      desc: "Recognized for innovative IoT system under 'Deep Tech & Engineering Excellence'."
    },
    {
      type: "Research",
      date: "2025",
      title: "3D-Printed Hydrogel Mold Development",
      desc: "Designed and fabricated molds for triboelectric nanogenerators using rapid 3D modeling workflows."
    }
  ];

  const technical = [
    {
      type: "GitHub",
      date: "",
      title: "Machine Learning, Nanoenergy & IoT Systems",
      desc: "End-to-end implementations of ML pipelines, federated learning systems, and nanoenergy devices.",
      link: "https://github.com/saanvichaudhary",
      btnText: "View GitHub"
    },
    {
      type: "LinkedIn",
      date: "",
      title: "LinkedIn",
      desc: "Professional profile, research updates, and network",
      link: "https://www.linkedin.com/in/avians/",
      btnText: "View LinkedIn"
    }
  ];

  const renderItem = (entry, idx) => (
    <motion.div
      key={`${entry.title}-${idx}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      whileHover={{ y: -6 }}
      style={{
        padding: '2.5rem 0',
        borderBottom: '1px solid var(--border-light)',
        display: 'grid',
        gridTemplateColumns: 'minmax(140px, 1fr) 3fr',
        gap: '2rem',
        alignItems: 'start'
      }}
    >
      <div style={{ paddingTop: '0.4rem' }}>
        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          {entry.type}
        </span>
        {entry.date && (
          <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.6, letterSpacing: '0.02em' }}>
            {entry.date}
          </span>
        )}
      </div>

      <div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 500, marginBottom: '0.8rem', color: 'var(--text-main)', lineHeight: 1.3, letterSpacing: '-0.02em', transition: 'color 0.3s ease' }}>
          {entry.title}
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', opacity: 0.75, fontWeight: 300, lineHeight: 1.6, maxWidth: '700px', marginBottom: entry.link ? '1.5rem' : '0' }}>
          {entry.desc}
        </p>

        {entry.link && (
          <a
            href={entry.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.2rem',
              fontSize: '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              border: '1px solid var(--primary)',
              borderRadius: '50px',
              color: 'var(--bg-primary)',
              backgroundColor: 'var(--primary)',
              cursor: 'none',
              transition: 'var(--transition)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.color = 'var(--bg-primary)';
            }}
          >
            {entry.btnText}
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="research" style={{ padding: '8rem 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '4rem', color: 'var(--primary)', fontWeight: 500, letterSpacing: '-0.03em' }}>Publications & Research</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>

          {/* Section 1: Publications */}
          <div>
            {publications.map((entry, idx) => renderItem(entry, idx))}
          </div>

          {/* Section 2: Research & Achievements */}
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}
            >
              Research & Achievements
            </motion.h4>
            <div>
              {achievements.map((entry, idx) => renderItem(entry, idx))}
            </div>
          </div>

          {/* Section 3: Technical Work */}
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}
            >
              Technical Work
            </motion.h4>
            <div>
              {technical.map((entry, idx) => renderItem(entry, idx))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #research > .container > div > div > div {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Research;
