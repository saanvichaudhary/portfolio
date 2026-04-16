import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      name: "Programming & Development",
      skills: ["Python", "Java", "JavaScript", "React", "Node.js", "Bootstrap"]
    },
    {
      name: "Machine Learning & AI",
      skills: ["TensorFlow", "Scikit-learn", "XGBoost", "Deep Learning Frameworks", "Gen-AI"]
    },
    {
      name: "Tools & Technologies",
      skills: ["LangChain", "RAG", "IBM Watsonx", "AWS (SageMaker, Lambda, IoT Core)"]
    }
  ];

  return (
    <section id="skills" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Skills & Expertise</h2>
          
          <div style={{ display: 'grid', gap: '3rem' }}>
            {categories.map((cat, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                  {cat.name}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {cat.skills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="tag"
                      whileHover={{ scale: 1.05 }}
                      style={{ 
                        padding: '0.5rem 1rem', 
                        fontSize: '0.95rem',
                        backgroundColor: 'var(--bg-secondary)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
