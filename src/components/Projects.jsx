import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    { 
      id: 1, 
      title: "PEDOT:PSS Hydrogel Triboelectric Generator", 
      desc: "Developed a wearable nanoenergy harvesting system using PEDOT:PSS hydrogel for motion sensing and secure signal generation. Integrated machine learning models for gesture classification and output optimization, supported by custom 3D-printed mold design. Impact: Demonstrates scalable self-powered sensing with intelligent signal interpretation; co-authored international conference publication.", 
      tech: ["Python", "ML Regression", "Nanosensors", "Embedded Systems"], 
      img: "https://images.unsplash.com/photo-1558494949-ef010911182e?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 2, 
      title: "Hyperspectral Image Super-Resolution", 
      desc: "Designed a transformer-based architecture for hyperspectral image reconstruction by adapting EdgeTAM with a spectral–spatial perceiver and modified decoder. Evaluated on Chikusei and Pavia datasets using PSNR, SSIM, and SAM metrics. Results: PSNR: 39.1 dB | SAM: 0.028", 
      tech: ["PyTorch", "Transformers", "Remote Sensing", "Deep Learning"], 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 3, 
      title: "Serverless Federated Learning", 
      desc: "Architected a privacy-preserving federated learning pipeline on AWS using IoT Core, Lambda, and SageMaker. Implemented an LSTM autoencoder for anomaly detection across 22,000+ streaming data points, with differential privacy integration. Results: Achieved 92.5% of centralized F1-score performance.", 
      tech: ["Python", "TensorFlow", "AWS", "Federated Learning"], 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 4, 
      title: "RAG-based Financial Document Intelligence", 
      desc: "Built a retrieval-augmented generation system for automated audit intelligence over SEC 10-K filings. Enabled red-flag detection and cross-statement validation using LLMs and vector search. Results: 82% faithfulness | 79% context recall | 2.4s query latency on 200+ page documents.", 
      tech: ["LangChain", "FAISS", "Gemini", "NLP"], 
      img: "https://images.unsplash.com/photo-1611974714131-01e47953285e?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 5, 
      title: "Hydrogel Surface Degradation Dataset", 
      desc: "Developed an image-based dataset to analyze microstructural degradation in hydrogel-based triboelectric systems, enabling performance tracking and durability optimization. Impact: Bridges materials science with data-driven evaluation for next-gen nanoenergy devices.", 
      tech: ["Computer Vision", "Dataset Engineering", "Materials Science"], 
      img: "https://images.unsplash.com/photo-1532187863486-abf9d3a44618?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 6, 
      title: "Biomedical ML Systems", 
      desc: "Designed multiple intelligent healthcare systems: a bronchitis risk prediction device, personalized pulmonary medication recommender, and an AI-based posture correction system. Impact: Demonstrates applied ML in real-world biomedical diagnostics and assistive systems.", 
      tech: ["Python", "Scikit-learn", "IoT Sensors", "Embedded Systems"], 
      img: "https://images.unsplash.com/photo-1576086213369-971348835ad2?auto=format&fit=crop&q=80&w=400" 
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
