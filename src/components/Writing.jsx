import React from 'react';
import { motion } from 'framer-motion';

const Writing = () => {
  const articles = [
    { title: "The Future of Edge ML in Healthcare", date: "Oct 2025", platform: "Substack" },
    { title: "Building a Tech Startup as an Engineering Student", date: "Aug 2025", platform: "Medium" },
    { title: "Demystifying Signal Processing for Web Developers", date: "May 2025", platform: "Dev.to" }
  ];

  return (
    <section id="writing" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Writing</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {articles.map((article, idx) => (
              <motion.a 
                href="#"
                key={idx}
                className="card"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 2rem',
                  textDecoration: 'none'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{article.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.platform}</span>
                  </div>
                </div>
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Writing;
