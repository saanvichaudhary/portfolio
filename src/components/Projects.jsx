import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    { 
      id: 1, 
      title: "Perceiver based model for hyperspectral image Super-Resolution", 
      desc: "First to use Perceiver model for this purpose and modified its decoder for hyperspectral image reconstruction, validated on Chikusei & Pavia datasets using PSNR, SSIM, and SAM metrics. (PSNR-39.1 db, SAM-0.028).", 
      tech: ["Deep Learning", "Hyperspectral Imaging", "Perceiver"], 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 2, 
      title: "RAG-based Financial Document Intelligence", 
      desc: "Built a RAG-based audit intelligence system over SEC 10-K filings using LangChain, FAISS, and Gemini 2.5 Flash; automated red flag detection across 20+ audit terms and LLM-driven cross-statement consistency checking, evaluated with Ragas across 3 annual reports (Apple, Microsoft, Tesla) — 82% faithfulness, 79% context recall, 2.4s avg query on documents up to 214 pages.", 
      tech: ["LangChain", "FAISS", "Gemini 2.5 Flash", "Python"], 
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 3, 
      title: "Serverless Federated Learning for Real-Time IoT Anomaly Detection", 
      desc: "Architected serverless FL pipeline on AWS (IoT Core, Lambda, SageMaker) achieving 92.5% of centralized F1-score (0.4993) with full data privacy across 22,695 streaming messages. Quantified privacy-performance trade off via DP-FL experiments.", 
      tech: ["Python", "TensorFlow", "AWS SageMaker", "LSTM Autoencoder"], 
      img: "https://images.unsplash.com/photo-1558494949-ef010911182e?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 4, 
      title: "ML-Powered Environmental Sensing Device for Bronchitis Risk", 
      desc: "Built end-to-end ML pipeline with Random Forest classifier (43.75% accuracy, F1: 45.63%) linking 4 patient features to bronchitis medication recommendations; resolved class imbalance gaps against environmental health standards.", 
      tech: ["Python", "Scikit-Learn", "IoT Sensors"], 
      img: "https://images.unsplash.com/photo-1576086213369-971348835ad2?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 5, 
      title: "PEDOT:PSS Hydrogel Triboelectric Generator with ML Integration", 
      desc: "Renewable nanoenergy harvesting device with ML-driven performance optimization; integrated ML regression models for output optimization, co-authored publication at international nanotechnology conference.", 
      tech: ["Python", "ML Regression", "PEDOT:PSS", "Nanosensors"], 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 6, 
      title: "Hydrogel Surface Degradation Dataset", 
      desc: "Developed image-based dataset to analyze hydrogel microstructure degradation in triboelectric applications, supporting performance evaluation and durability optimization.", 
      tech: ["Computer Vision", "Dataset Engineering", "Materials Science"], 
      img: "https://images.unsplash.com/photo-1532187863486-abf9d3a44618?auto=format&fit=crop&q=80&w=400" 
    }
  ];

  return (
    <section id="projects" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem' }}>Projects</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', opacity: 0.8, maxWidth: '800px', fontWeight: 300 }}>
            Selected projects spanning nanoenergy systems, machine learning, and intelligent biomedical devices.
          </p>
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          {projects.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              layoutId={`card-${proj.id}`}
              onClick={() => setSelectedId(proj.id)}
              className="glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(245, 241, 234, 0.8)', borderColor: 'var(--accent)' }}
              style={{ 
                borderRadius: '20px', 
                overflow: 'hidden', 
                cursor: 'none',
                marginTop: idx % 2 === 1 ? '4rem' : '0', // Offset grid aesthetic
              }}
            >
              <motion.div 
                style={{ 
                  height: '250px', 
                  backgroundImage: `url(${proj.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(20%)'
                }} 
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 300 }}>{proj.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {proj.tech.map((t, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.3rem 0.8rem', 
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      color: 'var(--primary)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal expansion */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{
                position: 'fixed', inset: 0, bg: 'rgba(0,0,0,0.5)', zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)'
              }}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                className="glass"
                onClick={(e) => e.stopPropagation()}
                style={{ width: '90%', maxWidth: '700px', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}
              >
                {/* Find project block */}
                {(() => {
                  const p = projects.find(x => x.id === selectedId);
                  return (
                    <>
                      <div style={{ height: '350px', backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                      <div style={{ padding: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.title}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-main)', opacity: 0.8 }}>
                          Detailed view for {p.title}. This represents the expanded card that provides a deeper dive into the architecture, challenges overcome, and the ultimate impact of the engineering choices made during development. Let's make it look elegant.
                        </p>
                        <button onClick={() => setSelectedId(null)} style={{ border: 'none', background: 'none', color: 'var(--accent)', fontWeight: 500, fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Close</button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
